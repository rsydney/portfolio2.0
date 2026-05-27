import { useState } from 'react'
import { projects, tagColors } from '../data/Projects'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
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
import { useNavigate } from 'react-router-dom'

const designProjects = projects.filter((p) => p.type === 'design')

const Design = () => {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  return (
    <main className="bg-[#0a0a0a] min-h-screen px-16 pt-28 pb-32">

      {/* Titre */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Projets Design</h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Mes réalisations en UX/UI design, identité visuelle et direction artistique.
        </p>
      </div>

      {/* Grille 4 colonnes */}
      <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto">
        {designProjects.map((project) => (
          <Card
            key={project.id}
            onClick={() => setSelected(project)}
            className="bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer group"
          >
            <div className="w-full h-44 bg-[#ffffff] rounded-t-xl overflow-hidden">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">
                  Logo bientôt disponible
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

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="bg-[#111111] border border-white/10 max-w-3xl p-6">
          {selected && (
            <div className="flex flex-col gap-4">

              {/* Titre + tag */}
              <div className="flex items-center justify-between">
                <DialogTitle className="text-white text-xl font-bold">
                  {selected.title}
                </DialogTitle>
                <span className={`text-sm font-medium ${tagColors[selected.type]}`}>
                  {selected.type.charAt(0).toUpperCase() + selected.type.slice(1)}
                </span>
              </div>

              <p className="text-white/50 text-sm">{selected.description}</p>

              {selected.pdf ? (
  <div className="flex flex-col gap-6 items-center justify-center py-12 bg-[#1a1a1a] rounded-xl border border-white/10">
    <div className="text-white/30 text-6xl">📄</div>
    <div className="text-center flex flex-col gap-2">
      <p className="text-white font-medium">Document PDF disponible</p>
      <p className="text-white/40 text-sm">{selected.title}</p>
    </div>
    
    <a  href={selected.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
    >
      <ExternalLink size={16} />
      Ouvrir le document
    </a>
  </div>
) : (
                <>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selected.images.map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="w-full h-80 bg-[#1a1a1a] rounded-xl overflow-hidden flex items-center justify-center">
                            {img ? (
                              <img
                                src={img}
                                alt={`${selected.title} - visuel ${index + 1}`}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <span className="text-white/20 text-sm">
                                Visuel {index + 1} bientôt disponible
                              </span>
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
                    <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
                  </Carousel>
                  <p className="text-white/30 text-xs text-center">
                    {selected.images.length} création{selected.images.length > 1 ? 's' : ''} pour cette entreprise
                  </p>
                </>
              )}

            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Bouton Retour en bas */}
      <div className="text-center mt-24">
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

export default Design