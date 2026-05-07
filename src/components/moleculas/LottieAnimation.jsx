import styled from "styled-components";
import Lottie from "lottie-react"; // Esta sí es compatible con Vi

export function LottieAnimation({ height, width, animation }) { 

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation 
    }

  return (
    <Container>
        <Lottie options={defaultOptions} height={Number(height)} width={Number(width)} isClickToPauseDisabled />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;