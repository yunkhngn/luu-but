import {React, useState} from "react";
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
import ReCAPTCHA from "react-google-recaptcha";

const Submit = ({ show, onDevelopmentEnv, setShow, setData, data, setAvailable, setNameError, setAboutError, setHandsomeError, setMemoriesError, setMessageError }) => {
  const handleSubmit = () => {
    if (!data.name) {
      setNameError(true);
    }
    else {
      setNameError(false);
    }
    if (!data.about) {
      setAboutError(true);
    }
    else {
      setAboutError(false);
    }
    if (!data.memories) {
      setMemoriesError(true);
    }
    else {
      setMemoriesError(false);
    }
    if (!data.message) {
      setMessageError(true);
    }
    else {
      setMessageError(false);
    }
    if (data.name && data.about && data.memories && data.message && authen) {
      submitForm();
    }
  };
  const [authen, setAuthen] = useState(onDevelopmentEnv ? true : false);

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
    const time = {
      day: day,
      month: month,
      year: year,
      hour: hour,
      minute: minute,
    }
    setData({ ...data, date: time });
    localStorage.setItem("data", JSON.stringify({ ...data, date: time }));
    setAvailable(false);
    console.log(data, time);
  };
  return (
    <Collapse in={show}>
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
            <Typography variant="body1" sx={{ pl: 1, pr: 1 , mb: 1}}>
              Cái này cũng v
            </Typography>
            <ReCAPTCHA
              sitekey="6LeRHNAlAAAAAD-DMCbFy1ZcTpgnuv-6QGIxnWH-"
              onChange={() => setAuthen(true)}
            />
          </CardContent>
          <CardActions sx={{ pl: 2, pr: 2, pb: 2, pt: 2 }}>
          <Button variant="contained" onClick={() => handleSubmit()}>
              Send
            </Button>
          </CardActions>
        </Card>
    </div>
    </Collapse>
  );
};

export default Submit;
