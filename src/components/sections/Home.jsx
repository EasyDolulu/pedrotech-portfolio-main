import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Conrad Kwok
          </h1>
          <br />
         

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto" style={{fontSize:'20px'}}>
          I'm a web developer focused on front-end development,
           with a solid understanding of back-end technologies and databases.
          This is my personal website, created using React, showcasing my skills and projects.
          As a full-stack developer, I am passionate about building clean and scalable web applications. 
          My goal is to deliver exceptional performance and a delightful user experience,
          ensuring that every user enjoys smooth interactions. Feel free to explore my projects,
          and I look forward to connecting with you!
          <br />
          <br />
          我是專注於前端開發的網頁開發者。我對後端和資料庫也有一定的了解。這是我透過學習 React 技術創建的個人網站，展示了我的技能和專案。

          身為全端開發者，我熱衷於建立乾淨、可擴展的網頁應用程式。我的目標是提供卓越的效能和令人愉悅的使用者體驗，讓每個使用者都能享受流暢的互動。

          歡迎瀏覽我的項目，期待與您的聯繫！
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-xl"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 text-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
