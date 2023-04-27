import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
  Collapse,
} from "@mui/material";
import "../css/Form.css";

const Form = ({show}) => {
  return (
    <div className="form-container">
      <Collapse in={show}>
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
      </Collapse>
    </div>
  );
};

export default Form;
