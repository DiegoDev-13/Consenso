import styled from "styled-components";
import {Icon, ColorContent} from '../../index'

export function ItemDropdown({item, funcion, color}) {

  return (
    <Container onClick={funcion}>
        <Icon>{item.icono}</Icon>
        <ColorContent $ancho="12px" $alto="12px" $color={item.color} />
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