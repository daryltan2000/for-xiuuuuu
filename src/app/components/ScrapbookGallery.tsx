'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


export default function ScrapbookGallery() {
  const [petals, setPetals] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setPetals(newPetals);
  }, []);
  
  return (
    <div className="w-full bg-black relative">
      {/* Global floating petals background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {petals.map((pos, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-500/70 text-3xl"
            style={{
              top: pos.top,
              left: pos.left,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.6, 1, 0.6],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            🌸
          </motion.span>
        ))}
      </div>

      {/* Your content */}
      <div className="relative z-10">
        <HeroSection />
        <SceneOne />
        <VideoScene1 />
        <SceneTwo />
        <MessageSection />
        <VideoScene2 />
        <SceneThree />
        <VideoScene3 />       
        <SceneFour />
        <FinalSection />
      </div>
    </div>
  );
}

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-pink-500 drop-shadow-[0_0_20px_rgba(255,105,180,0.7)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        Happy Vietnamese Women's Day
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        To the one who makes me happy everytime —  
        you deserve love, joy, and every little thing beautiful. 💖
      </motion.p>

      {/* Decorative underline */}
      <motion.div
        className="mt-6 w-24 h-[2px] bg-pink-400 rounded-full shadow-[0_0_10px_rgba(255,105,180,0.7)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />

      {/* Small sparkle accent */}
      <motion.div
        className="absolute bottom-12 flex gap-4 text-pink-400/80 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.6, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
      </motion.div>
    </section>
  );
};

