import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import BlackAndGreenDirectionIcon from "../assets/images/BlackAndGreenDirectionIcon.svg";
import BlackAndWhiteDirectionIcon from "../assets/images/BlackAndWhiteDirectionIcon.svg";

const ServiceCard = ({
  bgColour,
  isWhiteTitle = false,
  isGreen = true,
  image,
  title,
}) => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: `{bgColour}` }}>
      <CardContent>
        <Typography
          variant="h3"
          sx={isWhiteTitle && { backgroundColor: "#fff" }}
        >
          {title}
        </Typography>
        <img
          src={
            isGreen ? BlackAndGreenDirectionIcon : BlackAndWhiteDirectionIcon
          }
        />
        <Typography sx={isGreen && { color: "#fff !important" }}>
          Learn more
        </Typography>
      </CardContent>
      <CardMedia component="img" sx={{ width: "fit-content" }} image={image} />
    </Card>
  );
};

export default ServiceCard;
