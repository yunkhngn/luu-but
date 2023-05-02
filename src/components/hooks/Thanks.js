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
import dc from "../lib/DataConfig";

const Thanks = ({ show, data, available }) => {
  return (
    <Collapse in={!show & !available}>
      <div className="letter-container">
        <Card
          variant="outlined"
          sx={{
            width: "100%",
          }}
        >
            <CardContent
                sx={{pt: 3, pb: 3 }}
            >
                <Typography variant="body1" sx={{ pl: 1, pr: 1, fontStyle:"italic" }}>
                    {dc.thanks.content} 
                </Typography>
            </CardContent>
        </Card>
      </div>
    </Collapse>
  );
};

export default Thanks;
