import { Route, Routes, Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Nosotros } from './pages/Nosotros/Nosotros'
import { Seguros } from './pages/Seguros/Seguros'
import { Contacto } from './pages/Contacto/Contacto'
import { ResetPass } from './pages/Reset/Reset'

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function AuthLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/reset/password" element={<ResetPass />} />
      </Route>

    </Routes>
  )
}