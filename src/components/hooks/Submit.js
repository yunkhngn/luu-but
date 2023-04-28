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
  Collapse,
} from "@mui/material";

const Submit = ({ show, setShow, setData, data, setAvailable }) => {
  const submitForm = () => {
    setShow(false)
    //get date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, '0');
    //change minute to 2 digits
    const time = `${day}/${month}/${year} ${hour}:${minute}`;
    setData({ ...data, date: time });
    localStorage.setItem("data", JSON.stringify({ ...data, date: time }));
    setAvailable(false);
    console.log(data, time);
  };

  return (
    <div className="submit-container">
      <Collapse in={show}>
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
            <Button variant="contained" onClick={() => submitForm()}>
              Send
            </Button>
          </CardActions>
        </Card>
      </Collapse>
    </div>
  );
};

export default Submit;
