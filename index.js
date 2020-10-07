const express = require('express')
const app = express()

const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on("connection", (socket) => {
    socket.on("disconnect",(socket)=>{
        console.log("User de id " + socket.id + ' acabou de desconectar')
    })

    socket.on("msg", (data) => {
        
        io.emit('showmsg',data)
        console.log(data)
    })
})


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

http.listen(3030)
