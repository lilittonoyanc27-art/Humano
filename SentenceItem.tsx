import React, { useState } from 'react';
import { Volume2, ChevronDown, Check } from 'lucide-react';

interface SentenceItemProps {
  es: string;
  hy: string;
  forceOpen?: boolean;
  onSpeak?: (text: string) => void;
  indexLabel?: string | number;
}

export const SentenceItem: React.FC<SentenceItemProps> = ({
  es,
  hy,
  forceOpen,
  onSpeak,
  indexLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const showArmenian = forceOpen !== undefined ? forceOpen : isOpen;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSpeak) {
      onSpeak(es);
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(es);
      utterance.lang = 'es-ES';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      }}
      className={`group relative text-left w-full p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
        showArmenian
          ? 'bg-amber-50/70 border-amber-300 shadow-sm'
          : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5 flex-1">
          {indexLabel && (
            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 mt-0.5">
              {indexLabel}
            </span>
          )}
          <span className="text-base select-none">🇪🇸</span>
          <div className="flex-1">
            <p className="text-slate-900 font-medium leading-relaxed tracking-wide text-base sm:text-lg">
              {es}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          <button
            type="button"
            onClick={handleSpeak}
            title="Escuchar en español / Լսել իսպաներեն"
            className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100/60 rounded-lg transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <div
            className={`p-1 rounded-full transition-transform duration-200 ${
              showArmenian ? 'rotate-180 text-amber-600 bg-amber-100' : 'text-slate-400 group-hover:text-slate-600'
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Armenian translation */}
      {showArmenian ? (
        <div className="mt-3 pt-3 border-t border-amber-200/80 animate-fadeIn flex items-start gap-2.5">
          <span className="text-base select-none">🇦🇲</span>
          <p className="text-amber-950 font-normal leading-relaxed text-sm sm:text-base">
            {hy}
          </p>
        </div>
      ) : (
        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-400 group-hover:text-amber-600 transition-colors">
          <span>Կտտացրեք հայերեն թարգմանությունը տեսնելու համար</span>
          <span className="text-slate-300">•</span>
          <span>Кликните для перевода</span>
        </div>
      )}
    </div>
  );
};
