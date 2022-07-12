// Importing file from db.js  
const connectToMongo = require('./db')

// After importing, calling the function
connectToMongo()

// express code
const express = require('express')
const app = express()
const port = 3000

// Availaible routes

// app.get('/', (req, res) => {
//   res.send('Hey hii, Its Mihir Narkar here!')
// })

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))




// It takes 2 parameters, 1st parameter as port number and another as arrow function which will return in console
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

