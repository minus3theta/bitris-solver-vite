import { Box, Button, Container, TextField } from "@mui/material";
import { srs } from 'wasm'
import Board from "./Board";
import { useEffect, useState } from "react";
import { emptyBoardData, toggleBoardCell, BoardData, emptyRowData, boardToString } from "./BoardData";

export default function Solver() {
  const handleRun = () => {
    const boardStr = boardToString(boardData)
    console.log(srs(boardStr, height))
  }
  const [height, setHeight] = useState(4)
  const [boardData, setBoardData] = useState<BoardData>(emptyBoardData(4))
  useEffect(() => {
    setBoardData((prev) => {
      const data = prev.slice(0, height)
      while (data.length < height) {
        data.push(emptyRowData())
      }
      return data
    })
  }, [height])

  return <Container>
    <Box>
      <TextField
        margin="normal"
        label="Lines to delete"
        fullWidth
        type="number"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
      />
      <Board
        boardState={boardData}
        handleClickAt={(x, y) => setBoardData((prev: BoardData) => toggleBoardCell(prev, x, y))}
      />
      <Button variant="outlined" onClick={handleRun}>Run</Button>
    </Box>
  </Container>
}
