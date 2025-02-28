import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Headder from './components/Headder'
import Footer from './components/Footer'
import { MyProvider } from './components/ContextProvider'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyProvider>
    <Headder />
    <div className=' min-h-screen bg-green-200'>
    <Outlet />
    </div>
    <Footer />
    </MyProvider>
    </>
  )
}

export default App
