import { supabase, getIdAuthSupabase } from "../index";
import Swal from 'sweetalert2'

export const insertUser = async (p) => {
    try {
        const {data, error} = await supabase.from('users').insert(p).select()


        if(error) {
            // console.log(error.message)
            throw new Error("Error al intentar insertar usuario");
        }

        return data
    } catch (error) {
        
    }
}

export const getUsers = async () => {
    try {

        const idAuthSupabase = await getIdAuthSupabase()

        const {data, error} = await supabase.from('users').select('*').eq('id_auth_supabase', idAuthSupabase).maybeSingle()

        if(error) {
            alert(error.message + "getUsers")
        }

        if(data) return data
    } catch (error) {
        // alert(error.error_description || error.message + 'getUsers')
    }
}

export const editUserThemeCurrency = async (p) => {
    try {
        const {error} = await supabase.from('users').update(p).eq('id', p.id)

        if(error) {
            alert('Error al editar thema y moneda del usuario', error.message)
            // throw new Error("Error al editar Thema y moneda");
        }

        Swal.fire({
            icon: "success",
            title: "Datos modificados",
            showConfirmButton: false,
            timer: 1500
        });
    } catch (error) {
        alert(error.error_description || error.message + 'editUserThemeCurrency')
    }
}