import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const LeftNav = () => (
  <IconButton
    className="swiper-button-prev-custom"
    sx={{
      position: "absolute",
      left: -16,
      top: "40%",
      zIndex: 10,
      backgroundColor: "#121212",
      color: "white",
      "&:hover": { backgroundColor: "#1e1e1e" },
    }}
  >
    <ChevronLeftIcon />
  </IconButton>
);

export default LeftNav;
