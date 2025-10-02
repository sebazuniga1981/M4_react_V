import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import CardPizza from "./CardPizza";
/*import { pizzas } from "../data/pizzas";*/


const Home = () => {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas")
        const data = await res.json()
        console.log("✅ Datos recibidos desde la API:", data)
        setPizzas(data)
      } catch (error) {
        console.error("error al cargar pizzas", error)
      }
    }
    fetchPizzas()
  }, [])

  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Row>
          {pizzas.map((pizza) => (
            <Col md={4} key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;