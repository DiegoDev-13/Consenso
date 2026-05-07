import { create } from "zustand";
import { deleteAllCategories, deleteCategories, editCategories, getCategories, insertCategories } from "../index";

export const useCategoriesStore = create((set, get) => ({
    dataCategoria: [],
    categoriaItemSelect: [],
    parametros:{},

    mostrarCategorias: async (p) => {
        try {
            const res = await getCategories(p);
            set({parametros:p})
            set({ dataCategoria: res });
            
            if (res && res.length > 0) {
                set({ categoriaItemSelect: res[0] });
            } else {
                // Opcional: Limpiar el ítem seleccionado si no hay datos
                set({ categoriaItemSelect: [] }); 
            }
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
            await get().mostrarCategorias(); 
            // const {parametros} = get()
            // set(mostrarCategorias(parametros))
        } catch (error) {
            console.error("Error al insertar:", error);
        }
    },

    eliminarCategorias: async (p) => {
        try {
            await deleteCategories(p);
            await get().mostrarCategorias();
            // set(mostrarCategorias(p));
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
