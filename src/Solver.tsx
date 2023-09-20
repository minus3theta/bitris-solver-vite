import { Box, Button, Container, TextField } from "@mui/material";
import { srs } from 'wasm'

const defaultBoardStr = `\
###.....##
###....###
###...####
###....###`

export default function Solver() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const boardStr = data.get("boardStr")!.toString()
    const height = Number(data.get("height")!.toString())
    console.log(srs(boardStr, height))
  }

  return <Container>
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        label="Board"
        id="boardStr"
        name="boardStr"
        multiline
        fullWidth
        rows={10}
        InputProps={{ sx: { fontFamily: "monospace" } }}
        defaultValue={defaultBoardStr}
      />
      <TextField
        margin="normal"
        label="Lines to delete"
        id="height"
        name="height"
        fullWidth
        type="number"
        defaultValue={4}
      />
      <Button type="submit" variant="outlined">Run</Button>
    </Box>
  </Container>
}
