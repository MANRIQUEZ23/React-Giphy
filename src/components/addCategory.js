import React, { useState } from 'react';
import PropTypes from 'prop-types';

 

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] =  useState('');

    const handleInputeChange = (e) =>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault();

        console.log(inputValue);

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue, ...cats  ]);
            setInputValue('');
        }
 

    }

    return (
         
            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputeChange}
                     
                />
            </form>    
              
    )

}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}