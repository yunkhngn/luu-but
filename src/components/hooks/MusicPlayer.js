import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Collapse,
} from "@mui/material";

const MusicPlayer = () => {
  return (
    <div className="music-container">
        <Card
          variant="outlined"
          sx={{
            p: 1,
            pb:0,
            mt:3,
          }}
        >
          <CardContent>
            This is a music plpayer
          </CardContent>
        </Card>
    </div>
  )
};

export default MusicPlayer