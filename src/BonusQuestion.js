import React from 'react';

const BonusQuestion = () => {
    return (
        <div className='m-5'>
            {/* props vs State  */}
             <h1>Props vs State</h1>
            <div className='d-flex'>
            <div>
            <h4>Props:</h4>
            <p>*The Data is passed from one component to another.</p>
            <p> *It is Immutable (cannot be modified).</p>
            <p> *Props are read-only.</p>
            </div>
            <div className='ms-5'>
            <h4>State:</h4>
            <p>*The Data is passed within the component only.</p>
            <p> *It is Mutable ( can be modified).</p>
            <p> *State is both read and write.</p>
            </div>
            </div>
          
          {/* How useState Work   */}
           <h1> How useState Work  </h1>
           <p>
           useState is a hook that allow us to declare state variable in functional components.We pass the initial state
            to function and it returns a variable with the current state value and another function to update this value. 
           </p>

        </div>
    );
};

export default BonusQuestion;