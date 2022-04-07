import React from 'react';
import "./Laptop.css"
const Laptop = ({laptop,handleAddToCart}) => {
    const { name, id,img,price } = laptop;
    console.log(img);
    return (
        <div className='col-4 card'>
        <div>
          <img className='img-fluid' src={img} alt='' />
        </div>
        <div className=''>
          <h2>{name}</h2>
        </div>
       
          <button onClick={() =>handleAddToCart(laptop)}>
               Add to cart
          </button>
          <h1>$ {price}</h1>
       
      </div>
       
       
    );
};

export default Laptop;