import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Collapse,
} from "@mui/material";
import dc from "../lib/DataConfig";

const NameInput = ({ show, data, setData, nameError }) => {
  return (
    <Collapse in={show}>
    <div className="nameInput-container">
        <Card
          variant="outlined"
          sx={{
            p: 1,
            mt:3,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              {dc.nameInput.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              {dc.nameInput.subtitle}
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                error={nameError}
                helperText={nameError ? dc.nameInput.nameError : ""}
                id="outlined-basic"
                placeholder={dc.nameInput.placeholder}
                variant="outlined"
                fullWidth
                helperText="*Tên không được để trống"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                error={nameError}
              />
            </Box>
          </CardContent>
        </Card>
    </div>
    </Collapse>
  );
};

export default NameInput;
