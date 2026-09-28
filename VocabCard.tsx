import React, { useState } from 'react';
import { Volume2, Check } from 'lucide-react';
import { VocabItem } from './data';

interface VocabCardProps {
  item: VocabItem;
  forceOpen?: boolean;
  onSpeak?: (text: string) => void;
}

export const VocabCard: React.FC<VocabCardProps> = ({ item, forceOpen, onSpeak }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showTranslation = forceOpen !== undefined ? forceOpen : isOpen;

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSpeak) {
      onSpeak(item.es);
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(item.es);
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
      className={`group relative p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 select-none ${
        showTranslation
          ? 'bg-amber-50/80 border-amber-300 shadow-sm'
          : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-md'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
            #{item.id}
          </span>
          <span className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
            {item.es}
          </span>
        </div>
        <button
          type="button"
          onClick={speak}
          title="Escuchar"
          className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100 rounded-lg transition-colors"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between min-h-[28px]">
        {showTranslation ? (
          <div className="flex items-center gap-2 text-amber-900 font-medium text-sm animate-fadeIn">
            <span className="text-xs px-1.5 py-0.5 rounded bg-amber-200/80 text-amber-900 font-semibold">
              ՀԱՅ
            </span>
            <span>{item.hy}</span>
          </div>
        ) : (
          <span className="text-xs text-slate-400 group-hover:text-amber-600 italic">
            Կտտացրեք թարգմանության համար (Клик)
          </span>
        )}
      </div>
    </div>
  );
};
