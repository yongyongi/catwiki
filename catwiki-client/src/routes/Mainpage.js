import styled from "styled-components";

const Mainpage = () => {
  return (
    <Container>
      <MainCatImg></MainCatImg>
      <MainContent>
        <Content></Content>
      </MainContent>
    </Container>
  );
};

export default Mainpage;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainCatImg = styled.div`
  flex: 0.3;
  background-image: url("https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;
const MainContent = styled.div`
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
`;
