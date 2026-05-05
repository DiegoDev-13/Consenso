import { create } from "zustand";
import { getaccounts } from "../supabase/crudAccount";

export const useAccountStore = create((set, get) => ({
    accountItemSelect: [],
    dataAccounts: [],
    getAccounts: async (p) => {
        const res = await getaccounts(p)
        set({dataAccounts: res})
        set({accountItemSelect: res})

        return data
    },

}))