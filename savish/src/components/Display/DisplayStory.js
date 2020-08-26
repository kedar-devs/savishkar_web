import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Display from './Display';

const Story= () =>{
    const [stories,setStories] = useState([])
    useEffect(() => {
        const getData = async () => {
            await axios.get('http://localhost:3000/story/')
             .then(response => {
                setStories(response.data)
             })
             .catch(err => console.log(err))
        }
        getData();
    }, [])
    return(
        <Display posts={stories}/>
    )
    
}

export default Story;

