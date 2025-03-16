import { useState, useCallback, useEffect } from 'react'

import React from 'react'
import './App.css'

const App = () => {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const [lowerAllowed,setlowerAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(
    () => {
      let password = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*()_+~"
      if (lowerAllowed) str += "abcdefghijklmnopqrstuvwxyz"
      for(let i of Array(length - password.length).fill("")){
        password += str[Math.floor(Math.random() * str.length)];
      }
      setPassword(password);
    },
    [length, numberAllowed, charAllowed,lowerAllowed, setPassword]
  )
  
  useEffect(() => {
    passwordGenerator();
    
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-10 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='w-full p-2 text-lg text-gray-800 bg-gray-100 '
            placeholder='Password'
            readOnly/>
            <button 
            onClick={passwordGenerator}
            className='outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 '>
              copy
            </button>
        </div>
        <div className="flex flex-col gap-3">
  {/* Range slider on one line */}
  <div className="flex items-center gap-2">
    <input
      type="range"
      min="6"
      max="20"
      value={length}
      className="cursor-pointer"
      onChange={(e) => setLength(e.target.value)}
    />
    <label className="mr-3">Length: {length}</label>
  </div>

  {/* Numbers & Characters checkboxes on a new line */}
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-1">
      <input
        type="checkbox"
        id="numbers"
        checked={numberAllowed}
        onChange={(e) => setNumberAllowed(e.target.checked)}
      />
      <label htmlFor="numbers">Numbers</label>
    </div>

    <div className="flex items-center gap-1">
      <input
        type="checkbox"
        id="characters"
        checked={charAllowed}
        onChange={(e) => setcharAllowed(e.target.checked)}
      />
      <label htmlFor="characters">characters</label>
    </div>
    <div className="flex items-center gap-1">
      <input
        type="checkbox"
        id="lowercasecharacters"
        checked={lowerAllowed}
        onChange={(e) => setlowerAllowed(e.target.checked)}
      />
      <label htmlFor="lowercasecharacters">lower case</label>
    </div>
  </div>
</div>

      </div>
    </>
  )
}

export default App