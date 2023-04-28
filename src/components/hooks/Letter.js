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
                sx={{pt: 3, pb: 3 }}
            >
                <Typography variant="body1" sx={{ pl: 1, pr: 1, fontStyle:"italic" }}>
                    Ngày {data.date.day} tháng {data.date.month} năm {data.date.year}
                    <br/>
                    {data.date.hour} giờ {data.date.minute}.
                    <br/>
                    <br/>
                    Gửi Khoa
                    <br/>
                    <br/>
                    Có lẽ là mấy năm học cấp ba đã kết thúc, tớ chẳng biết nói gì nữa. Chúng ta có kỉ niệm gì không nhỉ:
                    <br/>
                    {data.memories}
                    <br/>
                    <br/>
                    Chà, chúng thật đáng nhớ đúng không. Dù gì cũng sắp ra trường, tớ cũng muốn nhắn cậu rằng:
                    <br/>
                    {data.message}
                    <br/>
                    <br/>
                    Hãy vẫn đẹp trai nhé! cậu đẹp trai cỡ {data.handsome} điểm đấy.
                    <br/>
                    <br/>
                    Kí tên
                    <br/>
                    {data.name}.
                </Typography>
            </CardContent>
        </Card>
      </div>
    </Collapse>
  );
};

export default Letter;
