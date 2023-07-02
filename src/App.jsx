import { useEffect, useState } from "react";
import {
  Box,
  Chip,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Principal from "./components/Principal";

import SeleccionPersonaje from "./components/SeleccionPersonaje";
import SeleccionAventura from "./components/SeleccionAventura";
import Aviso from "./components/bars/Aviso";
import Instructor from "./components/particles/Instructor";

function App() {
  const [message, setMessage] = useState("");
  const [personajeSel, setPersonajeSel] = useState("");
  const [aventuraSel, setAventuraSel] = useState("");
  const [paso, setPaso] = useState(0);
  const [openAviso, setOpenAviso] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        borderRadius: 10,
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "88vh",
      }}
    >
      <Typography
        sx={{ ml: 5, mb: 2, textAlign: "center" }}
        variant="h2"
        style={{ fontFamily: "Pacifico", fontSize: 30, color: "#333" }}
      >
        <Chip
          label={
            <Typography
              variant="h5"
              component="span"
              style={{ fontFamily: "Pacifico", color: "#FFF" }}
            >
              ~ Juega con ChatGPT ~
            </Typography>
          }
        />
      </Typography>
      <Instructor paso={paso} aventuraSel={aventuraSel} />
      <Aviso open={openAviso} setOpen={setOpenAviso} />
      {paso == 0 && (
        <SeleccionPersonaje
          setPaso={setPaso}
          setPersonajeSel={setPersonajeSel}
          personajeSel={personajeSel}
        />
      )}
      {paso == 1 && (
        <SeleccionAventura
          setPaso={setPaso}
          aventuraSel={aventuraSel}
          setAventuraSel={setAventuraSel}
        />
      )}
      {paso == 2 && (
        <Principal
          personajeSel={personajeSel}
          aventuraSel={aventuraSel}
          setPersonajeSel={setPersonajeSel}
          setAventuraSel={setAventuraSel}
        />
      )}
    </Box>
  );
}
export default App;
