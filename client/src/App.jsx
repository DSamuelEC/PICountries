import { Routes, Route } from 'react-router-dom';
import LandingPage from './screens/Landing/LandingPage';
import Home from './screens/Home/Home';
import Detail from './screens/Detail/Detail';
import Create from './screens/Create/Create';
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default App;