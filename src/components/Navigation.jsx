import Button from 'react-bootstrap/Button';
import{Link, NavLink} from "react-router-dom"


const Navigation = () => {
    const total = 25000
    const token = false
    return (
        <div
            style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                backgroundColor: "black",
            }}
        >
            {/* Home negro */}
            <p
                style={{
                    color: "white",
                    fontSize: "16px",
                    backgroundColor: "black",
                    margin: "0.5rem",
                    padding:"0 1rem",
                    display: "flex",
                    alignItems: "center"               }}
            >
                Pizzeria Mamma Mia!
            </p>
            <Button
            as={NavLink}
                to="/"
                variant="outline-light"
                style={{ backgroundColor: "black", color: "white", border: "none" }}
            >
                🍕 Home
            </Button>
             <Button
            as={NavLink}
                to="/cart"
                variant="outline-light"
                style={{ backgroundColor: "black", color: "white", border: "none" }}
            >
                🛒 Carrito
            </Button>
            <Button
            as={NavLink}
                to="/pizza"
                variant="outline-light"
                style={{ backgroundColor: "black", color: "white", border: "none" }}
            >
                🍕 Pizzas
            </Button>



            {token ? (
                <>
                    {/* Profile y Logout negro */}
                    <Button
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                        }}
                    >
                        🔓 Profile
                    </Button>
                    <Button
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                        }}
                    >
                        🔒 Logout
                    </Button>
                </>
            ) : (
                <>
                    {/* Login y Register negro */}
                    <Button
                    as={Link}
                    to="/login"
                        variant="outline-light"
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                        }}
                    >
                        🔐 Login
                    </Button>
                    <Button
                    as={Link}
                    to="/register"
                        variant="outline-light"
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                        }}
                    >
                        📝 Register
                    </Button>
                </>
            )}


                        {/* Total azul */}
            <Button
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    marginLeft: "auto",
                }}
            >
                🛒 Total: ${total.toLocaleString("es-CL")}
            </Button>
        </div>
    );
};
export default Navigation;