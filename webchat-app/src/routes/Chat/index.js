import { useState, useRef } from 'react'

import { ChatContainer, Column, Button, Row, Typography } from 'components'

const Chat = ({ user, setUser }) => {
  const [storeSocket, setStoreSocket] = useState(null)
  const [messages, setMessages] = useState([])

  const messageRef = useRef()

  const handlerSendMessage = () => {}

  return (
    <Column alignItems='center'>
      <Row gap='20px' justifyContent='center' alignItems='center' width='100%'>
        <Typography fontSize='18px' color='primary'>
          bem-vindo(a) {user?.name}
        </Typography>
        <Button maxWidth='150px' onClick={() => setUser('')}>
          Sair
        </Button>
      </Row>
      <ChatContainer
        user={user}
        messageRef={messageRef}
        messages={messages}
        handlerSendMessage={handlerSendMessage}
      />
    </Column>
  )
}

export default Chat
