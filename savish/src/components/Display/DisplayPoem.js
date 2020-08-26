import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Display from './Display';
const Poem = () => {
    const [poems,setPoems] = useState([])
    useEffect(() => {
        const getData = async () => {
            await axios.get('http://localhost:3000/poem/')
             .then(response => {
                setPoems(response.data)
             })
             .catch(err => console.log(err))
        }
       
        getData();
    }, [])
    
    return (
        <div>
           {poems &&(<Display posts={poems}/>)} 
        </div>              
    )
}

export default Poem
