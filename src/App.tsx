import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-700 text-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
          Portfolio Skeleton
        </h1>
        <p className="text-slate-400 mb-6">
          React + TypeScript + Tailwind CSS v4 is successfully configured.
        </p>
        
        <div className="bg-slate-900/50 rounded-xl p-4 mb-6 border border-slate-700/50">
          <p className="text-sm font-mono text-slate-300">
            Edit <code className="text-blue-400">src/App.tsx</code> to begin building your portfolio page.
          </p>
        </div>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
        >
          Click count: {count}
        </button>
      </div>
    </div>
  )
}

export default App
