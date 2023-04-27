import React from "react";
import {
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
  Button,
  Typography,
} from "@mui/material";
import "../css/Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Form
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
