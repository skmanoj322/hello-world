const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hi manoj')
})

app.listen(port, () => {
  console.log(`My frist deployment`)
})
