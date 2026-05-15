import styled from "styled-components";
import {Carousel} from '../../index'

 
export function HomeTemplate() {
  return (
  <Main>
    <Container>
      <Box>
        <Carousel />
      </Box>
    </Container>
  </Main>
  );
}
const Main =styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const Container =styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align:center;

`
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 40rem) {
    min-height: 50vh;
  }
`