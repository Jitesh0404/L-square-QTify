import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import { BASE_URL } from "../../Backend";
import AlbumCard from "../card/AlbumCard";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}${endpoint}`).then((res) => {
      setAlbums(res.data);
    });
  }, []);

  return (
    <Box sx={{ px: 4, py: 3 }}>
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

        <Button
          onClick={() => setCollapsed(!collapsed)}
          sx={{ color: "#34C94B", textTransform: "none", fontWeight: 600 }}
        >
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </Box>

      {/* Conditional Rendering */}
      {collapsed ? (
        <Carousel
          items={albums}
          renderItem={(album) => <AlbumCard album={album} />}
        />
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Section;
