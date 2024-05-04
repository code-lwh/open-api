import { Hono } from 'hono'
import * as fs from 'node:fs'

const app = new Hono()

app.notFound((c) => {
  return c.body("<h1>404 page ig</h1>")
})
app.get('/data/:id', (c) => {
  const page = c.req.query('page')
  const id = c.req.param('id')
  return c.body(`${id} ${page}`)
})
app.get('/', (c) => {
  return c.text(" BELLO WORLD")
})
export default app
