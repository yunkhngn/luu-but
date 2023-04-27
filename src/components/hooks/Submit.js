import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Typography,
} from "@mui/material";

const Submit = () => {
  return (
    <div className="submit-container">
      <Card variant="outlined">
        <CardHeader
          title="End rùi nè"
          titleTypographyProps={{ variant: "h6" }}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            pl: 3,
            pr: 3,
            pt: 3,
          }}
          subheader="Chưa nghĩ ra j để viết ở đây"
          subheaderTypographyProps={{ variant: "subtitle2" }}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            image="https://wallpapers.com/images/featured/vmdj9lfm2un8rji3.jpg"
            alt="Paella dish"
          />
        </CardActionArea>
        <CardContent
          sx={{ borderBottom: 1, borderColor: "divider", pt: 3, pb: 3 }}
        >
          <Typography variant="body1" sx={{ pl: 1, pr: 1 }}>
            Cái này cũng v
          </Typography>
        </CardContent>
        <CardActions sx={{ pl: 2, pr: 2, pb: 2, pt: 2 }}>
          
          <Button variant="contained">
            Send
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Submit;