import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import AlbumCard from "../card/AlbumCard";
import { BASE_URL } from "../../Backend";

const Section = ({ title, endpoint }) => {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${endpoint}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
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
          sx={{
            color: "#34C94B",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </Box>

      {/* Grid */}
      {!collapsed && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {data.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Section;
