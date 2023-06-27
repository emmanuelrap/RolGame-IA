import * as React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as ScrollLink } from "react-scroll";

import {
  Accordion,
  AccordionSummary,
  Avatar,
  Box,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ReproductorDeTexto from "../../utils/ReproductorDeTexto";

const CardPersonaje = ({
  heroe,
  leer,
  setLeer,
  setPersonajeSel,
  personajeSel,
  setTextoLeer,
}) => {
  const [seccion, setSeccion] = React.useState(0);
  const [isSelected, setIsSelected] = React.useState(false);

  React.useEffect(() => {
    // console.log(personajeSel);
    if (personajeSel.name == heroe.name) setIsSelected(true);
    else setIsSelected(false);
  }, [personajeSel]);

  const handleChangeButtonGrup = (newSeccion) => {
    // console.log(newSeccion.target.value);
    setSeccion(newSeccion.target.value);
  };

  const handleLeer = () => {
    setLeer(!leer);
    setTextoLeer(heroe.description);
  };

  return (
    <Box
      sx={{
        width: "95%",
        m: "auto",
      }}
    >
      {/* <ReproductorDeTexto leer={leer} texto={heroe.description} voz="es-MX" /> */}
      <Card>
        <Box>
          {isSelected ? (
            <CardMedia
              component="img"
              alt={heroe.name}
              image={heroe.imagen}
              sx={{
                width: "94%",
                m: "auto",
                height: 380,
                border: "8px solid blue", //Estilo Contenedor
                borderRadius: "20px", //Estilo Contenedor
                padding: "0.5rem", //Estilo Contenedor
              }}
            />
          ) : (
            <CardMedia
              component="img"
              alt={heroe.name}
              image={heroe.imagen}
              sx={{
                width: "95%",
                m: "auto",
                height: 400,

                borderRadius: "20px", //Estilo Contenedor
                padding: "0.5rem", //Estilo Contenedor
              }}
            />
          )}
        </Box>
        <CardContent>
          <Box
            // onClick={handleDesplazamiento}
            component={ScrollLink}
            to={"finDes"} // Especifica el destino de desplazamiento
            spy={true}
            smooth={true}
            duration={2000}
          >
            <Stack direction="row">
              <Typography gutterBottom variant="h4" component="div">
                {heroe.name}
              </Typography>
              <IconButton sx={{ mb: 2 }} onClick={handleLeer}>
                {leer ? <VolumeUpIcon /> : <VolumeOffIcon />}
              </IconButton>
            </Stack>
          </Box>
          <Carousel
            indicators={false}
            index={Number(seccion)}
            navButtonsWrapperProps={false}
            navButtonsProps={false}
            autoPlay={false}
            animation="fade"
            duration="600"
            navButtonsAlwaysInvisible={true}
            // navButtonsAlwaysVisible={true}
            next={() => {}}
            prev={() => {}}
          >
            {/* HISTORIA */}
            <Box
              sx={{
                overflow: "auto",
                maxHeight: 300,
                scrollbarWidth: "thin", // Cambia "thin" a "auto" o "none" si prefieres otro estilo de barra de desplazamiento
                scrollbarColor: "lightgray darkgray", // Cambia "lightgray" y "darkgray" a los colores que desees para la barra de desplazamiento
                "&::-webkit-scrollbar": {
                  width: "6px", // Cambia el ancho de la barra de desplazamiento
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "darkgray", // Cambia el color del pulgar de la barra de desplazamiento
                  borderRadius: "5px", // Cambia el radio de borde del pulgar de la barra de desplazamiento
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "gray", // Cambia el color del pulgar de la barra de desplazamiento en estado hover
                },
                "&::-webkit-scrollbar-track": {
                  background: "lightgray", // Cambia el color de fondo de la barra de desplazamiento
                  borderRadius: "5px", // Cambia el radio de borde de la barra de desplazamiento
                },
              }}
            >
              <div id="finDes">
                {/* Contenido del componente de destino */}
                <Stack direction="row">
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ m: 2 }}
                  >
                    {heroe.description.split("/n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </Stack>
              </div>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: 300,
              }}
            >
              {/* CARACTERISTICAS*/}
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Vida</Typography>
                <Avatar>{heroe.vida}</Avatar>
              </Stack>
              {/* Se repite por cada atributo */}
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Ene</Typography>
                <Avatar>{heroe.energia}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Fue</Typography>
                <Avatar>{heroe.fuerza}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Int</Typography>
                <Avatar>{heroe.inteligencia}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Mag</Typography>
                <Avatar>{heroe.magia}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Res</Typography>
                <Avatar>{heroe.resistencia}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Arm</Typography>
                <Avatar>{heroe.armadura}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Vel</Typography>
                <Avatar>{heroe.velocidad}</Avatar>
              </Stack>
            </Box>
            <Box
              sx={{
                overflow: "auto",
                maxHeight: 300,
                scrollbarWidth: "thin", // Cambia "thin" a "auto" o "none" si prefieres otro estilo de barra de desplazamiento
                scrollbarColor: "lightgray darkgray", // Cambia "lightgray" y "darkgray" a los colores que desees para la barra de desplazamiento
                "&::-webkit-scrollbar": {
                  width: "6px", // Cambia el ancho de la barra de desplazamiento
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "darkgray", // Cambia el color del pulgar de la barra de desplazamiento
                  borderRadius: "5px", // Cambia el radio de borde del pulgar de la barra de desplazamiento
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "gray", // Cambia el color del pulgar de la barra de desplazamiento en estado hover
                },
                "&::-webkit-scrollbar-track": {
                  background: "lightgray", // Cambia el color de fondo de la barra de desplazamiento
                  borderRadius: "5px", // Cambia el radio de borde de la barra de desplazamiento
                },
              }}
            >
              {/* EQUIPAMIENTO */}
              <List
                sx={{
                  height: 300,
                  bgcolor: "background.paper",
                  m: "auto",
                }}
              >
                {heroe.items.map((item) => {
                  return (
                    <ListItem sx={{ width: "90%", m: "auto" }}>
                      <ListItemAvatar>
                        <Badge badgeContent={item.cantidad} color="primary">
                          <Avatar src={item.imagen}></Avatar>
                        </Badge>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.nombre}
                        secondary={item.descripcion}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Carousel>
        </CardContent>
        <CardActions>
          <Box sx={{ m: "auto" }}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{ mr: 1, py: 1.5 }}
              onClick={() => {
                setPersonajeSel(heroe);
                setIsSelected(true);
              }}
            >
              Seleccionar
            </Button>
            <ToggleButtonGroup
              color="primary"
              value={Number(seccion)}
              exclusive
              onChange={handleChangeButtonGrup}
              aria-label="Platform"
            >
              <ToggleButton value={0}>HISTORIA</ToggleButton>
              <ToggleButton value={1}>CARACTERÍSTICAS</ToggleButton>
              <ToggleButton value={2}>EQUIPO</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardPersonaje;
