import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardPizza = ({ name, price, ingredients, img, onViewMore, onAdd, desc }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem", minHeight: "430px" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title> Pizza {name}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong> {" "} {price ? `$${price.toLocaleString("es-CL")}` :"No disponible"}
        </Card.Text>
        <Card.Text>
          <strong>Ingredientes:</strong>
        </Card.Text>
        <ul style= {{marginTop:0, paddingLeft:"1rem"}}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Card.Text>
          <strong> Descripcion: </strong>{desc}
        </Card.Text>

        <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}>
          <Button
            style={{
              flex: 1,
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
            onClick={onViewMore}
          >
            Ver más
          </Button>
          <Button
            style={{
              flex: 1,
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
            }}
            onClick={onAdd}
          >
            Añadir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default CardPizza;