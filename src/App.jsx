import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DoubleNavbar } from './Navbar/DoubleNavbar'
import "@mantine/core/styles.css"
import routes from './Navbar/Route'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
      <RouterProvider router={routes} />    
     </>
  )
}

export default App
