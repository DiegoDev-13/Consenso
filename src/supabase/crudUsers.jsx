import { supabase } from "../index";

export const insertUser = async (p) => {
    try {
        const {data, error} = await supabase.from('users').insert(p).select()


        if(error) {
            console.log(error.message)
            throw new Error("Error al intentar insertar usuario");
            
        }

        return data
    } catch (error) {
        
    }
}