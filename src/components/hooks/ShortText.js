import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
  Collapse,
} from "@mui/material";
import dc from "../lib/DataConfig";

const ShortText = ({ show, setData, data, messageError}) => {
  return (
    <Collapse in={show}>
    <div className="shortText-container">
        <Card
          variant="outlined"
          sx={{
            p: 1,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              {dc.message.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ pb: 3 }}
              color="text.secondary"
            >
              {dc.message.subtitle} 
            </Typography>
            <Box sx={{ width: { md: "90%" } }}>
              <TextField
                error={messageError}
                helperText={messageError ? dc.message.messageError : ""}
                id="outlined-textarea"
                placeholder={dc.message.placeholder}
                multiline
                fullWidth
                onChange={(e) =>
                  setData({ ...data, message: e.target.value })
                }
              />
            </Box>
          </CardContent>
        </Card>
    </div>
    </Collapse>
  );
};

export default ShortText;
