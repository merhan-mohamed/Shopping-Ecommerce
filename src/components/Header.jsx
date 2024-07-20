import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom"
import { CartState } from '../context/Context';
import { MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import "../styles.css"






function Header() {
 const { state: {cart}, dispatch, ProductDispatch }= CartState()
  return (
  <>
    <Navbar className="bg-dark" variant='dark' style={{height:80}}>
        <Container>
          <Navbar.Brand>
            <Link to="/"> Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
            <Form.Control
                type="search"
                placeholder="Search a product"
                style={{width:500}}
                className='m-auto'
                aria-label="Search"
                onChange={(e)=> {
                  ProductDispatch({
                    type:"FILTER_BY_SEARCH",
                    payload:e.target.value
                  })
                }}
              />
              </Navbar.Text>
              <Dropdown align='end'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FaShoppingCart fontSize="25px"/>
                  <Badge bg="success">{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{minWidth:298}} >
                  {cart.length>0 ? 
                  (<>
                    {cart.map((item) => {
                      return(
                        <span className='cartitem' key={item.id}>
                          <img src={item.image}
                          className='cartItemImg'
                          alt={item.name}/>

                          <div className='cartItemDetail'>
                            <span>{item.name}</span>
                            <span>${item.price.split('.')[0]}</span>
                          </div>
                          <MdDelete 
                          fontSize="20px"
                          style={{cursor:"pointer"}}
                          onClick={()=> dispatch
                            ({
                            type:"REMOVE_FROM_CART",
                            payload:item
                          })}/>
                        </span>
                      )

                    })}
                    
                    <Link to="/cart">
                        <Button style={{ width: "95%", margin: "0 10px" }}>
                              Go To Cart
                        </Button>
                    </Link>
                  </>) : 
                  (<span style={{padding:10}}>Cart is Empty!</span>)
                 }

                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
  </>
  )
}

export default Header
