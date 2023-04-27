import React from "react";
import { Card, CardContent, Typography, TextField, Box } from "@mui/material";
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
          <Box sx={{ width: { md: '90%' } }}>
          <TextField id="outlined-basic"   placeholder="Tên nè" variant="outlined" fullWidth
          />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default NameInput;
