import './App.css'
import { Route,Routes, useLocation } from 'react-router-dom'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Auth from './pages/auth'
import Navbar from './components/navbar/navbar'
import AuthProvider from './context/AuthContext'
function App() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <AuthProvider>
      <div className={"app" + (isAuthPage ? ' dimmed' : '')}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Checkout />}></Route>
          <Route path='/login' element={<Auth />}></Route>
          <Route path='/signup' element={<Auth />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
