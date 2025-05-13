import React, { useEffect } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  useEffect(() => {
    console.log('开始加载粒子效果'); // 调试日志

    // 动态加载 particles.js 脚本
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    particlesScript.async = true;
    
    // 动态加载 stats.js 脚本
    const statsScript = document.createElement('script');
    statsScript.src = 'https://cdn.jsdelivr.net/npm/stats.js@0.17.0/build/stats.min.js';
    statsScript.async = true;

    document.body.appendChild(particlesScript);
    document.body.appendChild(statsScript);

    particlesScript.onload = () => {
      console.log('particles.js 已加载'); // 调试日志
      
      // 确保容器存在
      const container = document.getElementById('particles-js');
      if (!container) {
        console.error('找不到 particles-js 容器');
        return;
      }

      // 初始化 particles.js
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 1000} },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            out_mode: "out"
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4},
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });

      // 初始化 stats.js 但隐藏显示
      if (window.Stats) {
        const stats = new window.Stats();
        stats.setMode(0);
        stats.domElement.style.display = 'none';
        
        const update = function () {
          stats.begin();
          stats.end();
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        
       
      }
    };

    particlesScript.onerror = () => {
      console.error('加载 particles.js 失败');
    };

    return () => {
      // 清理
      if (particlesScript.parentNode) {
        document.body.removeChild(particlesScript);
      }
      if (statsScript.parentNode) {
        document.body.removeChild(statsScript);
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
      }}
    />
  );
};

export default ParticlesBackground;