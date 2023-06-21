import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Personaje = ({ description, name }) => {
  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://th.bing.com/th/id/R.b93858c0faeb8d0eb4af4a242085f115?rik=wzQsHP4B8Jkfqg&riu=http%3a%2f%2fcmapspublic2.ihmc.us%2frid%3d1M4JF9R4M-1VS3SG2-1PWF%2fAnimales.jpg&ehk=5zic3R5kqhNQOUKegjrznJwAISnQfhCGfK3e0HS6TVY%3d&risl=&pid=ImgRaw&r=0"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Seleccionar
        </Button>
        <Button size="small">Características...</Button>
        <Button size="small">Equipamiento...</Button>
      </CardActions>
    </Card>
  );
};

export default Personaje;
