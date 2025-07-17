import conffeti from "../animations/conffeti.json";
import Lottie from "lottie-react";
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
  className="text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-[0_0_25px_10px_rgba(255,255,255,0.8)] relative"
>

      <section
  id="Certifications"
  className="glass-box bg-white/5 backdrop-blur-md rounded-2xl shadow-md px-6 py-8 max-w-3xl mx-auto relative"
>
          <Lottie
                                animationData={conffeti}
                                loop
                                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
                              />
        <h2 className="glow-text text-3xl font-semibold mb-6 text-white drop-shadow-[0_0_8px_white]">
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
                <br></br>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-300  hover:text-blue-400 transition-colors"
              >
                <br></br>
                Ver certificado
                <br></br>
                <br></br>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
