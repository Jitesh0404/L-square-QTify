import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import { BASE_URL } from "../../Backend";
import AlbumCard from "../card/AlbumCard";

const Section = ({ title, endpoint, isSongsSection = false }) => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  // 🔑 ALBUM SHOW ALL / COLLAPSE
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}${endpoint}`).then((res) => {
      setData(res.data);
    });

    if (isSongsSection) {
      axios.get(`${BASE_URL}/genres`).then((res) => {
        setGenres([{ key: "all", label: "All" }, ...res.data.data]);
      });
    }
  }, []);

  // SONG FILTER
  const filteredSongs =
    selectedGenre === "all"
      ? data
      : data.filter((song) => song.genre.key === selectedGenre);

  const renderData = isSongsSection ? filteredSongs : data;

  return (
    <Box sx={{ px: 4, py: 3 }}>
      {/* HEADER */}
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

        {/* SHOW ALL / COLLAPSE (ALBUMS ONLY) */}
        {!isSongsSection && (
          <Typography
            onClick={() => setShowAll(!showAll)}
            sx={{
              color: "#34C94B",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {showAll ? "Collapse" : "Show all"}
          </Typography>
        )}
      </Box>

      {/* TABS (SONGS ONLY) */}
      {isSongsSection && (
        <Tabs
          value={selectedGenre}
          onChange={(_, value) => setSelectedGenre(value)}
          sx={{
            mb: 3,
            "& .MuiTabs-indicator": {
              backgroundColor: "#34C94B",
            },
          }}
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
              sx={{
                color: "white",
                textTransform: "none",
                "&.Mui-selected": {
                  color: "#34C94B",
                },
              }}
            />
          ))}
        </Tabs>
      )}

      {/* CONTENT */}
      {!isSongsSection && showAll ? (
        // ✅ GRID (ALBUMS ONLY)
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {renderData.map((item) => (
            <AlbumCard
              key={item.id}
              album={item}
              type="album"
            />
          ))}
        </Box>
      ) : (
        // ✅ CAROUSEL (ALL SECTIONS)
        <Carousel
          carouselId={`${title.replace(" ", "-")}-carousel`}
          items={renderData}
          renderItem={(item) => (
            <AlbumCard
            key={item.id}
              album={item}
              type={isSongsSection ? "song" : "album"}
            />
          )}
        />
      )}
    </Box>
  );
};

export default Section;
