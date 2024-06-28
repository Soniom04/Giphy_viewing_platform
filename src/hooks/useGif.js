import  { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const API_KEY = process.env.REACT_APP_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

export default function useGif(tag){
    const [gif,setGif] = useState('')
    const [loading,setLoading] = useState(false)
    
    async function fetchdata(tag){
        setLoading(true)
        try{
            console.log(tag)
            const {data} = await axios.get(tag ? `${url}&tag=${tag}`:url)
            const imageSource = data.data.images.downsized_large.url
            setGif(imageSource)
            setLoading(false)
        }
        catch{
            toast.error('Unable to Fetch')
        }
    }
    useEffect(()=>{
        fetchdata()
    },[])

    return {gif,loading,fetchdata}
}