import React from 'react';
import Form from 'react-bootstrap/Form';
import Rating from "./Rating";
import { CartState } from '../context/Context';
import Button from 'react-bootstrap/Button';
import "../styles.css"



const Filters = () => {
    
    const {ProductState: {ByInStock,ByFastDelivery, ByRatings, sort, BySearchQuery}, ProductDispatch} = CartState()

    console.log(ByFastDelivery, ByInStock, sort, ByRatings, BySearchQuery)
  return (
    <div className='filters'>
        <span className="title">Filter Products</span>
        <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={() => ProductDispatch({
                type:"SORT_BY_PRICE",
                payload:"lowToHigh"
            })}
            checked={sort === "lowToHigh" ? true : false}
        />
        </span>
        <span>
        <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={() => ProductDispatch({
                type:"SORT_BY_PRICE",
                payload:"highToLow", 
            })}
            checked={sort === "highToLow" ? true : false}
        />
        </span>
        <span>
        <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={() => ProductDispatch({
                type: "FILTER_BY_STOCK"
            })}
            checked={ByInStock}
        />
        </span>
        <span>
         <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={() => ProductDispatch({
                type: "FILTER_BY_DELIVERY"
            })}
            checked={ByFastDelivery}
        />
        </span>
        <span>
        <label htmlFor="" style={{paddingRight: "10px"}}>Rating: </label>
        <Rating rate={ByRatings} onClick={(i)=>ProductDispatch({
            type:"FILTER_BY_RATING",
            payload: i + 1
        })} 
        style={{cursor: "pointer"}}/>
        </span>

        <Button
        variant="light"
        onClick={() =>
            ProductDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
        
        
      
    </div>
  )
}

export default Filters
