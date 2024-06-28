import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="flex flex-col w-full background pb-5">
        <h1 className="bg-white rounded-lg mt-7 text-center mx-7 py-2 text-3xl font-bold">RANDOM GIFS</h1>
        <div className="flex flex-col"> 
            <Random/>
            <Tag/>
        </div>
    </div>
  );
}

export default App;
