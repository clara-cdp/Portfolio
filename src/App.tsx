import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import OfflinePage from './pages/OfflinePage'
import OnlinePage from './pages/OnlinePage'
import OfflineProjectDetailPage from './components/OfflineSections/OfflineProjectDetailPage'
import OnlineProjectDetailPage from './components/OnlineSections/OnlineProjectDetailPage'
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

  useEffect(() => {
    const isOnline = currentPath.startsWith('#online')
    
    if (isOnline) {
      document.documentElement.classList.add('online-mode')
      
      const interpolateColor = (progress: number): string => {
        const colors = [
          { r: 255, g: 197, b: 86 },  // Orange (#FFC556)
          { r: 229, g: 184, b: 66 },  // Gold (#E5B842)
          { r: 23,  g: 208, b: 208 }, // Cyan (#17D0D0)
          { r: 14,  g: 143, b: 143 }  // Teal (#0e8f8f)
        ]
        
        if (progress <= 0) return `rgb(${colors[0].r}, ${colors[0].g}, ${colors[0].b})`
        if (progress >= 1) return `rgb(${colors[colors.length - 1].r}, ${colors[colors.length - 1].g}, ${colors[colors.length - 1].b})`
        
        const segment = 1 / (colors.length - 1)
        const index = Math.floor(progress / segment)
        const startColor = colors[index]
        const endColor = colors[index + 1]
        const t = (progress - index * segment) / segment
        
        const r = Math.round(startColor.r + (endColor.r - startColor.r) * t)
        const g = Math.round(startColor.g + (endColor.g - startColor.g) * t)
        const b = Math.round(startColor.b + (endColor.b - startColor.b) * t)
        
        return `rgb(${r}, ${g}, ${b})`
      }

      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        if (totalHeight > 0) {
          const progress = window.scrollY / totalHeight
          const color = interpolateColor(progress)
          document.documentElement.style.setProperty('--online-scrollbar-color', color)
        } else {
          document.documentElement.style.setProperty('--online-scrollbar-color', 'rgb(255, 197, 86)')
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      // Trigger initially
      handleScroll()

      return () => {
        window.removeEventListener('scroll', handleScroll)
        document.documentElement.style.removeProperty('--online-scrollbar-color')
      }
    } else {
      document.documentElement.classList.remove('online-mode')
      document.documentElement.style.removeProperty('--online-scrollbar-color')
    }
  }, [currentPath])

  if (currentPath.startsWith('#offline/projects/')) {
    const projectId = currentPath.replace('#offline/projects/', '')
    return <OfflineProjectDetailPage projectId={projectId} />
  }

  if (currentPath.startsWith('#online/projects/')) {
    const projectId = currentPath.replace('#online/projects/', '')
    return <OnlineProjectDetailPage projectId={projectId} />
  }

  if (currentPath === '#offline/editorial') {
    return <OfflineEditorialPage />
  }


  if (currentPath.startsWith('#online')) {
    return <OnlinePage />
  }

  const legacyOfflineHashes = ['#offline', '#identity', '#journey', '#projects', '#bonus', '#contact'];
  if (currentPath.startsWith('#offline') || legacyOfflineHashes.includes(currentPath)) {
    return <OfflinePage />
  }

  return <LandingPage />
}

export default App

