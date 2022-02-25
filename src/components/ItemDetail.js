import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
const ItemDetail = (data)=>{
    const [itemCount,setItemCount] = useState(0);
    const dataContext = useContext(CartContext);
    const onAdd=(cantidad)=>{
        alert("Se agrego "+cantidad+" productos");
        setItemCount(cantidad);
        dataContext.addToCart(data,cantidad);
    }
 return(
     <div className="containerDetail">
         <div className="containerDetail_Imagenes">
         <img src= {data.imagen} alt="imagen producto"/>
         </div>

         <div className="containerDetail_Info">
            <h1>{data.descripcion}</h1>
            <h2>Precio: {data.precio}</h2> 
         </div>
         { 
            itemCount === 0
            ? <ItemCount stock={data.stock} initial={itemCount} onAdd={onAdd}  />
            : <Link to='/cart' style={{textDecoration: "none"}}><button className="quantityAdd-button">checkout</button></Link>
         }
     </div>
 );
}
export default ItemDetail;