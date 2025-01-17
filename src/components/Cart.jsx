import React, {useEffect, useState} from 'react';
import { CartState } from "../context/Context";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";
import "../styles.css"


function Cart() {
  const {state:{cart}, dispatch} = CartState()

  const [total, setTotal] = useState();

  useEffect(() => {
      setTotal(cart.reduce((acc,curr) => acc+ Number(curr.price) * curr.qty,0))
  }, [cart])
  
  return (
    <div className='home'>
      <div className="ProductsContainer">
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
               <Row>
               <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{item.name}</span>
                </Col>
                <Col md={2}>
                <span>${item.price}</span>
                </Col>
                <Col md={2}>
                  <span>
                    <Rating rate={item.ratings}/>
                  </span>
                </Col>
                <Col>
                  <Form.Control as="select" value={item.qty}
                  onChange={(e)=> dispatch({
                    type:"CHANGE_CART_QTY",
                    payload:{
                      id:item.id,
                      qty:e.target.value
                    }
                  })} >
                  {[...Array(item.inStock).keys()].map((x) => (
                    <option key={x+1}>{x+1}</option>
                  ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button type='button' variant="light" onClick={() => dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:item
                   })}>
                    <MdDelete fontSize="20px"/>   
                  </Button>
                </Col>
                </Row>
            </ListGroup.Item>
          ))}
       
        </ListGroup>
      </div>

      <div className="filters summary">
        <span className="title">
           Subtotal ({cart.length}) items
        </span>
        <span style={{fontWeight:700, fontSize:"20px"}}>Total: $ {total} </span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>

     
    </div>
  )
}

export default Cart
