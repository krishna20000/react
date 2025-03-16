import { useState } from "react"

function App() {
  const [color , setColor] = useState("red")
  return (
    
     
      <div className='w-full h-screen' style = {{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 bg-gray-200'>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("red")}>Red</button>
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("green")}>Green</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("blue")}>Blue</button>
          <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("pink")}>Pink</button>
          <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("gray")}>Gray</button>
          <button className='bg-black hover:bg-black text-white font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("black")}>Black</button>
          <button className='bg-white hover:bg-white text-black font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("white")}>White</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-3' onClick={() => setColor("orange")}>Orange</button>
          <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={() => setColor("purple")}>Purple</button>
        </div>
        
        
      </div>
   
  )
}

export default App
