import styled from "styled-components";
import { UserAuth, BtnCircular, v, ListMenuDropdown, DesplegableUser, useAuthStore } from "../../index";

export function DataUser({state, setState}) {

    const {user} = UserAuth()
    const {signOut} = useAuthStore()

    const funcionXtipo = async (tipo) => {
        if(tipo === "cerrarsesion"){
            await signOut()
        }
    }

  return (
    <Container onClick={() => setState(!state)}>
        <div className="imgContainer">
            <img src={user.picture} alt="" />
        </div>
        <BtnCircular icon={<v.iconocorona />} width="25px" height="25px" bgColor="#fff" textColor="#181616" fontSize="11px" translateX="-50px" translateY="-12px"/>

        <span className="name">{user.name}</span>

        {
            state && <ListMenuDropdown data={DesplegableUser} funcion={(tipo) => funcionXtipo(tipo)} top="62px" />
        }
    </Container>
);
}
const Container =styled.div`
    position: relative;
    top: 0;
    right: 0;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 50px;
    margin: 15px;
    cursor: pointer;

    .imgContainer{
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
    &:hover {
        background-color: ${({theme}) => theme.bg3};
    }

    .name{
        width: 100%;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: break-word;
    }
`