import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const RightNav = () => (
  <IconButton
    className="swiper-button-next-custom"
    sx={{
      position: "absolute",
      right: -16,
      top: "40%",
      zIndex: 10,
      backgroundColor: "#121212",
      color: "white",
      "&:hover": { backgroundColor: "#1e1e1e" },
    }}
  >
    <ChevronRightIcon />
  </IconButton>
);

export default RightNav;
