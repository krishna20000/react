import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState()



  return (
    <>
     
      <div className='text-center mt-5'>
        <button className='bg-red-400 px-4 py-2 rounded mr-4'>Red</button>
        <button className='bg-green-400 px-4 py-2 rounded mr-4'>Green</button>
        <button className='bg-blue-200 px-4 py-2 rounded mr-4'>blue</button>
        <button className='bg-gray-800 px-4 py-2 rounded mr-4 text-white'>Black</button>
        <button className='bg-white-200 px-4 py-2 rounded border border-black'>white</button>
      </div>
    </>
  )
}

export default App
