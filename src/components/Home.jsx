import React from 'react'
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import "../styles.css"



function Home() {
  const 
  {state: {products}, 
  ProductState: {ByFastDelivery, ByRatings, sort,ByInStock,
BySearchQuery },
} = CartState()

  console.log(products)

  const TransformProducts = () => {
    
    let SortedProducts = products;
    if(sort){
      SortedProducts = SortedProducts.sort((a,b) => 
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price)
    }

    if(!ByInStock){
      SortedProducts = SortedProducts.filter((c) => c.inStock )
    }
    if(!ByFastDelivery){
      SortedProducts = SortedProducts.filter((c) => c.fastDelivery )
    }
    if(!ByInStock){
      SortedProducts = SortedProducts.filter((c) => c.inStock )
    }
    if(ByRatings)
    {
      SortedProducts = SortedProducts.filter((c) => c.ratings >= ByRatings)
    }
    if(BySearchQuery)
    {
      SortedProducts = SortedProducts.filter((c) => c.name.toLowerCase().includes(BySearchQuery))
    }
 

    return SortedProducts; 
  };

  return (
    <div className="home">
    <Filters/>
    <div className='ProductsContainer'>
     {TransformProducts().map((product) => 
     (
      <SingleProduct product={product} key={product.id}/> 
      ))}
    </div>
    </div>
  )
}

export default Home
