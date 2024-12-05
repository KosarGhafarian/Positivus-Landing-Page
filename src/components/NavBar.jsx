import { useState } from "react";

import { IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import MediaQuery from "../hooks/MediaQuery";
import Logo from "../assets/images/Positivus-Block-Logo.svg";
import MenuItems from "./MenuItems";

const NavBar = () => {
  const matches = MediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box className="navbar">
      <Box className={!matches ? "mn-fit" : ""}>
        <img src={Logo} />
      </Box>
      {matches ? (
        <Box
          container
          className="d-flex flex-nowrap justify-content-between align-items-center"
        >
          <MenuItems />
        </Box>
      ) : isMenuOpen ? (
        <Box className="menu">
          <Box className="menu-items">
            <MenuItems />
          </Box>
          <IconButton
            size="medium"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </Box>
      ) : (
        <Box className="mn-fit">
          <IconButton
            size="medium"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
