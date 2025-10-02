const Profile = () => {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Perfil de Usuario</h1>
            <p><strong>Email</strong>usuario@correo.com</p>
            <button onClick={() => alert("sesion cerrada(simulado")}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >Cerrar Sesión
            </button>
        </div>
    )
}
export default Profile