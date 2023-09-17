import { useEffect } from 'react'
import './App.css'
import init, { srs } from 'wasm'

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <h1>PC finder</h1>
      <div className="card">
        <button onClick={() => console.log(srs())}>Run</button>
      </div>
    </>
  )
}

export default App
