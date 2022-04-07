import React, { useEffect, useState } from 'react';
import Laptop from './Laptop';
import "./AllLaptop.css"

const AllLaptop = () => {
    const [laptops, setLaptop] = useState([]);
    console.log(laptops);
    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setLaptop(data));
      }, []);
      const handleAddToCart = (laptop) => {
            
      };

    return (
          
        <div>
             <div className='d-flex'>
             <div className='row w-75'>
               
           {
                laptops.map((laptop) => (
                  
                 <Laptop laptop={laptop} key={laptop.id} handleAddToCart={handleAddToCart} />
             ))}
            
          </div>
          <div className='row w-25'>
                  <h1>Hello</h1>
           </div>
           </div>
        </div>
    );
};

export default AllLaptop;
