import useGif from "../hooks/useGif";

export default function Random(){

    const {gif,loading,fetchdata} = useGif()
    return(
        <div className=" w-[40%] mx-auto bg-green-400 mt-8 max-h-max border border-black rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-2xl uppercase underline font-bold mt-2">A Random Gif</h1>
            {
                loading?(<div className="spinner"></div>):(<img src={gif} width='450' className="max-h-[270px] px-5 rounded-md mt-4"></img>)
            }
            <button onClick={()=>{fetchdata()}}
            className="w-[50%] bg-[#ffffffcb] rounded-lg py-1 my-4 text-xl font-semibold">Generate</button>
        </div>
    )
}

