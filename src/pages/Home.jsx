import styled from "styled-components";
import { useAuthStore } from "../store/AuthStore";
import { UserAuth } from "../context/AuthContext";
export function Home() {

  const {signOut} = useAuthStore()
  const {user} = UserAuth()


  // console.log('HOME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', user)

  return (
    <Container>
        <h1>Home Bienvenido {user.name}</h1>
        <img src={user.picture} alt="" />
        <button onClick={() => signOut()}>Cerrar sesion</button>
    </Container>
    );
}
const Container =styled.div`
  height: 100vh;
`