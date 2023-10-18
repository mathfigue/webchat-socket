import { forwardRef } from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  color,
  flexbox,
  compose,
  border,
  shadow,
  position,
  background,
} from 'styled-system'

const style = compose(
  space,
  layout,
  color,
  flexbox,
  border,
  shadow,
  position,
  background
)

const Base = styled.div`
  display: flex;
  gap: ${({ gap = '0px' }) => gap};
  ${({ bg }) => (bg ? `background-image: url(${bg})` : '')};
  ${style};
`

const Row = forwardRef(({ children, ...props }, ref) => (
  <Base ref={ref} {...props}>
    {children}
  </Base>
))

export default Row
