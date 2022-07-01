import Head from 'next/head'
import axios from 'axios'
import { useState , useEffect } from 'react'

const Fetch = () =>{
    const [data , setData] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data)
        }
        fetchData()
    } , []) 
    return(
        <>
        <Head>
            <title>Fetch Page</title>
        </Head>
        <h1>Fetched data</h1>
        {data.map(user =>{
        return(
            <div key={user.id}>
                <div>User Id : {user.userId}</div>
                <div>User title : {user.title}</div>
                <br />
            </div>
        )
    })
}
        </>
    )
}

export default Fetch