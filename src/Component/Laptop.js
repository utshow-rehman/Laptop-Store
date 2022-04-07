import React from 'react';
import "./Laptop.css"
import { BsFillCartFill } from "react-icons/bs";

const Laptop = ({laptop,handleAddToCart}) => {
    const { name, id,img,price } = laptop;
   
    return (
        <div className='col-12 col-md-4  card  g-2'>
        <div>
          <img className='img-fluid im' src={img} alt='' />
        </div>
          <div className='card-body'>
            <h3>ID: {id}</h3>
          <h3>{name}</h3>
          </div>
          <div className='card-footer'>
           <h3>$ {price}</h3>
          <button className='btn btn-primary' onClick={() =>handleAddToCart(laptop)}>
               Add to cart  <BsFillCartFill />
          </button>
          </div>
       
      </div>
       
       
    );
};

export default Laptop;