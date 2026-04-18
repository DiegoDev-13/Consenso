import styled from "styled-components";

export function InputSearchList({onChange, placeholder}) {
  return (
    <Container>
        <input onChange={onChange} placeholder={placeholder} type="text"></input>
    </Container>
);
}
const Container =styled.div`
    position: relative;

    input {
        background: ${(props) => props.theme.bgtotal};
        font-size: 16px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-bottom: solid 1px gray;
        color: ${(props) => props.theme.text};
        outline: none;
        &:focus{
            border-bottom: none;
        }
        &:placeholder {
            color: #cBcBc8;
        }
    }
`