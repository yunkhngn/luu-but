import React from "react";
import { Card, CardContent, Typography, Slider, Box } from "@mui/material";
// import '../css/MultipleChoice.css'

const MultipleChoice = () => {
  const marks = [
    {
      value: 0,
      label: "Nah",
    },
    {
      value: 40,
      label: "Hong bit",
    },
    {
      value: 70,
      label: "Cũng ổn",
    },
    {
      value: 100,
      label: "Tuyệt vời",
    },
  ];
  return (
    <div className="multipleChoice-container">
      <Card
        variant="outlined"
        sx={{
          p: 1,
        }}
      >
        <CardContent>
          <Typography variant="h6">Tớ dzai chứ 🫠</Typography>
          <Typography variant="subtitle2" sx={{ pb: 3 }} color="text.secondary">
            Chắc chắn là dzai rồi.
          </Typography>
          <Box sx={{ width: { md: '90%' }, pl:3, pr:3 , }}>
            <Slider
              aria-label="Custom marks"
              defaultValue={40}
              step={10}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultipleChoice;
