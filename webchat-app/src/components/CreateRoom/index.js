import { useRef } from 'react'
import { toast } from 'react-toastify'
import { createRoom } from 'providers/supabase'

import Column from 'components/Column'
import Input from 'components/Input'
import Button from 'components/Button'

const CreateRoom = ({ handlerGetRoom, setCreateRoom }) => {
  const roomRef = useRef()

  const handlerCreateRoom = async () => {
    try {
      const roomName = roomRef?.current?.value

      if (roomName.trim() === '') {
        roomRef?.current?.focus()
        toast.info('Nome da sala é obrigatório.')
        return false
      }

      await createRoom(roomName)

      handlerGetRoom()
      setCreateRoom(null)
    } catch {
      toast.error('Não foi possível criar nova sala.')
    }
  }

  return (
    <Column width='100%' maxWidth='420px'>
      <Input ref={roomRef} type='text' placeholder='Nome da sala' />
      <Button mt='20px' onClick={handlerCreateRoom}>
        Adicionar nova sala
      </Button>
      <Button mt='20px' variant='outlined' onClick={() => setCreateRoom(null)}>
        Cancelar
      </Button>
    </Column>
  )
}

export default CreateRoom
