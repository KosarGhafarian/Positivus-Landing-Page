import { Box, Card, CardContent, Typography } from "@mui/material";

import { TeamData } from "../constant/index";
import SubHeader from "../components/SubHeader";

import "../assets/styles/team.css";

const Team = () => {
  return (
    <Box sx={{ paddingBottom: "100px", marginBottom: "100px" }}>
      <SubHeader
        name="Team"
        sx={{ maxWidth: "473px !important", minWidth: "345px" }}
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <Box className="team-detail">
        {TeamData.map((data) => (
          <Card variant="outlined" className="team-card" key={data.id}>
            <CardContent className="team-personal">
              <Box className="detail">
                <Box className="profile-box">
                  <Box
                    className="profile-image"
                    sx={{ backgroundImage: `url(${data.profile})` }}
                  ></Box>
                </Box>
                <Box>
                  <Typography>{data.name}</Typography>
                  <Typography>{data.occupation}</Typography>
                </Box>
              </Box>
              <Box className="description">
                <Typography>{data.description}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Team;
