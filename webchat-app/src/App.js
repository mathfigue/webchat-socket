import { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Chat, Signin } from 'routes'
import { Column, Layout } from 'components'

import gestaoDS from 'assets/logo_gestaods.png'

const App = () => {
  const [user, setUser] = useState('')

  const userRef = useRef()
  const roomRef = useRef()

  const handlerCheckUser = () => {
    if (!userRef?.current?.value.trim()) {
      userRef.current.focus()
      return
    }

    const name = userRef?.current?.value
    const room = roomRef?.current?.value

    setUser({ id: uuid(), name, room })
  }

  return (
    <Layout>
      <Column alignItems='center' m='20px'>
        <img src={gestaoDS} alt='GestãoDS' />
        webchat socket
      </Column>
      {user ? (
        <Chat user={user} setUser={setUser} />
      ) : (
        <Signin
          userRef={userRef}
          roomRef={roomRef}
          handlerCheckUser={handlerCheckUser}
        />
      )}
    </Layout>
  )
}

export default App
