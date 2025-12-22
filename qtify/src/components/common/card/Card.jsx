import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Chip,
  Box,
} from "@mui/material";
import heroHeadPhones from "../../../assets/hero_headphones.png";
import { Colors } from "../Color";

const AlbumCard = () => {
  return (
    <Card
      sx={{
        width: 160,
        height: 205,
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image Section */}
      <Box sx={{ height: 150 }}>
        <CardMedia
          component="img"
          image={heroHeadPhones}
          alt="Album cover"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Bottom Section */}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Chip
          label="100 Followers"
          size="medium"
          sx={{
            backgroundColor: Colors.primary_black,
            color: Colors.white,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
