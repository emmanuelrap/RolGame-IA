import React from "react";

import ButtonBases from "./particles/BotonImage";
import { aventura1, aventura2, aventura3, aventura4 } from "../utils/data";
import { Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SeleccionAventura = ({ aventuraSel, setAventuraSel, setPaso }) => {
  return (
    <Box>
      <ButtonBases
        setPaso={setPaso}
        aventuraSel={aventuraSel}
        setAventuraSel={setAventuraSel}
      />
      <Button
        sx={{ m: 3 }}
        disabled={aventuraSel == ""}
        onClick={() => setPaso(2)}
      >
        <strong>CONTINUAR</strong> <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default SeleccionAventura;
