import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Reference from './components/Reference'
import Wsubmit from './components/Wsubmit'
// import Wsubmitlink from './components/Wsubmitlink1'
import DiscussionForum from './components/DiscussionForum'
import Wsubmitlink1 from './components/Wsubmitlink1'
import Wsubmitlink2 from './components/Wsubmitlink2'
import Wsubmitlink3 from './components/Wsubmitlink3'
import Wsubmitlink4 from './components/Wsubmitlink4'
import Wsubmitlink5 from './components/Wsubmitlink5'
import Wsubmitlink6 from './components/Wsubmitlink6'

function App() {

  return (
    <>
      <Routes>
      <Route path={'/'} element={<Main child={<Home/>}/>}></Route>
      <Route path={'/reference'} element={<Main child={<Reference/>}/>}></Route>
      <Route path={'/wsubmit'} element={<Main child={<Wsubmit/>}/>}></Route>
      <Route path={'/wsubmitlink1'} element={<Main child={<Wsubmitlink1/>}/>}></Route>
      <Route path={'/wsubmitlink2'} element={<Main child={<Wsubmitlink2/>}/>}></Route>
      <Route path={'/wsubmitlink3'} element={<Main child={<Wsubmitlink3/>}/>}></Route>
      <Route path={'/wsubmitlink3'} element={<Main child={<Wsubmitlink3/>}/>}></Route>
      <Route path={'/wsubmitlink4'} element={<Main child={<Wsubmitlink4/>}/>}></Route>
      <Route path={'/wsubmitlink5'} element={<Main child={<Wsubmitlink5/>}/>}></Route>
      <Route path={'/wsubmitlink6'} element={<Main child={<Wsubmitlink6/>}/>}></Route>
      <Route path={'/discussion'} element={<Main child={<DiscussionForum  />}/>}></Route>
      
      
      </Routes>
    </>
  )
}

export default App
