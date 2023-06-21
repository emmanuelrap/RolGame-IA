import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Personaje from "./cards/personaje";

function SeleccionPersonaje(props) {
  var items = [
    {
      name: "Allistar de Vael ",
      description:
        "Allistar de Vael es un noble guerrero con un pasado trágico. Proveniente de una familia de renombre, su linaje fue injustamente acusado de traición y su honor manchado. Allistar juró limpiar el nombre de su familia y se convirtió en un valiente defensor de la justicia. A medida que viaja por el mundo, busca pruebas para exonerar a su familia y vengarse de aquellos que los difamaron. Su determinación y su espíritu indomable son conocidos en todos los rincones del reino.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lo8w12bCNwt9FcIHAVBgJAwp6TDBibLo_A&usqp=CAU",
    },
    {
      name: "Guerrero",
      description: "xcvxcvxcvxcvxcvxcvxcvxcv",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4-gHGyCA7b3SSYjL5Z3LXjXMkjBiZ0Ymbw&usqp=CAU",
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      duration="1000"
      navButtonsAlwaysVisible={false}
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
    >
      {items.map((item, i) => (
        <>
          <Personaje name={item.name} description={item.description} />
        </>
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.imagen}></img>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default SeleccionPersonaje;
