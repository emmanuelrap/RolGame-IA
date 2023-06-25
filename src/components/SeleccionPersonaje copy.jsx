import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardPersonaje from "./cards/CardPersonaje";
import ReproductorDeTexto from "../utils/ReproductorDeTexto";

function SeleccionPersonaje({ setPersonajeSel, personajeSel }) {
  const [leer, setLeer] = React.useState(false);

  var heroes = [
    {
      name: "Allistar de Vael ",
      seleccionado: false,
      description:
        "Allistar de Vael es un noble guerrero cuyo destino se vio marcado por una tragedia que envolvió a su familia. Proveniente de una línea de renombre, su linaje se caracterizaba por su lealtad y servicio al reino. Sin embargo, un oscuro complot tejido por enemigos desconocidos los acusó injustamente de traición, manchando su honor y sumiendo a su familia en la desgracia. /n/n Allistar, lleno de ira y determinación, juró limpiar el nombre de su familia y restaurar su honor. Renunció a su vida privilegiada como noble y se convirtió en un valiente defensor de la justicia, empuñando su espada con fervor y persiguiendo la verdad incansablemente. Con cada batalla que libra y cada adversario que enfrenta, busca desesperadamente pruebas que exoneren a su familia y revele la verdadera conspiración que los sumió en la deshonra./n/n Viajando por el mundo, Allistar se enfrenta a numerosos desafíos y peligros. Su fama como un guerrero audaz y honorable se extiende por todos los rincones del reino, atrayendo tanto a aliados leales como a enemigos despiadados. Su determinación y espíritu indomable se han convertido en una fuente de inspiración para los oprimidos y desfavorecidos, quienes ven en él una esperanza de justicia y redención.En su búsqueda de la verdad, Allistar desenmascara conspiraciones, desafía a tiranos y defiende a los indefensos. Mientras se abre camino a través de intrincados laberintos políticos y enfrenta a poderosos enemigos, también se adentra en la oscuridad de su propio corazón, luchando contra la venganza y el odio que amenazan con consumirlo por completo./n/n A medida que el tiempo pasa, Allistar se encuentra con aliados leales que lo ayudan en su cruzada, cada uno con sus propios motivos y habilidades únicas. Juntos, forman una fuerza formidable que desafía a aquellos que se interponen en su camino./n/ Allistar de Vael se ha convertido en una leyenda viviente, un símbolo de coraje y esperanza en un mundo lleno de injusticias. Su camino hacia la redención es largo y arduo, pero su determinación inquebrantable y su habilidad en el combate lo guían en cada paso del camino. Con cada victoria, Allistar se acerca más a descubrir la verdad que liberará a su familia de la infamia y les devolverá su lugar de honor en el reino./n/nLa historia de Allistar de Vael es una epopeya de justicia, valentía y perseverancia. Su legado perdurará en la memoria de aquellos que creen en el poder de la redención y la fuerza de la voluntad humana para superar cualquier adversidad.",
      imagen: "/images/guerrero.jpg",
      vida: "80",
      magia: "3",
      energia: "4",
      fuerza: "9",
      inteligencia: "3",
      resistencia: "8",
      armadura: "7",
      velocidad: "6",
      habilidades: [
        {
          nombre: "Corte Implacable",
          descripcion:
            "Allistar puede realizar un araque devastador con su espada, inflije un gran daño a un solo objetivo",
          tipo: "fisico",
          daño: "120",
        },
        {
          nombre: "Escudo Pragmático",
          descripcion:
            "Allistar Utiliza su escudo, que lo protege de los ataques , absorviendo daño físico y aumendo su defensa",
          tipo: "defensa",
          mitigacionFisica: "0.5",
          mitigacionMagica: "0.2",
        },
      ],
      items: [
        {
          nombre: "Espada Vahelica de la Justicia",
          descripcion:
            "Una espada ancestral que ha sido transmitida por generaciones en la familia de Allistar, fue enbullida en energía mágica, lo cual hace que tenga un resplandor particular, cuenta la leyenda que los ancestros de Allistan degollaron 1000 personas con esta espada",
          daño: "8",
          tipo: "fisico",
          imagen: "/images/espada.png",
          cantidad: "1",
        },
        {
          nombre: "Poción de Fuerza",
          descripcion:
            "Esta poción misteriosa y embriagante está hecha de ingredientes raros y exóticos. Al beberla, se desata una oleada de energía en el cuerpo, potenciando temporalmente la fuerza física del consumidor. La Poción de Fuerza es ideal para guerreros y combatientes que buscan aumentar su poderío en batallas intensas.",
          daño: "0",
          tipo: "consumible",
          imagen: "/images/pocionFuerza.png",
          cantidad: "3",
        },
        {
          nombre: "Monedas de Oro",
          descripcion:
            "Hermosas y relusientes monedas de un amarillo brillante, se usa para tradearse por bienes y servicios. Nunca salgas de un par de ellas",
          daño: "0",
          tipo: "moneda",
          imagen: "/images/oro.png",
          cantidad: "99",
        },
        {
          nombre: "Poción de Vitalidad",
          descripcion:
            "La poción de vida es un elixir curativo que restaura la vitalidad y energía del portador. Al beber esta poción, sentirás cómo tu cuerpo se revitaliza y las heridas se cierran rápidamente. Es un valioso recurso para los aventureros en momentos de peligro, ya que les permite recuperarse y continuar la lucha con renovada fuerza. ",
          daño: "0",
          tipo: "consumible",
          imagen: "/images/pocionVida.png",
          cantidad: "5",
        },
      ],
    },
    {
      name: "Seraphine Valerius",
      seleccionado: false,
      description:
        "Seraphine Valerius, con su nombre elegido para honrar su conexión con las sombras y la oscuridad, es una excepcional hechicera nacida en las heladas tierras del norte. Su linaje se remonta a una ancestral línea de poderosos hechiceros conocidos como los Frostweavers, quienes dominan la magia del hielo y las bajas temperaturas como pocos pueden hacerlo. /n/n Desde una edad temprana, Seraphine demostró una afinidad innata por la magia, y sus habilidades fueron rápidamente reconocidas por los maestros de la antigua orden de los Frostweavers. Fue acogida en sus filas y sometida a rigurosos entrenamientos para perfeccionar su control sobre la magia helada. A medida que crecía, Seraphine se convirtió en una de las hechiceras más prometedoras de su generación./n/n Aunque su linaje la impulsaba hacia una vida de poder y conquista, Seraphine optó por seguir un camino diferente. Se convirtió en una defensora de la armonía natural y decidió utilizar su magia para proteger a los inocentes y preservar el equilibrio en el mundo. Su profundo respeto por la naturaleza la llevó a desarrollar habilidades mágicas relacionadas con el control del clima y la protección de los ecosistemas./n/n Seraphine Valerius se ha convertido en una figura legendaria en las tierras heladas del norte. Su presencia imponente, su destreza mágica y su dedicación a la protección de la naturaleza han inspirado a muchos a seguir su ejemplo. Aunque su linaje ancestral le otorga un poder impresionante, es su determinación y su noble corazón lo que la distingue verdaderamente como una valiente defensora de la armonía y la justicia en el mundo./n/n Con su bastón glacial en mano y sus habilidades mágicas a su disposición, Seraphine Valerius está lista para enfrentar cualquier desafío que amenace la paz y la estabilidad en las tierras heladas y más allá. Su misión es asegurarse de que la magia del hielo y la armonía natural se mantengan en equilibrio para el bienestar de todos.",
      imagen: "/images/hechizera.PNG",
      vida: "60",
      energia: "9",
      magia: "9",
      fuerza: "3",
      inteligencia: "9",
      resistencia: "4",
      armadura: "3",
      velocidad: "6",
      habilidades: [
        {
          nombre: "Congelación Profunda",
          descripcion:
            "Seraphine puede generar una ráfaga de frío intenso que congela a sus enemigos, infligiendo daño mágico y ralentizándolos en el proceso.",
          tipo: "magico",
          daño: "130",
        },
        {
          nombre: "Escudo Pragmático",
          descripcion:
            "Seraphine Utiliza su escudo, que lo protege de los ataques , absorviendo daño físico y aumendo su defensa",
          tipo: "defensa",
          mitigacionFisica: "0.5",
          mitigacionMagica: "0.2",
        },
      ],
      items: [
        {
          nombre: "Bastón Glacial Tracendental",
          descripcion:
            "Un bastón tallado en cristal de hielo puro, imbuido con la esencia de los antiguos Frostweavers. El bastón aumenta el poder y el alcance de los hechizos de Seraphina, permitiéndole canalizar su magia con mayor eficacia y control.",
          daño: "8",
          tipo: "fisico",
          imagen: "/images/baston.png",
          cantidad: "1",
        },
        {
          nombre: "Poción de Maná",
          descripcion:
            "Esta poción esencialesta infundida con poderes arcanos, proporciona una recarga instantánea de energía mágica. Al beberla, se siente un flujo revitalizante de poder místico que restaura el maná del consumidor. Perfecta para hechiceros y conjuradores que necesitan recuperar rápidamente sus recursos mágicos. ",
          daño: "0",
          tipo: "consumible",
          imagen: "/images/pocionMana.png",
          cantidad: "5",
        },
        {
          nombre: "Monedas de Oro",
          descripcion:
            "Hermosas y relusientes monedas de un amarillo brillante, se usa para tradearse por bienes y servicios. Nunca salgas de un par de ellas",
          daño: "0",
          tipo: "moneda",
          imagen: "/images/oro.png",
          cantidad: "99",
        },
        {
          nombre: "Poción de Vitalidad",
          descripcion:
            "La poción de vida es un elixir curativo que restaura la vitalidad y energía del portador. Al beber esta poción, sentirás cómo tu cuerpo se revitaliza y las heridas se cierran rápidamente. Es un valioso recurso para los aventureros en momentos de peligro, ya que les permite recuperarse y continuar la lucha con renovada fuerza. ",
          daño: "0",
          tipo: "consumible",
          imagen: "/images/pocionVida.png",
          cantidad: "5",
        },
      ],
    },
    {
      name: "Lucius  Shadowblade",
      seleccionado: false,
      description:
        " Lucius es un misterioso y sigiloso asesino de élite que opera en las sombras. Proveniente de una antigua hermandad de asesinos, Lucius fue entrenado desde joven en las artes del sigilo, el combate cuerpo a cuerpo y el manejo de armas mortales./n /n Se le conoce por su habilidad para desaparecer sin dejar rastro y llevar a cabo sus encargos con precisión letal. Valerius sigue un estricto código de honor y solo acepta trabajos que considera justos y necesarios en la lucha contra la corrupción. Shadowblade, cuyo nombre verdadero se desconoce, es un enigmático personaje que ha cautivado la imaginación de muchos a lo largo de los años./n/n Su historia es envuelta en misterio y sus orígenes son difíciles de rastrear.Se dice que Shadowblade es un experto en el arte del sigilo y la infiltración. Sus habilidades en combate cuerpo a cuerpo son excepcionales, y es conocido por su destreza con las armas blancas, especialmente con las dagas y espadas cortas. Su estilo de lucha se caracteriza por su agilidad, velocidad y precisión letal.Se rumorea que Shadowblade fue entrenado por una antigua orden de asesinos, cuyos miembros son maestros en las artes de la clandestinidad y el asesinato. Sin embargo, la verdad detrás de su entrenamiento y su conexión con esta orden se mantienen en la oscuridad./n /n A lo largo de su historia, Shadowblade ha sido conocido por trabajar en las sombras y desempeñar un papel crucial en situaciones críticas. Se dice que ha llevado a cabo misiones peligrosas en nombre de aquellos que buscan justicia y equilibrio en un mundo plagado de corrupción y tiranía. /n La figura de Shadowblade ha ganado renombre debido a su naturaleza escurridiza y su habilidad para pasar desapercibido incluso en los entornos más vigilados. Su reputación como un agente impredecible y eficiente ha llevado a que muchos gobiernos, organizaciones y particulares busquen sus servicios para tareas clandestinas y de alto riesgo.Sin embargo, el verdadero propósito y motivaciones de Shadowblade siguen siendo un misterio. Algunos especulan que busca redimirse de su pasado oscuro, mientras que otros creen que actúa según su propia agenda personal.",
      imagen: "/images/asesino.jpg",
      vida: "6",
      energia: "5",
      fuerza: "7",
      inteligencia: "8",
      magia: "4",
      resistencia: "8",
      armadura: "5",
      velocidad: "9",
      habilidades: [
        {
          nombre: "Tajo Sombrío",
          descripcion:
            "Lucius desaparece en las sombras y se vuelve inmune por un tiempo, se desplaza instantáneamente detrás de su enemigo y asesta un golpe sorpresa devastador. Esta habilidad inflige un daño significativo puede agregar un estado de hemorragia al oponente",
          tipo: "físico",
          daño: "100",
        },
        {
          nombre: "Manto de las Sombras",
          descripcion:
            "Lucius se envuelve en una oscuridad mágica que le permite volverse prácticamente invisible durante un breve periodo de tiempo, lo que dificulta que los enemigos lo detecten y lo ataquen. Si recibe daño bloqueará el ataque completamente pero se terminará el sigilo",
          tipo: "defensa",
          mitigacionFisica: "0",
          mitigacionMagica: "0",
        },
      ],
      items: [
        {
          nombre: "Daga Umbría",
          descripcion:
            "Una daga afilada y curvada, forjada con una aleación de metales oscuros y mágicamente imbuida con las energías de la oscuridad. La Daga Umbría incrementa el daño infligido por Lucius y tiene la capacidad de drenar la vitalidad de sus enemigos, curándolo a él mismo en el proceso",
          daño: "7",
          tipo: "fisico",
          imagen: "/images/daga.png",
          cantidad: "1",
        },
        {
          nombre: "Poción de Fuerza",
          descripcion:
            "Esta poción misteriosa y embriagante está hecha de ingredientes raros y exóticos. Al beberla, se desata una oleada de energía en el cuerpo, potenciando temporalmente la fuerza física del consumidor. La Poción de Fuerza es ideal para guerreros y combatientes que buscan aumentar su poderío en batallas intensas.",
          daño: "0",
          tipo: "consumible",
          imagen: "/images/pocionFuerza.png",
          cantidad: "5",
        },
        {
          nombre: "Monedas de Oro",
          descripcion:
            "Hermosas y relusientes monedas de un amarillo brillante, se usa para tradearse por bienes y servicios. Nunca salgas de un par de ellas",
          daño: "0",
          tipo: "moneda",
          imagen: "/images/oro.png",
          cantidad: "99",
        },
        {
          nombre: "Poción de Vitalidad",
          descripcion:
            "La poción de vida es un elixir curativo que restaura la vitalidad y energía del portador. Al beber esta poción, sentirás cómo tu cuerpo se revitaliza y las heridas se cierran rápidamente. Es un valioso recurso para los aventureros en momentos de peligro, ya que les permite recuperarse y continuar la lucha con renovada fuerza. ",
          daño: "0",
          tipo: "consumible",
          imagen: "/images/pocionVida.png",
          cantidad: "5",
        },
      ],
    },
    // {
    //   name: "",
    // seleccionado:false,
    //   description: "",
    //   imagen: "",
    //   vida: "",
    //   energia: "",
    //   fuerza: "",
    //   destreza: "",
    //   inteligencia: "",
    //   resistencia: "",
    //   armadura: "",
    //   velocidad: "",
    // habilidades:[],
    // items:[],
    // },
  ];

  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        border: "2px solid #e0e0e0",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Agrega una suave sombra
        background: "linear-gradient(to right, #f5f5f5, #ffffff)", // Agrega un degradado de fondo
        m: "auto",
        maxWidth: 800,
        "@media (max-width: 1000px)": {
          maxWidth: "100%",
        },
      }}
    >
      <ReproductorDeTexto
        leer={leer}
        texto={heroes[1].description}
        voz="es-MX"
      />
      <Carousel
        navButtonsWrapperProps={{
          style: {
            position: "absolute",
            top: "-13rem", // Ajusta la posición vertical según tus necesidades
          },
        }}
        indicators={false}
        autoPlay={false}
        animation="slide"
        duration="1500"
        navButtonsAlwaysVisible={true}
        next={() => {}}
        prev={() => {}}
      >
        {heroes.map((heroe) => (
          <CardPersonaje
            setPersonajeSel={setPersonajeSel}
            personajeSel={personajeSel}
            person
            heroe={heroe}
            leer={leer}
            setLeer={setLeer}
          />
        ))}
      </Carousel>
      <Button></Button>
    </Box>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.imagen}></img>
    </Paper>
  );
}

export default SeleccionPersonaje;
