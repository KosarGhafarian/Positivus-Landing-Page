import { Container } from "@mui/material";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import LogoDetail from "./components/LogoDetail";

import "./assets/styles/app.css";

const App = () => {
  return (
    <Container
      fixed
      disableGutters
      className="m-0"
      sx={{ minWidth: "100%", paddingX: "60px" }}
      maxWidth={false}
    >
      <NavBar />
      <Header />
      <LogoDetail />
    </Container>
  );
};

export default App;
