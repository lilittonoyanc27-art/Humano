import React, { useState } from 'react';
import { Volume2, RotateCcw, ArrowRight, ArrowLeft, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { examVocabulary, generalQuestions, QAItem, VocabItem } from './data';

export const QuizTrainer: React.FC = () => {
  const [trainerMode, setTrainerMode] = useState<'cards' | 'quiz'>('cards');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardType, setCardType] = useState<'vocab' | 'qa'>('vocab');

  // Quiz state
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  const activeItems = cardType === 'vocab' ? examVocabulary : generalQuestions;
  const currentItem = activeItems[currentIndex];

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      window.speechSynthesis.speak(utterance);
    }
  };

  const nextCard = () => {
    setIsFlipped(false);
    setSelectedAnswer(null);
    setHasAnswered(false);
    if (currentIndex < activeItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevCard = () => {
    setIsFlipped(false);
    setSelectedAnswer(null);
    setHasAnswered(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(activeItems.length - 1);
    }
  };

  // Generate 4 options for quiz mode (vocabulary)
  const getQuizOptions = () => {
    if (cardType === 'vocab') {
      const current = currentItem as VocabItem;
      const otherVocab = examVocabulary.filter((v) => v.id !== current.id);
      const shuffledOthers = [...otherVocab].sort(() => 0.5 - Math.random()).slice(0, 3);
      const allOptions = [...shuffledOthers.map((o) => o.hy), current.hy].sort();
      return {
        questionEs: current.es,
        correctHy: current.hy,
        options: allOptions,
      };
    } else {
      const current = currentItem as QAItem;
      const otherQA = generalQuestions.filter((q) => q.id !== current.id);
      const shuffledOthers = [...otherQA].sort(() => 0.5 - Math.random()).slice(0, 3);
      const allOptions = [...shuffledOthers.map((o) => o.answer.hy), current.answer.hy].sort();
      return {
        questionEs: current.question.es,
        correctHy: current.answer.hy,
        options: allOptions,
      };
    }
  };

  const currentQuiz = getQuizOptions();

  const handleSelectOption = (opt: string) => {
    if (hasAnswered) return;
    setSelectedAnswer(opt);
    setHasAnswered(true);
    if (opt === currentQuiz.correctHy) {
      setScore((s) => s + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Mode selectors */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setTrainerMode('cards');
              setIsFlipped(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-colors ${
              trainerMode === 'cards'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            🃏 Քարտեր (Карточки)
          </button>
          <button
            onClick={() => {
              setTrainerMode('quiz');
              setSelectedAnswer(null);
              setHasAnswered(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-colors ${
              trainerMode === 'quiz'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            🎯 Թեստ (Викторина)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setCardType('vocab');
              setCurrentIndex(0);
              setIsFlipped(false);
              setHasAnswered(false);
            }}
            className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
              cardType === 'vocab'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Բառարան (24)
          </button>
          <button
            onClick={() => {
              setCardType('qa');
              setCurrentIndex(0);
              setIsFlipped(false);
              setHasAnswered(false);
            }}
            className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
              cardType === 'qa'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Հարցեր (20)
          </button>
        </div>
      </div>

      {/* FLASHCARD MODE */}
      {trainerMode === 'cards' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-2">
            <span>
              Քարտ {currentIndex + 1} / {activeItems.length}
            </span>
            <span>Կտտացրեք քարտին՝ շրջելու համար</span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            role="button"
            tabIndex={0}
            className={`min-h-[260px] p-6 sm:p-8 rounded-3xl border text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative shadow-sm hover:shadow-md ${
              isFlipped
                ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white border-amber-600'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const textToSpeak =
                    cardType === 'vocab'
                      ? (currentItem as VocabItem).es
                      : (currentItem as QAItem).question.es;
                  speak(textToSpeak);
                }}
                className={`p-2 rounded-xl transition-colors ${
                  isFlipped
                    ? 'text-white/80 hover:bg-white/20'
                    : 'text-slate-400 hover:bg-slate-100'
                }`}
                title="Escuchar"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {!isFlipped ? (
              <div className="space-y-3">
                <span className="inline-block text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                  🇪🇸 Español
                </span>
                <p className="text-xl sm:text-2xl font-bold max-w-lg leading-relaxed">
                  {cardType === 'vocab'
                    ? (currentItem as VocabItem).es
                    : (currentItem as QAItem).question.es}
                </p>
                <p className="text-xs text-slate-400 pt-3">
                  (Կտտացրեք հայերեն թարգմանության համար)
                </p>
              </div>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                <span className="inline-block text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-white/25 text-white">
                  🇦🇲 Հայերեն
                </span>
                <p className="text-xl sm:text-2xl font-bold max-w-lg leading-relaxed">
                  {cardType === 'vocab'
                    ? (currentItem as VocabItem).hy
                    : (currentItem as QAItem).answer.hy}
                </p>
                {cardType === 'qa' && (
                  <p className="text-xs text-amber-100 pt-2 border-t border-amber-400/40">
                    🇪🇸 {(currentItem as QAItem).answer.es}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={prevCard}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Նախորդը
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" /> Շրջել
            </button>

            <button
              onClick={nextCard}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors shadow-sm"
            >
              Հաջորդը <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* QUIZ MODE */}
      {trainerMode === 'quiz' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Հարց {currentIndex + 1} / {activeItems.length}
            </span>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              Միավորներ: {score}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">🇪🇸 Գտեք ճիշտ թարգմանությունը:</span>
              <button
                type="button"
                onClick={() => speak(currentQuiz.questionEs)}
                className="text-slate-400 hover:text-amber-600 p-1 rounded-lg"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {currentQuiz.questionEs}
            </h3>
          </div>

          <div className="space-y-2.5 pt-2">
            {currentQuiz.options.map((opt, idx) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === currentQuiz.correctHy;

              let btnStyle = 'border-slate-200 bg-white hover:border-amber-400 hover:bg-amber-50/30 text-slate-800';
              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'border-red-400 bg-red-50 text-red-950 font-semibold';
                } else {
                  btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {hasAnswered && (
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {selectedAnswer === currentQuiz.correctHy ? '🎉 Ճիշտ է!' : '❌ Սխալ է, ճիշտ պատասխանն է նշված կանաչով:'}
              </span>
              <button
                onClick={nextCard}
                className="px-4 py-2 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors flex items-center gap-1.5 text-sm shadow-sm"
              >
                Հաջորդը <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
