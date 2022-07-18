import React,{useState, useEffect} from "react";


export default function App() {
    const [image,setImage]=useState('');
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('');
    


    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=>resp.json())
        .then(data=>{
            setImage(data.message);
            setLoading(loading)
            console.log(data.message);
        })
    },[])
  return (
    <div>
        {loading?<p>Loading</p>:<img src={image} alt={error} />}
      
    </div>
  )
}
