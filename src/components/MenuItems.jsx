import { useNavigate } from "react-router-dom";

import { Link } from "react-scroll";

import { Button, Box } from "@mui/material";

const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="nav-items">
        <Link to="team" smooth={true} duration={500}>
          About us
        </Link>
      </Box>
      <Box className="nav-items">
        <Link to="services" smooth={true} duration={500}>
          Services
        </Link>
      </Box>
      <Box className="nav-items">
        <Link to="casestudies" smooth={true} duration={500}>
          Use Cases
        </Link>
      </Box>
      <Box className="nav-items">
        <Link to="workingprocess" smooth={true} duration={500}>
          Pricing
        </Link>
      </Box>
      <Box className="nav-items">
        <Link to="testimonials" smooth={true} duration={500}>
          Blog
        </Link>
      </Box>
      <Box>
        <Button
          size="small"
          variant="outlined"
          className="nav-button"
          // onClick={() => {
          //   navigate("/#workingprocess", { replace: true });
          // }}
        >
          Request a quote
        </Button>
      </Box>
    </>
  );
};

export default MenuItems;
