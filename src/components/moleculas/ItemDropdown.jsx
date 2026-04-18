import styled from "styled-components";
import {Icon} from '../../index'

export function ItemDropdown({item, funcion}) {

  return (
    <Container onClick={funcion}>
        <Icon>{item.icono}</Icon>
        <span>{item.text}</span>
    </Container>
);
}
const Container =styled.div`
    cursor: pointer;
    padding: 8px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        background: ${(props) => props.theme.bg4};
    }
    svg {
        font-size: 28px;
        display: block;
    }
`