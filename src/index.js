const express = require('express')
require('./db/connection')
const userRouter = require('./routers/user')

const app = express()
const port = (process.env.PORT || 3000)
app.use(express.json())
app.use(userRouter)

process.on('unhandledRejection', up => { throw up })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})