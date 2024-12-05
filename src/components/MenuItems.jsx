import { Link, useNavigate } from "react-router-dom";

import { Button, Box } from "@mui/material";

const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="nav-items">
        <Link to="/#team">About us</Link>
      </Box>
      <Box className="nav-items">
        <Link to="/#services">Services</Link>
      </Box>
      <Box className="nav-items">
        <Link to="/#casestudies">Use Cases</Link>
      </Box>
      <Box className="nav-items">
        <Link to="/#workingprocess">Pricing</Link>
      </Box>
      <Box className="nav-items">
        <Link to="/#testimonials">Blog</Link>
      </Box>
      <Box>
        <Button
          size="small"
          variant="outlined"
          className="nav-button"
          onClick={() => {
            navigate("/#workingprocess", { replace: true });
          }}
        >
          Request a quote
        </Button>
      </Box>
    </>
  );
};

export default MenuItems;
