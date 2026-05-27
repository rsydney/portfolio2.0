import { Button } from '@/components/ui/button'

const techLogos = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
]

const gridPositions = [
  { name: 'Figma', col: 1, row: 1 },
  { name: 'Canva', col: 3, row: 1 },
  { name: 'Illustrator', col: 1, row: 2 },
  { name: 'React', col: 2, row: 2 },
  { name: 'Tailwind', col: 3, row: 2 },
  { name: 'Python', col: 1, row: 3 },
  { name: 'MongoDB', col: 2, row: 3 },
  { name: 'Github', col: 3, row: 3 },
]

const connections = [
  { from: [1,1], to: [2,2] },
  { from: [3,1], to: [2,2] },
  { from: [1,2], to: [2,2] },
  { from: [2,2], to: [3,2] },
  { from: [2,2], to: [2,3] },
  { from: [1,3], to: [2,3] },
  { from: [2,3], to: [3,3] },
]

const CELL = 96

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center px-16 pt-20 pb-24">

      {/* Côté gauche */}
      <div className="flex-1 flex flex-col gap-6">

        <div className="flex gap-3">
          <span className="border border-white/20 text-white/60 text-sm px-3 py-1 rounded-full">
            Design & Code
          </span>
          <span className="border border-orange-500/50 text-orange-400 text-sm px-3 py-1 rounded-full">
            Disponible
          </span>
        </div>

        <h1 className="text-6xl font-bold text-white leading-tight">
          Ton expérience <br /> mérite d'être belle <br /> et fonctionnelle.
        </h1>

        <p className="text-white/60 text-lg max-w-lg leading-relaxed">
          Designer UX/UI et développeur React, je crée des interfaces qui allient
          esthétique et performance.{' '}
          <strong className="text-white">
            Du design système au code production.
          </strong>
        </p>

        <p className="text-white/60 text-lg max-w-lg">
          De l'idée au produit fini, je t'accompagne pour donner vie à tes projets
          avec précision et créativité.
        </p>

        <Button
          onClick={scrollToContact}
          className="w-fit bg-yellow-400 hover:bg-yellow-50 text-black font-semibold px-8 py-6 text-base cursor-pointer"
        >
          🚀 Contacte moi
        </Button>

      </div>

      {/* Côté droit - Grille avec traits SVG */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative" style={{ width: `${3 * CELL}px`, height: `${3 * CELL}px` }}>

          {/* Traits SVG animés */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <defs>
              <style>{`
                @keyframes dash {
                  to { stroke-dashoffset: -100; }
                }
                @keyframes floatLogo {
                  0%   { transform: translateY(0px); }
                  50%  { transform: translateY(-8px); }
                  100% { transform: translateY(0px); }
                }
              `}</style>
            </defs>
            {connections.map((c, i) => {
              const x1 = (c.from[0] - 1) * CELL + CELL / 2
              const y1 = (c.from[1] - 1) * CELL + CELL / 2
              const x2 = (c.to[0] - 1) * CELL + CELL / 2
              const y2 = (c.to[1] - 1) * CELL + CELL / 2
              return (
                <line
                  key={i}
                  x1={x1} y1={y1}
                  x2={x2} y2={y2}
                  stroke="#facc15"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  style={{
                    animation: `dash ${1.5 + i * 0.2}s linear infinite`,
                  }}
                />
              )
            })}
          </svg>

          {/* Logos flottants */}
          {gridPositions.map((pos, index) => {
            const tech = techLogos.find((t) => t.name === pos.name)
            const delay = index * 0.3
            return (
              <div
                key={pos.name}
                className="absolute w-16 h-16 bg-white border border-white/20 rounded-2xl flex items-center justify-center p-3"
                style={{
                  left: `${(pos.col - 1) * CELL + CELL / 2 - 32}px`,
                  top: `${(pos.row - 1) * CELL + CELL / 2 - 32}px`,
                  zIndex: 1,
                  animation: `floatLogo ${3 + (index % 3) * 0.5}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                }}
              >
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
            )
          })}

        </div>
      </div>

    </section>
  )
}

export default Hero