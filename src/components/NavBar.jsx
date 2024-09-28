import { Link } from "react-router-dom";

import { Button, Grid2 } from "@mui/material";

import Logo from "../assets/images/Positivus-Block-Logo.svg";
const NavBar = () => {
  return (
    <Grid2
      container
      sx={{ height: "68px", marginTop: "40px" }}
      className="flex-row justify-content-between align-items-center"
    >
      <Grid2>
        <img src={Logo} />
      </Grid2>
      <Grid2
        container
        className="flex-row justify-content-between align-items-center"
      >
        <Grid2 className="nav-items">
          <Link>About us</Link>
        </Grid2>
        <Grid2 className="nav-items">
          <Link>Services</Link>
        </Grid2>
        <Grid2 className="nav-items">
          <Link>Use Cases</Link>
        </Grid2>
        <Grid2 className="nav-items">
          <Link>Pricing</Link>
        </Grid2>
        <Grid2 className="nav-items">
          <Link>Blog</Link>
        </Grid2>
        <Grid2 className="nav-items button">
          <Button size="small" variant="outlined" className="nav-button">
            Request a quote
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default NavBar;
