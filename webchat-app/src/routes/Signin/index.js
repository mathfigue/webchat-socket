import { Column, Input, Button, Select } from 'components'

const rooms = [
  {
    value: 'default',
    label: 'Sala padrão',
  },
  {
    value: 'oficina',
    label: 'Oficina',
  },
]

const Signin = ({ userRef, roomRef, handlerCheckUser }) => {
  return (
    <Column alignItems='center'>
      <Column width='100%' maxWidth='420px'>
        <Input ref={userRef} type='text' placeholder='Digite seu nome' />
        <Select ref={roomRef} mt='20px' options={rooms} />
        <Button
          mt='20px'
          color='primary'
          fontWeight='bold'
          fontSize='16px'
          onClick={handlerCheckUser}
        >
          Entrar
        </Button>
      </Column>
    </Column>
  )
}

export default Signin
