import {useState, useEffect} from "react"
import CardPizza from "../components/CardPizza"


const Pizza=()=>{
const [pizza, setPizza]= useState(null)

useEffect(() =>{
    const fetchPizza = async () =>{
        try{
            const res = await fetch("http://localhost:5000/api/pizzas/p001")
            const data = await res.json()
            console.log("✅ Datos recibidos desde la API:", data)
            setPizza(data)
        }
        catch (error){
            console.error("Error al cargar la pizza",error)
        }
    }
    fetchPizza()
},[])
if (!pizza) return <p>Cargando pizza... no hay datos, vuelva mas tarde</p>

return(
    <div style={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap", gap: "1rem", marginTop: "2rem"}}>
        <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        desc={pizza.desc}
        onAdd={()=> {}}
        onViewMore={() => {}}
        />
    </div>
)
}
export default Pizza