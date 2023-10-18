import { useEffect, useState, useRef } from 'react'
import { io } from 'socket.io-client'

import { ChatContainer, Column, Button, Row, Typography } from 'components'

const Chat = ({ user, setUser }) => {
  const [storeSocket, setStoreSocket] = useState(null)
  const [messages, setMessages] = useState([])

  const messageRef = useRef()

  const handlerSendMessage = () => {
    if (!storeSocket || !messageRef) return

    const message = messageRef.current.value

    setMessages((prevState) => [...prevState, { message, user }])
    storeSocket.emit('new-message', {
      message,
      user,
    })
    messageRef.current.value = ''
  }

  useEffect(() => {
    const socket = io('http://localhost:3001')

    socket.on('connect', () => {
      socket.emit('join-room', user?.room)
      setStoreSocket(socket)
    })

    socket.on('send-message', (data) =>
      setMessages((prevState) => [...prevState, data])
    )

    return () => socket.disconnect()
    //eslint-disable-next-line
  }, [])

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
