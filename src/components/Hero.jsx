import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo);
  const [text] = useTypewriter({
    words: [
      "Computação em nuvem ☁️",
      "Sistemas de informação 💻",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 60,
    deleteSpeed: 20,
  });

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    // Call the function once to set the initial video source
    handleVideoSrcSet();

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 2,
    });
    gsap.to('#cta', { opacity: 1, y: -200, delay: 1.2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col relative -mt-40">
        <span id="hero" className="hero-title absolute z-10">
          {text}
          <Cursor cursorColor="#d946ef" cursorStyle="_" />
        </span>
        <div className="md:w-10/12 w-full h-full relative">
          <video
            className="pointer-events-none w-full h-full object-cover scaled-video"
            autoPlay
            muted
            playsInline
            loop
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Aprender agora!</a>
      </div>
    </section>
  );
};

export default Hero;
