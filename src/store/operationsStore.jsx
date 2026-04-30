import { create } from "zustand";
import {v} from '../index'

export const useOperations = create((set, get) => ({
    type: 'i',
    titleBtnDrop: "Categorias ingresos",
    colorCategory: () => v.colorIngresos,
    bgCategory: () => v.colorbgingresos,
    year: null,
    month: null,
    setMonth: (p) => {
        set({month: p})
    },
    setYear: (p) => {
        set({year: p})
    },
    setType: (p) => {
        set({type: p.tipo})
        set({
            titleBtnDrop: p.text
        });
        set({
            colorCategory: p.color
        });
        set({
            bgCategory: p.bgcolor
        });
    }
}))