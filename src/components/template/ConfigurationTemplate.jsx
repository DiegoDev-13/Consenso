import styled from "styled-components";
import {Header, Selector, v, ListCountry, useUsersStore, ListGeneric, TemasData, BtnSave, CardDeleteData} from "../../index"
import { useState } from "react";

export function ConfigurationTemplate() {

    const {dataUser, editThemeCurrencyUser} = useUsersStore()

    const [openMenuUser, setOpenMenuUser] = useState(false)
    const [select, setSelect] = useState([])
    const [listCountry, setListCountry] = useState(false)
    const [selectTheme, setSelectTheme] = useState([])
    const [listThemes, setListThemes] = useState(false)

    //Pais - Moneda
    const currency = select.symbol ? select.symbol : dataUser.currency
    const country = select.countryName ? select.countryName : dataUser.country
    const countrySelected = `🐷 ${currency} ${country}`

    //Tema
    const iconDb = dataUser.theme === "0" ? '🌞' : '🌚'
    const themeDb = dataUser.theme === "0" ? 'light' : 'dark'
    const themeInitial = selectTheme.descripcion ? selectTheme.descripcion : themeDb
    const iconInitial = selectTheme.icono ? selectTheme.icono  : iconDb
    const selectedTheme = `${iconInitial} ${themeInitial}`

    //Funcion guardar datos
    const edit = async () => {
        const chosenTheme = selectTheme.descripcion === "light" ? '0' : '1'
        const p = {
            theme: chosenTheme,
            currency: currency,
            country: country,
            id: dataUser.id
        }

        await editThemeCurrencyUser(p)
    }

  return (
<Container>
    <header className="header">
        <Header state={openMenuUser} setState={setOpenMenuUser} />
    </header>

    <section className="area2">
        <h1>AJUSTES</h1>
        <ContentCard>
            <span>Moneda:</span>
            <Selector state={listCountry} color={v.colorSecundario} text1={countrySelected} funcion={() => setListCountry(!listCountry)} />
            {
                listCountry && <ListCountry setSelect={(p) => setSelect(p)} setState={() => setListCountry(!listCountry)}/>
            }
            
        </ContentCard>

        <ContentCard>
            <span>Tema:</span>
            <Selector text1={selectedTheme} color={v.colorSecundario} state={listThemes} funcion={() => setListThemes(!listThemes)}>
            </Selector>
            {
                listThemes && <ListGeneric data={TemasData} setState={() => setListThemes(!listThemes)} funcion={setSelectTheme} />
            }
        </ContentCard>

        <BtnSave title="Guardar" bgColor={v.colorSecundario} icon={<v.iconoguardar/>} functionBtn={edit} />

        <CardDeleteData />
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
        "area2" auto;

        .header {
            grid-area: header;
            /* background-color: rgba(103, 93, 241, 0.14); */
            display: flex;
            align-items: center;
        }
        .area2 {
            grid-area: area2;
            /* background-color: rgba(77, 237, 106, 0.14); */
            display: flex;
            flex-direction: column;
            justify-content: start;
            gap: 30px;
            h1 {
                font-size: 3rem;
            }
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