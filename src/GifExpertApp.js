

import React, { useState } from 'react'
import { AddCategory } from './components/addCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    // const categories = ['One Punch' , 'Samurai X' , 'Dragon Ball' ];

    const [categories, setCategories] = useState(['One Punch'  ]);

    /* 
    const handleAdd = ()=>{

        // option 1
        // setCategories( ['HunterXHunter',    ...categories ,  ] );
        
        // OPtion 2
        setCategories(  cats =>   [ ...categories , 'HunterXHunter' ] );
        

    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
            <ol>
                {  
                    categories.map(  category => (
                        <GifGrid  
                            key={category}
                            category={category} /> 
                        ) 
                    )
                }
            </ol>
        </>
    )

}
