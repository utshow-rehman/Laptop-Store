import React, { useEffect, useState } from 'react';
import Laptop from './Laptop';
import Cart from './Cart';
import "./AllLaptop.css"
import { Card } from 'react-bootstrap';

const AllLaptop = () => {
    const [laptops, setLaptop] = useState([]);
    const [carts, setCart]=useState([]);
  
    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setLaptop(data));
      }, []);
      const handleAddToCart = (laptop) => {
         
           if(!carts.includes(laptop)){
            const newCart=[...carts,laptop];
            setCart(newCart);
           }
          
      };
   
      const choseAgain=() =>{
            setCart([]);
      }
      const random=() =>{
           if(carts.length>0){
           const val= [carts[Math.floor(Math.random() * carts.length)]];
           choseAgain();
           setCart(val);
           }
        
      }



    return (
          
        <div className='mt-5'>
             <div className='d-flex justify-content-around container'>
             <div className='row w-75 '>
               
           {
                laptops.map((laptop) => (
                  
                 <Laptop laptop={laptop} key={laptop.id} handleAddToCart={handleAddToCart} />
             ))}
            
          </div>
          <div className="w-25 ms-5">
                  <h1>Selected laptop</h1>
                {
                     carts.map((cart)=>(
                             <Cart cart={cart} key={cart.id}></Cart>
                     ))}
              <button className='btn btn-success'  onClick={() => random()}>Choose One For Me</button>
              <br />
              <button type="button" className="btn btn-secondary mt-2" onClick={() => choseAgain()}>CHOOSE AGAIN</button>
               
           </div>
           </div>
        </div>
    );
};

export default AllLaptop;
