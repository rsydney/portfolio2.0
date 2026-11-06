import { useState } from 'react'
import { projects, tagColors } from '../data/Projects'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const codeProjects = [
  ...projects.filter((p) => p.type === 'code'),
  ...projects.filter((p) => p.type === 'data'),
]

const Code = () => {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  return (
    <main className="bg-[#0a0a0a] min-h-screen px-6 pt-24 pb-20 sm:px-10 sm:pt-28 lg:px-16 lg:pb-32">

      {/* Titre */}
      <div className="text-center mb-10 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projets Code & Data</h1>
        <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
          Mes réalisations en développement web, applications React, intégrations backend et analyse de données.
        </p>
      </div>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {codeProjects.map((project) => (
          <Card
            key={project.id}
            onClick={() => setSelected(project)}
            className="bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer group"
          >
            {/* Thumbnail */}
            <div className="w-full h-44 bg-[#1a1a1a] rounded-t-xl overflow-hidden">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">
                  Aperçu bientôt disponible
                </div>
              )}
            </div>

            <CardContent className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-sm">{project.title}</h3>
                <span className={`text-xs font-medium ${tagColors[project.type]}`}>
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </span>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal détaillée */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="bg-[#111111] border border-white/10 max-w-[calc(100%-2rem)] sm:max-w-3xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
          {selected && (
            <div className="flex flex-col gap-4">

              {/* Titre + tag */}
              <div className="flex items-center justify-between gap-3">
                <DialogTitle className="text-white text-lg sm:text-xl font-bold">
                  {selected.title}
                </DialogTitle>
                <span className={`text-sm font-medium shrink-0 ${tagColors[selected.type]}`}>
                  {selected.type.charAt(0).toUpperCase() + selected.type.slice(1)}
                </span>
              </div>

              {/* Description complète */}
              <p className="text-white/50 text-sm leading-relaxed">{selected.description}</p>

              {/* Carousel des screenshots */}
              <Carousel className="w-full">
                <CarouselContent>
                  {selected.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="w-full h-56 sm:h-80 bg-[#1a1a1a] rounded-xl overflow-hidden flex items-center justify-center">
                        {img ? (
                          <img
                            src={img}
                            alt={`${selected.title} - screenshot ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-white/20 text-sm">
                            Screenshot {index + 1} bientôt disponible
                          </span>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20 left-1 sm:-left-12" />
                <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20 right-1 sm:-right-12" />
              </Carousel>

              {/* Lien vers le site si disponible */}
              {selected.link && (
                
                <a  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors w-fit"
                >
                  <ExternalLink size={16} />
                  Voir le projet en ligne
                </a>
              )}

            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Bouton Retour en bas */}
      <div className="text-center mt-16 sm:mt-24">
        <Button
          onClick={() => navigate('/')}
          className="bg-yellow-400 hover:bg-yellow-50 text-black font-semibold px-8 py-6 text-base"
        >
          🏠 Retour
        </Button>
      </div>

    </main>
  )
}

export default Code