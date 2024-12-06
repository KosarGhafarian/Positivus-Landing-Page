import { Grid2 } from "@mui/material";

import MediaQuery from "../hooks/MediaQuery";

import amazonLogo from "../assets/images/amazonLogo.svg";
import dribblle from "../assets/images/dribblle.svg";
import hubSpot from "../assets/images/hubSpot.svg";
import netflix from "../assets/images/netflix.svg";
import notion from "../assets/images/notion.svg";
import zoom from "../assets/images/zoom.svg";

const LogoDetail = () => {
  return (
    <Grid2
      container
      className={`flex-row flex-wrap ${
        MediaQuery() ? "justify-content-between" : "gap-5"
      } logo-detail`}
    >
      <img src={amazonLogo} />
      <img src={dribblle} />
      <img src={hubSpot} />
      <img src={notion} />
      <img src={netflix} />
      <img src={zoom} />
    </Grid2>
  );
};

export default LogoDetail;
