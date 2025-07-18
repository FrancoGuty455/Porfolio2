
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
    <section
      className="
        text-center
        transition-transform duration-300 ease-in-out
        hover:scale-105 hover:brightness-110
        hover:shadow-[0_0_25px_10px_rgba(255,255,255,0.8)]
      "
    >
      <section
        id="experience"
        className="
          glass-box bg-white/5 backdrop-blur-md rounded-2xl
          shadow-md px-6 py-8 max-w-3xl mx-auto
        "
      >
        
        <h2 className="glow-text text-3xl font-semibold mb-6 text-white drop-shadow-[0_0_8px_white]">
          Experience
        </h2>

        <div className="space-y-6 text-left text-white/90">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="hover:drop-shadow-[0_0_6px_white] transition-all"
            >
              <h3 className="text-xl font-semibold text-purple-200">
                {exp.role}
              </h3>
              <p className="text-gray-400 italic">
                {exp.company} – {exp.duration}
              </p>
              <p className="text-gray-300 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
