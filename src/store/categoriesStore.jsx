import { create } from "zustand";
import { deleteCategories, editCategories, getCategories, insertCategories } from "../index";

export const useCategoriesStore = create((set, get) => ({
    dataCategoria: [],
    mostrarCategorias: async (p) => {
        const res = await getCategories(p)
        set({dataCategoria: res})
        return res
    },
    insertarCategorias: async (p) => {
        await insertCategories(p)
        const {mostrarCategorias} = get()
        set(mostrarCategorias(p))
    },
    eliminarCategorias: async (p) => {
        await deleteCategories(p)
        const {mostrarCategorias} = get()
        set(mostrarCategorias(p))
    },
    editarCategorias: async (p) => {
        await editCategories(p)
        const {mostrarCategorias} = get()
        set(mostrarCategorias(p))
    }
}))