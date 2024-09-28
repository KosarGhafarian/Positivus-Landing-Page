import { Button, Grid2, Typography } from "@mui/material";

import Illustration from "../assets/images/Illustration.svg";

const Header = () => {
  return (
    <Grid2 container className="flex-nowrap" sx={{ paddingTop: "100px" }}>
      <Grid2 container className="flex-column">
        <Typography variant="h1" className="header-title">
          Navigating the digital landscape for success
        </Typography>
        <Typography className="header-description">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </Typography>
        <Button className="header-button">Book a consultation</Button>
      </Grid2>
      <Grid2 container>
        <Grid2>
          <img src={Illustration} />
        </Grid2>{" "}
      </Grid2>
    </Grid2>
  );
};

export default Header;
