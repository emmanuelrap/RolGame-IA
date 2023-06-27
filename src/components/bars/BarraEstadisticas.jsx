import { Avatar, Stack } from "@mui/material";
import React from "react";
import RatingLife from "../particles/RatingLife";

const BarraEstadisticas = ({
  personajeSel,
  aventuraSel,
  setPersonajeSel,
  setAventuraSel,
}) => {
  return (
    <Stack
      direction={"row"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {console.log("11", personajeSel)}
      <Avatar
        src={personajeSel.imagenAvatar}
        sx={{ width: 80, height: 80 }}
      ></Avatar>
      <RatingLife personajeSel={personajeSel}></RatingLife>
    </Stack>
  );
};

export default BarraEstadisticas;
