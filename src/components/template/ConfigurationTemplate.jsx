import styled from "styled-components";
import {Header, Selector, v, ListCountry} from "../../index"
import { useState } from "react";

export function ConfigurationTemplate() {

    const [openMenuUser, setOpenMenuUser] = useState(false)
    const [listCountry, setListCountry] = useState(false)
    const [select, setSelect] = useState([])

    const currency = select.symbol
    const country = select.countryName
    const countrySelected = `🐷 ${currency} ${country}`

  return (
<Container>
    <header className="header">
        <Header state={openMenuUser} setState={setOpenMenuUser} />
    </header>

    <section className="area1">
        <h1>Ajustes</h1>
    </section>

    <section className="area2">
        <ContentCard>
            <span>Moneda:</span>
            <Selector state={listCountry} color={v.colorSecundario} text1={countrySelected} funcion={() => setListCountry(!listCountry)} />
            {
                listCountry && <ListCountry setSelect={(p) => setSelect(p)} setState={() => setListCountry(!listCountry)}/>
            }
            
        </ContentCard>
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
        "area1" 100px
        "area2" 50px
        "main" auto;

        .header {
            grid-area: header;
            background-color: rgba(103, 93, 241, 0.14);
            display: flex;
            align-items: center;
        }
        .area1 {
            grid-area: area1;
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

const ContentCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    gap: 20px;
    position: relative;
`