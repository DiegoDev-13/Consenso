import { create } from "zustand";
import { deleteAllCategories, deleteCategories, editCategories, getCategories, insertCategories } from "../index";

export const useCategoriesStore = create((set, get) => ({
    dataCategoria: [],
    categoriaItemSelect: [],
    parametros:{},

    // 1. Esta función ya hace el set(), no necesitas envolverla en otro set
    mostrarCategorias: async (p) => {
        try {
            const res = await getCategories(p);
            set({parametros:p})
            set({ dataCategoria: res });
            set({ categoriaItemSelect: res[0] });
            return res;
        } catch (error) {
            console.error("Error cargando categorías:", error);
        }
    },

    selectCategoria: (p) => {
        set({ categoriaItemSelect: p });
    },

    insertarCategorias: async (p) => {
        try {
            await insertCategories(p);
            // 2. LLAMA a la función directamente. NO uses set(...) aquí.
            await get().mostrarCategorias(); 
            const {parametros} = get()
            set(mostrarCategorias(parametros))
        } catch (error) {
            console.error("Error al insertar:", error);
        }
    },

    eliminarCategorias: async (p) => {
        try {
            await deleteCategories(p);
            await get().mostrarCategorias();
            set(mostrarCategorias(p));
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    },
    
    eliminarCategoriasTodas: async (p) => {
        try {
            await deleteAllCategories(p);
            await get().mostrarCategorias();
            set(mostrarCategorias(p));
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    },


    editarCategorias: async (p) => {
        try {
            await editCategories(p);
            await get().mostrarCategorias();
            set(mostrarCategorias(p));
        } catch (error) {
            console.error("Error al editar:", error);
        }
    }
}));
