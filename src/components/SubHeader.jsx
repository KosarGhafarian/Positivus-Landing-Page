import { Grid2, Typography } from "@mui/material";

const SubHeader = ({ name, description, sx = {} }) => {
  return (
    <Grid2
      container
      sx={{ marginY: "100px !important" }}
      className="gap-4 align-items-center"
    >
      <Typography variant="h2" className="sub-header-name">
        {name}
      </Typography>
      <Typography className="sub-header-description" sx={sx}>
        {description}
      </Typography>
    </Grid2>
  );
};

export default SubHeader;
