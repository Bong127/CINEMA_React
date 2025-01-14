import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Join from './pages/Join'
import User from './pages/User'
import About from './pages/About'
import LoginContextProvider from './contexts/LoginContextProvider'
import Layout from './components/Layout/Layout'
function App() {

  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Route>
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App
