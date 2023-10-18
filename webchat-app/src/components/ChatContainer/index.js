import { useEffect, useRef } from 'react'

import MessageContainer from '../MessageContainer'
import SendMessage from '../SendMessage'
import Column from '../Column'

import wppBg from 'assets/wpp_bg.png'

const ChatContainer = ({
  user,
  messages = [],
  handlerSendMessage,
  messageRef,
}) => {
  const containerRef = useRef()

  useEffect(() => {
    if (containerRef) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <Column
      position='relative'
      flexDirection='column'
      m='30px 0'
      width='100%'
      maxWidth='550px'
      height='800px'
      border='1px solid #c6c6c6'
      zIndex='0'
      bg={wppBg}
    >
      <Column
        ref={containerRef}
        flexDirection='column'
        height='100%'
        overflow='auto'
      >
        {messages.map(({ message, user: { name, id } }, idx) => (
          <MessageContainer
            sender={user.id === id ? 'sender' : 'receiver'}
            message={message}
            user={name}
            key={idx}
          />
        ))}
      </Column>
      <SendMessage
        mt='20px'
        messageRef={messageRef}
        handlerSendMessage={handlerSendMessage}
      />
    </Column>
  )
}

export default ChatContainer
