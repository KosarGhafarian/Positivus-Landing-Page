import { Container } from "@mui/material";

import NavBar from "./components/NavBar";

import "./assets/styles/app.css";
const App = () => {
  return (
    <Container
      fixed
      disableGutters
      className="m-0"
      sx={{ minWidth: "100%" }}
      maxWidth={false}
    >
      <NavBar />
    </Container>
  );
};

export default App;
