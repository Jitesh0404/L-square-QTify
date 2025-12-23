import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  Box,
} from "@mui/material";
import { Colors } from "../Color";

const AlbumCard = ({ album }) => {
  return (
    <Card
    sx={{
      width: 160,
      minWidth: 160, // 🔑 required for sliding
      borderRadius: "10px",
      overflow: "hidden",
      cursor: "pointer",
    }}
    >
      {/* Image Section */}
      <Box sx={{ height: 140 }}>
        <CardMedia
          component="img"
          image={album.image}
          alt={album.title}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Bottom Section */}
      <CardContent sx={{ p: 1 }}>
        <Chip
          label={`${album.follows} Follows`}
          size="small"
          sx={{
            backgroundColor: Colors.primary_black,
            color: Colors.white,
            fontSize: "12px",
            mb: 1,
          }}
        />

        <Typography
          variant="body2"
          sx={{
            color: Colors.white,
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {album.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
