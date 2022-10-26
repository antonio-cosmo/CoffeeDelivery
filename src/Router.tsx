import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Cart } from './pages/Cart'
import { Success } from './pages/Cart/Success'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="cart">
          <Route index element={<Cart />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Route>
    </Routes>
  )
}
