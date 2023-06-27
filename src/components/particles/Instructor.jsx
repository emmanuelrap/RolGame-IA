import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Chip, Typography } from "@mui/material";

function Instructor({ paso, aventuraSel }) {
  const [anchorEl, setAnchorEl] = useState(true);
  const [ocultar, setOcultar] = useState(false);

  useEffect(() => {
    setAnchorEl(true);
  }, [paso, aventuraSel]);

  const handleOpenPopover = (event) => {
    setAnchorEl(!anchorEl);
  };

  const handleClosePopover = () => {
    setAnchorEl(!anchorEl);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <IconButton
        onClick={handleOpenPopover}
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        {!ocultar && (
          <Avatar
            alt="Avatar"
            src="/images/instructor.PNG"
            sx={{ width: 80, height: 80, mt: 1.8 }}
          />
        )}

        {/* Reemplaza con la ruta correcta de la imagen del avatar */}
      </IconButton>
      <Popover
        disableRestoreFocus
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {console.log(paso)}
        {paso == 0 && (
          <div style={{ padding: 10, width: 400 }}>
            <Typography sx={{ ml: 8 }}>
              <strong>
                <Chip label="¡BIENVENIDO AVENTURERO!" />{" "}
              </strong>
            </Typography>{" "}
            <Typography sx={{ mr: 10 }}>
              Soy Lilia, te guiaré en este extenso mundo. Para comenzar{" "}
              <strong>selecciona un Héroe</strong>
            </Typography>
          </div>
        )}
        {console.log("aventuraSel", aventuraSel)}
        {paso == 1 && aventuraSel == "" && (
          <div style={{ padding: 10, width: 400 }}>
            <Typography sx={{ ml: 8 }}>
              <strong>
                <Chip label="¡ME ENCANTA ESE PERSONAJE!" />{" "}
              </strong>
            </Typography>{" "}
            <Typography sx={{ mr: 10 }}>
              Ahora debemos escoger en que mundo será la historia.{" "}
              <strong>selecciona una aventura</strong>
            </Typography>
          </div>
        )}

        {paso == 1 && aventuraSel == "El Resurgir de la Oscuridad" && (
          <div style={{ padding: 10, width: 600 }}>
            <Typography sx={{ ml: 18 }}>
              <strong>
                <Chip label="EL RESURGIR DE LA OBSCURIDAD" />{" "}
              </strong>
            </Typography>{" "}
            <Typography sx={{ mr: 7 }}>
              En un reino asolado por la opresión, el aventurero se embarca en
              una peligrosa misión para detener a un malvado hechicero y salvar
              al mundo de la destrucción. En su viaje, enfrentarán desafiantes
              pruebas, resolverán enigmas y tomarán decisiones que determinarán
              el destino del reino.
              <strong>
                {" "}
                Demuestra tu valía y tu fortaleza en esta aventura.
              </strong>
            </Typography>
          </div>
        )}

        {paso == 1 && aventuraSel == "Neon Nexus" && (
          <div style={{ padding: 10, width: 600 }}>
            <Typography sx={{ ml: 28 }}>
              <strong>
                <Chip label="NEON NEXUS" />
              </strong>
            </Typography>{" "}
            <Typography sx={{ mr: 7 }}>
              En el vibrante mundo ciberpunk de Neon Nexus, el aventurero se
              enfrenta al caos de una metrópolis dominada por corporaciones y
              tecnología avanzada. Infíltrate sigilosamente o entra dispándo a
              todo lo que se mueva en una megacorporación corrupta, debe robar
              información confidencial y descubrir oscuros secretos mientras
              luchan por la libertad de la ciudad.{" "}
              <strong>
                ¿Tendrás lo necesario para sovrevivir a esta metrópilis?
              </strong>
            </Typography>
          </div>
        )}

        {paso == 1 && aventuraSel == "El sendero del Shogun" && (
          <div style={{ padding: 10, width: 600 }}>
            <Typography sx={{ ml: 28 }}>
              <strong>
                <Chip label="EL SNEDERO DEL SHOGUN" />
              </strong>
            </Typography>{" "}
            <Typography sx={{ mr: 7 }}>
              En el Japón feudal, el aventurero es reclutado para proteger a la
              princesa heredera en medio de rivalidades políticas y peligros. A
              través de combates, viajes peligrosos y descubrimientos de
              antiguos secretos, deberán tomar decisiones que afectarán el
              destino del Japón feudal y su honor como samuráis. <br />
              <strong>
                ¡Embárcate en esta aventura y conviértete en una leyenda
                samurái!
              </strong>
            </Typography>
          </div>
        )}

        {paso == 1 && aventuraSel == "La Travesía al Castillo Encantado" && (
          <div style={{ padding: 10, width: 600 }}>
            <Typography sx={{ ml: 18 }}>
              <strong>
                <Chip label="LA TRAVESÍA AL CASTILLO ENCANTADO" />
              </strong>
            </Typography>{" "}
            <Typography sx={{ mr: 7 }}>
              El aventurero es convocado a un misterioso castillo lleno de
              encantamientos y tesoros ocultos. A través de peligrosos desafíos,
              resolverá enigmas y enfrentarán a guardianes encantados para
              descubrir los secretos que guarda.
              <br />
              <strong>
                {" "}
                Sumérgete en La Travesía al Castillo y desvela sus misterios!
              </strong>
            </Typography>
          </div>
        )}

        {paso == 2 && aventuraSel == "La Travesía al Castillo Encantado" && (
          <div style={{ padding: 10, width: 600 }}>
            <Typography sx={{ ml: 18 }}>
              <strong>
                <Chip label="LA TRAVESÍA AL CASTILLO ENCANTADO" />
              </strong>
            </Typography>{" "}
            <Typography sx={{ mr: 7 }}>
              El aventurero es convocado a un misterioso castillo lleno de
              encantamientos y tesoros ocultos. A través de peligrosos desafíos,
              resolverá enigmas y enfrentarán a guardianes encantados para
              descubrir los secretos que guarda.
              <br />
              <strong>
                {" "}
                Sumérgete en La Travesía al Castillo y desvela sus misterios!
              </strong>
            </Typography>
          </div>
        )}

        {paso == 2 && (
          <div style={{ padding: 10, width: 400 }}>
            <Typography sx={{ ml: 14 }}>
              <strong>
                <Chip label="¡LO HICISTE BIEN!" />{" "}
              </strong>
            </Typography>{" "}
            <Typography sx={{ mr: 10 }}>
              Ahora es donde todo comienza, en la parte de arriba tienes tu
              barra de estadisticas.{" "}
              <strong>
                Para jugar solo debes responder a las preguntas, ¡Buena suerte
                Aventurero!
              </strong>
            </Typography>
          </div>
        )}
      </Popover>
    </div>
  );
}

export default Instructor;
