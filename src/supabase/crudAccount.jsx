import {supabase} from '../index'

export const getaccounts = async (p) => {
    try {
        const {data, error} = await supabase.from('account').select().eq('user_id', p.userId).maybeSingle()

        if(error) {
            console.log(error.message)
            throw new Error("Error al obtener cuenta");
        }

        return data
    } catch (error) {
        
    }
}