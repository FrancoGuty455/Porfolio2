
type Props = {
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
};

export default function Experience({ experience }: Props) {
  return (
    <section id="experience" className="glass-box">
      <h2 className="glow-text text-3xl font-semibold mb-6 justify-center text-center">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-purple-200">{exp.role}</h3>
            <p className="text-gray-400 italic">{exp.company} – {exp.duration}</p>
            <p className="text-gray-300 mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
