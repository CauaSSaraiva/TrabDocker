import express from 'express'
const app = express()
const port = 3000

import filmesRoutes from './routes/filmes'

app.use(express.json())
app.use("/filmes", filmesRoutes)

app.get('/', (req, res) => {
  res.send('API de Filmes: Clube de Cinema')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})