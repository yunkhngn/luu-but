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

const HeadCard = () => {
  return (
    <div className="headCard-container">
      <Card variant="outlined">
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
          titleTypographyProps={{ variant: "h4"}}
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
            Như cả nhà biết thì năm nay mình cũng gần 18 tủi, sắp là ngừi trưởng
            thành nên muốn lưu giữ những gì đẹp nhất của tuổi học trò 💛 nếu cả
            nhà đã bấm vào đây ròi thì đừng ngại gửi gắm một vài sự đáng iu để
            sau này Ngọc buồn lôi ra đọc cũng ngồi cười hihi nhé
          </Typography>
        </CardContent>
        <CardActions sx={{ pl: 2, pr: 2, pb: 2, pt: 2 }}>
          <Button size="small" color="primary">
            Bắt đầu thui
          </Button>
          <Button size="small" color="primary">
            Đọc lại thư của cậu
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default HeadCard;
