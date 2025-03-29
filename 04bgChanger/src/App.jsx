import { useState } from "react"


function App() {
 const [color, setColor] = useState("brown")
 
  return (
   <>
    <div className="w-full h-screen duration-200"
   style =  {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center top-40 inset-x-0 px-2 w-full max-w-md mx-auto shadow-md 
   rounded-lg px-4 py-3  my-8 ">
         <h1 className='text-white  text-center  my-7 px-7 py-7 
    underline decoration font-serif'>COLOR WORLD!!</h1>
        <div className="flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "red"}}
          >RED</button>

          <button
          onClick={() => setColor("green")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "green"}}
          >GREEN</button>

          <button
          onClick={() => setColor("blue")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "blue"}}
          >BLUE</button>

          <button 
           onClick={() => setColor("gray")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "gray"}}
          >GRAY</button>

          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "pink"}}
          >PINK</button>

           <button 
           onClick={() => setColor("orange")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "orange"}}
          >ORANGE</button>

           <button 
           onClick={() => setColor("purple")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "purple"}}
          >PURPLE</button>

          <button 
           onClick={() => setColor("black")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "black"}}
          >BLACK</button>

          <button 
           onClick={() => setColor("magenta")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "magenta"}}
          >MAGENTA</button>

          <button 
           onClick={() => setColor("yellow")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "yellow"}}
          >YELLOW</button>

          <button 
           onClick={() => setColor("indigo")}
           className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style =  {{backgroundColor: "indigo"}}
          >INDIGO</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
