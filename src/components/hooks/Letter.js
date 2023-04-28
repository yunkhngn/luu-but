import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Collapse,
  Typography,
} from "@mui/material";
// import '../css/Letter.css'

const Letter = ({ show, data, showLetter }) => {
  return (
    <Collapse in={!show & showLetter}>
      <div className="letter-container">
        <Card
          variant="outlined"
          sx={{
            width: "100%",
          }}
        >
            <CardContent
                sx={{ borderBottom: 1, borderColor: "divider", pt: 3, pb: 3 }}
            >
                <Typography variant="body1" sx={{ pl: 1, pr: 1 }}>
                    {data.message}
                </Typography>
            </CardContent>
        </Card>
      </div>
    </Collapse>
  );
};

export default Letter;
