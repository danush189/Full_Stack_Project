import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Indexpage from './Index'
import Adopt from './adopt'
import Donate from './donate'
import Shelters from './Shelters'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Indexpage />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/adopt' element={<Adopt />}></Route>
      <Route path='/donate' element={<Donate />}></Route>
      <Route path="/shelters" element={<Shelters />}> </Route>
      
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
