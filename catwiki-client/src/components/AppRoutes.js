import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Mainpage from "../routes/Mainpage";
import Writepage from "../routes/Writepage";
import Loginpage from "../routes/Loginpage";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route path="/write">
            <Writepage />
          </Route>
          <Route path="/login">
            <Loginpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
};

export default AppRoutes;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
