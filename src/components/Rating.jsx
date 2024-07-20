import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "../styles.css"


const Rating = ({rate, onClick, style}) => {
  return (
    <>
    {[...Array(5)].map((_,i) =>(
        <span key={i} onClick={() => onClick(i)} style={style}>
            {rate > i ? <FaStar fontSize="15px" /> : <FaRegStar fontSize="15px"/>  }
        </span>
    ))}
      
    </>
  )
}

export default Rating
