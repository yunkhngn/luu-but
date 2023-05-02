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

const NameInput = ({ show, data, setData }) => {
  return (
    <div className="nameInput-container">
      <Collapse in={show}>
        <Card
          variant="outlined"
          sx={{
            p: 1,
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
                id="outlined-basic"
                placeholder="Tên nè"
                variant="outlined"
                fullWidth
                error
                helperText="*Tên không được để trống"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </Box>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
};

export default NameInput;
