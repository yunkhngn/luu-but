import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import "../css/Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <Card
        variant="outlined"
        sx={{
          p: 1,
        }}
      >
        <CardContent>
          <Typography variant="h6">
            Kỉ niệm của chúng ta.
          </Typography>
          <Typography variant="subtitle2" sx={{ pb: 3 }} color="text.secondary">
            Hên xui gặp nhau cho kẹo (con) há há.
          </Typography>
          <Box sx={{ width: { md: '90%' } }}>
            <TextField
              id="outlined-textarea"
              placeholder="Kỉ niệm gì k"
              multiline
              fullWidth
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
