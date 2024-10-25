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
import SubHeader from "./SubHeader";
import ServiceCard from "./ServiceCard";
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
          <ServiceCard key={data.id} data={data} />
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
