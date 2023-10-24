import Column from 'components/Column'
import Input from 'components/Input'
import Row from 'components/Row'
import Button from 'components/Button'
import Select from 'components/Select'

const SigninUser = ({
  userRef,
  roomRef,
  rooms,
  setCreateRoom,
  handlerCheckUser,
}) => {
  return (
    <Column width='100%' maxWidth='420px'>
      <Input ref={userRef} type='text' placeholder='Digite seu nome' />
      <Row alignItems='center' gap='10px' mt='20px'>
        <Select width='100%' ref={roomRef} options={rooms} />
        {/* <Button maxWidth='32px' onClick={() => setCreateRoom(true)}>
          +
        </Button> */}
      </Row>
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
  )
}

export default SigninUser
