import { Box, Typography } from "@mui/material";

import MediaQuery from "../hooks/MediaQuery";

const SubHeader = ({ name, description, sx = {} }) => {
  return (
    <Box
      sx={{ marginY: "90px !important" }}
      className={`d-flex ${
        MediaQuery() ? "flex-row" : "flex-column justify-content-center"
      } gap-5 align-items-center `}
    >
      <Typography variant="h2" className="sub-header-name">
        {name}
      </Typography>
      <Typography className="sub-header-description" sx={sx}>
        {description}
      </Typography>
    </Box>
  );
};

export default SubHeader;
