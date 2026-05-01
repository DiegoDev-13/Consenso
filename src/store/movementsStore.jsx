import { create } from "zustand";
import { getMovementsPerMonthYear } from "../index";

export const useMovementsStore = create((set, get) => ({
    dataMovements: [],
    totalYearMonth: 0,
    totalYearMonthPaid: 0,
    totalYearMonthPending: 0,
    getMovements: async (p) => {
        const res = await getMovementsPerMonthYear(p)

        const {calculateTotal} = get()
        calculateTotal(res)

        set({dataMovements: res})
         
        return res
    },
    calculateTotal: (res) => {
        const dtPaid = res.filter((item) => item.state == 1)
        const dtPending = res.filter((item) => item.state == 0)

        let total = 0
        let tPaid = 0
        let tPending = 0

        res.forEach(item => {
            const array = Object.values(item)
            total += array[2]
        });
        
        dtPaid.forEach(item => {
            const array = Object.values(item)
            tPaid += array[2]
        });

        dtPending.forEach(item => {
            const array = Object.values(item)
            tPending += array[2]
        });
        set({totalYearMonth: total})
        set({totalYearMonthPaid: tPaid})
        set({totalYearMonthPending: tPending})

    }
}))