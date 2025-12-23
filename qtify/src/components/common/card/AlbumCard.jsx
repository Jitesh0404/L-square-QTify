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

const AlbumCard = ({ album, type = "album" }) => {
  console.log("album --- ",album);
  
  const chipLabel =
    type === "song"
      ? `${album.likes} Likes`
      : `${album.follows} Follows`;

  return (
    <Card
      sx={{
        width: 160,
        minWidth: 160,
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Box sx={{ height: 140 }}>
        <CardMedia
          component="img"
          image={album.image}
          alt={album.title}
          sx={{ height: "100%", objectFit: "cover" }}
        />
      </Box>

      <CardContent sx={{ height:60,p:1 }}>
        <Chip
          label={chipLabel}
          size="small"
          sx={{
            backgroundColor: "#121212",
            color: "white",
            mb: 1,
          }}
        />

        <Typography
          variant="body2"
          sx={{
            color: "white",
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
