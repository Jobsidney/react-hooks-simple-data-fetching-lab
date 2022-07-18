import React,{useState, useEffect} from "react";


export default function App() {
    const [image,setImage]=useState('');
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('A Random Dog');
    


    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=>resp.json())
        .then(data=>{
            setImage(data.message);
            setLoading(true)
            console.log(data.message);
        })
    },[])
  return (
    <div>
        {loading?<img src={image} alt={error} />:<p>Loading</p>}
      
    </div>
  )
}
