import { forwardRef } from 'react'
import Row from '../Row'

const Column = forwardRef(({ children, ...rest }, ref) => (
  <Row ref={ref} flexDirection='column' {...rest}>
    {children}
  </Row>
))

export default Column
