import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Empty></Empty>
      <Logo>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          Cat Wiki
        </Link>
      </Logo>
      <Navigation>
        <FontAwesomeIcon icon={faSearch} color={"black"} size="2x" />
        <Link
          to="/write"
          style={{
            display: "flex",
            minWidth: "fit-content",
            textDecoration: "none",
          }}
        >
          <WriteButton>글쓰기</WriteButton>
        </Link>
        <Link
          to="/login"
          style={{
            display: "flex",
            minWidth: "fit-content",
            textDecoration: "none",
          }}
        >
          <LoginButton>로그인/회원가입</LoginButton>
        </Link>
      </Navigation>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  padding: 20px;
`;
const Empty = styled.div`
  flex: 0.3;
`;
const Logo = styled.h1`
  flex: 0.4;
  align-self: center;
  text-align: center;
  margin: 0;
`;
const Navigation = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const WriteButton = styled.span`
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px;
  margin: 0px 10px;
`;
const LoginButton = styled.span`
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px;
`;
