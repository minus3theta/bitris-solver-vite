import { useEffect } from 'react'
import init from 'wasm'
import { Container, Typography } from '@mui/material'
import Solver from './Solver'

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <Container>
      <Typography component='h1' variant='h5'>PC finder</Typography>
      <Solver />
    </Container>
  )
}

export default App
