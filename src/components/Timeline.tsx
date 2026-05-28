/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, HelpCircle, ArrowRight } from "lucide-react";
import { TIMELINE_EVENTS } from "../data";

export default function Timeline() {
  const [selectedIdx, setSelectedIdx] = useState(2); // Default to Rose to Jerusalem Leadership (AD 44)

  return (
    <div className="w-full">
      
      {/* Stepper Selector for Desktop, interactive list for Mobile */}
      <div className="mb-8 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin">
        <div className="flex gap-3 min-w-max">
          {TIMELINE_EVENTS.map((evt, index) => {
            const isActive = selectedIdx === index;
            return (
              <button
                key={index}
                id={`timeline-step-btn-${index}`}
                onClick={() => setSelectedIdx(index)}
                className={`w-36 text-center px-4 py-3.5 rounded-2xl border transition-all duration-300 relative font-sans ${
                  isActive
                    ? "bg-[#1D1D1F] border-[#1D1D1F] text-white shadow-lg scale-102"
                    : "bg-white border-[#E5E5EA] text-[#86868B] hover:border-neutral-400 hover:text-[#1D1D1F]"
                }`}
              >
                <p className={`font-mono text-[10px] uppercase tracking-widest mb-1 font-bold ${
                  isActive ? "text-[#ff6b00]" : "text-[#ff6b00]"
                }`}>
                  {evt.year}
                </p>
                <h4 className="text-xs truncate font-bold font-sans">{evt.title}</h4>
                
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1D1D1F] rotate-45" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Details Card */}
      <div className="bg-white rounded-3xl border border-[#E5E5EA] p-6 sm:p-8 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Card Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5EA] pb-5">
              <div className="flex items-center gap-3.5">
                <span className="p-3 bg-[#F5F5F7] text-[#1D1D1F] rounded-2xl border border-[#E5E5EA]">
                  <Calendar className="w-5 h-5 text-[#ff6b00]" />
                </span>
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#86868B]">
                    CHRONOLOGY RECORD
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#1D1D1F] tracking-tight">
                    {TIMELINE_EVENTS[selectedIdx].year} — {TIMELINE_EVENTS[selectedIdx].title}
                  </h3>
                </div>
              </div>
              
              {TIMELINE_EVENTS[selectedIdx].badge && (
                <span className="font-mono text-[10px] bg-[#ff6b00]/10 text-[#ff6b00] px-3 py-1.5 rounded-full border border-[#ff6b00]/5 font-bold tracking-wider uppercase">
                  {TIMELINE_EVENTS[selectedIdx].badge}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-neutral-600 font-sans text-base leading-relaxed font-light">
              {TIMELINE_EVENTS[selectedIdx].description}
            </p>

            {/* Chronology Specific Footer with Sources */}
            <div className="bg-[#F5F5F7] rounded-2xl p-4 sm:p-5 border border-[#E5E5EA]">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#1D1D1F] font-bold mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#ff6b00]" /> FULL CANONICAL & SECULAR PRIMARY SOURCE TEXTS (ESV)
              </h4>
              
              <div className="space-y-3">
                {TIMELINE_EVENTS[selectedIdx].fullScriptures?.map((scr, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-white border border-[#E5E5EA] shadow-3xs hover:scale-[1.005] transition-transform"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#ff6b00] uppercase tracking-wider">
                        {scr.ref}
                      </span>
                      <span className="text-[9px] text-[#86868B] font-mono uppercase tracking-wider">
                        Unabridged Text
                      </span>
                    </div>
                    <p className="font-serif italic text-neutral-700 text-xs sm:text-sm leading-relaxed pl-1">
                      “{scr.text}”
                    </p>
                  </div>
                ))}
              </div>

              {selectedIdx === 5 && (
                <p className="text-[11px] text-[#86868B] mt-4 leading-relaxed font-mono pl-1">
                  HISTORICAL FOOTNOTE: Flavius Josephus (Antiquities of the Jews 20.9.1) is the chief non-biblical source validating James' stoning.
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Info Indicator */}
        <div className="flex justify-between items-center text-xs text-neutral-400 mt-6 pt-5 border-t border-[#E5E5EA]">
          <span>Verified against canonical Christian testaments and Roman Annals.</span>
          <button 
            onClick={() => setSelectedIdx((prev) => (prev + 1) % TIMELINE_EVENTS.length)}
            className="text-[#ff6b00] hover:text-[#ff8c3a] font-bold flex items-center gap-1.5 group transition-all"
          >
            Next Era <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

    </div>
  );
}

