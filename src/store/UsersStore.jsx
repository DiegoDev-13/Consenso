import { create } from "zustand";
import { getUsers, editUserThemeCurrency } from "../index";

export const useUsersStore = create((set, get) => ({
    dataUser: [],
    idUser: null,
    getUsersStore: async () => {
        const data = await getUsers()
        set({dataUser: data})

        if(data) {
            set({idUser: data.id})
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