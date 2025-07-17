
import Lottie from "lottie-react";
import Glowingsparks from "../animations/Glowingsparks.json";

type Props = {
  text: string;
};

export default function About({ text }: Props) {
  return (
    <section
      id="about"
      className="
        max-w-3xl
        mx-auto
        mt-16
        p-10
        bg-gradient-to-r from-white/10 via-white/5 to-white/10
        rounded-3xl
        shadow-[0_0_30px_15px_rgba(255,255,255,0.3)]
        backdrop-blur-md
        text-center
        transition
        duration-500
        hover:scale-105
        hover:shadow-[0_0_45px_25px_rgba(255,255,255,0.7)]
        hover:brightness-110
        relative
      "
    >
      <Lottie
        animationData={Glowingsparks}
        loop
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />
      <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_white]">
        About Me
      </h2>
      <p className="text-lg leading-relaxed text-white/90 max-w-xl mx-auto">
        "I'm Franco, a software developer who enjoys creating simple and user-friendly websites and desktop apps."
      </p>
    </section>
  );
}