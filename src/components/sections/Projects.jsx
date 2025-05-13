import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Note Web App</h3>
              <p className="text-gray-400 mb-4 text-xl">
                Designed and developed a frontend note web application using HTML, CSS, and JavaScript, with MySQL as the
                database for data storage.The app have a sign-in and create room 
                system that lets users log in with their room number and password.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "HTML", "CSS", "JavaScript", "Flask", "MySQL", "Bootstrap", "HerokuHost"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 text-xl
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://note-web-app-57902dc725be.herokuapp.com/sign_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> PY Game</h3>
              <p className="text-gray-400 mb-4 text-xl">
              Developed a 2D game using Python and Pygame,
               featuring player control, collision detection,
                and power-ups.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 text-xl
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                {/* <a
                  href="/pedrotech-portfolio/projects/pygame.zip "
                  className="text-xl text-blue-400 hover:text-blue-300 transition-colors my-4"
                  download
                >
                  View Project →
                </a> */}
              </div>
            </div>
            
            

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Weather Search Web Application</h3>
              <p className="text-gray-400 mb-4 text-xl">
                Implemented JavaScript to enable dynamic features; when users enter a city name and
                click the search button, use Fetch API to retrieve weather
                data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Fetch API"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 text-xl
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://easydolulu.github.io/weather-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-xl"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">dice game web App</h3>
              <p className="text-xl text-gray-400 mb-4">
                Designed and developed an interactive dice game web application using React.
                js and Vite, featuring dynamic score calculation,
                responsive UI with styled-components.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 text-xl
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://easydolulu.github.io/react-dice-game/"
                  className="text-xl text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">HomeFinder Mobile App</h3>
              <p className="text-xl text-gray-400 mb-4">
                Designed and developed an interactive dice game web application using React.
                js and Vite, featuring dynamic score calculation,
                responsive UI with styled-components.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 text-xl
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://easydolulu.github.io/react-dice-game/"
                  className="text-xl text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
