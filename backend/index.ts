import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (c) => c.json({ message: "Kanban API is running!" }));
app.get("/api/health", (c) => c.json({ status: "OK" }));

// Export the app object with port configuration
export default {
  port: 3000,
  fetch: app.fetch,
};

console.log("🚀 frontend is running on http://localhost:5173");
