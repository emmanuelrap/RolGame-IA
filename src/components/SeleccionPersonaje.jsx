import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardPersonaje from "./cards/CardPersonaje";

function SeleccionPersonaje(props) {
  var heroes = [
    {
      name: "Allistar de Vael ",
      description:
        "Allistar de Vael es un noble guerrero con un pasado trágico. Proveniente de una familia de renombre, su linaje fue injustamente acusado de traición y su honor manchado. Allistar juró limpiar el nombre de su familia y se convirtió en un valiente defensor de la justicia. A medida que viaja por el mundo, busca pruebas para exonerar a su familia y vengarse de aquellos que los difamaron. Su determinación y su espíritu indomable son conocidos en todos los rincones del reino.",
      imagen: "/images/guerrero.jpg",
      vida: "80",
      magia: "3",
      energia: "4",
      fuerza: "9",
      inteligencia: "3",
      resistencia: "8",
      armadura: "7",
      velocidad: "6",
      habilidades: [
        {
          nombre: "Corte Implacable",
          descripcion:
            "Allistar puede realizar un araque devastador con su espada, inflije un gran daño a un solo objetivo",
          tipo: "fisico",
          daño: "120",
        },
        {
          nombre: "Escudo Pragmático",
          descripcion:
            "Allistar Utiliza su escudo, que lo protege de los ataques , absorviendo daño físico y aumendo su defensa",
          tipo: "defensa",
          mitigacionFisica: "0.5",
          mitigacionMagica: "0.2",
        },
      ],
      items: [
        {
          nombre: "Espada Vahelica de la Justicia",
          descripcion:
            "Una espada ancestral que ha sido transmitida por generaciones en la familia de Allistar, fue enbullida en energía mágica, lo cual hace que tenga un resplandor particular, cuenta la leyenda que los ancestros de Allistan degollaron 1000 personas con esta espada",
          daño: "8",
          tipo: "fisico",
        },
      ],
    },
    {
      name: "Seraphine Valerius",
      description:
        "Seraphine Valerius es una poderosa hechicera nacida en las heladas tierras del norte. Desde temprana edad, descubrió su afinidad innata por la magia y fue instruida por los maestros de la antigua orden de los Frostweavers. Su linaje está vinculado a una ancestral línea de hechiceros, conocidos por su control sobre el hielo y las bajas temperaturas. Ana es una defensora de la armonía natural y utiliza su magia para proteger a los inocentes y preservar el equilibrio en el mundo",
      imagen: "/images/hechizera.PNG",
      vida: "60",
      energia: "9",
      magia: "9",
      fuerza: "3",
      inteligencia: "9",
      resistencia: "4",
      armadura: "3",
      velocidad: "6",
      habilidades: [
        {
          nombre: "Congelación Profunda",
          descripcion:
            "Seraphine puede generar una ráfaga de frío intenso que congela a sus enemigos, infligiendo daño mágico y ralentizándolos en el proceso.",
          tipo: "magico",
          daño: "130",
        },
        {
          nombre: "Escudo Pragmático",
          descripcion:
            "Seraphine Utiliza su escudo, que lo protege de los ataques , absorviendo daño físico y aumendo su defensa",
          tipo: "defensa",
          mitigacionFisica: "0.5",
          mitigacionMagica: "0.2",
        },
      ],
      items: [
        {
          nombre: "Bastón Glacial Tracendental",
          descripcion:
            "Un bastón tallado en cristal de hielo puro, imbuido con la esencia de los antiguos Frostweavers. El bastón aumenta el poder y el alcance de los hechizos de Seraphina, permitiéndole canalizar su magia con mayor eficacia y control.",
          daño: "8",
          tipo: "fisico",
        },
      ],
    },
    {
      name: "Lucius  Shadowblade",
      description:
        " Lucius es un misterioso y sigiloso asesino de élite que opera en las sombras. Proveniente de una antigua hermandad de asesinos, Lucius fue entrenado desde joven en las artes del sigilo, el combate cuerpo a cuerpo y el manejo de armas mortales. Se le conoce por su habilidad para desaparecer sin dejar rastro y llevar a cabo sus encargos con precisión letal. Valerius sigue un estricto código de honor y solo acepta trabajos que considera justos y necesarios en la lucha contra la corrupción.",
      imagen: "/images/asesino.jpg",
      vida: "6",
      energia: "5",
      fuerza: "7",
      inteligencia: "8",
      magia: "4",
      resistencia: "8",
      armadura: "5",
      velocidad: "9",
      habilidades: [
        {
          nombre: "Tajo Sombrío",
          descripcion:
            "Lucius desaparece en las sombras y se vuelve inmune por un tiempo, se desplaza instantáneamente detrás de su enemigo y asesta un golpe sorpresa devastador. Esta habilidad inflige un daño significativo puede agregar un estado de hemorragia al oponente",
          tipo: "físico",
          daño: "100",
        },
        {
          nombre: "Manto de las Sombras",
          descripcion:
            "Lucius se envuelve en una oscuridad mágica que le permite volverse prácticamente invisible durante un breve periodo de tiempo, lo que dificulta que los enemigos lo detecten y lo ataquen. Si recibe daño bloqueará el ataque completamente pero se terminará el sigilo",
          tipo: "defensa",
          mitigacionFisica: "0",
          mitigacionMagica: "0",
        },
      ],
      items: [
        {
          nombre: "Daga Umbría",
          descripcion:
            "Una daga afilada y curvada, forjada con una aleación de metales oscuros y mágicamente imbuida con las energías de la oscuridad. La Daga Umbría incrementa el daño infligido por Lucius y tiene la capacidad de drenar la vitalidad de sus enemigos, curándolo a él mismo en el proceso",
          daño: "7",
          tipo: "fisico",
        },
      ],
    },
    // {
    //   name: "",
    //   description: "",
    //   imagen: "",
    //   vida: "",
    //   energia: "",
    //   fuerza: "",
    //   destreza: "",
    //   inteligencia: "",
    //   resistencia: "",
    //   armadura: "",
    //   velocidad: "",
    // habilidades:[],
    // items:[],
    // },
  ];

  return (
    <Box
      width="100%"
      height="100%"
      border="1px solid red"
      sx={{
        maxWidth: "70%",
        "@media (max-width: 1000px)": {
          maxWidth: "100%",
        },
      }}
    >
      <Carousel
        autoPlay={false}
        animation="slide"
        duration="1000"
        navButtonsAlwaysVisible={true}
        next={() => {}}
        prev={() => {}}
      >
        {heroes.map((heroe) => (
          <CardPersonaje heroe={heroe} />
        ))}
      </Carousel>
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
