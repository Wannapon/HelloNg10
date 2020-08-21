const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/Ng10', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
  console.log('Mongoode default connection open')
})

mongoose.connection.on('error', (err) => {
  console.log(`Mongoode default connection error: ${err}`)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
})

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})
