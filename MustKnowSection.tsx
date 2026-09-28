import React, { useState } from 'react';
import {
  Volume2,
  Bookmark,
  HelpCircle,
  Sparkles,
  Flame,
  Users,
  Brain,
  CheckCircle2,
  ChevronDown,
  Copy,
  Check,
  Search,
} from 'lucide-react';
import {
  mustKnowIntro,
  mustKnowTextItems,
  mustKnowSpecies,
  mustKnowFireItem,
  mustKnowVocabList,
  mustKnowQuestions,
  mustKnowShortSummary,
} from './mustKnowData';
import { SentenceItem } from './SentenceItem';
import { QAItemCard } from './QAItemCard';

interface MustKnowSectionProps {
  forceOpen?: boolean;
}

export const MustKnowSection: React.FC<MustKnowSectionProps> = ({ forceOpen }) => {
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'text' | 'species' | 'fire' | 'vocab' | 'qa' | 'summary'>('all');
  const [vocabSearch, setVocabSearch] = useState('');
  const [revealedVocab, setRevealedVocab] = useState<{ [id: number]: boolean }>({});
  const [revealedSpecies, setRevealedSpecies] = useState<{ [id: string]: boolean }>({});
  const [copiedSummary, setCopiedSummary] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleVocab = (id: number) => {
    setRevealedVocab((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSpecies = (id: string) => {
    setRevealedSpecies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredVocab = mustKnowVocabList.filter(
    (v) =>
      v.es.toLowerCase().includes(vocabSearch.toLowerCase()) ||
      v.hy.toLowerCase().includes(vocabSearch.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 rounded-3xl p-6 sm:p-8 text-white shadow-md space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold uppercase tracking-wider text-amber-100">
          <Bookmark className="w-3.5 h-3.5" /> Ինչ է պետք իմանալ քննության համար
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          La evolución humana — Մարդու էվոլյուցիան
        </h2>

        {/* Intro statement with click */}
        <div className="pt-2">
          <SentenceItem
            es={mustKnowIntro.es}
            hy={mustKnowIntro.hy}
            forceOpen={forceOpen}
            onSpeak={speak}
          />
        </div>
      </div>

      {/* Internal Navigation Filter */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none text-xs sm:text-sm">
        <button
          onClick={() => setActiveSubTab('all')}
          className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'all'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Բոլորը (6 Բաժին)
        </button>
        <button
          onClick={() => setActiveSubTab('text')}
          className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'text'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          1. Տեքստ
        </button>
        <button
          onClick={() => setActiveSubTab('species')}
          className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'species'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          2. Տեսակները
        </button>
        <button
          onClick={() => setActiveSubTab('fire')}
          className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'fire'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          3. Կրակ
        </button>
        <button
          onClick={() => setActiveSubTab('vocab')}
          className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'vocab'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          4. Բառապաշար (15)
        </button>
        <button
          onClick={() => setActiveSubTab('qa')}
          className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'qa'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          5. Հարցեր &amp; Պատասխաններ (16)
        </button>
        <button
          onClick={() => setActiveSubTab('summary')}
          className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'summary'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          6. Անգիր սովորելու պատասխան
        </button>
      </div>

      {/* 1. TEXTO PARA APRENDER */}
      {(activeSubTab === 'all' || activeSubTab === 'text') && (
        <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-white font-bold text-sm shrink-0">
              1
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                1. Texto para aprender — Տեքստ՝ սովորելու համար
              </h3>
              <p className="text-xs text-slate-500">
                Կտտացրեք յուրաքանչյուր նախադասությանը՝ հայերեն թարգմանությունը բացելու համար:
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {mustKnowTextItems.map((item, idx) => (
              <SentenceItem
                key={item.id}
                es={item.es}
                hy={item.hy}
                indexLabel={`§${idx + 1}`}
                forceOpen={forceOpen}
                onSpeak={speak}
              />
            ))}
          </div>
        </section>
      )}

      {/* 2. ESPECIES Y CARACTERÍSTICAS PRINCIPALES */}
      {(activeSubTab === 'all' || activeSubTab === 'species') && (
        <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-white font-bold text-sm shrink-0">
              2
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                2. Especies y características principales — Տեսակներն ու հիմնական հատկանիշները
              </h3>
              <p className="text-xs text-slate-500">
                5 հիմնական տեսակները և նրանց գլխավոր առանձնահատկությունները:
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {mustKnowSpecies.map((sp) => {
              const isArmOpen = forceOpen !== undefined ? forceOpen : !!revealedSpecies[sp.id];
              return (
                <div
                  key={sp.id}
                  onClick={() => toggleSpecies(sp.id)}
                  role="button"
                  tabIndex={0}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer group text-left ${
                    isArmOpen
                      ? 'bg-amber-50/70 border-amber-300 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-amber-800 transition-colors">
                          {sp.nameEs}
                        </span>
                        <span className="text-slate-400">—</span>
                        <span className="font-semibold text-amber-900 text-sm sm:text-base">
                          {sp.nameHy}
                        </span>
                      </div>

                      <div className="flex items-start gap-2 pt-1 text-slate-800 text-sm sm:text-base">
                        <span className="text-base select-none shrink-0">🇪🇸</span>
                        <p className="leading-relaxed font-medium">{sp.descEs}</p>
                      </div>

                      {isArmOpen ? (
                        <div className="mt-2.5 pt-2.5 border-t border-amber-200 flex items-start gap-2 text-amber-950 text-sm sm:text-base animate-fadeIn">
                          <span className="text-base select-none shrink-0">🇦🇲</span>
                          <p className="leading-relaxed">{sp.descHy}</p>
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-400 group-hover:text-amber-700 transition-colors pt-1">
                          👆 Կտտացրեք հայերեն թարգմանության համար (Клик)
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(`${sp.nameEs}. ${sp.descEs}`);
                        }}
                        className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100 rounded-lg transition-colors"
                        title="Escuchar"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <div
                        className={`p-1 rounded-full text-slate-400 transition-transform ${
                          isArmOpen ? 'rotate-180 text-amber-600 bg-amber-100' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. LA IMPORTANCIA DEL FUEGO */}
      {(activeSubTab === 'all' || activeSubTab === 'fire') && (
        <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-orange-500 text-white font-bold text-sm shrink-0">
              <Flame className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                3. La importancia del fuego — Կրակի կարևորությունը
              </h3>
              <p className="text-xs text-slate-500">
                Կրակի նշանակությունը մարդու զարգացման և համատեղ կյանքի համար:
              </p>
            </div>
          </div>

          <SentenceItem
            es={mustKnowFireItem.es}
            hy={mustKnowFireItem.hy}
            forceOpen={forceOpen}
            onSpeak={speak}
          />
        </section>
      )}

      {/* 4. VOCABULARIO DEL EXAMEN */}
      {(activeSubTab === 'all' || activeSubTab === 'vocab') && (
        <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-white font-bold text-sm shrink-0">
                4
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  4. Vocabulario del examen — Քննության բառապաշար
                </h3>
                <p className="text-xs text-slate-500">
                  15 ամենակարևոր բառերն ու արտահայտությունները (կտտացրեք թարգմանելու համար)
                </p>
              </div>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={vocabSearch}
                onChange={(e) => setVocabSearch(e.target.value)}
                placeholder="Փնտրել բառ..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {filteredVocab.map((item) => {
              const isOpen = forceOpen !== undefined ? forceOpen : !!revealedVocab[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleVocab(item.id)}
                  role="button"
                  tabIndex={0}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isOpen
                      ? 'bg-amber-50 border-amber-300 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-900 text-sm">
                      {item.es}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(item.es);
                      }}
                      className="p-1 text-slate-400 hover:text-amber-600 rounded"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="mt-1 pt-1 border-t border-slate-200/50 min-h-[22px]">
                    {isOpen ? (
                      <span className="text-xs font-semibold text-amber-900 animate-fadeIn">
                        🇦🇲 {item.hy}
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400 italic">
                        Կտտացրեք թարգմանելու
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. PREGUNTAS Y RESPUESTAS PARA EL EXAMEN */}
      {(activeSubTab === 'all' || activeSubTab === 'qa') && (
        <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-white font-bold text-sm shrink-0">
              5
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                5. Preguntas y respuestas para el examen — Քննության հարցեր և պատասխաններ
              </h3>
              <p className="text-xs text-slate-500">
                16 հարց ու պատասխան՝ քննության նախապատրաստման համար
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {mustKnowQuestions.map((qa) => (
              <QAItemCard
                key={`mk-q-${qa.id}`}
                item={qa}
                forceOpen={forceOpen}
                onSpeak={speak}
              />
            ))}
          </div>
        </section>
      )}

      {/* 6. RESPUESTA CORTA PARA MEMORIZAR */}
      {(activeSubTab === 'all' || activeSubTab === 'summary') && (
        <section className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold text-sm shrink-0">
                6
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  6. Respuesta corta para memorizar — Կարճ պատասխան՝ անգիր սովորելու համար
                </h3>
                <p className="text-xs text-slate-500">
                  Ամբողջ թեմայի սեղմ ամփոփումը՝ անգիր պատասխանելու համար:
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(
                  `🇪🇸 ${mustKnowShortSummary.es}\n\n🇦🇲 ${mustKnowShortSummary.hy}`
                );
                setCopiedSummary(true);
                setTimeout(() => setCopiedSummary(false), 2000);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors self-start sm:self-auto"
            >
              {copiedSummary ? (
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

          <div className="space-y-3">
            <SentenceItem
              es={mustKnowShortSummary.es}
              hy={mustKnowShortSummary.hy}
              forceOpen={forceOpen}
              onSpeak={speak}
            />
          </div>
        </section>
      )}
    </div>
  );
};
