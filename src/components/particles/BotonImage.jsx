import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { aventura1, aventura2, aventura3, aventura4 } from "../../utils/data";
import { Avatar, Button, Container } from "@mui/material";

const images = [
  {
    url: aventura1.imagen,
    title: aventura1.nombre,
    width: "100%",
  },
  {
    url: aventura2.imagen,
    title: aventura2.nombre,
    width: "100%",
  },
  {
    url: aventura3.imagen,
    title: aventura3.nombre,
    width: "100%",
  },
  {
    url: aventura4.imagen,
    title: aventura4.nombre,
    width: "100%",
  },
];

const BotonImage = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 150,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 140,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.7,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 2,
  width: 50,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 22px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases({ setPaso, setAventuraSel, aventuraSel }) {
  const [selectedButton, setSelectedButton] = React.useState(null);
  const handleClick = (e) => {
    console.log("aventura:", e.target.innerText);
    setSelectedButton(e.target.innerText);
    setAventuraSel(e.target.innerText);
  };
  return (
    <Container maxWidth={800} sx={{ maxHeight: "600px", overflow: "auto" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", minWidth: 600 }}>
        {images.map((image) => (
          <BotonImage
            id={images.title}
            onClick={handleClick}
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                <strong>{image.title}</strong>
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </BotonImage>
        ))}
      </Box>
    </Container>
  );
}