function SceneOne() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [clickedNote, setClickedNote] = useState(false);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-[420px] h-[600px]">

        {/* Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -6 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            rotate: -6
          } : { 
            opacity: 0, 
            y: 50,
            rotate: -6
          }}
          transition={{ duration: 0.6, delay: 0 }}
          className="absolute top-[20%] left-[10%] w-[280px] z-30"
        >
          <div className="bg-white p-4 pb-14 shadow-2xl hover:scale-105 transition-transform cursor-pointer hover:z-50 relative">
            <div className="w-full h-[320px] bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <img src="/photos/pretty1.jpg" className="w-full h-full object-cover" alt="Photo 1" />
            </div>
            <p className="text-center text-gray-800 mt-4 font-mono text-sm font-semibold">
              Your beautiful face ✨
            </p>
          </div>
        </motion.div>

        {/* Pink Note - Clickable with Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 8 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            rotate: clickedNote ? 0 : 8,
            scale: clickedNote ? 1.1 : 1,
            x: clickedNote ? 50 : 0
          } : { 
            opacity: 0, 
            y: 50,
            rotate: 8
          }}
          transition={{ duration: 0.3 }}
          onClick={() => setClickedNote(!clickedNote)}
          className={`absolute top-[52%] right-[5%] w-[250px] ${clickedNote ? 'z-50' : 'z-20'}`}
        >
          {/* Ribbon indicator */}
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-16 bg-pink-400 rounded-l-lg shadow-md flex items-center justify-center cursor-pointer">
            <span className="text-white text-xs font-bold rotate-90">PULL</span>
          </div>
          
          <div className="bg-pink-200 p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer min-h-[200px] border-l-4 border-pink-400">
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/5"></div>
            <p className="text-gray-800 text-[15px] leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Hehe Xiu hope you can stay cheerful and happy EVERYTIME!
            </p>
            {clickedNote && (
              <p className="text-gray-500 text-xs text-center mt-4 italic">Tap again to put back</p>
            )}
          </div>
        </motion.div>

        {/* Wax Seal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0
          } : { 
            opacity: 0, 
            y: 50
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[10%] right-[15%] z-40"
        >
          <div className="w-[70px] h-[70px] rounded-full bg-gradient-radial from-red-600 to-red-900 shadow-lg flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer">
            💝
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function VideoScene1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: -3 } : { opacity: 0, scale: 0.9, rotate: -3 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/cute1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-white/60 text-center mt-4 text-sm font-mono">Tiktok famous girl💕</p>
      </motion.div>
    </section>
  );
}

function SceneTwo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [clickedNote, setClickedNote] = useState(false);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-[420px] h-[600px]">

        {/* Camera */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -12 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            rotate: -12
          } : { 
            opacity: 0, 
            y: 50,
            rotate: -12
          }}
          transition={{ duration: 0.6, delay: 0 }}
          className="absolute top-[15%] left-[8%] z-10"
        >
          <div className="w-[120px] h-[95px] bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl shadow-xl flex items-center justify-center text-5xl hover:scale-105 transition-transform cursor-pointer">
            📷
          </div>
        </motion.div>

        {/* Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 7 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            rotate: 7
          } : { 
            opacity: 0, 
            y: 50,
            rotate: 7
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-[38%] right-[8%] w-[280px] z-30"
        >
          <div className="bg-white p-4 pb-14 shadow-2xl hover:scale-105 transition-transform cursor-pointer hover:z-50 relative">
            <div className="w-full h-[320px] bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
              <img src="/photos/pretty2.jpg" className="w-full h-full object-cover" alt="Photo 2" />
            </div>
            <p className="text-center text-gray-800 mt-4 font-mono text-sm font-semibold">
              Cutie Pie 🐤
            </p>
          </div>
        </motion.div>

        {/* Blue Note - Clickable with Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -5 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            rotate: clickedNote ? 0 : -5,
            scale: clickedNote ? 1.1 : 1,
            x: clickedNote ? -50 : 0
          } : { 
            opacity: 0, 
            y: 50,
            rotate: -5
          }}
          transition={{ duration: 0.3 }}
          onClick={() => setClickedNote(!clickedNote)}
          className={`absolute bottom-[12%] left-[10%] w-[220px] ${clickedNote ? 'z-50' : 'z-20'}`}
        >
          {/* Ribbon indicator */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-16 bg-blue-400 rounded-r-lg shadow-md flex items-center justify-center cursor-pointer">
            <span className="text-white text-xs font-bold -rotate-90">PULL</span>
          </div>
          
          <div className="bg-blue-200 p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer min-h-[180px] border-r-4 border-blue-400">
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/5"></div>
            <p className="text-gray-800 text-[15px] leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Thank you for your company always have fun with you! 🌟
            </p>
            {clickedNote && (
              <p className="text-gray-500 text-xs text-center mt-4 italic">Tap again to put back</p>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function MessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-white text-center mb-10"
      >
        💌 A Message for You 💌
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-white/90 text-center max-w-2xl mb-6 leading-relaxed"
      >
        Today, on Vietnamese Women's Day, I want to tell you how incredibly special you are to me. (AI write one 🙈)
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-white/90 text-center max-w-2xl mb-6 leading-relaxed"
      >
        Every time with you feel so fun. Your face sometimes melt my heart 🤣, your laugh is my favorite sound, and your presence always makes everything better.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-lg md:text-xl text-white/90 text-center max-w-2xl leading-relaxed"
      >
        Thank you for being so real.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-6xl mt-12"
      >
        ❤️
      </motion.div>
    </section>
  );
}

function VideoScene2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 4 } : { opacity: 0, scale: 0.9, rotate: 4 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/cute2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-white/60 text-center mt-4 text-sm font-mono">CUTEST 🎬</p>
      </motion.div>
    </section>
  );
}

