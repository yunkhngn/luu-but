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
import emailjs from '@emailjs/browser';
import dc from "../lib/DataConfig";

const Submit = ({setShowLetter, onDevelopmentEnv, setShow, setData, data, setAvailable, available }) => {
  const handleSubmit = () => {
    if (data.name.length >=2 && data.about.length >=5  && data.memories.length >=5  && data.message.length >=5  && authen) {
      submitForm();
    }
    else {
      alert ("Bạn chưa điền đủ thông tin hoặc chưa xác nhận captcha")
    }
  };
  const [authen, setAuthen] = useState(onDevelopmentEnv ? true : false);

  const submitForm = (event) => {
    //Ẩn form và hiện kết quả
    setShow(false)
    setShowLetter(true)
    setAvailable(false);

    //get date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, '0');
    const time = {
      day: day,
      month: month,
      year: year,
      hour: hour,
      minute: minute,
    }

    //set data mới vào data và local storage
    setData({ ...data, date: time });
    localStorage.setItem("data", JSON.stringify({ ...data, date: time }));

    //email về email
    if(!onDevelopmentEnv) {
    emailjs.send("service_bvxrtbi","template_dj51y99",{
      name: {data}.data.name,
      date_day: {time}.time.day,
      date_month: {time}.time.month,
      date_year: {time}.time.year,
      date_hour: {time}.time.hour,
      date_minute: {time}.time.minute,
      about_me:  {data}.data.about,
      memories: {data}.data.memories,
      message: {data}.data.message,
      point: {data}.data.handsome,
      }, "6mpYFhaV6lVgQsngg");
    }
  };
  return (
    <Collapse in={available && data.message !== "" && data.message !== undefined ? true : false}>
    <div className="submit-container">
        <Card variant="outlined">
          <CardHeader
            title={dc.submit.title}
            titleTypographyProps={{ variant: "h6" }}
            sx={{
              pl: 3,
              pr: 3,
              pt: 3,
            }}
            subheader={dc.submit.subheader}
            subheaderTypographyProps={{ variant: "subtitle2" }}
          />
          <CardActionArea>
            <CardMedia
              component="img"
              height="194"
              image={dc.submit.image}
              alt="Klee"
            />
          </CardActionArea>
          <CardContent
            sx={{ borderBottom: 1, borderColor: "divider", pt: 3, pb: 3 }}
          >
            <Typography variant="body1" sx={{ pl: 1, pr: 1 , mb: 1}}>
              {dc.submit.content}
            </Typography>
            <ReCAPTCHA
              sitekey="6LeRHNAlAAAAAD-DMCbFy1ZcTpgnuv-6QGIxnWH-"
              onChange={() => setAuthen(true)}
            />
          </CardContent>
          <CardActions sx={{ pl: 2, pr: 2, pb: 2, pt: 2 }}>
          <Button variant="contained" onClick={() => handleSubmit()}>
            {dc.submit.button}
            </Button>
          </CardActions>
        </Card>
    </div>
    </Collapse>
  );
};

export default Submit;
