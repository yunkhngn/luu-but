import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Collapse,
} from "@mui/material";
// import '../css/NameInput.css'

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
            <Typography variant="h6">Tên cậu là gì?</Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              Hên xui gặp nhau cho kẹo (con) há há.
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                error={nameError}
                helperText={nameError ? "Tên cậu là gì?" : ""}
                id="outlined-basic"
                placeholder="Tên nè"
                variant="outlined"
                fullWidth
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </Box>
          </CardContent>
        </Card>
    </div>
    </Collapse>
  );
};

export default NameInput;
