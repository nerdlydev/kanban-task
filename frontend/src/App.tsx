import { useState, useEffect } from "react";

function App() {
  const [serverStatus, setServerStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:4000/api/health")
      .then((res) => res.json())
      .then(() => setServerStatus("✅ Connected"))
      .catch(() => setServerStatus("❌ Server not running"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Kanban Board</h1>
          <p className="text-sm text-gray-600">Server: {serverStatus}</p>
          <p className="text-xs text-blue-600">⚡ Pure Bun Power!</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            🚀 Pure Bun Setup Complete!
          </h2>
          <p className="text-gray-600 mb-4">
            Everything running with Bun - blazing fast!
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div>✅ React + TypeScript</div>
              <div>✅ Hono + Bun backend</div>
              <div>✅ PostgreSQL database</div>
            </div>
            <div className="space-y-2">
              <div>✅ Prisma ORM</div>
              <div>✅ Tailwind CSS</div>
              <div>✅ All dev tools ready</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Ready to build!</h3>
            <p className="text-green-700 text-sm">
              Your Kanban board foundation is complete. Time to add features!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
