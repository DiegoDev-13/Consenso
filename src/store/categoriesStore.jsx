import { create } from "zustand";
import { deleteCategories, editCategories, getCategories, insertCategories } from "../index";

export const useCategoriesStore = create((set, get) => ({
    dataCategoria: [],

    // 1. Esta función ya hace el set(), no necesitas envolverla en otro set
    mostrarCategorias: async (p) => {
        try {
            const res = await getCategories(p);
            set({ dataCategoria: res });
            return res;
        } catch (error) {
            console.error("Error cargando categorías:", error);
        }
    },

    insertarCategorias: async (p) => {
        try {
            await insertCategories(p);
            // 2. LLAMA a la función directamente. NO uses set(...) aquí.
            await get().mostrarCategorias(); 
        } catch (error) {
            console.error("Error al insertar:", error);
        }
    },

    eliminarCategorias: async (p) => {
        try {
            await deleteCategories(p);
            await get().mostrarCategorias();
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    },

    editarCategorias: async (p) => {
        try {
            await editCategories(p);
            await get().mostrarCategorias();
        } catch (error) {
            console.error("Error al editar:", error);
        }
    }
}));
