import styled from 'styled-components'
import { typography, space, color, layout, compose } from 'styled-system'

import { colors } from 'configs'

const style = compose(typography, space, color, layout)

const Typography = ({ children, as = 'p', ...rest }) => {
  const Base = styled[as]`
    color: ${({ color = 'primary.main' }) => colors[color]};
    word-break: break-all;
    ${style};
  `
  return <Base {...rest}>{children}</Base>
}

export default Typography
