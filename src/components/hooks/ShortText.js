import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
  Collapse,
} from "@mui/material";
// import '../css/ShortText.css'

const ShortText = ({ show, setData, data, messageError}) => {
  return (
    <div className="shortText-container">
      <Collapse in={show}>
        <Card
          variant="outlined"
          sx={{
            p: 1,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              Bạn có gì muốn gửi tới mình ko.
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              Ko thì thui keke.
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                error={messageError}
                helperText={messageError ? "Viết di nè" : ""}
                id="outlined-textarea"
                placeholder="Viết di nè"
                multiline
                fullWidth
                onChange={(e) =>
                  setData({ ...data, message: e.target.value })
                }
              />
            </Box>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
};

export default ShortText;
