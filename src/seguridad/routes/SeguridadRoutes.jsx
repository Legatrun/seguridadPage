import { Route, Routes, Navigate } from 'react-router-dom'
import { ClientesPage, ContactoPage, HomePage, NosotrosPage, ServiciosPage } from '../pages'

export const SeguridadRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/clientes' element={<ClientesPage />} />
      <Route path='/contacto' element={<ContactoPage />} />
      <Route path='/nosotros' element={<NosotrosPage />} />
      <Route path='/servicios' element={<ServiciosPage />} />
      <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}
