import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import OfflinePage from './pages/OfflinePage'
import OfflineProjectDetailPage from './components/OfflineSections/OfflineProjectDetailPage'
import OfflineEditorialPage from './components/OfflineSections/OfflineEditorialPage'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (currentPath.startsWith('#offline/projects/')) {
    const projectId = currentPath.replace('#offline/projects/', '')
    return <OfflineProjectDetailPage projectId={projectId} />
  }

  if (currentPath === '#offline/editorial') {
    return <OfflineEditorialPage />
  }

  const offlineHashes = ['#offline', '#identity', '#journey', '#projects', '#bonus', '#contact'];
  if (offlineHashes.includes(currentPath) || currentPath.startsWith('#offline')) {
    return <OfflinePage />
  }

  return <LandingPage />
}

export default App
