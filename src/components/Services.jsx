import { Grid2, Card } from "@mui/material";

import { ServiceCardData } from "../constant/index";
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
    </Grid2>
  );
};

export default Services;
