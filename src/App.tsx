// import { useState } from 'react'
import './App.css'
// import { Routes, Route } from "react-router"
import NavBarMinimized from "./components/molecules/navBar/navBarMinimized"
import BackgroundPage from './components/organisms/background'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex flex-row font-sans w-screen'>
      <NavBarMinimized></NavBarMinimized>
      <BackgroundPage></BackgroundPage>
      {/* <Routes>
        <Route path={"/schools"} Component={SchoolsPage}></Route>
      </Routes> */}
    </div>
  )
}

export default App
