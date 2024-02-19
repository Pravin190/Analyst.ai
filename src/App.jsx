import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {

  const [count, setcount] = useState(0);

  function clickHandler () {

      setcount(count + 1);

  }

  useEffect(() => {

    console.log('Component mounted');

    console.log('State changed:', count);
    
  }, [count]);


              
  return (

    <button className='w-[200px] h-[100px] mt-[20%] ml-[50%] text-red-700 flex flex-col gap-3 text-2xl' onClick={clickHandler}>

           <h1 className='ml-7'> {count} </h1>

           <div className='w-[70px] h-[40px] bg-green-400 border-1x solid rounded-sm text-black'>Add</div>

    </button>


  )
}

export default App