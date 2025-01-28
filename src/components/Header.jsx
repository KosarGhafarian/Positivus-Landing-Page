import { Button, Grid2, Typography, Box } from "@mui/material";

import MediaQuery from "../hooks/MediaQuery";
import Illustration from "../assets/images/Illustration.svg";

const Header = () => {
  return MediaQuery() ? (
    <Box className="header-box">
      <Box>
        <Typography variant="h1" className="header-title">
          Navigating the digital landscape for success
        </Typography>
        <Typography className="header-description">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </Typography>
        <Button className="header-button" size="medium">
          Book a consultation
        </Button>
      </Box>
      <Box>
        <img src={Illustration} />
      </Box>
    </Box>
  ) : (
    <Box className="header-box">
      <Typography variant="h1" className="header-title">
        Navigating the digital landscape for success
      </Typography>
      <Box className="d-block" sx={{ width: "-webkit-fill-available" }}>
        <img src={Illustration} />
      </Box>
      <Typography className="header-description">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </Typography>
      <Button className="header-button" size="medium">
        Book a consultation
      </Button>
    </Box>
  );
};

export default Header;
