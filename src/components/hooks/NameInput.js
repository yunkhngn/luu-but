import React from "react";
import { Card, CardContent, Typography, TextField } from "@mui/material";
// import '../css/NameInput.css'

const NameInput = () => {
  return (
    <div className="nameInput-container">
      <Card
        variant="outlined"
        sx={{
          p: 1,
        }}
      >
        <CardContent>
          <Typography variant="h6"
          >
            Tên cậu là gì?
          </Typography>
          <Typography  variant="subtitle2"
          sx={{pb: 3}}
          color="text.secondary"
          >
            Hên xui gặp nhau cho kẹo (con) há há.
          </Typography>
          <TextField id="outlined-basic" label="tên nè" variant="outlined" fullWidth
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default NameInput;
