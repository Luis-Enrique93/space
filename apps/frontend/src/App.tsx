import { useEffect } from 'react'
import { AppManager } from './core/managers/app.manager'

function App() {
  useEffect(() => {
    AppManager.getInstance()
  }, [])

  return <canvas className='w-full h-full fixed top-0 left-0' id='canvas' />
}

export default App
