import { useEffect, useState } from "react";
import { Box, CircularProgress, TextField } from "@mui/material";

import Principal from "./components/Principal";
import Famosos from "./components/Famosos";
import SeleccionPersonaje from "./components/SeleccionPersonaje";
import SeleccionAventura from "./components/SeleccionAventura";

function App() {
  const [message, setMessage] = useState("");
  const [personajeSel, setPersonajeSel] = useState("");
  const [aventuraSel, setAventuraSel] = useState({});

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
      }}
    >
      <SeleccionPersonaje
        setPersonajeSel={setPersonajeSel}
        personajeSel={personajeSel}
      />
    </Box>
  );
}
export default App;
