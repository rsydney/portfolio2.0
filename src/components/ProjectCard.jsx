import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { tagColors } from '../data/Projects'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (project.type === 'design') {
      navigate('/design')
    } else {
      navigate('/code')
    }
  }

  return (
    <Card
      onClick={handleClick}
      className="bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer group"
    >
      {/* Image du projet */}
      <div className="w-full h-48 bg-[#1a1a1a] rounded-t-xl overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">
            Aperçu bientôt disponible
          </div>
        )}
      </div>

      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-base">{project.title}</h3>
          <span className={`text-sm font-medium ${tagColors[project.type]}`}>
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
      </CardContent>
    </Card>
  )
}

export default ProjectCard