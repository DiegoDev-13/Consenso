import {create} from 'zustand'
import { supabase } from '../supabase/supbase.config'

export const useAuthStore = create((set) => ({
    isAuth: false,
    sighInWithGoogle: async () => {
        try {
            const {data, error} = await supabase.auth.signInWithOAuth({
                provider: 'google'
            })

            if(error) {
                console.log(error.message)
                throw new Error("A ocurrido un error durante la autenticación");
            }

            set({isAuth: true})
            
            return data
            
        } catch (error) {
            
        }
    },
    sighOut: async () => {
        const { error } = await supabase.auth.signOut()
        
        if(error) {
            console.log(error.message)
            throw new Error("A ocurrido un error durante el cierre de sesión");
        }
        set({isAuth: false})
    }
}))