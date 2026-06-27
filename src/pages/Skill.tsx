import { Card } from "../components/ui/Card";
import { projects, technologies } from "../constants/projectsData.ts";

export default function Skill(): React.JSX.Element {
  return (
    <>
      <section id="skills">
        <div className="flex flex-col justify-center items-center pt-30">
          <h1 className="text-2xl font-bold text-amber-50 dark:text-white mb-3">
            Habilidades &amp; Projetos
          </h1>

          <div className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg max-w-4xl shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {/* Renderiza a lista de tecnologias */}
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="cursor-default transition-all duration-200 hover:text-blue-200 hover:scale-110"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-400 dark:text-gray-400">
            Confira os projetos atuais!
          </p>
        </div>
      </section>

      <section id="projetos" className="px-4 py-8 sm:px-6 lg:px-8 pt-30">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mapeia a array de projetos importada */}
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              imageSrc={project.imageSrc}
              repoUrl={project.repoUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}
