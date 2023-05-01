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
import dc from "../lib/DataConfig";

const Form = ({show, setData, data, memoriesError}) => {
  return (
    <Collapse in={show}>
    <div className="form-container">
      <Card
        variant="outlined"
        sx={{
          p: 1,
        }}
      >
        <CardContent>
          <Typography variant="h6">
            {dc.memories.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ pb: 3 }} color="text.secondary">
            {dc.memories.subtitle}
          </Typography>
          <Box sx={{ width: { md: '90%' } }}>
            <TextField
              error={memoriesError}
              helperText={memoriesError ? dc.memories.memoriesError : ""}
              id="outlined-textarea"
              placeholder={dc.memories.placeholder}
              multiline
              fullWidth
              onChange={(e) => setData({...data, memories: e.target.value})}
            />
          </Box>
        </CardContent>
      </Card>
    </div>
    </Collapse>
  );
};

export default Form;
