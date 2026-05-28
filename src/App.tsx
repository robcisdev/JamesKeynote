/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { BookOpen, Compass, Feather, Flame, ArrowUp, ArrowRight, ShieldCheck, Cpu, Layout, Activity, Sparkles } from "lucide-react";
import WhoIsJames from "./components/WhoIsJames";
import Timeline from "./components/Timeline";
import Environment from "./components/Environment";
import PrimaryMessage from "./components/PrimaryMessage";
import SpecialFeatures from "./components/SpecialFeatures";
import ImperativesShowcase from "./components/ImperativesShowcase";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  // Modern scroll listener for Apple-style interactions
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);

      // Simple active link checking
      const sections = ["profile-sec", "timeline-sec", "environment-sec", "message-sec", "special-sec", "imperatives-sec"];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sec.replace("-sec", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#ff6b00]/15 selection:text-[#ff6b00] antialiased flex flex-col justify-between font-sans">
      
      {/* Dynamic Top Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff6b00] via-[#f43f5e] to-[#3b82f6] z-50 pointer-events-none" />

      {/* Apple Interactive Minimal Header Menu / Navigation Rail */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-[#E5E5EA] z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#1D1D1F] to-[#86868B] flex items-center justify-center">
              <Feather className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-mono text-xs tracking-wider font-extrabold uppercase text-[#1D1D1F]">
              JAMES // BIOGRAPHY
            </span>
          </div>

          {/* Quick link Pills */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "profile-sec", label: "01. Profile" },
              { id: "timeline-sec", label: "02. Chronology" },
              { id: "environment-sec", label: "03. Dispersion" },
              { id: "message-sec", label: "04. Active Faith" },
              { id: "special-sec", label: "05. Distinctives" },
              { id: "imperatives-sec", label: "Selected Imperatives" },
            ].map((section) => {
              const baseId = section.id.replace("-sec", "");
              const isActive = activeSection === baseId;
              return (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#1D1D1F] text-white shadow-xs"
                      : "text-[#86868B] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>

          {/* Prompt quick stats */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase text-[#ff6b00] bg-[#FFF5EE] border border-[#ff6b00]/10 px-2.5 py-1 rounded-full font-bold">
              54 Commands
            </span>
          </div>
        </div>
      </nav>

      {/* Luxurious Cinematic Apple-Reveal Hero Section */}
      <header className="relative bg-[#0d0d0e] text-white pt-20 pb-24 md:pt-28 md:pb-36 px-6 overflow-hidden">
        {/* Extreme wide-angle graphic backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.06),transparent_80%)] pointer-events-none" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#f43f5e]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Main Hero Reveal Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/15 text-xs text-[#ff6b00] font-mono tracking-widest uppercase font-semibold"
            >
              <BookOpen className="w-3.5 h-3.5" /> HISTORICAL & CANONICAL BIOGRAPHY
            </motion.div>

            {/* Massive Swiss Title */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none text-white block uppercase"
              >
                JAMES
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl sm:text-2xl font-serif italic text-white/60 tracking-normal block mt-1"
              >
                The Just — Brother of the Lord & Master Pastor
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-[#86868B] font-sans leading-relaxed font-light max-w-xl"
            >
              A high-end scholarly presentation tracing the radical transformation, severe famine-dispersion environment, and relentless practical mechanics of the first New Testament Epistle.
            </motion.p>

            {/* Quick stats grid on Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-6 max-w-md border-t border-white/10 mt-8"
            >
              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-[#ff6b00] block">54</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#86868B]">Imperatives</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-white block">AD 62</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#86868B]">Martyrdom</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-[#3b82f6] block">7,487</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#86868B]">Promises</span>
              </div>
            </motion.div>

            {/* Scrolling Indicator trigger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <button
                onClick={() => handleScrollTo("profile-sec")}
                className="px-6 py-3 bg-[#ff6b00] hover:bg-[#ff8c3a] text-black font-semibold text-sm rounded-full shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                Explore Biography <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Premium generated 3D abstract object split preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, type: "spring" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md aspect-square rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src="/src/assets/images/wisdom_scroll_art_1779933128567.png"
                alt="Minimalist 3D Ancient Scroll representation with gold leaf lines"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md rounded-xl p-3 border border-white/15 text-left text-xs text-white">
                <p className="font-mono text-[9px] text-[#ff6b00] tracking-widest uppercase font-bold mb-0.5">WISDOM VISUALIZED</p>
                <p className="text-white/60">Modern 3D render exploring the duality of commands versus promises.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* Modernist Sections Container with huge animated viewport titles */}
      <main className="flex-1 w-full space-y-0">
        
        {/* Section 01: Profile */}
        <section id="profile-sec" className="py-24 bg-white border-b border-[#E5E5EA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
              
              {/* Massive Modernist Title Column */}
              <div className="lg:col-span-4 sticky top-24">
                <span className="font-mono text-sm uppercase tracking-widest text-[#ff6b00] font-bold">Chapter 01</span>
                <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-[#1D1D1F] uppercase mt-2 leading-none">
                  WHO IS<br />JAMES?
                </h2>
                <p className="text-[#86868B] text-sm sm:text-base mt-4 font-light max-w-xs leading-relaxed">
                  From critical skeptic to undisputed pillar. How the brother of Jesus rose to steer the mother church of Jerusalem.
                </p>
              </div>

              {/* Sub-component injection */}
              <div className="lg:col-span-8 w-full">
                <WhoIsJames />
              </div>

            </div>
          </div>
        </section>

        {/* Section 02: Timeline */}
        <section id="timeline-sec" className="py-24 bg-[#F5F5F7] border-b border-[#E5E5EA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
              
              {/* Massive Modernist Title Column */}
              <div className="lg:col-span-4 sticky top-24">
                <span className="font-mono text-sm uppercase tracking-widest text-[#3b82f6] font-bold">Chapter 02</span>
                <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-[#1D1D1F] uppercase mt-2 leading-none">
                  WHEN DID<br />HE LIVE?
                </h2>
                <p className="text-[#86868B] text-sm sm:text-base mt-4 font-light max-w-xs leading-relaxed">
                  The chronological window. Reconstructing his historical coordinates, authorship of the epistle, and high-priest martyrdom.
                </p>
              </div>

              {/* Sub-component injection */}
              <div className="lg:col-span-8 w-full">
                <Timeline />
              </div>

            </div>
          </div>
        </section>

        {/* Section 03: Environment */}
        <section id="environment-sec" className="py-24 bg-white border-b border-[#E5E5EA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
              
              {/* Massive Modernist Title Column */}
              <div className="lg:col-span-4 sticky top-24">
                <span className="font-mono text-sm uppercase tracking-widest text-[#ff6b00] font-bold">Chapter 03</span>
                <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-[#1D1D1F] uppercase mt-2 leading-none">
                  THE DISPERSION<br />ENVIRONMENT
                </h2>
                <p className="text-[#86868B] text-sm sm:text-base mt-4 font-light max-w-xs leading-relaxed">
                  The cultural matrix. Famine, sharp partiality, and intense social injustice inside scattered Jewish-Christian communities.
                </p>
              </div>

              {/* Sub-component injection */}
              <div className="lg:col-span-8 w-full">
                <Environment />
              </div>

            </div>
          </div>
        </section>

        {/* Section 04: Primary Message split with Second Generated Image */}
        <section id="message-sec" className="py-24 bg-[#F5F5F7] border-b border-[#E5E5EA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
              
              {/* Massive Modernist Title Column */}
              <div className="lg:col-span-4 sticky top-24">
                <span className="font-mono text-sm uppercase tracking-widest text-[#f43f5e] font-bold">Chapter 04</span>
                <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-[#1D1D1F] uppercase mt-2 leading-none">
                  PRIMARY<br />MESSAGE
                </h2>
                <p className="text-[#86868B] text-sm sm:text-base mt-4 font-light max-w-xs leading-relaxed">
                  Active faith over mere words. Testing and response loops designed for extreme real-life situations.
                </p>
                
                {/* Embedded second dynamic graphic */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-[#E5E5EA] shadow-lg relative bg-white aspect-square max-w-xs group hidden lg:block">
                  <img
                    src="/src/assets/images/faith_works_craft_1779933145537.png"
                    alt="Faith and works balanced abstract 3D art piece"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md rounded-lg p-2.5 border border-[#E5E5EA] text-[10px] text-[#1D1D1F]">
                    <strong className="text-[#ff6b00]">FAITH + WORKS</strong>: Perfectly balanced sculpture representing physical action.
                  </div>
                </div>
              </div>

              {/* Sub-component injection */}
              <div className="lg:col-span-8 w-full">
                <PrimaryMessage />
              </div>

            </div>
          </div>
        </section>

        {/* Section 05: Special Features */}
        <section id="special-sec" className="py-24 bg-white border-b border-[#E5E5EA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
              
              {/* Massive Modernist Title Column */}
              <div className="lg:col-span-4 sticky top-24">
                <span className="font-mono text-sm uppercase tracking-widest text-[#3b82f6] font-bold">Chapter 05</span>
                <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-[#1D1D1F] uppercase mt-2 leading-none">
                  DISTINCTIVES<br />& ANATOMY
                </h2>
                <p className="text-[#86868B] text-sm sm:text-base mt-4 font-light max-w-xs leading-relaxed">
                  Epistle traits. The intense command density counterpoints the Everett R. Storms study of promises in scripture.
                </p>
              </div>

              {/* Sub-component injection */}
              <div className="lg:col-span-8 w-full">
                <SpecialFeatures />
              </div>

            </div>
          </div>
        </section>

        {/* Section 06: Selected Imperatives showcase */}
        <section id="imperatives-sec" className="py-24 bg-[#1D1D1F] text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
              
              {/* Massive Modernist Title Column */}
              <div className="lg:col-span-4 sticky top-24">
                <span className="font-mono text-sm uppercase tracking-widest text-[#ff6b00] font-bold text-[#ff6b00]">Chapter 06</span>
                <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase mt-2 leading-none">
                  IMPERATIVES<br />OF ACTION
                </h2>
                <p className="text-[#86868B] text-sm sm:text-base mt-4 font-light max-w-xs leading-relaxed">
                  Explore selected blunt pastoral directives. Filter by category, search instantly, and commit to active modern-day obedience.
                </p>
                <div className="h-0.5 w-12 bg-[#ff6b00] mt-6 hidden lg:block" />
              </div>

              {/* Sub-component injection (custom styled black theme elements handled beautifully) */}
              <div className="lg:col-span-8 w-full text-[#1D1D1F]">
                <ImperativesShowcase />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Ultimate Elegant Editorial Study Footer */}
      <footer className="bg-white border-t border-[#E5E5EA] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-2.5 text-[#1D1D1F] font-bold text-lg">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                <Feather className="w-4.5 h-4.5" />
              </div>
              <span className="tracking-tight">James the Just: Profile & Epistle Biography</span>
            </div>
            
            <p className="text-xs text-[#86868B] font-sans leading-relaxed">
              Based on historical archives from Flavius Josephus (AD 93), canonical New Testament books of Matthew, Mark, John, Acts, 1 Corinthians, Galatians, and the comparative Everett R. Storms Bible Promise Counting research.
            </p>
          </div>

          {/* Quick interactive objective box */}
          <div className="bg-[#F5F5F7] p-6 rounded-2xl border border-[#E5E5EA] max-w-sm">
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#ff6b00] font-bold mb-1.5 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> STUDY LESSON OBJECTIVE
            </h4>
            <p className="font-serif italic text-xs leading-relaxed text-[#1D1D1F]/90">
              “Genuine faith gets tested by severe internal and external life disruptions, and responds through active, bold pastor-led obedience in everyday life.”
            </p>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#E5E5EA] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#86868B] gap-4">
          <span>&copy; 2026 Theological Study Biography. All Scripture quotes are from the English Standard Version (ESV).</span>
          <span className="font-mono text-[10px] tracking-wider uppercase">Built with precision, craft & modern aesthetics</span>
        </div>
      </footer>

      {/* Floating Back to Top control */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 bg-[#1D1D1F] text-white rounded-full shadow-lg border border-white/10 hover:bg-[#ff6b00] hover:text-[#1d1d1f] transition-all z-50 duration-300 transform hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </button>
      )}

    </div>
  );
}
