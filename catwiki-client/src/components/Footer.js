import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container>
      <Sentence>세상 모든 고양이를 위해서...</Sentence>
      <MyAddress>
        <FontAwesomeIcon icon={faGithub} size={"2x"} />
      </MyAddress>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Sentence = styled.em``;
const MyAddress = styled.div``;
