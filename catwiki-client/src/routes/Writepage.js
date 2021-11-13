import styled from "styled-components";

const Writepage = () => {
  return (
    <Container>
      <Article>
        <LocalSection>
          <Tab>
            <Login>로그인</Login>
            <Singup>회원가입</Singup>
          </Tab>
          <MainSection>
            <Form>
              <InputSection>
                <InputId placeholder="아이디" />
                <InputPW placeholder="비밀번호" />
              </InputSection>
              <SubmitButton type="submit" value="로그인" />
            </Form>
          </MainSection>
        </LocalSection>
        <OauthSection></OauthSection>
      </Article>
    </Container>
  );
};

export default Writepage;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Article = styled.article`
  width: 700px;
  height: 700px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LocalSection = styled.section`
  width: 400px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
const Tab = styled.div`
  flex: 0.1;
  display: flex;
  border-bottom: 1px solid black;
`;
const Login = styled.div`
  font-weight: bold;
  padding: 10px;
  flex: 0.5;
  text-align: center;
`;
const Singup = styled.div`
  font-weight: bold;
  padding: 10px;
  flex: 0.5;
  text-align: center;
`;
const MainSection = styled.div`
  flex: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  border: 1px solid black;
  width: 300px;
  height: 100px;
  display: flex;
`;

const InputSection = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
`;
const InputId = styled.input`
  flex: 0.5;
`;
const InputPW = styled.input`
  flex: 0.5;
`;
const SubmitButton = styled.input`
  flex: 0.3;
`;

const OauthSection = styled.section``;
