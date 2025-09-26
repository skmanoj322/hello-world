const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('lets goo then how are you azure??')
})

app.listen(port, () => {
  console.log(`My frist deployment`)
})
