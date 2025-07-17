import { hardSkills, softSkills } from "@/data/skillsWithIcons";
import bees from "../animations/bees.json";
import Lottie from "lottie-react";

export default function Skills() {
  const handleHover = (text: string) => {
    const event = new CustomEvent("assistantMessage", { detail: text });
    window.dispatchEvent(event);
  };

  const clearMessage = () => {
    const event = new CustomEvent("assistantMessage", { detail: "" });
    window.dispatchEvent(event);
  };

  return (
<section
  className="transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-[0_0_25px_10px_rgba(255,255,255,0.9)] relative"
>
<section id="skills" className="glass-box relative">
        <Lottie
                animationData={bees}
                loop
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
              />
        <h2 className="glow-text text-3xl font-semibold text-center mb-10 text-white drop-shadow-[0_0_8px_white]">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-black/10 p-6 rounded-xl shadow-md  border-white/10">
            <h3 className="text-xl font-bold mb-4 text-purple-300 text-center">
              Hard Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
              {hardSkills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-card flex items-center gap-2 p-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_white] hover:bg-white/10"
                  onMouseEnter={() => handleHover(skill.description)}
                  onMouseLeave={clearMessage}
                >
                  <skill.icon size={28} color={skill.color} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/10 p-6 rounded-xl shadow-md  border-white/10">
            <h3 className="text-xl font-bold mb-4 text-purple-300 text-center">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
              {softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-card flex items-center gap-2 p-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_white] hover:bg-white/10"
                  onMouseEnter={() => handleHover(skill.description)}
                  onMouseLeave={clearMessage}
                >
                  <skill.icon size={28} color={skill.color} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
