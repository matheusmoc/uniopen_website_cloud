import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {opacity: 1, y: 0})
    gsap.to('#description', { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
  <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
    <div className="mb-12 w-full flex items-center justify-evenly">
      <h1 id="title" className="section-heading">
        O que é nuvem?
      </h1>
      <div className="hidden md:flex items-center gap-5">
        <button className="flex btn items-center">
          Assistir vídeo
          <img src={watchImg} alt="watch" className="ml-2" />
        </button>
        <button className="flex btn items-center">
          Assistir evento
          <img src={rightImg} alt="right" className="ml-2" />
        </button>
      </div>
      <div className="md:hidden flex flex-col items-center gap-5">
        <button className="flex btn items-center">
          Assistir vídeo
          <img src={watchImg} alt="watch" className="ml-2" />
        </button>
        <button className="flex btn items-center">
          Assistir evento
          <img src={rightImg} alt="right" className="ml-2" />
        </button>
      </div>
    </div>
  </section>
    );
}
export default Highlights
