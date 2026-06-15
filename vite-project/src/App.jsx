import './App.css'
import { Route,Routes, useLocation } from 'react-router-dom'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Auth from './pages/auth'
import Navbar from './components/navbar/navbar'
import AuthProvider from './context/AuthContext'
import ProdDetails from './pages/ProdDetails'
import CartProvider from './context/CartContext'
function App() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <CartProvider>
      <AuthProvider>
        <div className={"app" + (isAuthPage ? ' dimmed' : '')}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/check' element={<Checkout />}></Route>
            <Route path='/login' element={<Auth />}></Route>
            <Route path='/signup' element={<Auth />}></Route>
            <Route path='/prod/:id' element={<ProdDetails />}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </CartProvider>
  )
}

export default App
