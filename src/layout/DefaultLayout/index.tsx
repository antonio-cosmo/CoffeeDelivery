import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <ToastContainer autoClose={2000} theme="dark" />
    </LayoutContainer>
  )
}
