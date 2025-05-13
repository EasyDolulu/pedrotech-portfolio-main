import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Html",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "Sass",
    "Ant Design",
    "Bootstrap",
    "React Bootstrap",
  ].filter(Boolean); 

  const backendSkills = [
    "Node.js",
    "Python", 
    "Django",
    "SQL",
    "MySQL"
  ].filter(Boolean);

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* 标题部分 */}
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
        </RevealOnScroll>

        {/* 主要内容卡片 */}
        <div className="rounded-xl mb-10 p-8 border border-white/10 hover:border-white/20 transition-all">
          {/* 篮球生涯部分 */}
          <RevealOnScroll>
            <div className="mb-10">
              <p className="text-2xl text-center mb-6">🏀</p>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Before I introduce my projects, I’d like to share my journey of self-learning programming.
                  Two years ago, I was a professional athlete and a college student
                  , balancing my career in basketball while pursuing a degree in sports coaching.
                  By chance, I received an invitation to join a prestigious basketball program in Taiwan at Fu Jen Catholic University.
                  I traveled alone from Hong Kong, driven by my dream of becoming a professional basketball player,
                  and spent four ambitious years as a student. However, things did not go as hoped, and after several serious injuries,
                  I had to give up on that dream.
                </p>
                <p className="text-lg leading-relaxed">
                  在我開始介紹我的專案之前，我想先分享我的自學程式設計的心路歷程。兩年前，
                  我還是個職業運動員與大學生，一邊從事職業籃球的活動，一邊修讀運動教練的學
                  位。一次偶然的機會，我得到了進入台灣籃球名校的邀請，來到了輔仁大學，加
                  入了球隊。我獨自從香港來到台灣，夢想成為職業籃球運動員，抱著雄心壯志的憧
                  憬度過了四年的大學生涯。然而，命運並不如我所願，經歷了幾次嚴重的傷勢後
                  ，我不得不放棄這個夢想。
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* 个人照片 */}
          <RevealOnScroll>
            <div className="my-10 flex flex-col items-center gap-10">
              <img
                className="w-full max-w-md rounded-lg shadow-lg"
                src={`${import.meta.env.VITE_BASE_URL}img/me.png`}
                alt="Personal photo"
              />
              <img
                className="w-full max-w-md rounded-lg shadow-lg" 
                src={`${import.meta.env.VITE_BASE_URL}img/team.png`}
                alt="Team photo"
              />
            </div>
          </RevealOnScroll>

          {/* 学习经历部分 */}
          <RevealOnScroll>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
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
              </p>
              <p className="text-lg leading-relaxed">
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
              </p>
            </div>
          </RevealOnScroll>

          {/* 工作照片 */}
          <RevealOnScroll>
            <div className="mt-16 mb-10 text-center">
              <p className="text-2xl mb-6">💻</p>
              <img
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                src={`${import.meta.env.VITE_BASE_URL}img/work.png`}
                alt="Work photo"
              />
            </div>
          </RevealOnScroll>

          {/* 项目经验部分 */}
          <RevealOnScroll>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                During my learning process, I discussed projects and programming skills with like-minded friends.
                We helped each other and solved problems together, which greatly benefited my learning.
                As my skills improved, I began to attempt developing small projects independently,
                ranging from simple websites to more complex applications.
                I found the process of turning my ideas into reality to be incredibly fulfilling and exciting.
                I hope to continue expanding my skills and learning new language,
                frameworks and tools to create even better work in the future.
                Last but not least, I will keep pushing myself, learning continuously, and embracing every new challenge!
              </p>
              <p className="text-lg leading-relaxed">
                在學習過程中，我與一些志同道合
                的朋友一起討論專案和技術。我們互相幫助，共同解決問題，這讓我在學習上受益匪淺
                。隨著技能的提升，我開始嘗試獨立開發一些小項目，從簡單的網頁到複雜的應用程式
                。我發現，把自己的想法變成現實的過程是如此充實和令人興奮。
                我希望能夠繼續擴展自己的技能，學習新的框架和工具，以便在未來創造出更出色的作品。
                而我也將不斷努力，不斷學習，迎接每一個新的挑戰！
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* 技能卡片 */}
        <RevealOnScroll>
          <div className="rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all mb-8">
            <div className="text-center mb-8">
              <p className="text-gray-300 text-sm mb-2">
                Passionate developer with expertise in building scalable web
                applications and creating innovative solutions.
              </p>
              <p className="text-base">
                " 熱愛開發工作，專精於構建可擴展的網路應用程式並能打造解決方案 "
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 前端技能 */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 后端技能 */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 教育和工作经历 */}
        <RevealOnScroll>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            {/* 教育背景 */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className="text-base">
                  <strong> The University of Hong Kong </strong> - Sport Coaching
                  (2019-2021)
                </li>
                <li className="text-base">
                  <strong> Fu Jen Catholic University </strong> - Bachelor’s Degree in Physical Education
                  (Advanced)
                </li>
              </ul>
            </div>

            {/* 工作经历 */}
            {/* <div className="p-6 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Software Engineer at ABC Corp (2020 - Present)</h4>
                  <p>Developed and maintained microservices for cloud-based applications.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                  <p>Assisted in building front-end components and integration REST APIs</p>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </RevealOnScroll>
      </div>
    </section>
  );
};