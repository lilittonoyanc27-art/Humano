import React, { useState } from 'react';
import { Volume2, Sparkles, Copy, Check, BookMarked, Lightbulb } from 'lucide-react';
import { memorizeSectionData } from './data';

export const MemorizeSection: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [copiedEs, setCopiedEs] = useState(false);
  const [copiedHy, setCopiedHy] = useState(false);
  const [isPlayingFull, setIsPlayingFull] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const playFullSpanish = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const fullText = memorizeSectionData.paragraphs.map((p) => p.es).join(' ');
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    utterance.onstart = () => setIsPlayingFull(true);
    utterance.onend = () => setIsPlayingFull(false);
    utterance.onerror = () => setIsPlayingFull(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingFull(false);
    }
  };

  const copyToClipboard = (text: string, isEs: boolean) => {
    navigator.clipboard.writeText(text);
    if (isEs) {
      setCopiedEs(true);
      setTimeout(() => setCopiedEs(false), 2000);
    } else {
      setCopiedHy(true);
      setTimeout(() => setCopiedHy(false), 2000);
    }
  };

  // Helper to render text with highlighted key terms
  const renderHighlighted = (
    text: string,
    highlights: string[],
    badgeColor: string
  ) => {
    if (!highlights || highlights.length === 0) return <span>{text}</span>;

    // Build regex to split and highlight
    const escaped = highlights
      .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) => {
          const isMatch = highlights.some(
            (h) => h.toLowerCase() === part.toLowerCase()
          );
          if (isMatch) {
            return (
              <span
                key={i}
                className={`font-bold px-1.5 py-0.5 rounded-md ${badgeColor} inline-block my-0.5 transition-colors`}
              >
                {part}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  const fullSpanishText = memorizeSectionData.paragraphs
    .map((p) => p.es)
    .join('\n\n');
  const fullArmenianText = memorizeSectionData.paragraphs
    .map((p) => p.hy)
    .join('\n\n');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title & Introduction Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold uppercase tracking-wider text-amber-50">
            <Sparkles className="w-3.5 h-3.5" /> Անգիր սովորելու համար
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
            La evolución humana — Մարդու էվոլյուցիան
          </h2>
          <p className="text-amber-100 text-sm sm:text-base font-medium">
            Կարճ տարբերակ՝ առանձին իսպաներեն և հայերեն տեքստերով
          </p>
        </div>
      </div>

      {/* 5 Key Points to Memorize / Գլխավորը */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">
              Գլխավոր հիմնական կետերը (Главное для запоминания)
            </h3>
          </div>
          <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full">
            5 առանցքային կետ
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {memorizeSectionData.keyPoints.map((kp) => (
            <div
              key={kp.num}
              className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 hover:border-amber-400 hover:shadow-xs transition-all space-y-1.5 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                  {kp.num}
                </span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">
                  🇪🇸 {kp.conceptEs}
                </span>
              </div>
              <p className="text-amber-900 font-semibold text-xs pl-8">
                🇦🇲 {kp.conceptHy}
              </p>
              <p className="text-[11px] text-slate-500 pl-8 pt-1 border-t border-amber-200/50">
                {kp.descEs}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PART 1: FULL TEXT IN SPANISH FIRST */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl select-none">🇪🇸</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                La evolución humana
              </h2>
              <span className="text-xs font-medium text-slate-400">
                Texto completo en español (ամբողջ տեքստը իսպաներենով)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isPlayingFull ? (
              <button
                type="button"
                onClick={stopAudio}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-100 text-red-700 text-xs font-semibold hover:bg-red-200 transition-colors"
              >
                Դադարեցնել
              </button>
            ) : (
              <button
                type="button"
                onClick={playFullSpanish}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 text-white text-xs font-semibold hover:bg-amber-600 transition-colors shadow-xs"
              >
                <Volume2 className="w-4 h-4" /> Լսել ամբողջը
              </button>
            )}

            <button
              type="button"
              onClick={() => copyToClipboard(fullSpanishText, true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
              title="Պատճենել տեքստը"
            >
              {copiedEs ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Պատճենված է
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Պատճենել
                </>
              )}
            </button>
          </div>
        </div>

        {/* Spanish Paragraphs block */}
        <div className="space-y-4 text-base sm:text-lg text-slate-800 leading-relaxed">
          {memorizeSectionData.paragraphs.map((p, idx) => {
            const isHovered = highlightedIndex === idx;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setHighlightedIndex(idx)}
                onMouseLeave={() => setHighlightedIndex(null)}
                onClick={() => speak(p.es)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative group ${
                  isHovered
                    ? 'bg-amber-50/90 border-amber-400 shadow-sm'
                    : 'bg-slate-50/60 border-slate-200/80 hover:border-amber-300'
                }`}
                title="Կտտացրեք այս հատվածը լսելու համար"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p>
                      {renderHighlighted(
                        p.es,
                        p.esHighlights,
                        'bg-amber-200/80 text-amber-950'
                      )}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(p.es);
                    }}
                    className="p-1.5 text-slate-400 group-hover:text-amber-600 hover:bg-amber-100 rounded-lg transition-colors shrink-0"
                    title="Escuchar párrafo"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PART 2: FULL TEXT IN ARMENIAN SEPARATELY AT THE BOTTOM */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl select-none">🇦🇲</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Մարդու էվոլյուցիան
              </h2>
              <span className="text-xs font-medium text-slate-400">
                Ամբողջ տեքստը հայերենով (Texto completo en armenio)
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => copyToClipboard(fullArmenianText, false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors self-start sm:self-auto"
            title="Պատճենել հայերեն տեքստը"
          >
            {copiedHy ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Պատճենված է
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Պատճենել
              </>
            )}
          </button>
        </div>

        {/* Armenian Paragraphs block */}
        <div className="space-y-4 text-base sm:text-lg text-slate-800 leading-relaxed">
          {memorizeSectionData.paragraphs.map((p, idx) => {
            const isHovered = highlightedIndex === idx;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setHighlightedIndex(idx)}
                onMouseLeave={() => setHighlightedIndex(null)}
                className={`p-4 rounded-2xl border transition-all ${
                  isHovered
                    ? 'bg-amber-50/90 border-amber-400 shadow-sm'
                    : 'bg-slate-50/60 border-slate-200/80 hover:border-amber-300'
                }`}
              >
                <p>
                  {renderHighlighted(
                    p.hy,
                    p.hyHighlights,
                    'bg-amber-200/80 text-amber-950 font-semibold'
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
