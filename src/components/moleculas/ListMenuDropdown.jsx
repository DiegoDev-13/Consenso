import styled from "styled-components";
import {ItemDropdown, v} from '../../index'

export function ListMenuDropdown({data, top, funcion}) {
  return (
    <Container $top={top}>
        {
          data.map((item, index) => (
            <ItemDropdown key={index} item={item} funcion={() => funcion(item)}/>
          ))
        }
    </Container>
);
}
const Container =styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${(props) => props.theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.$top};
  box-shadow: ${() => v.boxshadowGray};
  z-index: 4;
`