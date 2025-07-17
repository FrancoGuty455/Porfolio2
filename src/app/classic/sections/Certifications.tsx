type Props = {
  certifications: {
    name: string;
    institution: string;
    year: number;
    link: string; 
  }[];
};

export default function Certifications({ certifications }: Props) {
  return (
      <section
        id="certifications"
        className="
          glass-box bg-white/5 backdrop-blur-md rounded-2xl
          shadow-md px-6 py-8 max-w-3xl mx-auto text-center"
      >
        <h2 className="glow-text text-3xl font-semibold mb-6 text-white drop-shadow-[black]">
          Certifications
        </h2>

        <ul className="space-y-6 text-white/90 text-lg">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:drop-shadow-[0_0_6px_white] transition-all"
            >
              <div>
                <strong>{cert.name}</strong> – {cert.institution} ({cert.year})
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-300  hover:text-blue-400 transition-colors glow-text text-3xl font-semibold mb-6 text-white drop-shadow-[black]"
              >
                Ver certificado
              </a>
            </li>
          ))}
        </ul>
      </section>
  );
}
