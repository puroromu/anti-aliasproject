const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  const title = req.query.title;
  res.send('Hello World!\n${title}')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
