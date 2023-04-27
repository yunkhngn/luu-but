import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
// import '../css/NameInput.css'

const NameInput = () => {
  return (
    <div className="nameInput-container">
      <Card variant="outlined">
      <CardHeader
          title="Lưu bút của Khoa Nguyễn"
          // titleTypographyProps={{ variant: "h4"}}
          sx={{
            pl: 3,
            pr: 3,
            pt: 4,
            pb: 3,
          }}
        />
        <CardContent>
          <TextField id="outlined-basic" variant="filled" />
        </CardContent>
      </Card>
    </div>
  );
};

export default NameInput;
