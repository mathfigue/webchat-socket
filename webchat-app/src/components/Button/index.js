import React from 'react'
import styled from 'styled-components'
import {
  layout,
  space,
  flexbox,
  compose,
  color,
  typography,
} from 'styled-system'

import { variants } from './variants'

const style = compose(space, layout, color, flexbox, typography)

const Base = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 3px 5px;
  font-size: 14px;
  width: 100%;
  height: 32px;
  min-width: 24px;
  transition: all 0.3s ease;
  ${variants};
  ${style};
`

const Button = ({ children, ...props }) => <Base {...props}>{children}</Base>

Button.defaultProps = {
  variant: 'filled',
  color: 'primary',
  type: 'button',
}

export default Button
