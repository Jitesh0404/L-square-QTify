import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { BASE_URL } from "../../Backend";
import AlbumCard from "../card/AlbumCard";


const CARD_WIDTH = 184; // card + gap
const SLIDE_COUNT = 4;  // cards per click

const Section = ({ title, endpoint, showToggle = false }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(`${BASE_URL}${endpoint}`).then((res) => {
      setAlbums(res.data);
    });
  }, []);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -CARD_WIDTH * SLIDE_COUNT,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: CARD_WIDTH * SLIDE_COUNT,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ px: 4, py: 3, position: "relative" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" color="white">
          {title}
        </Typography>

        {showToggle && (
          <Button
            onClick={() => setShowAll(!showAll)}
            sx={{
              color: "#34C94B",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {showAll ? "Collapse" : "Show all"}
          </Button>
        )}
      </Box>

      {/* Carousel */}
      {!showAll && (
        <>
          {/* Left Button */}
          <IconButton
            onClick={slideLeft}
            sx={{
              position: "absolute",
              left: 8,
              top: "55%",
              zIndex: 10,
              backgroundColor: "#121212",
              color: "white",
              "&:hover": { backgroundColor: "#1e1e1e" },
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* Right Button */}
          <IconButton
            onClick={slideRight}
            sx={{
              position: "absolute",
              right: 8,
              top: "55%",
              zIndex: 10,
              backgroundColor: "#121212",
              color: "white",
              "&:hover": { backgroundColor: "#1e1e1e" },
            }}
          >
            <ChevronRight />
          </IconButton>
        </>
      )}

      {/* Cards */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: "24px",
          overflowX: showAll ? "visible" : "hidden",
          flexWrap: showAll ? "wrap" : "nowrap",
          scrollBehavior: "smooth",
        }}
      >
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </Box>
    </Box>
  );
};

export default Section;
