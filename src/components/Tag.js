import useGif from "../hooks/useGif";
import { useState } from "react";

export default function Tag(){

    const [tag,setTag] = useState('') 
    const {gif,loading,fetchdata} = useGif()
    
    return(
        <div className="relative w-[40%] max-h-max mx-auto bg-blue-400 mt-8 border border-black rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-2xl uppercase underline font-bold my-2">Random {tag} Gif</h1>
            {
                loading?(<div className="spinner"></div>):(<img src={gif} width='450' className="max-h-[270px] px-5 rounded-md mt-4"></img>)
            }
            <input
            type="text"
            value={tag}
            onChange={(event)=>{setTag(event.target.value)}}
            className=" w-5/6 bg-[#ffffff] rounded-lg py-1 mt-4 text-xl font-semibold pl-3"/>
            <button onClick={()=>{fetchdata(tag)}}
            className="w-[50%] bg-[#ffffffcb] rounded-lg py-1 my-4 text-xl font-semibold">Generate</button>
        </div>
    )
}