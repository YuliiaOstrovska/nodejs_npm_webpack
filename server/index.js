// express - напишемо простий скрипт для сервера, код скопіювали з сайту
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.listen(3000)


// скачали 