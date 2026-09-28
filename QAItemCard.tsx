import React, { useState } from 'react';
import { Volume2, HelpCircle, CheckCircle2, ChevronDown, Eye, EyeOff } from 'lucide-react';
import { QAItem } from './data';

interface QAItemCardProps {
  item: QAItem;
  forceOpen?: boolean;
  onSpeak?: (text: string) => void;
}

export const QAItemCard: React.FC<QAItemCardProps> = ({
  item,
  forceOpen,
  onSpeak,
}) => {
  const [showQuestionArm, setShowQuestionArm] = useState(false);
  const [showAnswerArm, setShowAnswerArm] = useState(false);
  const [showAnswer, setShowAnswer] = useState(true);

  const isQuestionArmOpen = forceOpen !== undefined ? forceOpen : showQuestionArm;
  const isAnswerArmOpen = forceOpen !== undefined ? forceOpen : showAnswerArm;

  const speak = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    if (onSpeak) {
      onSpeak(text);
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Question Header */}
      <div
        onClick={() => setShowQuestionArm(!showQuestionArm)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setShowQuestionArm(!showQuestionArm);
          }
        }}
        className="p-4 sm:p-5 bg-gradient-to-r from-amber-50/60 to-orange-50/30 border-b border-slate-100 cursor-pointer group"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500 text-white font-bold text-xs shrink-0 shadow-sm">
              #{item.id}
            </span>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="text-base select-none">🇪🇸</span>
                <h4 className="text-slate-900 font-semibold text-base sm:text-lg group-hover:text-amber-800 transition-colors">
                  {item.question.es}
                </h4>
              </div>

              {isQuestionArmOpen ? (
                <div className="pt-2 mt-1 border-t border-amber-200/60 flex items-start gap-2 text-amber-950 font-medium text-sm sm:text-base animate-fadeIn">
                  <span className="text-base select-none">🇦🇲</span>
                  <p>{item.question.hy}</p>
                </div>
              ) : (
                <p className="text-xs text-slate-400 group-hover:text-amber-700 transition-colors">
                  👆 Կտտացրեք հարցի հայերեն թարգմանության համար (Кликните для перевода вопроса)
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <button
              type="button"
              onClick={(e) => speak(e, item.question.es)}
              title="Escuchar pregunta"
              className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100/60 rounded-lg transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <div
              className={`p-1 rounded-full text-slate-400 transition-transform ${
                isQuestionArmOpen ? 'rotate-180 text-amber-600 bg-amber-100' : ''
              }`}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Answer Area */}
      <div className="p-4 sm:p-5 bg-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Respuesta / Պատասխան
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowAnswer(!showAnswer);
            }}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            {showAnswer ? (
              <>
                <EyeOff className="w-3 h-3" /> Թաքցնել պատասխանը
              </>
            ) : (
              <>
                <Eye className="w-3 h-3" /> Ցույց տալ պատասխանը
              </>
            )}
          </button>
        </div>

        {showAnswer ? (
          <div
            onClick={() => setShowAnswerArm(!showAnswerArm)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setShowAnswerArm(!showAnswerArm);
              }
            }}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer group ${
              isAnswerArmOpen
                ? 'bg-emerald-50/50 border-emerald-300'
                : 'bg-slate-50/80 border-slate-200 hover:border-emerald-300'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2 flex-1">
                <span className="text-base select-none">🇪🇸</span>
                <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed">
                  {item.answer.es}
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0 ml-1">
                <button
                  type="button"
                  onClick={(e) => speak(e, item.answer.es)}
                  title="Escuchar respuesta"
                  className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <div
                  className={`p-1 rounded-full text-slate-400 transition-transform ${
                    isAnswerArmOpen ? 'rotate-180 text-emerald-700 bg-emerald-100' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {isAnswerArmOpen ? (
              <div className="mt-2.5 pt-2.5 border-t border-emerald-200/80 flex items-start gap-2 text-emerald-950 text-sm sm:text-base animate-fadeIn">
                <span className="text-base select-none">🇦🇲</span>
                <p className="font-normal">{item.answer.hy}</p>
              </div>
            ) : (
              <p className="mt-1 text-[11px] text-slate-400 group-hover:text-emerald-700 transition-colors">
                👆 Կտտացրեք պատասխանի հայերեն թարգմանության համար (Кликните для перевода)
              </p>
            )}
          </div>
        ) : (
          <div
            onClick={() => setShowAnswer(true)}
            className="p-4 text-center border border-dashed border-slate-300 rounded-xl bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors text-xs text-slate-500"
          >
            Պատասխանը թաքցված է ինքնաստուգման համար։ Կտտացրեք այն բացելու համար։
          </div>
        )}
      </div>
    </div>
  );
};
