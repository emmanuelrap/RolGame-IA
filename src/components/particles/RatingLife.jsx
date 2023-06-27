import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function RatingLife({ personajeSel }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 0 },
      }}
    >
      {console.log("personaje sel", personajeSel)}
      <Typography component="legend" sx={{ ml: 5 }}>
        <strong> 60 / 60</strong>
      </Typography>
      <StyledRating
        max={6}
        name="customized-color"
        defaultValue={6}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      {/* <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} /> */}
    </Box>
  );
}
