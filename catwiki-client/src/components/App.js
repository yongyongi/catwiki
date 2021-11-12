import styled from "styled-components";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <Container>
      <AppRoutes />
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
