import Row from '../Row'
import Button from '../Button'
import Input from '../Input'

import SendButtonIcon from 'assets/send_button'

const SendMessage = ({ handlerSendMessage, messageRef, ...props }) => (
  <Row
    zIndex='3'
    alignItems='center'
    padding='15px'
    gap='20px'
    backgroundColor='#fff'
    {...props}
  >
    <Input
      ref={messageRef}
      width='100%'
      height='65px'
      fontSize='24px'
      onKeyPress={(e) => e.charCode === 13 && handlerSendMessage()}
      placeholder='Mensagem...'
    />
    <Button
      type='button'
      variant='rounded'
      color='secondary'
      onClick={handlerSendMessage}
    >
      <SendButtonIcon />
    </Button>
  </Row>
)

export default SendMessage
