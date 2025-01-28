import { Box, Card, CardContent, Typography, Button } from "@mui/material";

import MediaQuery from "../hooks/MediaQuery";
import { ServiceCardData } from "../constant/index";
import proposal from "../assets/images/proposal.svg";
import BlackAndGreenDirectionIcon from "../assets/images/BlackAndGreenDirectionIcon.svg";
import BlackAndWhiteDirectionIcon from "../assets/images/BlackAndWhiteDirectionIcon.svg";
import SubHeader from "../components/SubHeader";
import "../assets/styles/services.css";

const Services = () => {
  return (
    <Box id="services">
      <SubHeader
        name="Services"
        sx={{ maxWidth: "600px" }}
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <Card variant="outlined" className="service-card-container">
        {ServiceCardData.map((data) => (
          <Card
            variant="outlined"
            sx={{ backgroundColor: `${data.bgColour} !important` }}
            className="service-card"
            key={data.id}
          >
            <CardContent>
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
              <Box className="card-media">
                <img src={data.image} />
              </Box>
              <Box className="d-flex align-items-center gap-1">
                <img
                  src={
                    data?.isGreen
                      ? BlackAndGreenDirectionIcon
                      : BlackAndWhiteDirectionIcon
                  }
                />
                {MediaQuery() && (
                  <Typography
                    sx={data?.isGreen ? {} : { color: "#fff !important" }}
                  >
                    Learn more
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Card>
      <Card variant="outlined" className="proposal-card">
        <CardContent className="proposal-content">
          <Box>
            <Typography variant="h2">Let’s make things happen</Typography>
            <Typography variant="p">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </Typography>
            <Button
              variant="outlined"
              className="proposal-action"
              size="medium"
            >
              Get your free proposal
            </Button>
          </Box>
          {MediaQuery() && (
            <Box className="proposal-media">
              <img src={proposal} />
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Services;
