import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Indexpage from './Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Indexpage />}></Route>
      {/* <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route> */}
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
