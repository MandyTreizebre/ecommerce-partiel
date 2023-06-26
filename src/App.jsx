import './App.css'

import Home from './containers/home'
import Basket from './containers/basket'
import Header from './components/header'

import {Routes, Route, Navigate} from "react-router-dom"



function App() {


  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App
