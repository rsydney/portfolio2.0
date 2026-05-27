import { projects } from '../data/Projects'
import ProjectCard from './ProjectCard'

const featured = [
  ...projects.filter((p) => p.type === 'design').slice(0, 2),
  ...projects.filter((p) => p.type === 'code').slice(0, 2),
  ...projects.filter((p) => p.type === 'data').slice(0, 2),
]

const Projects = () => {
  return (
    <section className="bg-[#0a0a0a] px-16 py-24">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Mes Projets</h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Un aperçu de mes réalisations en design, développement et data.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}

export default Projects