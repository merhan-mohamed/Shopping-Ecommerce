import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { reducer } from './Reducer.jsx';
import { FilterReducer } from './Reducer.jsx';

const Cart = createContext()
faker.seed(99);


const Context = ({children}) =>
{
    const products = [...Array(20)].map(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlLoremFlickr({ category: 'commerce' }),
      inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

   const [state, dispatch] = useReducer(reducer, {
        products:products,
        cart:[],
   });

   const [ProductState, ProductDispatch] = useReducer(FilterReducer, {
    ByInStock: false,
    ByFastDelivery: false,
    ByRatings:0,
    BySearchQuery:""

   })

  return (
    <Cart.Provider value={{state, dispatch, ProductState, ProductDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export  const CartState = () => {
  return useContext(Cart)
}
