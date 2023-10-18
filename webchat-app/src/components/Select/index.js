import { forwardRef } from 'react'
import styled from 'styled-components'
import { space, color, layout, typography, compose } from 'styled-system'

const styles = compose(space, color, layout, typography)

const StyledSelect = styled.select`
  border: 1px solid #ccc;
  padding: 15px 8px;
  border-radius: 4px;
  font-size: 18px;

  ${styles}
`

const Select = forwardRef(({ options, ...rest }, ref) => (
  <StyledSelect ref={ref} {...rest}>
    {options.map((option, idx) => (
      <option key={idx} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
))

export default Select
