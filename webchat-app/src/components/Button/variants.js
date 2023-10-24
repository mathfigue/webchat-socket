import { variant } from 'styled-system'
import { colors } from '../../configs'

const roundedButton = '68px'

export const variants = ({ color = 'primary' }) =>
  variant({
    prop: 'variant',
    variants: {
      filled: {
        color: colors.white,
        bg: colors[color].dark,
        border: `1px solid ${colors[color].dark}`,
        '&:hover': {
          bg: colors[color].main,
          fill: colors.white,
          border: `1px solid ${colors[color].main}`,
        },
      },
      outlined: {
        color: colors[color].dark,
        bg: colors.white,
        border: `1px solid ${colors[color].dark}`,
        '&:hover': {
          bg: colors.white,
          fill: colors[color].dark,
          border: `1px solid ${colors[color].main}`,
        },
      },
      rounded: {
        borderRadius: '100%',
        border: 'none',
        width: roundedButton,
        height: roundedButton,
        minWidth: roundedButton,
        minHeight: roundedButton,
        bg: colors[color].main,
      },
    },
  })
