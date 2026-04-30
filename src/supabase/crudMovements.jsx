import {supabase} from '../index'
import Swal from 'sweetalert2'

export const insertMovements = async (p) => {
    try {
        const {data, error} = await supabase.from("movements").insert(p).select()

        if(error) {
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: 'Ya existe un registro con ' + p.description,
                footer: '<a href="">Agregue una nueva descripcion</a>'
            })
            throw new Error(error.message);
        }

        if(data) {
            Swal.fire({
                icon: 'success',
                title: 'Registrado',
                showConfirmButton: false,
                timer: 1500
            })
        }
    } catch (error) {
        alert(error.error_description || error.message + 'Error en insertar momivientos');
    }
}

export const deleteMovements = async (p) => {
    try {
        const {error} = await supabase.from('movements').delete().eq('id', p.id)

        if(error) {
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: 'No se puedo eliminar el movimiento',
                footer: '<a href="">Intentalo de nuevo</a>'
            })
            throw new Error(error.message);
        }
    } catch (error) {
        alert(error.error_description || error.message + 'Error al eliminar momivientos');
    }
}