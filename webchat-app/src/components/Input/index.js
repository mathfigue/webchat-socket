import { forwardRef } from 'react'
import styled from 'styled-components'
import { space, color, layout, typography, compose } from 'styled-system'

const styles = compose(space, color, layout, typography)

const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 15px 8px;
  font-size: 18px;
  border-radius: 4px;
  ${styles}
`

const Input = forwardRef((props, ref) => <StyledInput ref={ref} {...props} />)

export default Input
