import {
  Grid2,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import { ServiceCardData } from "../constant/index";
import proposal from "../assets/images/proposal.svg";
import BlackAndGreenDirectionIcon from "../assets/images/BlackAndGreenDirectionIcon.svg";
import BlackAndWhiteDirectionIcon from "../assets/images/BlackAndWhiteDirectionIcon.svg";
import SubHeader from "./SubHeader";
import "../assets/styles/services.css";

const Services = () => {
  return (
    <Grid2>
      <SubHeader
        name="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <Card variant="outlined" className="service-card-container">
        {ServiceCardData.map((data) => (
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
                      data?.isTitleWhite
                        ? { backgroundColor: "#fff !important" }
                        : {}
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
              <Typography
                sx={data?.isGreen ? {} : { color: "#fff !important" }}
              >
                Learn more
              </Typography>
            </CardActions>
          </Card>
        ))}
      </Card>
      <Card variant="outlined" className="proposal-card">
        <CardContent className="proposal-content">
          <CardContent
            sx={{
              height: "fit-content",
              marginLeft: "18px",
            }}
          >
            <Typography variant="h3">Let’s make things happen</Typography>
            <Typography variant="p">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={proposal}
            className="proposal-media"
          />
        </CardContent>
        <CardActions className="proposal-actions">
          <Button variant="outlined">Get your free proposal</Button>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default Services;
