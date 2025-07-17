import { Github, Youtube } from "lucide-react";

type Props = {
  projects: {
    title: string;
    description: string;
    link?: string;
    youtube?: string;
    image: string;
    assistantDescription?: string; // 🆕 Agregalo si querés personalizar el mensaje
  }[];
};

export default function Projects({ projects }: Props) {
  const handleImageHover = (text: string) => {
    const event = new CustomEvent("assistantMessage", { detail: text });
    window.dispatchEvent(event);
  };

  const clearAssistantMessage = () => {
    const event = new CustomEvent("assistantMessage", { detail: "" });
    window.dispatchEvent(event);
  };

  return (
    <section
      id="projects"
      className="
        glass-box
        flex flex-col items-center justify-center text-center
        transition-transform duration-300 ease-in-out
        hover:scale-105 hover:brightness-110 hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.8)]
      "
    >
      <h2 className="glow-text text-3xl font-semibold mb-8 text-white drop-shadow-[0_0_8px_white]">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-md flex flex-col gap-4 items-center text-center transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_12px_white] hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-purple-200">
              {project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>

            {/* Imagen con hover para el asistente */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image rounded-lg transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_white]"
              onMouseEnter={() =>
                handleImageHover(
                  project.assistantDescription ||
                    `Este es mi proyecto "${project.title}". ¿Qué te parece? ¿Te gustaría ayudarme a mejorarlo?`
                )
              }
              onMouseLeave={clearAssistantMessage}
            />

            <div className="flex gap-4 mt-auto">
              {project.link && (
                <a
                  href={project.link}
                  className="text-purple-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on GitHub"
                >
                  <Github size={40} />
                </a>
              )}
              {project.youtube && (
                <a
                  href={project.youtube}
                  className="text-red-500 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Watch on YouTube"
                >
                  <Youtube size={40} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
