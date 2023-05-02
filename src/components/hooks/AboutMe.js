import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Collapse,
} from "@mui/material";
import dc from "../lib/DataConfig";

const AboutMe = ({ show, data, setData, aboutError }) => {
  return (
    <Collapse in={show}>
      <div className="AboutMe-container">
        <Card
          variant="outlined"
          sx={{
            p: 1,
          }}
        >
          <CardContent>
            <Typography variant="h6">{dc.aboutMe.title}</Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              {dc.aboutMe.subtitle}
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                error={aboutError}
                helperText={aboutError ? dc.aboutMe.aboutError : ""}
                id="outlined-basic"
                placeholder={dc.aboutMe.placeholder}
                variant="outlined"
                fullWidth
                onChange={(e) => setData({ ...data, about: e.target.value })}
              />
            </Box>
          </CardContent>
        </Card>
      </div>
    </Collapse >
  );
};

export default AboutMe;
