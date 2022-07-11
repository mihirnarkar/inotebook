// Importing file from db.js  
const connectToMongo = require('./db')

// After importing, calling the function
connectToMongo()

// express code
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hey hii, Its Mihir Narkar here!')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

