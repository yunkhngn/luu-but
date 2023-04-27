import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
} from "@mui/material";
// import '../css/ShortText.css'

const ShortText = () => {
  return (
    <div className="shortText-container">
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
          <Typography variant="subtitle2" sx={{ pb: 3 }} color="text.secondary">
            Ko thì thui keke.
          </Typography>
          <Box sx={{ width: "90%" }}>
            <TextField
              id="outlined-textarea"
              placeholder="Viết di nè"
              multiline
              fullWidth
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShortText;
