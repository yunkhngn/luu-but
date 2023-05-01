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
// import '../css/HeadCard.css'

const HeadCard = ({ show, setShow, available, setShowLetter, showLetter }) => {
  return (
    <Card variant="outlined"
      sx={{
        width: "100%",
      }}
    >
      <div className="headCard-container">
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            image="https://wallpapers.com/images/featured/vmdj9lfm2un8rji3.jpg"
            alt="Paella dish"
          />
        </CardActionArea>
        <CardHeader
          title="Lưu bút của Khoa Nguyễn"
          titleTypographyProps={{ variant: "h5" }}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            pl: 3,
            pr: 3,
            pt: 4,
            pb: 3,
          }}
          subheader="April 27, 2023 - @yun.khngn"
          subheaderTypographyProps={{ variant: "subtitle1" }}
        />
        <CardContent
          sx={{ borderBottom: 1, borderColor: "divider", pt: 3, pb: 3 }}
        >
          <Typography variant="body1" sx={{ pl: 1, pr: 1 }}>
            Sắp xong r nè abc
          </Typography>
        </CardContent>
        <CardActions sx={{ pl: 2, pr: 2, pt: 2, pb: 2 }}>
          <Button size="small" color="primary" onClick={() => setShow(!show)} disabled={!available}>
            Bắt đầu thui
          </Button>
          <Button size="small" color="primary" onClick={() => setShow(false) & setShowLetter(!showLetter)} disabled={available}>
            Đọc lại thư của cậu
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default HeadCard;
