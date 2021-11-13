import styled from "styled-components";
import List from "../components/List";

const Mainpage = () => {
  return (
    <Container>
      <MainCatImg></MainCatImg>
      <MainContent>
        <Table>
          <List />
          <List data={{ num: "1", title: "고양이가 사료를 먹지 않아요" }} />
          <List data={{ num: "2", title: "똥색이 이상해요" }} />
          <List data={{ num: "3", title: "토를 자꾸 해요" }} />
        </Table>
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
const Table = styled.div`
  width: 800px;
  height: 500px;
  overflow: scroll;
`;
