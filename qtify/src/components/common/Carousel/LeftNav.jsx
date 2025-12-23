import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const LeftNav = ({ className }) => (
  <IconButton
    className={className}
    sx={{
      position: "absolute",
      left: 0,
      top: "45%",
      zIndex: 10,
      backgroundColor: "#34C94B",
      color: "white",
      width: 36,
      height: 36,
      "&:hover": { backgroundColor: "#2da843" },
    }}
  >
    <ChevronLeftIcon />
  </IconButton>
);

export default LeftNav;
