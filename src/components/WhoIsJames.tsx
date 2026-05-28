/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, HelpCircle, Heart, Users, ShieldAlert, Award } from "lucide-react";
import { WHO_IS_JAMES_FACTS } from "../data";

export default function WhoIsJames() {
  const [activeFactIndex, setActiveFactIndex] = useState(0);

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Users className="w-5 h-5 text-neutral-800" />;
      case 1: return <ShieldAlert className="w-5 h-5 text-neutral-800" />;
      case 2: return <Award className="w-5 h-5 text-neutral-800" />;
      case 3: return <Heart className="w-5 h-5 text-neutral-800" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full">
      {/* Interactive Explorer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Menu / Tabs Column */}
        <div className="md:col-span-12 lg:col-span-5 space-y-2.5">
          <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 font-bold block mb-2 px-1">
            Browse Bio Profile chapters
          </span>
          {WHO_IS_JAMES_FACTS.map((fact, index) => (
            <button
              key={index}
              id={`james-fact-btn-${index}`}
              onClick={() => setActiveFactIndex(index)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                activeFactIndex === index
                  ? "bg-white border-[#1D1D1F] text-[#1D1D1F] shadow-sm scale-[1.01]"
                  : "bg-[#F5F5F7] border-[#E5E5EA] hover:border-neutral-400 text-neutral-500 hover:text-[#1D1D1F]"
              }`}
            >
              <div className={`p-2.5 rounded-xl transition-all ${
                activeFactIndex === index ? "bg-[#ff6b00]/10 text-[#ff6b00]" : "bg-white text-[#86868B]"
              }`}>
                {getIcon(index)}
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm leading-tight">
                  {fact.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                  {fact.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Fact Detail panel */}
        <div className="md:col-span-12 lg:col-span-7">
          <motion.div
            key={activeFactIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, type: "spring" }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5EA] shadow-xl"
          >
            <div className="flex justify-between items-center gap-2 border-b border-[#E5E5EA]/80 pb-4 mb-4">
              <span className="font-mono text-xs font-extrabold text-[#ff6b00]">
                CHAPTER 0{activeFactIndex + 1}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                Literary Record
              </span>
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D1D1F]">
              {WHO_IS_JAMES_FACTS[activeFactIndex].title}
            </h3>
            
            <p className="text-[#86868B] font-sans text-base leading-relaxed mt-4 font-light">
              {WHO_IS_JAMES_FACTS[activeFactIndex].description}
            </p>

            {/* Scriptures Sub-panel */}
            <div className="mt-8 space-y-3 pt-6 border-t border-[#E5E5EA]">
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#ff6b00] flex items-center gap-1.5 font-bold">
                <BookOpen className="w-3.5 h-3.5" /> Canonical Scripture References
              </h4>
              
              {WHO_IS_JAMES_FACTS[activeFactIndex].scriptures.map((scripture, sIdx) => (
                <div 
                  key={sIdx}
                  className="bg-[#F5F5F7] p-4 rounded-xl border border-[#E5E5EA] flex flex-col gap-1.5 hover:scale-[1.01] transition-transform"
                >
                  <span className="font-mono text-[10px] font-bold text-[#ff6b00] uppercase tracking-wider">
                    {scripture.ref}
                  </span>
                  <p className="font-serif italic text-neutral-700 text-xs sm:text-sm leading-relaxed">
                    “{scripture.text}”
                  </p>
                </div>
              ))}

              {activeFactIndex === 2 && (
                <div className="text-[11px] text-[#86868B] italic pl-1 flex items-center gap-1.5 mt-2 font-mono">
                  <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Cross-verified by Flavius Josephus (Antiquities 20.9.1).</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

