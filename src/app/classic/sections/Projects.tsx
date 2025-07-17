import { Github, Youtube } from "lucide-react";

type Props = {
  projects: {
    title: string;
    description: string;
    link?: string;
    youtube?: string;
    image: string;
  }[];
};

export default function Projects({ projects }: Props) {
  return (
    <section
      id="projects"
      className="glass-box flex flex-col items-center justify-center text-center"
    >
      <h2 className="glow-text text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
       {projects.map((project, index) => (
  <div
    key={index}
    className="p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-md flex flex-col gap-4 items-center text-center"
  >

    <h3 className="text-xl font-semibold text-purple-200">
      {project.title}
    </h3>
    <p className="text-gray-300">{project.description}</p>
<img src={project.image} alt={project.title} className="project-image" />

    <div className="flex gap-4 mt-auto">
      {project.link && (
        <a
          href={project.link}
          className="text-purple-400 hover:text-yellow-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          title="View on GitHub"
          
        >
          <Github size={40} color="orange" />
        </a>
      )}
      {project.youtube && (
        <a
          href={project.youtube}
          className="text-red-500 hover:text-yellow-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          title="Watch on YouTube"
        >
          <Youtube size={40} color="red"/>
        </a>
      )}
    </div>
  </div>
))}
      </div>
    </section>
  );
}
