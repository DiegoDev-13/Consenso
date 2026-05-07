import styled from "styled-components";
export function BtnCircular({icon, width, height, bgColor, textColor, fontSize, translateX, translateY}) {
  return (
<Container $bgColor={bgColor} $textColor={textColor} $height={height} $width={width} fontSize={fontSize} $translateX={translateX} $translateY={translateY}>
    <span>{icon}</span>
</Container>
);
}
const Container =styled.div`
    background-color: ${(props) => props.$bgColor};
    min-width: ${(props) => props.$width};
    min-height: ${(props) => props.$height};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translateX(${(props) => props.$translateX}) translateY(${(props) => props.$translateY});

    span{
        font-size: ${(props) => props.font};
        text-align: center;
        color: ${(props) => props.$textColor};
    }
`