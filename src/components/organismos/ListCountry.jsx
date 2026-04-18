import styled from "styled-components";
import {v, InputSearchList, ConvertirCapitalize} from '../../index'
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
    <Container>
        <header className="header">
            <span>Busca tu pais</span>
            <span className="close" onClick={setState}>{<v.iconocerrar />}</span>
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
    background: ${(props) => props.theme.bgtotal};
    border-radius: 10px;
    border: 3px solid #3a3a3a;
    padding: 10px;
    gap: 10px;
    color: ${(props) => props.theme.text};
    transition: all 0.3s;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: inherit;
        .close {
            cursor: pointer;
            font-size: 25px;
            transition: all 0.2s;
            &:hover {
                color: ${() => v.colorSecundario};
                transform: scale(1.2);
            }
        }
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