/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { CheckSquare, Quote, ClipboardCheck, Sparkles, RefreshCw } from "lucide-react";
import { CORE_VERSES } from "../data";

interface TestScenario {
  situation: string;
  reference: string;
  fullScripture: string;
  hearersOnlyResponse: string;
  doersOfWordResponse: string;
}

const ACTION_SCENARIOS: TestScenario[] = [
  {
    situation: "Meeting a brother or sister who is in extreme poverty, poorly clothed, and lacking food",
    reference: "James 2:15-16",
    fullScripture: "If a brother or sister is poorly clothed and lacking in daily food, and one of you says to them, “Go in peace, be warmed and filled,” without giving them the things needed for the body, what good is that?",
    hearersOnlyResponse: "Give theological advice, saying: 'Go in peace, be warmed and filled!', but do nothing physically to assist them.",
    doersOfWordResponse: "Immediately share raw provisions, buy food, or provide clothing out of your own practical resources."
  },
  {
    situation: "A sudden, painful trial or economic disruption interrupts your life completely",
    reference: "James 1:2-4",
    fullScripture: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",
    hearersOnlyResponse: "Complain, assume God is absent, and give up under anger or bitterness of the testing.",
    doersOfWordResponse: "Choose joy, knowing that the structural testing of your faith builds character, steady endurance, and wisdom."
  },
  {
    situation: "In the middle of a conflict, someone insults your beliefs with harsh, provoking speech",
    reference: "James 1:19",
    fullScripture: "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger;",
    hearersOnlyResponse: "Erupt immediately, lash out, defend your reputation with sharp gossip, and spread rumors.",
    doersOfWordResponse: "Restrain your tongue. Be quick to listen, agonizingly slow to speak, and intentional about avoiding anger."
  },
  {
    situation: "Someone with fine rings and luxury clothes enters your school or church",
    reference: "James 2:1",
    fullScripture: "My brothers, show no partiality as you hold the faith in our Lord Jesus Christ, the Lord of glory.",
    hearersOnlyResponse: "Fawn over them, offer them the best front row seats, and completely ignore the poorly-dressed person in the corner.",
    doersOfWordResponse: "Show absolutely zero partiality, treating all human beings with identical honor and pastoral dignity."
  }
];

