const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('nice its working lets go')
})

app.listen(port, () => {
  console.log(`My frist deployment`)
})
