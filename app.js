const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const authRouter = require('./routes/auth.router')
const declRouter = require('./routes/decl.router')
const articleRouter = require('./routes/article.router')
const { PORT = 5000 } = process.env;
require('./bin/mongo-db-connection')


const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(authRouter)
app.use(declRouter)
app.use(articleRouter)


app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
  })
  
  app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message })
  })
  
  
  app.listen(PORT, () => {
      console.log('Server is running...')
  });
