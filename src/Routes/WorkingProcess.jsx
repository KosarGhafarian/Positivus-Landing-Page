import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Grid2,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";

import { WorkingProcessData } from "../constant/index";
import addIcon from "../assets/images/addIcon.svg";
import minusIcon from "../assets/images/minusIcon.svg";
import SubHeader from "../components/SubHeader";
import "../assets/styles/workingprocess.css";

const WorkingProcessCard = ({ data }) => {
  const [isContentShown, setIsContentShown] = useState(false);
  return (
    <Card className={`processcard ${isContentShown && " green"}`}>
      <CardContent className="main-content p-0">
        <Box className="detail-box">
          <Box className="title-box">
            <Typography className="number">0{data.id}</Typography>
            <Typography>{data.name}</Typography>
          </Box>
          {isContentShown ? (
            <IconButton
              onClick={() => {
                setIsContentShown(false);
              }}
            >
              <img src={minusIcon} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setIsContentShown(true);
              }}
            >
              <img src={addIcon} />
            </IconButton>
          )}
        </Box>
      </CardContent>
      {isContentShown && (
        <CardContent className="p-0">
          <Divider />
          <Typography className="datacontent">{data.content}</Typography>
        </CardContent>
      )}
    </Card>
  );
};
const WorkingProcess = () => {
  return (
    <Grid2>
      <SubHeader
        name="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
        sx={{ width: "304px !important" }}
      />
      <Card variant="outlined" className="service-card-container">
        {WorkingProcessData.map((data) => (
          <WorkingProcessCard key={data.id} data={data} />
        ))}
      </Card>
    </Grid2>
  );
};

export default WorkingProcess;
