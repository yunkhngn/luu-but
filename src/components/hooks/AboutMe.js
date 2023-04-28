import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Collapse,
} from "@mui/material";
// import '../css/AboutMe.css'

const AboutMe = ({ show, data, setData }) => {
  return (
    <div className="AboutMe-container">
      <Collapse in={show}>
        <Card
          variant="outlined"
          sx={{
            p: 1,
          }}
        >
          <CardContent>
            <Typography variant="h6">Cảm nhận của cậu về tớ?</Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              Hên xui gặp nhau cho kẹo (con) há há.
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                id="outlined-basic"
                placeholder="Cảm nhận nè nè"
                variant="outlined"
                fullWidth
                onChange={(e) => setData({ ...data, about: e.target.value })}
              />
            </Box>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
};

export default AboutMe;