function SceneThree() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [clickedLetter, setClickedLetter] = useState(false);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-[420px] h-[600px]">
        {/* Letter - Clickable with String */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            rotate: clickedLetter ? 0 : 5,
            scale: clickedLetter ? 1.1 : 1,
            x: clickedLetter ? 50 : 0
          } : { 
            opacity: 0, 
            y: 50, 
            rotate: 5 
          }}
          transition={{ duration: 0.3 }}
          onClick={() => setClickedLetter(!clickedLetter)}
          className={`absolute top-[18%] left-[12%] w-[280px] ${clickedLetter ? 'z-50' : 'z-30'}`}
        >
          {/* String/Ribbon indicator */}
          <div className="absolute -left-6 top-1/3 w-8 h-20 bg-amber-700/60 rounded-l-lg shadow-md flex items-center justify-center cursor-pointer">
            <span className="text-white text-[10px] font-bold rotate-90">READ</span>
          </div>
          
          <div className="bg-gradient-to-b from-[#f9f7f3] to-[#f2ede3] p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer border border-[#d4c5a9] min-h-[180px] relative border-l-4 border-amber-700">
            <p className="text-gray-800 mb-3" style={{ fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.8' }}>
              <strong>To my dearest Xiu,</strong>
            </p>
            <p className="text-gray-700 mb-3" style={{ fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: '1.8' }}>
              You are beautiful, cute, sensible, strong, and kind.
            </p>
            {clickedLetter && (
              <p className="text-gray-500 text-xs text-center mt-4 italic">Tap again to put back</p>
            )}
          </div>
        </motion.div>

        {/* Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -8 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -8 } : { opacity: 0, y: 50, rotate: -8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-[15%] right-[10%] w-[280px] z-35"
        >
          <div className="bg-white p-4 pb-14 shadow-2xl hover:scale-105 transition-transform cursor-pointer hover:z-50 relative">
            <div className="w-full h-[320px] bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center">
              <img src="/photos/pretty3.jpg" className="w-full h-full object-cover" alt="Photo 3" />
            </div>
            <p className="text-center text-gray-800 mt-4 font-mono text-sm font-semibold">
              CUTE MA THIS PICTURE
            </p>
          </div>
        </motion.div>

        {/* Seal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[12%] right-[12%] z-10"
        >
          <div className="w-[70px] h-[70px] rounded-full bg-gradient-radial from-red-600 to-red-900 shadow-lg flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer">
            💖
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoScene3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: -2 } : { opacity: 0, scale: 0.9, rotate: -2 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/cute3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-white/60 text-center mt-4 text-sm font-mono">Silly cute 🌹</p>
      </motion.div>
    </section>
  );
}

function SceneFour() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [clickedNote, setClickedNote] = useState(false);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-[420px] h-[600px]">
        {/* Green Note - Clickable with Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -7 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            rotate: clickedNote ? 0 : -7,
            scale: clickedNote ? 1.1 : 1,
            x: clickedNote ? -50 : 0
          } : { 
            opacity: 0, 
            y: 50, 
            rotate: -7 
          }}
          transition={{ duration: 0.3 }}
          onClick={() => setClickedNote(!clickedNote)}
          className={`absolute top-[40%] left-[10%] w-[220px] ${clickedNote ? 'z-50' : 'z-20'}`}
        >
          {/* Ribbon indicator */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-16 bg-green-400 rounded-r-lg shadow-md flex items-center justify-center cursor-pointer">
            <span className="text-white text-xs font-bold -rotate-90">PULL</span>
          </div>
          
          <div className="bg-green-200 p-6 shadow-xl hover:scale-105 transition-transform cursor-pointer min-h-[90px] border-r-4 border-green-400">
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/5"></div>
            <p className="text-gray-800 text-[15px] leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Love you being so real, hopefully able to have more memories with you!
            </p>
            {clickedNote && (
              <p className="text-gray-500 text-xs text-center mt-4 italic">Tap again to put back</p>
            )}
          </div>
        </motion.div>

        {/* Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 10 } : { opacity: 0, y: 50, rotate: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-[45%] right-[8%] w-[280px] z-30"
        >
          <div className="bg-white p-4 pb-14 shadow-2xl hover:scale-105 transition-transform cursor-pointer hover:z-50 relative">
            <div className="w-full h-[320px] bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
              <img src="/photos/pretty4.jpg" className="w-full h-full object-cover" alt="Photo 4" />
            </div>
            <p className="text-center text-gray-800 mt-4 font-mono text-sm font-semibold">
              Always happy with you 😊
            </p>
          </div>
        </motion.div>

        {/* Camera */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 15 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 15 } : { opacity: 0, y: 50, rotate: 15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-[15%] left-[12%] z-10"
        >
          <div className="w-[120px] h-[95px] bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl shadow-xl flex items-center justify-center text-5xl hover:scale-105 transition-transform cursor-pointer">
            📸
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-7xl mb-8"
      >
        💖
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
      >
        Happy Vietnamese Women's Day
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl md:text-2xl text-white/90 text-center mb-8"
      >
        <p className="text-white/60 text-center mt-4 text-sm font-mono">        
          Chúc mừng Ngày Phụ nữ Việt Nam
        </p>
        <p className="text-white/60 text-center mt-4 text-sm font-mono">        
          20 Aug 2025
        </p>
      </motion.div>
    </section>
  );
}