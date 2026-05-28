/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, AlertTriangle, Scale, MessageSquare, Quote, BookOpen } from "lucide-react";
import { ENVIRONMENT_FACTS } from "../data";

export default function Environment() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-[#ff6b00]" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-[#ff6b00]" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-[#ff6b00]" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-[#ff6b00]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#1D1D1F]" />;
    }
  };

  return (
    <div className="w-full">
      
      {/* 2x2 Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {ENVIRONMENT_FACTS.map((factor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-[#F5F5F7] p-6 rounded-3xl border border-[#E5E5EA] hover:border-neutral-400 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 bg-white border border-[#E5E5EA] rounded-xl shadow-xs group-hover:scale-110 transition-transform duration-300">
                  {getIcon(factor.iconName)}
                </span>
                <h3 className="font-sans font-extrabold text-lg text-[#1D1D1F]">
                  {factor.title}
                </h3>
              </div>
              
              <p className="text-[#86868B] text-sm leading-relaxed mb-6 font-sans font-light">
                {factor.description}
              </p>
            </div>

            {/* Biblical Evidence Sub-card */}
            <div className="bg-white p-4 rounded-2xl border border-[#E5E5EA] relative overflow-hidden">
              <blockquote className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-neutral-200/50" />
                <p className="font-serif italic text-xs text-[#1D1D1F] leading-relaxed pl-5 mb-2">
                  “{factor.evidence.text}”
                </p>
                <cite className="font-mono text-[10px] font-bold text-[#ff6b00] not-italic pl-5 block tracking-wider uppercase">
                  Ref // {factor.evidence.ref}
                </cite>
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pastoral Counselor Tone Anchor */}
      <div className="bg-white rounded-3xl border border-[#E5E5EA] p-6 sm:p-8 flex flex-col md:flex-row items-stretch gap-6 shadow-xl">
        <div className="md:w-1/4 flex flex-col items-center justify-center text-center p-5 bg-[#F5F5F7] rounded-2xl border border-[#E5E5EA]">
          <span className="font-sans text-3xl font-black text-[#ff6b00] mb-1">BLUNT</span>
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#86868B] font-bold">Pastoral Voice</span>
        </div>
        <div className="md:w-3/4 flex flex-col justify-center">
          <h4 className="font-sans font-extrabold text-lg text-[#1D1D1F] mb-1.5">
            A Wise, No-nonsense Pastor's Style
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#86868B] leading-relaxed font-light">
            These severe external pressures are exactly why James writes with the tone of a wise, direct pastor — direct, blunt, and deeply practical. Rather than offering dry abstract theology, his counsel reads much like the Old Testament book of Proverbs, calling out favoritism, slander, hypocrisy, and false intellectual-only belief without hesitation. 
          </p>
        </div>
      </div>

    </div>
  );
}

