import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  HelpCircle,
  FileText,
  Bookmark,
  Layers,
  Search,
  Eye,
  EyeOff,
  Volume2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Flame,
  CheckCircle,
  Brain,
  Globe2,
} from 'lucide-react';
import {
  fullTextSentences,
  shortTextSentences,
  generalQuestions,
  detailedSections,
  examVocabulary,
  summaryForMemorizing,
  examQuestions,
} from './data';
import { SentenceItem } from './SentenceItem';
import { QAItemCard } from './QAItemCard';
import { VocabCard } from './VocabCard';
import { QuizTrainer } from './QuizTrainer';
import { MemorizeSection } from './MemorizeSection';
import { MustKnowSection } from './MustKnowSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'must_know' | 'memorize' | 'full' | 'short' | 'qa' | 'dictionary' | 'trainer'
  >('must_know');
  const [qaSubTab, setQaSubTab] = useState<'general' | 'exam'>('general');
  const [forceShowAllArmenian, setForceShowAllArmenian] = useState<boolean | undefined>(
    undefined
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Audio helper
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filtered vocabulary
  const filteredVocabulary = useMemo(() => {
    if (!searchQuery.trim()) return examVocabulary;
    const q = searchQuery.toLowerCase();
    return examVocabulary.filter(
      (item) =>
        item.es.toLowerCase().includes(q) ||
        item.hy.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filtered general questions
  const filteredGeneralQA = useMemo(() => {
    if (!searchQuery.trim()) return generalQuestions;
    const q = searchQuery.toLowerCase();
    return generalQuestions.filter(
      (item) =>
        item.question.es.toLowerCase().includes(q) ||
        item.question.hy.toLowerCase().includes(q) ||
        item.answer.es.toLowerCase().includes(q) ||
        item.answer.hy.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filtered exam questions
  const filteredExamQA = useMemo(() => {
    if (!searchQuery.trim()) return examQuestions;
    const q = searchQuery.toLowerCase();
    return examQuestions.filter(
      (item) =>
        item.question.es.toLowerCase().includes(q) ||
        item.question.hy.toLowerCase().includes(q) ||
        item.answer.es.toLowerCase().includes(q) ||
        item.answer.hy.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-200">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  UNIT 1: PREHISTORY
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Español ⇄ Հայերեն
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 mt-0.5">
                <span>1. HUMAN EVOLUTION — LA EVOLUCIÓN HUMANA</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                ՄԱՐԴՈՒ ԷՎՈԼՅՈՒՑԻԱՆ • Ինտերակտիվ ուսուցման դասընթաց և բառարան
              </p>
            </div>

            {/* Global reveal button & Speech trigger */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() =>
                  setForceShowAllArmenian((prev) =>
                    prev === true ? false : true
                  )
                }
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  forceShowAllArmenian === true
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
                title="Բացել կամ թաքցնել բոլոր հայերեն թարգմանությունները"
              >
                {forceShowAllArmenian === true ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" /> Թաքցնել թարգմանությունները
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" /> Ցույց տալ բոլոր թարգմանությունները
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => speakText("La evolución humana comenzó en África hace millones de años.")}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="Փորձել իսպաներեն արտասանությունը"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto pt-3 pb-1 border-t border-slate-100 mt-2 text-xs sm:text-sm font-medium scrollbar-none">
            <button
              onClick={() => setActiveTab('must_know')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                activeTab === 'must_know'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'text-amber-900 bg-amber-100/80 border border-amber-300 font-semibold hover:bg-amber-200'
              }`}
            >
              <Bookmark className="w-4 h-4 text-amber-700" /> 🎯 Ինչ է պետք իմանալ (Что нужно знать)
            </button>

            <button
              onClick={() => setActiveTab('memorize')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                activeTab === 'memorize'
                  ? 'bg-amber-500 text-white font-semibold shadow-xs'
                  : 'text-amber-800 bg-amber-50/70 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500 group-hover:text-amber-600" /> ⭐ Կարճ տարբերակ (Անգիր)
            </button>

            <button
              onClick={() => setActiveTab('full')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                activeTab === 'full'
                  ? 'bg-amber-500 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" /> 19 Թեմաներ &amp; Տեքստ
            </button>

            <button
              onClick={() => setActiveTab('short')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                activeTab === 'short'
                  ? 'bg-amber-500 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" /> Կարճ տեքստ (Resumen)
            </button>

            <button
              onClick={() => setActiveTab('qa')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                activeTab === 'qa'
                  ? 'bg-amber-500 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <HelpCircle className="w-4 h-4" /> Հարցեր &amp; Պատասխաններ ({generalQuestions.length + examQuestions.length})
            </button>

            <button
              onClick={() => setActiveTab('dictionary')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                activeTab === 'dictionary'
                  ? 'bg-amber-500 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Bookmark className="w-4 h-4" /> Բառարան (Vocabulario)
            </button>

            <button
              onClick={() => setActiveTab('trainer')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                activeTab === 'trainer'
                  ? 'bg-amber-500 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Brain className="w-4 h-4" /> Քարտեր &amp; Ստուգարք
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* Search bar when in Dictionary or QA tabs */}
        {(activeTab === 'dictionary' || activeTab === 'qa') && (
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                activeTab === 'dictionary'
                  ? 'Փնտրել բառեր իսպաներեն կամ հայերեն...'
                  : 'Փնտրել հարցերում և պատասխաններում...'
              }
              className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full"
              >
                Մաքրել
              </button>
            )}
          </div>
        )}

        {/* Tip banner */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
          <span className="text-xl">💡</span>
          <div className="text-xs sm:text-sm text-amber-950">
            <span className="font-bold">Ինչպես օգտագործել:</span> Կտտացրեք ցանկացած իսպաներեն
            նախադասության, հարցի կամ բառի վրա՝ հայերեն թարգմանությունը տեսնելու համար։ Բարձրախոսի
            նշանով (<Volume2 className="w-3.5 h-3.5 inline text-amber-700" />) կարող եք լսել ճիշտ
            իսպաներեն արտասանությունը։
          </div>
        </div>

        {/* TAB: MUST KNOW SPECIAL SECTION */}
        {activeTab === 'must_know' && <MustKnowSection forceOpen={forceShowAllArmenian} />}

        {/* TAB 0: MEMORIZE SPECIAL SECTION */}
        {activeTab === 'memorize' && <MemorizeSection />}

        {/* TAB 1: FULL DETAILED LESSON & 19 UNITS */}
        {activeTab === 'full' && (
          <div className="space-y-10">
            {/* Introductory Detailed Text */}
            <section className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    Տեքստ / Texto principal
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    🇪🇸 La evolución humana / 🇦🇲 Մարդու էվոլյուցիան
                  </h2>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                (Կտտացրեք յուրաքանչյուր նախադասության վրա՝ նրա հայերեն թարգմանությունը տեսնելու համար)
              </p>

              <div className="space-y-2.5">
                {fullTextSentences.map((sentence, idx) => (
                  <SentenceItem
                    key={sentence.id}
                    es={sentence.es}
                    hy={sentence.hy}
                    indexLabel={`§${idx + 1}`}
                    forceOpen={forceShowAllArmenian}
                    onSpeak={speakText}
                  />
                ))}
              </div>
            </section>

            {/* 19 THEMATIC SECTIONS */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                  19 Բաժիններ՝ մանրամասն քննության համար
                </h3>
                <span className="text-xs text-slate-400 font-medium">1 — 19 թեմա</span>
              </div>

              {/* Sections 1 to 16 */}
              <div className="space-y-6">
                {detailedSections.map((sec) => (
                  <div
                    key={sec.number}
                    className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-white font-bold text-sm shrink-0 shadow-xs">
                        {sec.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base select-none">🇪🇸</span>
                          <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                            {sec.title.es}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-slate-600 text-sm sm:text-base font-medium">
                          <span className="text-base select-none">🇦🇲</span>
                          <h5>{sec.title.hy}</h5>
                        </div>
                      </div>
                    </div>

                    {/* Paragraphs */}
                    {sec.paragraphs && sec.paragraphs.length > 0 && (
                      <div className="space-y-2">
                        {sec.paragraphs.map((p) => (
                          <SentenceItem
                            key={p.id}
                            es={p.es}
                            hy={p.hy}
                            forceOpen={forceShowAllArmenian}
                            onSpeak={speakText}
                          />
                        ))}
                      </div>
                    )}

                    {/* Items / lists if any */}
                    {sec.items && sec.items.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Կետեր / Elementos:
                        </span>
                        <div className="space-y-2">
                          {sec.items.map((it) => (
                            <SentenceItem
                              key={it.id}
                              es={it.es}
                              hy={it.hy}
                              forceOpen={forceShowAllArmenian}
                              onSpeak={speakText}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Section Note / Recordar */}
                    {sec.note && (
                      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1.5">
                        {sec.note.label && (
                          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                            <span>{sec.note.label.es}</span>
                            <span>/</span>
                            <span>{sec.note.label.hy}</span>
                          </div>
                        )}
                        <SentenceItem
                          es={sec.note.es}
                          hy={sec.note.hy}
                          forceOpen={forceShowAllArmenian}
                          onSpeak={speakText}
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* Section 17: Vocabulario Preview in Full tab */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-white font-bold text-sm shrink-0 shadow-xs">
                      17
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        🇪🇸 Vocabulario imprescindible para el examen
                      </h4>
                      <h5 className="text-slate-600 font-medium">
                        🇦🇲 Քննության համար կարևոր բառապաշար ({examVocabulary.length} բառ)
                      </h5>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500">
                    Կտտացրեք ցանկացած բառի վրա՝ հայերեն թարգմանությունը տեսնելու համար։
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {examVocabulary.map((voc) => (
                      <VocabCard
                        key={voc.id}
                        item={voc}
                        forceOpen={forceShowAllArmenian}
                        onSpeak={speakText}
                      />
                    ))}
                  </div>
                </div>

                {/* Section 18: Resumen para memorizar */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-white font-bold text-sm shrink-0 shadow-xs">
                      18
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        🇪🇸 Resumen para memorizar
                      </h4>
                      <h5 className="text-slate-600 font-medium">
                        🇦🇲 Ամփոփում՝ անգիր սովորելու համար
                      </h5>
                    </div>
                  </div>

                  <SentenceItem
                    es={summaryForMemorizing.es}
                    hy={summaryForMemorizing.hy}
                    forceOpen={forceShowAllArmenian}
                    onSpeak={speakText}
                  />
                </div>

                {/* Section 19: Preguntas y respuestas para el examen */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-white font-bold text-sm shrink-0 shadow-xs">
                      19
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        🇪🇸 Preguntas y respuestas para el examen
                      </h4>
                      <h5 className="text-slate-600 font-medium">
                        🇦🇲 Քննության հարցեր և պատասխաններ (15 հարց)
                      </h5>
                    </div>
                  </div>

                  <div className="space-y-4 pt-1">
                    {examQuestions.map((q) => (
                      <QAItemCard
                        key={`exam-${q.id}`}
                        item={q}
                        forceOpen={forceShowAllArmenian}
                        onSpeak={speakText}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SHORT TEXT (Texto Corto) */}
        {activeTab === 'short' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Կարճ տարբերակ
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  🇪🇸 Texto corto — La evolución humana
                </h2>
                <h3 className="text-base sm:text-lg text-slate-600 font-medium">
                  🇦🇲 Կարճ տեքստ — Մարդու էվոլյուցիան
                </h3>
              </div>

              <p className="text-xs text-slate-500">
                Ամենակարևոր նախադասությունները արագ կրկնելու համար։ Կտտացրեք իսպաներեն նախադասությանը՝
                թարգմանությունը բացելու համար։
              </p>

              <div className="space-y-3 pt-2">
                {shortTextSentences.map((sentence, idx) => (
                  <SentenceItem
                    key={sentence.id}
                    es={sentence.es}
                    hy={sentence.hy}
                    indexLabel={`#${idx + 1}`}
                    forceOpen={forceShowAllArmenian}
                    onSpeak={speakText}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: QUESTIONS & ANSWERS (General 20 + Exam 15) */}
        {activeTab === 'qa' && (
          <div className="space-y-6">
            {/* Subtabs for QA */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <button
                onClick={() => setQaSubTab('general')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  qaSubTab === 'general'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                20 Հիմնական հարցեր (Preguntas y respuestas)
              </button>
              <button
                onClick={() => setQaSubTab('exam')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  qaSubTab === 'exam'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                15 Քննության հարցեր (Para el examen)
              </button>
            </div>

            {/* List */}
            <div className="space-y-4">
              {qaSubTab === 'general' ? (
                filteredGeneralQA.length > 0 ? (
                  filteredGeneralQA.map((item) => (
                    <QAItemCard
                      key={`gen-${item.id}`}
                      item={item}
                      forceOpen={forceShowAllArmenian}
                      onSpeak={speakText}
                    />
                  ))
                ) : (
                  <p className="text-center py-10 text-slate-400">
                    Հարցեր չեն գտնվել որոնմանը համապատասխան։
                  </p>
                )
              ) : filteredExamQA.length > 0 ? (
                filteredExamQA.map((item) => (
                  <QAItemCard
                    key={`ex-${item.id}`}
                    item={item}
                    forceOpen={forceShowAllArmenian}
                    onSpeak={speakText}
                  />
                ))
              ) : (
                <p className="text-center py-10 text-slate-400">
                  Հարցեր չեն գտնվել որոնմանը համապատասխան։
                </p>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: VOCABULARY DICTIONARY (24 Terms) */}
        {activeTab === 'dictionary' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  🇪🇸 Vocabulario imprescindible para el examen
                </h2>
                <h3 className="text-sm sm:text-base text-slate-600 font-medium">
                  🇦🇲 Քննության համար կարևոր բառապաշար
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-900 rounded-full shrink-0">
                {filteredVocabulary.length} բառ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredVocabulary.map((voc) => (
                <VocabCard
                  key={voc.id}
                  item={voc}
                  forceOpen={forceShowAllArmenian}
                  onSpeak={speakText}
                />
              ))}
            </div>

            {filteredVocabulary.length === 0 && (
              <div className="text-center py-12 text-slate-400">
                Բառեր չեն գտնվել «{searchQuery}» հարցումով։
              </div>
            )}
          </div>
        )}

        {/* TAB 5: FLASHCARDS & QUIZ TRAINER */}
        {activeTab === 'trainer' && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Մարզում և Ինքնաստուգում
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Կրկնեք բառերը և հարցերը քարտերի միջոցով կամ անցեք թեստը՝ գիտելիքները ստուգելու համար։
              </p>
            </div>

            <QuizTrainer />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 space-y-1">
          <p className="font-semibold text-slate-700">
            UNIT 1: PREHISTORY — LA EVOLUCIÓN HUMANA / ՄԱՐԴՈՒ ԷՎՈԼՅՈՒՑԻԱՆ
          </p>
          <p>
            Español ⇄ Հայերեն • Ինտերակտիվ ուսումնական բառարան և հարցաշար
          </p>
        </div>
      </footer>
    </div>
  );
}
