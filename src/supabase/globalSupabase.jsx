import { supabase } from "../index";

export const getIdAuthSupabase = async () => {
    const {data: {session}, error} = await supabase.auth.getSession()

    if(error) {
        console.log(error)
        throw new Error("Error al intentar obtener id de usuario");
    }

    const {user} = session;
    const idAuthSupabase = user.id

    return idAuthSupabase
}