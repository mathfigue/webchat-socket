import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()

const io = new Server(httpServer, { cors: { origin: '*' } })

io.on('connection', (socket) => {
  socket.on('join-room', (room) => socket.join(room))

  socket.on('new-message', ({ message, user }) => {
    socket.to(user.room).emit('send-message', { message, user })
  })

  socket.on('disconnect', () => console.log('Um usuário se desconectou.'))
})

httpServer.listen(3001)
