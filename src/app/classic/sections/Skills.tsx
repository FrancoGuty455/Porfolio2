import { hardSkills, softSkills } from "@/data/skillsWithIcons";

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

    <section id="skills" className="glass-box text-center">
      <h2 className="glow-text text-3xl font-semibold text-center mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-black/10 p-6 rounded-xl shadow-md border border-white/10">
          <h3 className="text-xl font-bold mb-4 text-purple-300 text-center">Hard Skills</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
{hardSkills.map((skill, i) => (
  <div
    key={i}
    className="skill-card text-center"
    onMouseEnter={() => handleHover(skill.description)}
    onMouseLeave={clearMessage}
  >
    <skill.icon size={28} color={skill.color} />
    <span>{skill.name}</span>
  </div>

))}
          </div>
        </div>

        <div className="bg-black/10 p-6 rounded-xl shadow-md border border-white/10">
          <h3 className="text-xl font-bold mb-4 text-purple-300 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
{softSkills.map((skill, i) => (
  <div
    key={i}
    className="skill-card"
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

  );
}
