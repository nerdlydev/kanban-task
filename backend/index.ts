import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))

app.get('/', (c) => c.json({ message: 'Kanban API is running!' }))
app.get('/api/health', (c) => c.json({ status: 'OK' }))

console.log('🚀 Server running on http://localhost:3000')

serve({
  fetch: app.fetch,
  port: 3000
})

export default app
