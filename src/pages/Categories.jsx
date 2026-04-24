import styled from "styled-components";
import {CategoriesTemplate, getCategories, useCategoriesStore, useUsersStore} from '../index'
import { useQuery } from "@tanstack/react-query";
export function Categories() {

  const {dataCategoria, mostrarCategorias} = useCategoriesStore()
  const {dataUser} = useUsersStore()

  const {isLoading, error} = useQuery({
    queryKey: ['categories', dataUser.id],
    queryFn: () => mostrarCategorias({idUser: dataUser.id, type: 'i'})
  
  })

  if(isLoading) return <h1>Cargando...</h1>

  if(error) return <h1>Error...</h1>


  return (
    <Container>
        <CategoriesTemplate data={dataCategoria} />
    </Container>
);
}
const Container =styled.div`
  height: 100dvh;
`