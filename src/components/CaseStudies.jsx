import { Fragment } from "react";

import {
  Grid2,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
} from "@mui/material";

import BlackAndGreenDirectionIcon from "../assets/images/BlackAndGreenDirectionIcon.svg";
import { CaseStudiesData } from "../constant/index";
import SubHeader from "./SubHeader";
import "../assets/styles/casestudies.css";

const CardDetail = ({ data }) => {
  return (
    <Card className="detail-card">
      <CardContent className="content">{data.content}</CardContent>
      <CardActions className="action">
        <Typography>Learn more</Typography>
        <img src={BlackAndGreenDirectionIcon} />
      </CardActions>
    </Card>
  );
};

const CaseStudies = () => {
  return (
    <Grid2>
      <SubHeader
        name="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <Card className="cards">
        {CaseStudiesData.map((e, index) => (
          <Fragment key={e.id}>
            <CardDetail data={e} />
            {index !== CaseStudiesData.length - 1 && (
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                className="divider"
              />
            )}
          </Fragment>
        ))}
      </Card>
    </Grid2>
  );
};

export default CaseStudies;
