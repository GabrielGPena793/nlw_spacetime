import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastify from 'fastify'
import { resolve } from 'path'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true, // Todas URLs de font-end poderão acessar nosso back-end, para colocar urls especificas só trocar para uma array com os endpoits que terãoa cesso [ "http://localhost:3333", "https://producao.com"]
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(uploadRoutes)
app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0', // pra funcionar no mobile precisar ter isso
  })
  .then(() => {
    console.log('server running in http://localhost:3333')
  })
