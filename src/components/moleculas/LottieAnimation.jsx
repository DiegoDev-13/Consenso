import styled from 'styled-components'
import LottieComponent from "lottie-react"; 

export function LottieAnimation({width, height, animation}) {
  // 1. Vite a veces importa la librería como { default: Componente }
  // Esta línea asegura que tengamos el componente real
  const Lottie = LottieComponent.default || LottieComponent;

  // 3. Verificación de seguridad
  if (typeof Lottie !== "function") {
    console.error("Lottie no es una función, es:", typeof Lottie, Lottie);
    return <div>Error cargando animación</div>;
  }

  return (
    <Container>
      <Lottie animationData={animation} loop={true} style={{ width: width, height: height }}  />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
