

// all hooks starts with use , example: useFetchGifs.js
import React, { useState , useEffect } from 'react' 
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) =>{


    const [state, setState] = useState({

        data: [], 
        loading: true


    });



    const [images, setImages] = useState([]);    

    useEffect(   () => {

        getGifs(category)
            .then( imgs => {
                
               
                    setState({
                        data:imgs,
                        loading: false
                    });

            } ); // getGifs es una promesa , por eso se usa el then

        
    }, [category]) // solo ejecutara 1 vez el getGifs, solo cuando el componente (GifGrid) sea 1 vez renderizado


 

    return state;

}