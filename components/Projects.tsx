import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {portfolio.projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-900 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {project.description}
            </p>

            <p className="mt-3 text-blue-400">
              {project.tech}
            </p>

            <a
              href={project.link}
              target="_blank"
              className="inline-block mt-4"
            >
              Live Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}