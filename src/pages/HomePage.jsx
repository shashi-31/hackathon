import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = 'Home | EcoPlanet'
        axios.get(`${import.meta.env.VITE_ML_URL}/`)
        .then((res) => {
            console.log(typeof res.data);
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log('done');
        });

    }, []);
    return (
        <div className='text-center text-5xl'>
            <h1>Home Page</h1>
            <code className='text-left text-sm'>
                {data}
            </code>
        </div>
    )
}

export default HomePage
