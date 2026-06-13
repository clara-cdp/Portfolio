import { useState, useEffect } from 'react'
import LandingPage from './LandingPage'
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

  if (currentPath === '#offline') {
    return <OfflinePage />
  }

  return <LandingPage />
}

export default App
