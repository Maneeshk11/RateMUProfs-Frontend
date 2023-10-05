// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
// import { Routes, Route } from "react-router"
import NavBarMinimized from "./components/molecules/navBar/navBarMinimized"
import BackgroundPage from './components/organisms/background'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width: '80%',
    height: '8rem',
  },
};

function App() {
  const [isNotDesktop, setIsNotDesktop] = useState<boolean>(false)
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 1150) {
      setIsNotDesktop(true)
    }
  }, [])
  return (
    <div className='h-screen flex flex-row font-sans w-screen'>
      {
        isNotDesktop && <Modal isOpen={true} style={customStyles}>
          <div className='flex items-center justify-center text-center h-full rounded-3xl'>
            <span>Please open on desktop. Soon on tablets & mobiles!</span>
          </div>
        </Modal>
      }
      <NavBarMinimized></NavBarMinimized>
      <BackgroundPage></BackgroundPage>
      {/* <Routes>
        <Route path={"/schools"} Component={SchoolsPage}></Route>
      </Routes> */}
    </div>
  )
}

export default App
