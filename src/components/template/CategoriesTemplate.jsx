import styled from "styled-components";
import {Header, ContentFilters, BtnDropdown, useOperations, ListMenuDropdown, DataDesplegableTipo, BtnFilter, v} from "../../index"
import { useState } from "react";

export function CategoriesTemplate() {

    const [openMenuUser, setOpenMenuUser] = useState(false)
    const {titleBtnDrop, colorCategory, bgCategory, setType} = useOperations()
    const [stateType, setStateType] = useState(false)

    const changeType = (p) => {
        setType(p)
        setStateType(!stateType)
        setOpenMenuUser(false)
    }
    
    const closeDropdowns = () => {
        setStateType(false)
        setOpenMenuUser(false)
    }
    
    const openType = () => {
        setStateType(!stateType)
        setOpenMenuUser(false)
    }
    
    const openUsers = () => {
        setOpenMenuUser(!openMenuUser)
        setStateType(false)
    }

  return (
<Container onClick={closeDropdowns}>
    <header className="header">
        <Header state={openMenuUser} setState={openUsers} />
    </header>

    <section className="tipo">
        <div onClick={(e) => e.stopPropagation()}>
            <ContentFilters>
                <BtnDropdown text={titleBtnDrop} bgColor={bgCategory} textColor={colorCategory} funcion={openType}/>
                {stateType && <ListMenuDropdown data={DataDesplegableTipo} top="112%" funcion={(p) => changeType(p)}/> }
            </ContentFilters>
        </div>
    </section>

    <section className="area2">
        <ContentFilter>
            <BtnFilter bgColor={bgCategory} textColor={colorCategory} icon={<v.agregar />} />
        </ContentFilter>
    </section>

    <section className="main">
        
    </section>

</Container>
);
}
const Container =styled.div`
    min-height: 100dvh;
    padding: 15px;
    width: 100%;
    background: ${(props) => props.theme.bgtotal};
    color: ${(props) => props.theme.text};
    display: grid;
    grid-template: 
        "header" 100px
        "tipo" 100px
        "area2" 50px
        "main" auto;

        .header {
            grid-area: header;
            background-color: rgba(103, 93, 241, 0.14);
            display: flex;
            align-items: center;
        }
        .tipo {
            grid-area: tipo;
            background-color: rgba(229, 67, 26, 0.14);
            display: flex;
            align-items: center;
        }
        .area2 {
            grid-area: area2;
            background-color: rgba(77, 237, 106, 0.14);
            display: flex;
            align-items: center;
        }
        .main {
            grid-area: main;
            background-color: rgba(179, 46, 241, 0.14);
        }
    
`

const ContentFilter = styled.div `
    display: flex;
    flex-wrap: wrap;
`