import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardPersonaje from "./cards/CardPersonaje";
import ReproductorDeTexto from "../utils/ReproductorDeTexto";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { heroes } from "../utils/data";

function SeleccionPersonaje({ setPersonajeSel, personajeSel, setPaso }) {
  const [leer, setLeer] = React.useState(false);
  const [textoLeer, setTextoLeer] = React.useState("");
  const [numPersonaje, setNumPersonaje] = React.useState(1);

  return (
    <Box
      width="80%"
      sx={{
        border: "2px solid #e0e0e0",
        borderRadius: "8px",
        padding: "0rem",
        pt: "0.5rem",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Agrega una suave sombra
        background: "linear-gradient(to right, #f5f5f5, #ffffff)", // Agrega un degradado de fondo
        m: "auto",
        maxWidth: 700,
        "@media (max-width: 1000px)": {
          maxWidth: "100%",
        },
      }}
    >
      <ReproductorDeTexto leer={leer} texto={textoLeer} voz="es-MX" />
      <Carousel
        navButtonsWrapperProps={{
          style: {
            position: "absolute",
            top: "-13rem", // Ajusta la posición vertical según tus necesidades
          },
        }}
        indicators={false}
        autoPlay={false}
        index={Number(numPersonaje)}
        animation="slide"
        duration="1500"
        navButtonsAlwaysVisible={true}
        next={() => {
          setLeer(!leer);
          setTextoLeer("");
        }}
        prev={() => {
          setLeer(!leer);
          setTextoLeer("");
        }}
      >
        {heroes.map((heroe) => (
          <CardPersonaje
            setTextoLeer={setTextoLeer}
            setPersonajeSel={setPersonajeSel}
            personajeSel={personajeSel}
            person
            heroe={heroe}
            leer={leer}
            setLeer={setLeer}
          />
        ))}
      </Carousel>
      <Button
        sx={{ m: 0 }}
        disabled={personajeSel == ""}
        onClick={() => setPaso(1)}
      >
        <strong>CONTINUAR</strong> <ArrowForwardIcon />
      </Button>
    </Box>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.imagen}></img>
    </Paper>
  );
}

export default SeleccionPersonaje;
