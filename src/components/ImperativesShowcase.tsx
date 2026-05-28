/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Search, Quote, CheckCircle, Info } from "lucide-react";
import { SELECTED_IMPERATIVES } from "../data";

type CategoryType = "All" | "Speech & Tongue" | "Trials & Perseverance" | "Humility & Community" | "Social Justice & faith";

const CATEGORIES: CategoryType[] = [
  "All",
  "Trials & Perseverance",
  "Speech & Tongue",
  "Humility & Community",
  "Social Justice & faith"
];

// Reflective prompts to show how faith gets tested and responds actively in modern everyday life
const GET_REFLECTION_PROMPT = (id: string) => {
  switch (id) {
    case "imp1":
      return "Next time you face a painful disruption, pause before complaining. How can you intentionally treat it as a wisdom builder?";
    case "imp2":
      return "When facing a major professional or personal crossroad, ask God directly for guidance rather than relying just on human smarts.";
    case "imp3":
      return "In your next intense conversation, challenge yourself to let the other person finish fully before you start crafting your rebuttal.";
    case "imp4":
      return "Reflect on one biblical sermon or truth you heard recently. What is one concrete physical task you can execute today to do what it said?";
    case "imp5":
      return "Notice who gets treated with high honor on your social media feeds or local assemblies. Go out of your way to honor someone overlooked.";
    case "imp6":
      return "If you lead or counsel others, remember the strict standard of truth: speak with transparency, care, and humble theological weight.";
    case "imp7":
      return "Surrender your selfish desires to God. Actively speak against greed or ego when you feel them rising in your thoughts.";
    case "imp8":
      return "Commit to going a full 48 hours without making any critical, gossiping, or negative comments about a colleague, brother, or sister.";
    case "imp9":
      return "Refuse to over-promise or exaggerate with oaths. Let your core commitments be simple, reliable, and deeply honest.";
    case "imp10":
      return "Form an active accountability partnership. Share a struggle or mistake you made this week with a trusted peer and pray for one another.";
    default:
      return "Commit to putting this specific biblical directive into regular, daily physical service.";
  }
};

export default function ImperativesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [completedImperatives, setCompletedImperatives] = useState<string[]>([]);

  const filteredImperatives = useMemo(() => {
    return SELECTED_IMPERATIVES.filter((imp) => {
      const matchesCategory = selectedCategory === "All" || imp.category === selectedCategory;
      const matchesSearch = 
        imp.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
        imp.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        imp.verseQuote.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleCompleted = (id: string) => {
    setCompletedImperatives((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full text-white">
      
      {/* Search and Category Filter Toolbar on Dark Acrylic panel */}
      <div className="bg-[#2D2D2D]/60 backdrop-blur-md rounded-2xl border border-white/10 p-4 mb-6 flex flex-col xl:flex-row gap-4 items-center justify-between">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 w-full xl:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`cat-filter-btn-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-sans font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black font-extrabold"
                  : "bg-white/5 hover:bg-white/10 text-[#86868B] hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search bar input with icon */}
        <div className="relative w-full xl:w-64 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            id="imperatives-search-input"
            type="text"
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/20 transition-all placeholder:text-neutral-500"
          />
        </div>
      </div>

      {/* Dynamic Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredImperatives.map((imp) => {
            const isCompleted = completedImperatives.includes(imp.id);
            const customReflect = GET_REFLECTION_PROMPT(imp.id);
            return (
              <motion.div
                key={imp.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl border p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group ${
                  isCompleted 
                    ? "bg-[#ff6b00]/10 border-[#ff6b00]/40 shadow-lg"
                    : "bg-[#2D2D2D]/60 border-white/5 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono text-[10px] font-extrabold text-[#ff6b00] tracking-wider bg-[#ff6b00]/10 border border-[#ff6b00]/20 px-2 py-0.5 rounded-lg">
                      {imp.reference}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-0.5 rounded-lg border border-white/5 font-semibold">
                      {imp.category}
                    </span>
                  </div>

                  {/* Imperative Bold command summary */}
                  <h3 className="font-sans font-bold text-base text-white group-hover:text-[#ff6b00] transition-colors leading-tight mb-3">
                    {imp.command}
                  </h3>

                  {/* Original Verse Quote block */}
                  <div className="bg-black/20 p-3.5 rounded-2xl border border-white/5 relative mb-4">
                    <Quote className="absolute -top-1 -left-1 w-5 h-5 text-white/5" />
                    <p className="font-serif italic text-xs text-white/70 leading-relaxed pl-4">
                      “{imp.verseQuote}”
                    </p>
                  </div>
                </div>

                {/* Practical Life Challenge Callout with toggle */}
                <div className="mt-2 pt-4 border-t border-white/5 bg-black/10 -mx-5 -mb-5 p-4 rounded-b-3xl">
                  <div className="flex items-start gap-2 mb-3">
                    <Info className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[9px] tracking-wider text-[#ff6b00] font-bold block mb-0.5 uppercase">
                        Everyday Life Practice
                      </span>
                      <p className="text-xs text-[#86868B] leading-relaxed font-sans font-light">
                        {customReflect}
                      </p>
                    </div>
                  </div>
                  
                  {/* Practice Done Checklist Action */}
                  <button
                    id={`practice-done-btn-${imp.id}`}
                    onClick={() => toggleCompleted(imp.id)}
                    className={`w-full py-1.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border cursor-pointer ${
                      isCompleted
                        ? "bg-white border-white text-black"
                        : "bg-white/5 border-white/5 hover:border-white/20 text-[#86868B] hover:text-white"
                    }`}
                  >
                    <CheckCircle className={`w-3.5 h-3.5 ${isCompleted ? "text-black" : "text-neutral-500"}`} />
                    {isCompleted ? "Committed to Practice" : "Commit to Active Obedience"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty Search Feedback state */}
      {filteredImperatives.length === 0 && (
        <div className="bg-[#2D2D2D]/60 rounded-3xl border border-white/10 p-12 text-center max-w-sm mx-auto">
          <Hammer className="w-8 h-8 text-[#ff6b00] mx-auto mb-3" />
          <h4 className="font-sans font-bold text-base text-white">No Imperatives Found</h4>
          <p className="font-sans text-xs text-neutral-400 mt-1">
            No directives match your search query. Try filtering another category or reset.
          </p>
          <button
            id="clear-filter-btn"
            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
            className="mt-4 px-4 py-1.5 bg-[#ff6b00] text-black font-semibold rounded-lg text-xs hover:bg-[#ff8c3a] transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Summary metric */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
        <span>Struggling to memorize commands? Use the commit buttons to select your active reminders.</span>
        <div className="font-mono font-bold uppercase tracking-wider text-xs">
          Committed Calls: <span className="text-[#ff6b00] font-black">{completedImperatives.length}</span> / {SELECTED_IMPERATIVES.length}
        </div>
      </div>

    </div>
  );
}
