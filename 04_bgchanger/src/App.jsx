import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('grey')
  return (
    <>
      <div className='w-full h-screen flex justify-center ' style={{backgroundColor: color}}>

        <div className='bg-white fixed bottom-16 p-5 rounded-3xl  flex gap-3'>
          <button className='bg-red-600 text-white p-4 rounded-2xl w-24' onClick={() => setColor('red')}>Red</button>

          <button className='bg-green-600 text-white p-4 rounded-2xl w-24' onClick={() => setColor('green')}>Green</button>

          <button className='bg-blue-600 text-white p-4 rounded-2xl w-24' onClick={() => setColor('blue')}>Blue</button>

          <button className='bg-yellow-600 text-white p-4 rounded-2xl w-24' onClick={() => setColor('yellow')}>Yellow</button>

          <button className='bg-pink-600 text-white p-4 rounded-2xl w-24' onClick={() => setColor('pink')}>Pink</button>
          
        </div>
      </div>
      
    </>
  )
}

export default App
