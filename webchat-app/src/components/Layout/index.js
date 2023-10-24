import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import Column from '../Column'

import 'react-toastify/dist/ReactToastify.css'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }
`

const Layout = ({ children }) => (
  <Column justifyContent='center' minHeight='100vh' height='100%'>
    <GlobalStyles />
    <ToastContainer
      position='top-center'
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    {children}
  </Column>
)

export default Layout
