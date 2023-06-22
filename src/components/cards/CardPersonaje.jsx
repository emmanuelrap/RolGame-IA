import * as React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ImageIcon from "@mui/icons-material/Image";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";

const CardPersonaje = ({ heroe }) => {
  return (
    <Box border="1px solid blue">
      <Card>
        <CardMedia
          component="img"
          alt={heroe.name}
          height="600"
          width="400"
          image={heroe.imagen}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {heroe.name}
          </Typography>
          <Carousel
            navButtonsWrapperProps={false}
            navButtonsProps={false}
            autoPlay={false}
            animation="slide"
            duration="2000"
            navButtonsAlwaysInvisible={true}
            // navButtonsAlwaysVisible={true}
            next={() => {}}
            prev={() => {}}
          >
            <Box sx={{ width: "90%", m: "auto", height: "parent" }}>
              <Typography variant="body1" color="text.secondary">
                {heroe.description}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "parent",
              }}
            >
              {/* Se repite por cada atributo */}
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
                <Typography>Energia</Typography>
                <Avatar>{heroe.energia}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Fuerza</Typography>
                <Avatar>{heroe.fuerza}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Intelig</Typography>
                <Avatar>{heroe.inteligencia}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Magia</Typography>
                <Avatar>{heroe.magia}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Resist</Typography>
                <Avatar>{heroe.resistencia}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Armadura</Typography>
                <Avatar>{heroe.armadura}</Avatar>
              </Stack>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center", mr: 3 }}
              >
                <Typography>Velocidad</Typography>
                <Avatar>{heroe.velocidad}</Avatar>
              </Stack>
            </Box>
            <Box>
              {/* EQUIPAMIENTO */}
              <List
                sx={{ width: "100%", bgcolor: "background.paper", m: "auto" }}
              >
                {heroe.items.map((item) => {
                  return (
                    <ListItem sx={{ width: "90%", m: "auto" }}>
                      <ListItemAvatar>
                        <Avatar>P</Avatar>
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
          <Button variant="contained" size="small" color="primary">
            Seleccionar
          </Button>
          <Button size="small">Historia</Button>
          <Button size="small">Características</Button>

          <Button size="small">Equipamiento</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardPersonaje;
