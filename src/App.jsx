import './App.css'

import Home from './containers/home'
import Basket from './containers/basket'
import Header from './components/header'

import {Routes, Route, Navigate} from "react-router-dom"



function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route exatch path="/" element={<Home />} />
        <Route exatch path="basket" element={<Basket />} />
      </Routes>
      
    </div>
  )
}

export default App
