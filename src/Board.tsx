import { Box, ToggleButton } from '@mui/material'
import './Board.css'
import { BoardData } from './BoardData'

export default function Board({ boardState, handleClickAt }:
  {
    boardState: BoardData,
    handleClickAt?: (x: number, y: number) => void
  }) {
  return <Box className="board">
    {boardState.map((rowState, y) => <Row key={y} rowState={rowState} y={y} handleClickAt={handleClickAt} />)}
  </Box>
}

function Row({ rowState, y, handleClickAt }:
  {
    rowState: boolean[],
    y: number,
    handleClickAt?: (x: number, y: number) => void
  }) {
  return <Box className="row">
    {rowState.map((cellState, x) => <Cell key={x} cellState={cellState} x={x} y={y} handleClickAt={handleClickAt} />)}
  </Box>
}

function Cell({ cellState, x, y, handleClickAt }:
  {
    cellState: boolean,
    x: number,
    y: number,
    handleClickAt?: (x: number, y: number) => void
  }) {
  return <ToggleButton
    className="cell"
    value="check"
    selected={cellState}
    onClick={() => handleClickAt?.(x, y)}
  />
}
