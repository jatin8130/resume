const Home = () => {
  const text1 = "Hey, I'm Jatin";

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between
      lg:px-20 sm:px-10 px-4 gap-5 pt-2 overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-6 animate-fadeInUp">
        
        {/* LETTER ANIMATED HEADING */}
        <h1 className="lg:text-7xl text-4xl font-serif font-bold leading-tight flex flex-wrap">
          {Array.from(text1).map((char, index) => (
            <span
              key={index}
              className="animate-letter"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="lg:text-4xl text-2xl font-serif">
          I’m a{" "}
          <span className="text-[#8670EF] font-semibold">
            Front-End Developer
          </span>
        </p>

        <p className="max-w-xl text-slate-600 font-medium leading-relaxed">
          I’m a passionate Front-End Developer dedicated to building beautiful,
          responsive, and user-friendly web experiences that help projects
          succeed.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-6 items-center mt-4">
          <a
            download="jatin_mehra_resume.pdf"
            href="./image/jatin_mehra_resume.pdf"
            className="relative overflow-hidden bg-[#FAD764] px-8 py-4 rounded-2xl font-semibold
            transition-all duration-300 hover:bg-[#8670EF] hover:text-white hover:-translate-y-1 hover:shadow-xl"
          >
            <i className="ri-download-line mr-2"></i>
            Download CV
          </a>

          <a
            href="#project"
            className="font-semibold flex items-center gap-1 group"
          >
            My Work
            <i className="ri-arrow-right-s-line transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        {/* INFO */}
        <div className="flex flex-wrap gap-10 mt-8">
          <div>
            <p className="text-slate-500 mb-2">Born In</p>
            <h5 className="font-serif text-3xl">India</h5>
          </div>

          <div>
            <p className="text-slate-500 mb-2">Experience</p>
            <h5 className="font-serif text-3xl">Fresher</h5>
          </div>

          <div>
            <p className="text-slate-500 mb-2">Date of Birth</p>
            <h5 className="font-serif text-3xl">06 February 2005</h5>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center animate-float">
        <div className="absolute w-72 h-72 bg-[#8670EF]/20 rounded-full blur-3xl -z-10"></div>
        <img
          src="/image/Capture.svg"
          alt="Jatin"
          className="w-[80%] rounded-full shadow-2xl"
        />
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        /* Section fade animation */
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Letter animation */
        .animate-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: letterFade 0.5s ease forwards;
        }

        @keyframes letterFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Floating image */
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
