import styled from "styled-components";
import {Device, v, BtnClose } from '../../index'

export function ListRegisterMovements({data, setState, funcion, scroll, bottom}) {
    
    const select = (p) => {
        funcion(p)
        setState()
    }

  return (
    <Container $scroll={scroll} $bottom={bottom}>
        <section className="contentClose">
            <BtnClose funcion={setState} />
        </section>

        <section className="ContentItems">
            {
                data.map((item, index) => (
                    <ItemContainer key={index} onClick={() => select(item)}>
                        <span>{item.icon}</span>
                        <span>{item.description}</span>
                    </ItemContainer>
                ))
            }
        </section>
    </Container>
);
}
const Container =styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    position: absolute;
    margin-bottom: 15px;
    bottom: ${(props)=>props.$bottom};
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #3a3a3a;
    gap: 10px;
    z-index: 3;

    @media ${() => Device.tablet} {
        width: 400px;
    }

    .ContentItems {
        overflow-y: ${(props) => props.$scroll};
    }
`

const ItemContainer = styled.div`
    gap: 10px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.bgtotal};
    }
`