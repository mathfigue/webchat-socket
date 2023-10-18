import Typography from '../Typography'
import Column from '../Column'

import { colors } from 'configs'

const MessageContainer = ({ sender, message, user, ...rest }) => {
  return (
    <Column
      width='100%'
      flexDirection='column-reverse'
      alignItems={sender === 'sender' ? 'flex-end' : 'flex-start'}
      p='0 20px'
      m='5px 0'
      zIndex='2'
      sender={sender}
      {...rest}
    >
      <Column
        width='100%'
        flexDirection='column'
        maxWidth='250px'
        borderRadius='10px'
        p='15px'
        bg={
          sender === 'sender'
            ? `rgba(${colors.chat.sender}, 0.8)`
            : `rgba(${colors.chat.receiver}, 0.8)`
        }
      >
        <Typography fontSize='20px' fontWeight='bold' color={colors?.black}>
          {user}
        </Typography>
        <Typography fontSize='16px' color={colors?.black} wordWrap='break-word'>
          {message}
        </Typography>
      </Column>
    </Column>
  )
}

export default MessageContainer
