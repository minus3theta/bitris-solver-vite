export const boardWidth: number = 10

export type BoardData = boolean[][]

export function toggleBoardCell(prevData: BoardData, x: number, y: number): BoardData {
  const data = [...prevData]
  data[y][x] = !data[y][x]
  return data
}

export function emptyBoardData(height: number): BoardData {
  return [...Array(height)].map(emptyRowData)
}

export function emptyRowData(): boolean[] {
  return Array(boardWidth).fill(false)
}

export function boardToString(boardData: BoardData): string {
  return [...boardData].reverse().map((row) => row.map((c) => c ? '#' : '.').join('')).join('\n')
}
