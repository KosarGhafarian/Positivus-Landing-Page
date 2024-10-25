import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";

import BlackAndGreenDirectionIcon from "../assets/images/BlackAndGreenDirectionIcon.svg";
import BlackAndWhiteDirectionIcon from "../assets/images/BlackAndWhiteDirectionIcon.svg";

const ServiceCard = ({ data }) => {
  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: `${data.bgColour} !important` }}
      className="service-card mb-5"
      key={data.id}
    >
      <CardContent className="d-flex justify-content-between">
        <Typography variant="h3" className="service-title">
          {data.title.map((e) => (
            <Typography
              variant="h3"
              key={e}
              sx={
                data?.isTitleWhite ? { backgroundColor: "#fff !important" } : {}
              }
            >
              {e}
              <br />
            </Typography>
          ))}
        </Typography>
        <CardMedia
          component="img"
          image={data.image}
          className={`${data?.className} card-media`}
        />
      </CardContent>
      <CardActions className="actions">
        <img
          src={
            data?.isGreen
              ? BlackAndGreenDirectionIcon
              : BlackAndWhiteDirectionIcon
          }
        />
        <Typography sx={data?.isGreen ? {} : { color: "#fff !important" }}>
          Learn more
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
