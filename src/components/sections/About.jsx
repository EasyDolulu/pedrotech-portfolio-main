import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useRef } from "react";


export const About = () => {
  const frontendSkills = [
    "React",
    "Html",
    "CSS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Sass",
    "Ant Design",
    "Bootstrap",
    "React Bootstrap",
    "JavaScript"
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "SQL",
    "MySQL",
  ];

  const imgRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // 使用视口作为根
      rootMargin: "0px",
      threshold: 0.1, // 触发的可见性阈值
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, options);

    imgRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      imgRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className="rounded-xl mb-10 p-15 border-white/10 border hover:-translate-y-1 transition-all text-center">
            <p className="text-xl">🏀</p>
            <p className="mb-6 text-xl mt-8">
            Before I introduce my projects, I’d like to share my journey of self-learning programming.
             Two years ago, I was a professional athlete and a college student
             , balancing my career in basketball while pursuing a degree in sports coaching.
            By chance, I received an invitation to join a prestigious basketball program in Taiwan at Fu Jen Catholic University.
              I traveled alone from Hong Kong, driven by my dream of becoming a professional basketball player,
              and spent four ambitious years as a student. However, things did not go as hoped, and after several serious injuries,
              I had to give up on that dream.
              <br />
              <br />
            在我開始介紹我的專案之前，我想先分享我的自學程式設計的心路歷程。兩年前，
            我還是個職業運動員與大學生，一邊從事職業籃球的活動，一邊修讀運動教練的學
            位。一次偶然的機會，我得到了進入台灣籃球名校的邀請，來到了輔仁大學，加
            入了球隊。我獨自從香港來到台灣，夢想成為職業籃球運動員，抱著雄心壯志的憧
            憬度過了四年的大學生涯。然而，命運並不如我所願，經歷了幾次嚴重的傷勢後
            ，我不得不放棄這個夢想。
            </p>
            <div className="flex items-center justify-center">
              <img
                className="fade-in p-30 opacity-0 transition-opacity duration-1000 h-230 "
                src={`${process.env.PUBLIC_URL}/img/me.png`}
                alt="Team"
                ref={(el) => (imgRefs.current[0] = el)}
              />
            </div>
              
            <img
              className="fade-in p-30 opacity-0 transition-opacity duration-1000"
              src={`${process.env.PUBLIC_URL}/img/team.png`}
              alt="Team"
              ref={(el) => (imgRefs.current[1] = el)}
            />            
            
            <p className="mb-6 text-xl">
            After stepping away from basketball, I started to think about my future.
             One day, I came across an explanation of the mechanics behind my favorite game
             , League of Legends, which fascinated me. This prompted me to learn more about the fundamentals of the internet.
              To create a better learning environment, I purchased online courses and first focused on the basics of back-end programming languages,
             before shifting my attention to front-end knowledge and skills.
             <br />
             <br />
             Gradually, I discovered that I was more interested in front-end development and began to dive deeper into the related technologies.
             As I progressed in my studies, I realized that understanding back-end and databases is equally important for a web developer,
              as it allows me to tackle challenges more effectively.
              I know I still have a long way to go in my learning journey, but I am incredibly excited about the knowledge I will gain in the future!
            
            <br />
            <br />
            在退出籃球領域後，我開始思考自己的未來。突然有一天，我看到了一段關於
            我最喜歡的遊戲《英雄聯盟》運作邏輯的解釋，這讓我感到非常驚訝和有趣。於是
            ，我開始了解更多關於網路的基礎知識。為了創造更好的學習環境，我購買了線上教材
            ，首先學習了後端的基礎程式語言，隨後轉向前端的知識與技能。
            <br />
            <br />
            漸漸地，我發現自己對前端開發更感興趣，並開始深入研究這方面的技術。隨著學
            習的深入，我意識到身為 web 開發者，理解後端和資料庫同樣重要，這樣才能在
            面對挑戰時游刃有餘。因此，我知道我的學習之旅還很漫長，但我對未來能夠獲得
            的知識感到無比興奮！
            <p className="pt-20">💻</p>
            <div className="flex items-center justify-center">
              <img
                className="fade-in pt-20 pb-30 opacity-0 transition-opacity duration-1000 h-180"
                src={`${process.env.PUBLIC_URL}/img/work.png`}
                alt="Team"
                ref={(el) => (imgRefs.current[2] = el)}
              />  
            </div>
            During my learning process, I discussed projects and programming skills with like-minded friends.
            We helped each other and solved problems together, which greatly benefited my learning.
            As my skills improved, I began to attempt developing small projects independently,
            ranging from simple websites to more complex applications.
            I found the process of turning my ideas into reality to be incredibly fulfilling and exciting.
            I hope to continue expanding my skills and learning new language,
            frameworks and tools to create even better work in the future.
            Last but not least, I will keep pushing myself, learning continuously, and embracing every new challenge!
            <br />
            <br />
            在學習過程中，我與一些志同道合
            的朋友一起討論專案和技術。我們互相幫助，共同解決問題，這讓我在學習上受益匪淺
            。隨著技能的提升，我開始嘗試獨立開發一些小項目，從簡單的網頁到複雜的應用程式
            。我發現，把自己的想法變成現實的過程是如此充實和令人興奮。
            我希望能夠繼續擴展自己的技能，學習新的框架和工具，以便在未來創造出更出色的作品。
            而我也將不斷努力，不斷學習，迎接每一個新的挑戰！
            </p>

          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-xl">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-xl
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-xl
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> */}
            <div className="mt-10  w-full p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-xl">
                <li>
                  <strong> The University of Hong Kong </strong> - Sport Coaching
                  (2019-2021)
                </li>
                <li>
                  <strong> Fu Jen Catholic University </strong> - Bachelor’s Degree in Physical Education
                  (Advanced)
                </li>
              </ul>
            {/* </div> */}
            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer (2020 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components 
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
