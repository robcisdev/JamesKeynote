/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Award, FileSpreadsheet, Flame, BookOpen, Calculator, CalendarCheck } from "lucide-react";
import { SPECIAL_FEATURES, PROMISE_STUDY_DATA } from "../data";

export default function SpecialFeatures() {
  const [showPromiseDetail, setShowPromiseDetail] = useState(false);

  const getIcon = (title: string) => {
    if (title.includes("Earliest")) return <CalendarCheck className="w-5 h-5 text-[#ff6b00]" />;
    if (title.includes("Proverbs")) return <BookOpen className="w-5 h-5 text-[#ff6b00]" />;
    if (title.includes("Density")) return <Calculator className="w-5 h-5 text-[#ff6b00]" />;
    return <Flame className="w-5 h-5 text-[#ff6b00]" />;
  };

  return (
    <div className="w-full">
      {/* Distinctive Features Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {SPECIAL_FEATURES.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F5F5F7] p-6 rounded-3xl border border-[#E5E5EA] hover:border-neutral-400 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="p-2.5 bg-white border border-[#E5E5EA] rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-300">
                  {getIcon(feature.title)}
                </span>
                
                {/* Distinctive High-fidelity Statistic display */}
                <div className="text-right">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#86868B] block">
                    {feature.metric}
                  </span>
                  <span className="font-sans text-lg sm:text-xl font-black text-[#ff6b00] tracking-tight">
                    {feature.stat}
                  </span>
                </div>
              </div>

              <h3 className="font-sans font-extrabold text-[#1D1D1F] text-lg mb-1.5">
                {feature.title}
              </h3>
              
              <p className="text-[#86868B] text-xs sm:text-sm leading-relaxed font-sans font-light">
                {feature.description}
              </p>
            </div>

            {feature.title.includes("Imperatives") && (
              <div className="mt-4 pt-3 border-t border-[#E5E5EA]">
                {/* Imperative ratio bar */}
                <div className="flex justify-between items-center text-[10px] text-[#86868B] mb-1.5 font-mono">
                  <span>IMPERATIVE FREQUENCY</span>
                  <span className="font-bold text-[#ff6b00]">50% Command Density</span>
                </div>
                <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-[#ff6b00] to-[#f43f5e]" />
                </div>
                <span className="text-[10px] text-neutral-400 italic block mt-1.5">
                  1 imperative count for nearly every 2 verses—higher frequency than any NT writing.
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Everett Storms Promise Study Spotlight Box */}
      <div className="bg-white rounded-3xl border border-[#E5E5EA] p-6 sm:p-8 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff6b00]/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#E5E5EA] mb-6">
          <div className="flex items-center gap-3">
            <span className="p-3 bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl shadow-xs text-[#ff6b00]">
              <FileSpreadsheet className="w-6 h-6" />
            </span>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold block">
                SCRIPTURAL COMPARISON STUDY
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#1D1D1F] tracking-tight">
                Bible Promises Study Spotlight
              </h3>
            </div>
          </div>

          <button
            onClick={() => setShowPromiseDetail((prev) => !prev)}
            className="text-white bg-[#1D1D1F] hover:bg-neutral-800 px-4.5 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer min-h-[44px]"
          >
            {showPromiseDetail ? "Minimize Statistics" : "Expand Research Story"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Visual Stats Column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-3 w-full">
            <div className="bg-[#F5F5F7] p-4 rounded-2xl border border-[#E5E5EA] text-center">
              <span className="font-sans text-2xl sm:text-3xl font-black text-[#ff6b00] block tracking-tighter">
                {PROMISE_STUDY_DATA.totalPromises.toLocaleString()}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#86868B] block mt-1 font-bold">
                Total Promises
              </span>
            </div>
            <div className="bg-[#F5F5F7] p-4 rounded-2xl border border-[#E5E5EA] text-center font-sans">
              <span className="font-sans text-2xl sm:text-3xl font-black text-[#1D1D1F] block tracking-tighter">
                {PROMISE_STUDY_DATA.godToManPromises.toLocaleString()}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#86868B] block mt-1 font-bold">
                God To Man
              </span>
            </div>
          </div>

          {/* Explanatory Narrative Column */}
          <div className="md:col-span-8 space-y-3">
            <p className="text-[#86868B] text-sm sm:text-base leading-relaxed font-sans font-light">
              The entire Bible is famously filled with thousands of comforting promises. In sharp contrast, <strong>James focuses almost entirely on commands (imperatives)</strong>—demanding active human covenant responsibility.
            </p>
            
            <div className="p-4 bg-[#F5F5F7] rounded-2xl border border-[#E5E5EA] text-xs sm:text-sm text-[#1D1D1F] italic font-serif leading-relaxed">
              “{PROMISE_STUDY_DATA.insight}”
            </div>
          </div>

        </div>

        {/* Conditional Expanded Story Box */}
        {showPromiseDetail && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-6 border-t border-[#E5E5EA] bg-white p-4 rounded-2xl border border-[#E5E5EA]/80"
          >
            <h4 className="font-sans font-bold text-sm text-[#1D1D1F] mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#ff6b00]" /> Everett Storms Study Details
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#86868B] leading-relaxed font-light">
              Methodical school teacher <strong>Everett R. Storms</strong> from <strong>Kitchener, Ontario, Canada</strong>, took a year and a half during his 27th diligent reading of the scriptures to count every promise in the Bible. He concluded there were exactly <strong>8,810 promises</strong>, with 7,487 coming directly from God to comfort humanity. 
              <br /><br />
              Yet, James stands as the ultimate counter-weight: where the Bible offers thousands of promises to believe, James offers 54 clear, no-nonsense tasks to DO.
            </p>
          </motion.div>
        )}

      </div>

    </div>
  );
}
