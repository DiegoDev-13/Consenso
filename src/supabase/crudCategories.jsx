import {supabase} from '../index'
import Swal from 'sweetalert2'

export const insertCategories = async (p) => {
    try {
        const {data, error} = await supabase.from('categories').insert(p).select();

        if(error) {
            Swal.fire({
                icon: "error",
                title: "Opps...",
                text: "Ya existe un registro con " + p.description,
                footer: '<a href="">Agregar una nueva descripcion</a> '
            });
        }

        if(data){
            Swal.fire({
                position: 'top-end',
                icon: "success",
                title: "Tu registro se a guardado",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    } catch (error) {
        alert(error.error_description || error.message + " Insertar categorias")
    }
}

export const getCategories = async (p) => {
    try {
        const {data, error} = await supabase.from('categories').select().eq('id_user', p.idUser).eq('type', p.type).order('id', {ascending: false})

        if(error) throw new Error(error);

        return data
    } catch (error) {}
}

export const deleteCategories = async (p) => {
    try {
        const {error} = await supabase.from('categories').delete().eq('id_user', p.idUser).eq('id', p.id);

        if(error) throw new Error(error);

    } catch (error) {
        console.log("Error en EliminarCategorias:", error.message)

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al intentar eliminar categoria",
        });

        throw error;
    }
}

export const editCategories = async (p) => {
    try {
        const {error} = await supabase.from('categories').update(p).eq('id_user', p.id_user).eq('id', p.id)

        if(error) throw new Error(error);

    } catch (error) {
        console.log("Error en editCategories:", error.message)

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al intentar editar categoria",
        });

        throw error;
    }
}

export const deleteAllCategories = async (p) => {
    try {
        const {error} = await supabase.from('categories').delete().eq('id_user', p.idUser);

        if(error) throw new Error(error);

         Swal.fire({
            position: 'top',
            icon: "success",
            title: "Tu datos se han reseteado",
            showConfirmButton: false,
            timer: 1500,
        });

    } catch (error) {
        console.log("Error en EliminarCategorias:", error.message)

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al intentar eliminar categoria",
        });

        throw error;
    }
}