import React from "react";
import {
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
  Button,
  Typography,
} from "@mui/material";
// import '../css/HeadCard.css'

const HeadCard = () => {
  return (
    <div className="headCard-container">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Head Card
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeadCard;
