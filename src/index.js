const express = require('express')
require('./db/connection')
const userRouter = require('./routers/user')
const postsRouter = require('./routers/posts')

const app = express()
const port = (process.env.PORT || 3000)
app.use(express.json())
app.use(userRouter)
app.use(postsRouter)

process.on('unhandledRejection', up => { throw up })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})