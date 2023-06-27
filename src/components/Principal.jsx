import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import Zoom from "@mui/material/Zoom";

import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import {
  Tooltip,
  Box,
  CircularProgress,
  Switch,
  TextField,
  Typography,
  Slider,
  Stack,
} from "@mui/material";
import Mensaje from "./Mensaje";
import Pregunta from "./Pregunta";
const API_KEY = import.meta.env.VITE_API_KEY;
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/system";
import BarraEstadisticas from "./bars/BarraEstadisticas";
const StyledLabel = styled("span")({
  marginRight: "0.5rem",
});
import { aventura1, aventura2, aventura3, aventura4 } from "../utils/data";

function Principal({
  famosoSel,
  personajeSel,
  aventuraSel,
  setPersonajeSel,
  setAventuraSel,
}) {
  const [message, setMessage] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aventuraDescripcion, setAventuraDescripcion] = useState("");
  const [comentarioMaster, setComentarioMaster] = useState(
    "¿Estas Listo para comenzar?"
  );

  useEffect(() => {
    console.log("aventuraSel", aventuraSel);
    switch (aventuraSel) {
      case "El Resurgir de la Oscuridad":
        setAventuraDescripcion(aventura1.descripcion);

        break;
      case "Neon Nexus":
        setAventuraDescripcion(aventura2.descripcion);

        break;

      case "El sendero del Shogun":
        setAventuraDescripcion(aventura3.descripcion);

        break;
      case "La Travesía al Castillo Encantado":
        setAventuraDescripcion(aventura4.descripcion);

        break;
    }
  }, []);

  //Explain things like you're talking
  const systemMessage = {
    role: "system",
    content: `Eres el Game Master de un juego de rol, haz la partida divertida. Las respuestas que me digas que no sean tan extensas, la eventura es la siguiente:${aventuraDescripcion}. Toma en cuenta que mi personaje tiene los siguientes atributos: nombre:${personajeSel.name},descripcion:${personajeSel.description},vida:${personajeSel.vida},fuerza:${personajeSel.fuerza},inteligencia:${personajeSel.inteligencia},velocidad:${personajeSel.velocidad},habilidad llamada ${personajeSel.habilidades.nombre}  que su descripcion es ${personajeSel.habilidades.descripcion}, ahora ya que sabes esto empezemos, dime algo para responderte. `,
  };
  console.log("systemMessage", systemMessage);

  async function TurboOpenIA() {
    //Mandar mi pregunta al chat
    const nuevaPregunta = {
      key: uuidv4(),
      content: message,
      tipoMensaje: "pregunta",
      role: "user",
    };
    setMensajes([...mensajes, nuevaPregunta]);
    setLoading(true);

    let allMessages = [];
    allMessages.push(systemMessage);

    //Agrego todos los mensajes anteriores
    mensajes.map((mensaje) => {
      let obj = { role: mensaje.role, content: mensaje.content };
      allMessages.push(obj);
    });

    //Ingresamos la pregunta actual
    let obj = { role: nuevaPregunta.role, content: nuevaPregunta.content };
    allMessages.push(obj);

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: allMessages,
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        //console.log("Respuesta:", data);data.choices[0].message.content;
        const respuesta = {
          key: uuidv4(),
          content: data.choices[0].message.content,
          urlAvatar: personajeSel.imagen,
          tipoMensaje: "respuesta",
          role: "system",
        };
        let arreglo = mensajes;
        arreglo.push(nuevaPregunta);
        arreglo.push(respuesta);
        setMensajes(arreglo);
        setMessage("");
        setComentarioMaster(respuesta.content);
        setLoading(false);
      });
  }

  // async function OpenIA() {
  //   //Mandar mi pregunta al chat
  //   const nuevaPregunta = {
  //     key: uuidv4(),
  //     content: message,
  //     tipoMensaje: "pregunta",
  //     role: "user",
  //   };
  //   setMensajes([...mensajes, nuevaPregunta]);
  //   setLoading(true);

  //   const APIBody = {
  //     model: tipoModelo,
  //     prompt:
  //       "Quiero que me respondas a mi pregunta o comentario como si tú fueras" +
  //       // famosoSel.nombre +
  //       ":" +
  //       message,
  //     temperature: nivelRespuesta,
  //     max_tokens: 300,
  //     top_p: nivelRespuesta,
  //     //+Variabilidad -Certeza
  //     frequency_penalty: 0.9,
  //     //+Originalidad -Enfoque
  //     presence_penalty: 0.5,
  //   };

  //   await fetch("https://api.openai.com/v1/completions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + API_KEY,
  //     },
  //     body: JSON.stringify(APIBody),
  //   })
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const respuesta = {
  //         key: uuidv4(),
  //         content: data.choices[0].text.trim(),
  //         urlAvatar: famosoSel.urlAvatar,
  //         tipoMensaje: "respuesta",
  //         role: "system",
  //       };
  //       let arreglo = mensajes;
  //       arreglo.push(nuevaPregunta);
  //       arreglo.push(respuesta);
  //       setMensajes(arreglo);
  //       setLoading(false);
  //     });
  // }

  //**************  H A N D L E S **********************//

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      OpenIA();
    }
  };

  const handleBorrar = () => {
    setMessage("");
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <BarraEstadisticas
        personajeSel={personajeSel}
        aventuraSel={aventuraSel}
        setPersonajeSel={setPersonajeSel}
        setAventuraSel={setAventuraSel}
      />
      <Box
        sx={{
          backgroundColor: "#000",
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          padding: 2,
          width: "95%",
          height: "80%",
          border: 2, // Grosor del borde en píxeles
          BorderColor: "white", // Color del borde
          borderRadius: 5,
          mr: 0,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
          }}
        >
          <Stack sx={{ alignItems: "center", ml: 5 }}>
            <h2 style={{ color: "white" }}>{comentarioMaster}</h2>
          </Stack>
        </Box>

        {/* {mensajes.map((content) => {
          if (content.tipoMensaje == "pregunta")
            return <Pregunta content={content} />;
          else return <Mensaje content={content} />;
        })} */}
      </Box>
      <TextField
        onKeyDown={handleKeyDown}
        disabled={loading}
        sx={{ width: "90%", mx: 0, mt: 1, ml: "5%" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={"Escribe qui tu respuesta..."}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start" onClick={handleBorrar}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={TurboOpenIA}
                disabled={loading || message == ""}
                sx={{ ml: 1, mr: 0.5 }}
              >
                {loading ? (
                  <CircularProgress size={25} />
                ) : (
                  <SendIcon style={{ fontSize: 30 }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Principal;
