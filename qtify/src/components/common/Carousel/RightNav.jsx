import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const RightNav = ({ className }) => (
  <IconButton
    className={className}
    sx={{
      position: "absolute",
      right: 0,
      top: "45%",
      zIndex: 10,
      backgroundColor: "#34C94B",
      color: "white",
      width: 36,
      height: 36,
      "&:hover": { backgroundColor: "#2da843" },
    }}
  >
    <ChevronRightIcon />
  </IconButton>
);

export default RightNav;
