import React from "react";
import {
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
  Button,
  Typography,
} from "@mui/material";
// import '../css/MultipleChoice.css'

const MultipleChoice = () => {
  return (
    <div className="multipleChoice-container">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            MultipleChoice
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultipleChoice;
