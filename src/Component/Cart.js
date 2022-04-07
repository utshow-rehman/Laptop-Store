import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
  
   const {name,img}=cart;
    return (
        <div>
              <div className='d-flex ms-3'>
              <div>
                     <img className='ima' src={img} alt="" />
              </div>
              <div>
                    <h4 className='ms-1'>{name}</h4>
              </div>
              </div>
              
        </div>
    );
};

export default Cart;