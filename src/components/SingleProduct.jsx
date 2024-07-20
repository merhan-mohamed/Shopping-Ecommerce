import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "../styles.css"




const SingleProduct = ({product}) => {
    const {state: {cart}, dispatch} = CartState()
  return (
    <div className='products'>
     <Card>
        <Card.Img  variant="top" src={product.image} alt={product.name}/>
        <Card.Body>
        <Card.Title >{product.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${product.price.split('.')[0]}</span>
            {product.fastDelivery ? (<div>Fast Delivery</div>) :
             (<div> 4 Days Delivery</div>)}
             <Rating rate={product.ratings} />
        </Card.Subtitle>
        {cart.some((p) => p.id === product.id) ? (
          <Button variant="danger"
           onClick={()=> dispatch({
            type:"REMOVE_FROM_CART", 
            payload:product
          })} 
          >Remove From Cart
          </Button>) : (
          <Button onClick={()=> 
            dispatch({
              type:"ADD_TO_CART", 
              payload:product
            })} 
            disabled={!product.inStock} variant="primary">{!product.inStock ? "Out Of Stock" : "Add To Cart"}</Button>
        )}
       </Card.Body>
     </Card>
    </div>
  )
}

export default SingleProduct
