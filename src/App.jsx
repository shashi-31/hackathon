import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-20 bg-blue-500 text-white flex items-center justify-center'>
      headder
    </div>
    <div className=' min-h-screen bg-green-200'>
    <Outlet />
    </div>
    <div className='h-20 bg-blue-500 text-white flex items-center justify-center'>
      footer
    </div>
    </>
  )
}

export default App
