import {v, InputSearchList, ConvertirCapitalize, Device, BtnClose} from '../../index'
import styled from "styled-components";
import iso from 'iso-country-currency'
import { useState } from "react";

export function ListCountry({setSelect, setState}) {

    const [dataReults, setDataReults] = useState([])

    const isoCodigos = iso.getAllISOCodes()

    const select = (p) => {
        setSelect(p)
        setState()
    }

    const search = (e) => {
        let filtrados = isoCodigos.filter((item) => {
            return item.countryName == ConvertirCapitalize(e.target.value)
        })
        setDataReults(filtrados)
    }

  return (
    <Container Device={Device}>
        <header className="header">
            <span>Busca tu pais</span>
            <BtnClose funcion={setState} />
        </header>

        <InputSearchList onChange={search} placeholder="Buscar..." />
        {
            dataReults.length > 0 && dataReults.map((item, index) => (
                <ItemContainer key={index} onClick={() => select(item)}>
                    <span>{item.countryName}</span>
                    <span>{item.symbol}</span>
                </ItemContainer>
            ))
        }
    </Container>
);
}
const Container =styled.div` 
    margin-top: 10px;
    position: absolute;
    top: 88%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.body};
    border-radius: 10px;
    border: 3px solid #3a3a3a;
    padding: 10px;
    gap: 10px;
    color: ${(props) => props.theme.text};
    z-index: 3;

    @media ${(props) => Device.tablet}  {
        width: 400px;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: inherit;
    }

`

const ItemContainer = styled.section`
    gap: 10px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #303030;
    }
`