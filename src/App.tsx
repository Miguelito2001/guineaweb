import './App.css'
import AppNav from './Components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import WhyGuinea from './Components/WhyGuinea'
import Industries from './Components/Industries'
import Contact from './Components/Contact'

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <AppNav/>
        <div className='main-view-container'>
          <Routes>
            <Route path='/inicio' element={<Home/>}/>
            <Route path='/nosotros' element={<About/>}/>
            <Route path='/servicios' element={<Services/>}/>
            <Route path='/porqueguineaecuatorial' element={<WhyGuinea/>}/>
            <Route path='/industriasclaves' element={<Industries/>}/>
            <Route path='/contacto' element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
