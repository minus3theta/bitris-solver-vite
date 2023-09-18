import { useEffect } from 'react'
import init, { srs } from 'wasm'

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <h1>PC finder</h1>
      <div>
        <button onClick={() => console.log(srs())}>Run</button>
      </div>
    </>
  )
}

export default App
