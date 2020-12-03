const dotenv = require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 4000
const cors = require('cors')
const path = require('path')

console.log('web 36 rocks')
console.log(__dirname)
console.log(process.env.USER)
console.log(process.env.PORT)
console.log(process.env.LADY)
console.log(process.env.ALWAYS)
console.log(process.env.FOO)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))

// api routers
app.use('/api/*', (_, res) => {
    res.json({ message: `web 36 is AWESOME!!`})
})

app.use('*', (_, res) => {
    res.sendFile(path.join(__dirnanme, 'client/build', 'index.html'))
})

app.listen(port, () => {
 console.log(`listening on ${port}`)
})

