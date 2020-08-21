// backend
const express = require('express')
const bodyParser = require('body-parser')
require('./db')
const FeedbackModel = require('./feedback_schema')
0 
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// Allow client to access cross domain or ip-address
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
  return next()
})

// path link
app.get('/', (req, res) => {
  res.end('Welcome to root path')
})

app.get('/home', (req, res) => {
  res.end('Welcome to home path')
})

app.post('/api', async (req, res) => {
  const { feedback } = req.body
  const { username } = req.body

  try {
    await FeedbackModel.create(req.body)
    res.json({ result: 'success', username, feedback })
  } catch (error) {
    res.json('FAILED : please fill username and feedback')
    console.log(error);
  }
})

app.get('/api', (req, res) => {
  FeedbackModel.find((err, doc) => {
    if (err) res.json({ result: 'failed' })
    res.json({ result: 'success', data: doc })
  })
})

if (app.listen(3000, () => { })) {
  console.log('server is running...')
} else {
  console.log('server is notready...');
}