export default function PrimaryMessage() {
  const [activeVerseId, setActiveVerseId] = useState(CORE_VERSES[0].id);
  const [scenarioIdx, setScenarioIdx] = useState(0);

  const selectedVerse = CORE_VERSES.find(v => v.id === activeVerseId) || CORE_VERSES[0];

  return (
    <div className="w-full">
      {/* Major Grid: Core Verses vs Interactive Practice Lab */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Column A: Scripture Core Vault */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E5E5EA] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-6 bg-[#ff6b00] rounded-full" />
              <h3 className="font-sans font-extrabold text-[#1D1D1F] text-xl">
                Pillar Verses: Active Faith
              </h3>
            </div>

            {/* Verse Selector Tabbed Row (Enlarged tactile padding for iPad) */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CORE_VERSES.map((v) => (
                <button
                  key={v.id}
                  id={`verse-btn-${v.id}`}
                  onClick={() => setActiveVerseId(v.id)}
                  className={`px-3.5 py-2.5 rounded-xl font-mono text-xs md:text-sm tracking-wide transition-all duration-300 border cursor-pointer min-h-[44px] ${
                    activeVerseId === v.id
                      ? "bg-[#1D1D1F] border-[#1D1D1F] text-white font-bold"
                      : "bg-[#F5F5F7] border-[#E5E5EA] text-[#86868B] hover:text-[#1D1D1F]"
                  }`}
                >
                  {v.reference}
                </button>
              ))}
            </div>

            {/* Dynamic Scripture block with elegant citation frame */}
            <motion.div
              key={activeVerseId}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F5F5F7] p-6 sm:p-8 rounded-2xl border border-[#E5E5EA] relative overflow-hidden flex flex-col justify-between min-h-[200px]"
            >
              <Quote className="absolute -right-3 -top-3 w-16 h-16 text-neutral-300/35 rotate-12" />
              <p className="font-serif italic text-base sm:text-lg text-[#1D1D1F] leading-relaxed pl-1 relative z-10">
                “{selectedVerse.text}”
              </p>
              <span className="font-mono text-xs font-bold text-[#ff6b00] tracking-wider mt-6 block self-end uppercase">
                Reference // {selectedVerse.reference} (ESV)
              </span>
            </motion.div>
          </div>

          <div className="mt-8 border-t border-[#E5E5EA] pt-6">
            <h4 className="font-serif italic text-sm text-[#86868B] leading-relaxed font-light">
              James teaches that faith by itself—if not translated into tangible physical action and bold decisions inside the community—is fundamentally <strong>sterile and dead</strong>.
            </h4>
          </div>
        </div>

        {/* Column B: Active Obedience Practical Tester Lab */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E5E5EA] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/[0.02] rounded-full blur-2xl" />
          
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="p-3 bg-[#ff6b00]/10 text-[#ff6b00] rounded-xl border border-[#ff6b00]/5">
                  <ClipboardCheck className="w-5 h-5 text-[#ff6b00]" />
                </span>
                <h3 className="font-sans font-extrabold text-[#1D1D1F] text-xl">
                  Faith Testing Lab
                </h3>
              </div>
              
              <button
                onClick={() => setScenarioIdx((prev) => (prev + 1) % ACTION_SCENARIOS.length)}
                className="p-2.5 px-4 bg-[#F5F5F7] hover:bg-neutral-200 border border-[#E5E5EA] text-xs md:text-sm font-bold text-[#1D1D1F] rounded-full transition-all flex items-center gap-1.5 cursor-pointer min-h-[44px]"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Next Trial
              </button>
            </div>

            <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 font-bold mb-2 block">
              REALITY TRIAL NO. 0{scenarioIdx + 1}
            </span>

            <h4 className="font-sans font-extrabold text-base text-[#1D1D1F] mb-4 bg-[#F5F5F7] p-5 rounded-2xl border border-[#E5E5EA]">
              {ACTION_SCENARIOS[scenarioIdx].situation}
            </h4>

            {/* Unabridged Scripture Reference Drawer for this trial */}
            <div className="mb-5 p-4 rounded-2xl border border-[#E5E5EA] bg-white text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#ff6b00] uppercase tracking-wider">
                  {ACTION_SCENARIOS[scenarioIdx].reference} ESV (Full Verse)
                </span>
                <span className="text-[9.5px] text-neutral-400 font-mono tracking-wider uppercase">REFERENCE PROOF</span>
              </div>
              <p className="font-serif italic text-neutral-600 leading-relaxed text-xs sm:text-sm">
                “{ACTION_SCENARIOS[scenarioIdx].fullScripture}”
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Hearer-only path */}
              <div className="p-4 sm:p-5 rounded-2xl border border-red-200 bg-red-50/10 relative">
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-red-600 bg-red-100/30 px-2 py-0.5 rounded border border-red-200 self-start inline-block mb-1.5">
                  HEARERS ALONE (DECEIVED)
                </span>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-1 font-sans font-light">
                  {ACTION_SCENARIOS[scenarioIdx].hearersOnlyResponse}
                </p>
              </div>

              {/* Doer path */}
              <div className="p-4 sm:p-5 rounded-2xl border border-emerald-200 bg-emerald-50/10 relative">
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-emerald-800 bg-emerald-100/30 px-2 py-0.5 rounded border border-emerald-200 self-start inline-block mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-emerald-600 animate-pulse" /> DIRECT FAITH ACTIONS
                </span>
                <p className="text-xs sm:text-sm text-[#1D1D1F] leading-relaxed pl-1 font-sans font-medium">
                  {ACTION_SCENARIOS[scenarioIdx].doersOfWordResponse}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#E5E5EA] text-xs sm:text-sm text-[#86868B] flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Conclusion: True faith undergoes testing via actions, reflecting raw Christian character.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
