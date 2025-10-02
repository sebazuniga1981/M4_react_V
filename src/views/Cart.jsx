import { useState } from 'react'
import { Container, Table, Button, Image } from 'react-bootstrap'
import { pizzas } from "../data/pizzas";

const Cart = () => {
    const [cart, setCart] = useState(pizzas)

    // Aqui se aumenta de cantidad

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        setCart(updatedCart)
    }

    // Aqui se disminuye de cantidad

    const decreaseQuantity = (id) => {
        let updatedCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)

        // eliminar pizzas con cantidad 0
        updatedCart = updatedCart.filter(item => item.quantity > 0)
        setCart(updatedCart)
    }
    //aqui va el total dinamico

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <Container className='mt-4'>
            <h2> Carrito de compras</h2>
            {cart.length === 0 ? (
                <p> El carrito esta vacio</p>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Pizza</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(pizza => (
                            <tr key={pizza.id}>
                                <td>{pizza.name}</td>
                                <td><Image src={pizza.img} alt={pizza.name} style={{ width: "80px" }} rounded /></td>
                                <td>${pizza.price.toLocaleString("es-CL")}</td>
                                <td>{pizza.quantity}</td>
                                <td>${(pizza.price * pizza.quantity).toLocaleString("es-CL")}</td>
                                <td>
                                    <Button variant='success' size='sm' onClick={() => increaseQuantity(pizza.id)}> + </Button>
                                    <Button variant='danger' size='sm' onClick={() => decreaseQuantity(pizza.id)} > - </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <h4>Total: ${total.toLocaleString("es-CL")}</h4>
            <Button variant="primary">Pagar</Button>
        </Container>
    )
}
export default Cart