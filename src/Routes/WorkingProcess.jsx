import { useState } from "react";

import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";

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
        <Box className="title-box">
          <Typography>0{data.id}</Typography>
          <Typography>{data.name}</Typography>
        </Box>
        <IconButton
          onClick={() => {
            setIsContentShown(!isContentShown);
          }}
        >
          {isContentShown ? <img src={minusIcon} /> : <img src={addIcon} />}
        </IconButton>
      </CardContent>
      {isContentShown && (
        <CardContent className="detail">
          <Typography>{data.content}</Typography>
        </CardContent>
      )}
    </Card>
  );
};
const WorkingProcess = () => {
  return (
    <Box id="workingprocess">
      <SubHeader
        name="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
        sx={{ width: "304px !important" }}
      />
      <Card variant="outlined" className="process-card-container">
        {WorkingProcessData.map((data) => (
          <WorkingProcessCard key={data.id} data={data} />
        ))}
      </Card>
    </Box>
  );
};

export default WorkingProcess;
