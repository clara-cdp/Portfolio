import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import OfflinePage from './pages/OfflinePage'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const offlineHashes = ['#offline', '#identity', '#journey', '#projects', '#contact'];
  if (offlineHashes.includes(currentPath) || currentPath.startsWith('#offline')) {
    return <OfflinePage />
  }

  return <LandingPage />
}

export default App
