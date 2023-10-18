import { createGlobalStyle } from 'styled-components'

import Column from '../Column'

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
    {children}
  </Column>
)

export default Layout
