import { Route, Routes } from "react-router-dom"
import { SeguridadRoutes } from "../seguridad/routes/SeguridadRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<SeguridadRoutes />} />

    </Routes>
  )
}
