import { create } from "zustand";
import { getUsers, editUserThemeCurrency } from "../index";

export const useUsersStore = create((set, get) => ({
    dataUser: [],
    getUsersStore: async () => {
        const data = await getUsers()
        set({dataUser: data})

        if(data) {
            return data
        } else {
            return []
        }
    },
    editThemeCurrencyUser: async (p) => {
        await editUserThemeCurrency(p)
        const {getUsersStore} = get()
        set(getUsersStore)
    }
}))