import { Box, Card, CardContent, Typography } from "@mui/material";

import BlackAndGreenDirectionIcon from "../assets/images/BlackAndGreenDirectionIcon.svg";
import { CaseStudiesData } from "../constant/index";
import SubHeader from "../components/SubHeader";
import "../assets/styles/casestudies.css";

const CaseStudies = () => {
  return (
    <Box id="casestudies">
      <SubHeader
        sx={{ maxWidth: "580px" }}
        name="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <Box className="cards">
        {CaseStudiesData.map((data) => (
          <Card variant="outlined" className="detail-card" key={data.id}>
            <CardContent className="content">
              <Typography>{data.content}</Typography>
              <Box className="action">
                <Typography>Learn more</Typography>
                <img src={BlackAndGreenDirectionIcon} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CaseStudies;
