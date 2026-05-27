import { useEffect, useRef } from 'react'

const GridBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const CELL_SIZE = 40

    const handleMouseMove = (e) => {
      const col = Math.floor(e.clientX / CELL_SIZE)
      const row = Math.floor(e.clientY / CELL_SIZE)
      const cols = Math.ceil(window.innerWidth / CELL_SIZE) + 1

      // Les 4 cases autour du curseur
      const neighbors = [
        { c: col, r: row },
        { c: col - 1, r: row },
        { c: col + 1, r: row },
        { c: col, r: row - 1 },
        { c: col, r: row + 1 },
      ]

      neighbors.forEach(({ c, r }) => {
        const index = r * cols + c
        const cell = container.children[index]
        if (!cell) return

        cell.style.backgroundColor = 'rgba(250, 204, 21, 0.15)'
        cell.style.transition = 'background-color 0s'

        setTimeout(() => {
          cell.style.backgroundColor = 'transparent'
          cell.style.transition = 'background-color 2s ease'
        }, 80)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const CELL_SIZE = 40
  const cols = Math.ceil(window.innerWidth / CELL_SIZE) + 1
  const rows = Math.ceil(window.innerHeight / CELL_SIZE) + 1
  const total = cols * rows

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      style={{
        zIndex: 0,
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
        gridTemplateRows: `repeat(${rows}, ${CELL_SIZE}px)`,
        pointerEvents: 'none',
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            border: '1px solid rgba(255,255,255,0.04)',
            backgroundColor: 'transparent',
          }}
        />
      ))}
    </div>
  )
}

export default GridBackground