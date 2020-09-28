import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'

const PORT = 4444

const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to apps catalogue API' })
})

export const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}
