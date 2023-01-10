require("dotenv").config()
const express = require("express")
const app = express()
const env = process.env.NOM_ENV
app.use(express.json())

app.get("/", function (req, res) {
  res.send(`Hello World! Environnement de ${env}`)
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
