import { useEffect, useState } from 'react'
import { getRooms } from 'providers/supabase'
import { toast } from 'react-toastify'

import { Column, CreateRoom, SigninUser } from 'components'

const Signin = ({ userRef, roomRef, handlerCheckUser }) => {
  const [rooms, setRooms] = useState([])
  const [createRoom, setCreateRoom] = useState(false)

  const handlerGetRoom = async () => {
    try {
      const { data: rooms } = await getRooms()

      setRooms(rooms)
    } catch {
      toast.error('Não foi possível resgatar listagem de salas.')
    }
  }

  useEffect(() => {
    handlerGetRoom()
  }, [])

  return (
    <Column alignItems='center'>
      {createRoom ? (
        <CreateRoom
          handlerGetRoom={handlerGetRoom}
          setCreateRoom={setCreateRoom}
        />
      ) : (
        <SigninUser
          userRef={userRef}
          roomRef={roomRef}
          rooms={rooms}
          setCreateRoom={setCreateRoom}
          handlerCheckUser={handlerCheckUser}
        />
      )}
    </Column>
  )
}

export default Signin
