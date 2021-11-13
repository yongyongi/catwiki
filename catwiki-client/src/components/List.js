import styled, { css } from "styled-components";

const List = ({ data }) => {
  return (
    <>
      {data ? (
        <Container new>
          <Num new>{data.num}</Num>
          <Title new>{data.title}</Title>
        </Container>
      ) : (
        <Container>
          <Num>No.</Num>
          <Title>전체 글</Title>
        </Container>
      )}
    </>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  ${(props) =>
    props.new &&
    css`
      &:hover {
        background-color: #e8e8e8;
      }
      padding: 7px 0px;
    `}

  border-bottom: 1px solid #e8e8e8;
`;
const Num = styled.div`
  flex: 0.1;
  text-align: center;
  ${(props) =>
    !props.new &&
    css`
      font-weight: bold;
    `}
  padding: 10px;
`;
const Title = styled.div`
  ${(props) =>
    !props.new &&
    css`
      font-weight: bold;
    `}

  flex: 0.9;
  padding: 10px;
  text-align: left;
`;
