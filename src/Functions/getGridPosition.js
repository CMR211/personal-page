export default function getGridPosition (grid, size, position) {
  let percentages;
  if (size === 'small') {
    percentages = [0.21, 0.79, 0.2, 0.8]
  }
  if (size === 'big') {
    percentages = [0.15, 0.85, 0.1, 0.8]
  }
  const gridPosition = {
    colStart:   Math.round( grid[0] * percentages[0] ) + 1,
    colEnd:     Math.round( grid[0] * percentages[1] ) + 1,
    rowStart:   Math.round( grid[2] * percentages[2] ) + 1,
    rowEnd:     Math.round( grid[2] * percentages[3] ) + 1,
  }
  if (size === 'small' && window.innerWidth < 500)  {
    if (position === 'colStart') return 2
    if (position === 'colEnd') return grid[0] 
  }
  return gridPosition[position]

}

