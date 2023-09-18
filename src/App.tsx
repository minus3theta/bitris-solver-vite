import { useEffect } from 'react'
import init, { srs } from 'wasm'
import { Button } from '@mui/material'

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <h1>PC finder</h1>
      <div>
        <Button variant="outlined" onClick={() => console.log(srs())}>Run</Button>
      </div>
    </>
  )
}

export default App
