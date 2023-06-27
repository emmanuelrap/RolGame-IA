import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Aviso({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          ¡Bienvenido! Por favor, selecciona una persona.
        </Alert>
      </Snackbar>
      {/* Aquí coloca el resto de tu contenido */}
    </div>
  );
}

export default Aviso;
