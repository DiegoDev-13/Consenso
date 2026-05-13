import styled from "styled-components";
import {Header, CalendarLinear, Tabs, ContentFilters, BtnDropdown, ListMenuDropdown, useOperations, DataDesplegableTipoMovements} from "../../index"
import { useState } from "react";
import dayjs from "dayjs";

export function ReportsTemplate() {

    const [openMenuUser, setOpenMenuUser] = useState(false)
    const [value, setValue] = useState(dayjs(Date.now()))
    const [formatoFecha, setFormatoFecha] = useState("")
    const [stateType, setStateType] = useState(false)

    const {titleBtnDropMovements, bgCategory, colorCategory, setType} = useOperations()

    const openType = () => {
        setStateType(!stateType)
        setOpenMenuUser(false)
    }

    const changeType = (p) => {
        setType(p)
        setStateType(!stateType)
        setOpenMenuUser(false)
    }

    
  return (
<Container>
    <header className="header">
        <Header state={openMenuUser} setState={setOpenMenuUser} />
    </header>

    <section className="area1">
        <div onClick={(e) => e.stopPropagation()}>
            <ContentFilters>
                <BtnDropdown text={titleBtnDropMovements} bgColor={bgCategory} textColor={colorCategory} funcion={openType}/>
                {stateType && <ListMenuDropdown data={DataDesplegableTipoMovements} top="112%" funcion={(p) => changeType(p)}/> }
            </ContentFilters>
        </div>
        <h1>Informes</h1>
    </section>

    <section className="area2">
        <CalendarLinear value={value} setValue={setValue} setFormatoFecha={setFormatoFecha} />
    </section>

    <section className="main">
        <Tabs />
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
        "area1" 100px
        "area2" 70px
        "main" auto;

        .header {
            grid-area: header;
            /* background-color: rgba(103, 93, 241, 0.14); */
            display: flex;
            align-items: center;
        }
        .area1 {
            grid-area: area1;
            /* background-color: rgba(229, 67, 26, 0.14); */
            display: flex;
            gap: 20px;
            align-items: center;
        }
        .area2 {
            grid-area: area2;
            /* background-color: rgba(77, 237, 106, 0.14); */
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .main {
            grid-area: main;
            /* background-color: rgba(179, 46, 241, 0.14); */
        }
    
`

