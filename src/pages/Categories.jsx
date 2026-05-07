import styled from "styled-components";
import {CategoriesTemplate, getCategories, useCategoriesStore, useUsersStore, useOperations, SpinnerLoader, LottieAnimation} from '../index'
import { useQuery } from "@tanstack/react-query";

export function Categories() {

  const {type} = useOperations()

  const {dataCategoria, mostrarCategorias} = useCategoriesStore()
  const {dataUser} = useUsersStore()

  const {isLoading, error} = useQuery({
    queryKey: ['categories', type, dataCategoria],
    queryFn: () => mostrarCategorias({idUser: dataUser.id, type: type})
  
  })

  if(isLoading) return <SpinnerLoader />

  if(error) return <h1>Error...</h1>


  return (

    <CategoriesTemplate data={dataCategoria}>
    </CategoriesTemplate>

);
}
