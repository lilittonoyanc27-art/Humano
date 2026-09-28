import { QAItem, TranslationItem } from './data';

export interface SpeciesItem {
  id: string;
  nameEs: string;
  nameHy: string;
  descEs: string;
  descHy: string;
}

export interface MustKnowVocabItem {
  id: number;
  es: string;
  hy: string;
}

export const mustKnowIntro: TranslationItem = {
  id: "mk-intro",
  es: "Este material sirve para repasar los conceptos principales del tema.",
  hy: "Այս նյութը նախատեսված է թեմայի հիմնական գաղափարները կրկնելու և քննությանը պատրաստվելու համար։",
};

// 1. Texto para aprender — Տեքստ՝ սովորելու համար
export const mustKnowTextItems: TranslationItem[] = [
  {
    id: "mk-t1",
    es: "La evolución humana es el proceso de cambios que dio origen al ser humano actual. Duró millones de años y comenzó en África. Los seres humanos no descendemos de los monos actuales: compartimos antepasados comunes con otros primates.",
    hy: "Մարդու էվոլյուցիան փոփոխությունների գործընթաց է, որի արդյունքում առաջացել է ժամանակակից մարդը։ Այն տևել է միլիոնավոր տարիներ և սկսվել է Աֆրիկայում։ Մենք չենք առաջացել ժամանակակից կապիկներից․ մենք մյուս պրիմատների հետ ունենք ընդհանուր նախնիներ։",
  },
  {
    id: "mk-t2",
    es: "La hominización es el conjunto de cambios biológicos que dieron lugar al ser humano. Los principales cambios fueron el bipedismo, las modificaciones de las manos, el aumento del tamaño del cerebro y la reducción de la mandíbula y de los dientes.",
    hy: "Մարդացումը կենսաբանական փոփոխությունների ամբողջությունն է, որի արդյունքում առաջացել է մարդը։ Հիմնական փոփոխություններն էին երկոտանիությունը, ձեռքերի փոփոխությունները, ուղեղի չափի մեծացումը և ծնոտի ու ատամների փոքրացումը։",
  },
  {
    id: "mk-t3",
    es: "El bipedismo es la capacidad de caminar habitualmente sobre dos piernas. Permitió dejar las manos libres para transportar alimentos, llevar a las crías y utilizar herramientas.",
    hy: "Երկոտանիությունը սովորաբար երկու ոտքի վրա քայլելու կարողությունն է։ Այն հնարավորություն տվեց ձեռքերն ազատել՝ սնունդ տեղափոխելու, ձագերին կրելու և գործիքներ օգտագործելու համար։",
  },
  {
    id: "mk-t4",
    es: "A lo largo de la evolución humana también se desarrollaron la fabricación de herramientas, la cooperación, el lenguaje y la cultura. Estos cambios no ocurrieron todos al mismo tiempo.",
    hy: "Մարդու էվոլյուցիայի ընթացքում զարգացան նաև գործիքների պատրաստումը, համագործակցությունը, լեզուն և մշակույթը։ Այս փոփոխությունները բոլորը միաժամանակ տեղի չեն ունեցել։",
  },
  {
    id: "mk-t5",
    es: "La evolución humana no fue una línea recta. Existieron diferentes especies y algunas convivieron durante mucho tiempo. Actualmente, solo existe una especie humana: el Homo sapiens.",
    hy: "Մարդու էվոլյուցիան ուղիղ գիծ չէր։ Գոյություն են ունեցել տարբեր տեսակներ, և դրանցից մի քանիսը երկար ժամանակ ապրել են միաժամանակ։ Ներկայումս գոյություն ունի մարդկային միայն մեկ տեսակ՝ Հոմո սապիենսը՝ բանական մարդը։",
  },
];

// 2. Especies y características principales — Տեսակներն ու հիմնական հատկանիշները
export const mustKnowSpecies: SpeciesItem[] = [
  {
    id: "sp-1",
    nameEs: "Australopitecos",
    nameHy: "Ավստրալոպիթեկներ",
    descEs: "Vivían en África. Caminaban sobre dos piernas, pero tenían un cerebro pequeño en comparación con el nuestro.",
    descHy: "Ապրում էին Աֆրիկայում։ Քայլում էին երկու ոտքի վրա, բայց մեր ուղեղի համեմատ փոքր ուղեղ ունեին։",
  },
  {
    id: "sp-2",
    nameEs: "Homo habilis",
    nameHy: "Հմուտ մարդ",
    descEs: "Vivía en África y fabricaba herramientas sencillas de piedra.",
    descHy: "Ապրում էր Աֆրիկայում և պատրաստում էր պարզ քարե գործիքներ։",
  },
  {
    id: "sp-3",
    nameEs: "Homo erectus",
    nameHy: "Ուղղաձիգ մարդ",
    descEs: "Fue una de las primeras especies humanas que salió de África. Fabricaba herramientas y utilizaba el fuego.",
    descHy: "Մարդկային առաջին տեսակներից էր, որը դուրս եկավ Աֆրիկայից։ Պատրաստում էր գործիքներ և օգտագործում էր կրակը։",
  },
  {
    id: "sp-4",
    nameEs: "Homo neanderthalensis",
    nameHy: "Նեանդերթալյան մարդ",
    descEs: "Vivía en Europa y en parte de Asia. Estaba adaptado al frío. Fabricaba herramientas, cuidaba a los enfermos y enterraba a algunos de sus muertos.",
    descHy: "Ապրում էր Եվրոպայում և Ասիայի մի մասում։ Հարմարված էր ցրտին։ Պատրաստում էր գործիքներ, խնամում էր հիվանդներին և թաղում էր իր մահացածներից ոմանց։",
  },
  {
    id: "sp-5",
    nameEs: "Homo sapiens",
    nameHy: "Բանական մարդ",
    descEs: "Es nuestra especie. Apareció en África hace unos 300.000 años y después se extendió por el mundo. Desarrolló culturas muy diversas, un lenguaje complejo y distintas formas de arte.",
    descHy: "Մեր տեսակն է։ Առաջացել է Աֆրիկայում մոտ 300 հազար տարի առաջ, իսկ հետո տարածվել աշխարհով մեկ։ Զարգացրել է բազմազան մշակույթներ, բարդ լեզու և արվեստի տարբեր ձևեր։",
  },
];

// 3. La importancia del fuego — Կրակի կարևորությունը
export const mustKnowFireItem: TranslationItem = {
  id: "mk-fire",
  es: "El fuego permitió calentarse, iluminar los lugares oscuros, cocinar los alimentos y protegerse de los animales. También favoreció la reunión y la convivencia del grupo.",
  hy: "Կրակը հնարավորություն տվեց տաքանալ, լուսավորել մութ վայրերը, սնունդ պատրաստել և պաշտպանվել կենդանիներից։ Այն նաև նպաստեց խմբի անդամների հավաքվելուն և համատեղ կյանքին։",
};

// 4. Vocabulario del examen — Քննության բառապաշար
export const mustKnowVocabList: MustKnowVocabItem[] = [
  { id: 1, es: "La evolución humana", hy: "Մարդու էվոլյուցիա" },
  { id: 2, es: "La hominización", hy: "Մարդացում" },
  { id: 3, es: "Los antepasados", hy: "Նախնիներ" },
  { id: 4, es: "Los primates", hy: "Պրիմատներ" },
  { id: 5, es: "El bipedismo", hy: "Երկոտանիություն" },
  { id: 6, es: "El cerebro", hy: "Ուղեղ" },
  { id: 7, es: "La mandíbula", hy: "Ծնոտ" },
  { id: 8, es: "Las herramientas de piedra", hy: "Քարե գործիքներ" },
  { id: 9, es: "El fuego", hy: "Կրակ" },
  { id: 10, es: "El lenguaje", hy: "Լեզու" },
  { id: 11, es: "La especie", hy: "Տեսակ" },
  { id: 12, es: "La cooperación", hy: "Համագործակցություն" },
  { id: 13, es: "Fabricar herramientas", hy: "Գործիքներ պատրաստել" },
  { id: 14, es: "Caminar sobre dos piernas", hy: "Քայլել երկու ոտքի վրա" },
  { id: 15, es: "Adaptarse al frío", hy: "Հարմարվել ցրտին" },
];

// 5. Preguntas y respuestas para el examen — Քննության հարցեր և պատասխաններ (16)
export const mustKnowQuestions: QAItem[] = [
  {
    id: 1,
    question: {
      es: "¿Qué es la evolución humana?",
      hy: "Ի՞նչ է մարդու էվոլյուցիան։",
    },
    answer: {
      es: "Es el proceso de cambios que dio origen al ser humano actual.",
      hy: "Դա փոփոխությունների գործընթաց է, որի արդյունքում առաջացել է ժամանակակից մարդը։",
    },
  },
  {
    id: 2,
    question: {
      es: "¿Dónde comenzó la evolución humana?",
      hy: "Որտե՞ղ է սկսվել մարդու էվոլյուցիան։",
    },
    answer: {
      es: "Comenzó en África.",
      hy: "Այն սկսվել է Աֆրիկայում։",
    },
  },
  {
    id: 3,
    question: {
      es: "¿Descendemos de los monos actuales?",
      hy: "Արդյո՞ք մենք առաջացել ենք ժամանակակից կապիկներից։",
    },
    answer: {
      es: "No. Compartimos antepasados comunes con otros primates.",
      hy: "Ոչ։ Մենք մյուս պրիմատների հետ ունենք ընդհանուր նախնիներ։",
    },
  },
  {
    id: 4,
    question: {
      es: "¿Qué es la hominización?",
      hy: "Ի՞նչ է մարդացումը։",
    },
    answer: {
      es: "Es el conjunto de cambios biológicos que dieron lugar al ser humano.",
      hy: "Դա կենսաբանական փոփոխությունների ամբողջությունն է, որի արդյունքում առաջացել է մարդը։",
    },
  },
  {
    id: 5,
    question: {
      es: "¿Cuáles fueron los principales cambios de la hominización?",
      hy: "Որո՞նք էին մարդացման հիմնական փոփոխությունները։",
    },
    answer: {
      es: "El bipedismo, las modificaciones de las manos, el aumento del cerebro y la reducción de la mandíbula y de los dientes.",
      hy: "Երկոտանիությունը, ձեռքերի փոփոխությունները, ուղեղի մեծացումը և ծնոտի ու ատամների փոքրացումը։",
    },
  },
  {
    id: 6,
    question: {
      es: "¿Qué es el bipedismo?",
      hy: "Ի՞նչ է երկոտանիությունը։",
    },
    answer: {
      es: "Es la capacidad de caminar habitualmente sobre dos piernas.",
      hy: "Դա սովորաբար երկու ոտքի վրա քայլելու կարողությունն է։",
    },
  },
  {
    id: 7,
    question: {
      es: "¿Qué ventaja tenía el bipedismo?",
      hy: "Ի՞նչ առավելություն ուներ երկոտանիությունը։",
    },
    answer: {
      es: "Dejaba las manos libres para transportar alimentos, llevar a las crías y utilizar herramientas.",
      hy: "Այն ազատում էր ձեռքերը՝ սնունդ տեղափոխելու, ձագերին կրելու և գործիքներ օգտագործելու համար։",
    },
  },
  {
    id: 8,
    question: {
      es: "¿Cómo eran los australopitecos?",
      hy: "Ինչպիսի՞ն էին ավստրալոպիթեկները։",
    },
    answer: {
      es: "Eran bípedos y tenían un cerebro pequeño en comparación con el nuestro. Vivían en África.",
      hy: "Նրանք երկոտանի էին և մեր ուղեղի համեմատ փոքր ուղեղ ունեին։ Ապրում էին Աֆրիկայում։",
    },
  },
  {
    id: 9,
    question: {
      es: "¿Qué fabricaba el Homo habilis?",
      hy: "Ի՞նչ էր պատրաստում հմուտ մարդը։",
    },
    answer: {
      es: "Fabricaba herramientas sencillas de piedra.",
      hy: "Նա պատրաստում էր պարզ քարե գործիքներ։",
    },
  },
  {
    id: 10,
    question: {
      es: "¿Qué características destacaban en el Homo erectus?",
      hy: "Ի՞նչ հատկանիշներով էր առանձնանում ուղղաձիգ մարդը։",
    },
    answer: {
      es: "Salió de África, fabricaba herramientas y utilizaba el fuego.",
      hy: "Նա դուրս եկավ Աֆրիկայից, պատրաստում էր գործիքներ և օգտագործում էր կրակը։",
    },
  },
  {
    id: 11,
    question: {
      es: "¿Por qué fue importante el fuego?",
      hy: "Ինչո՞ւ էր կրակը կարևոր։",
    },
    answer: {
      es: "Porque permitía calentarse, iluminar, cocinar y protegerse de los animales.",
      hy: "Որովհետև այն հնարավորություն էր տալիս տաքանալ, լուսավորել, սնունդ պատրաստել և պաշտպանվել կենդանիներից։",
    },
  },
  {
    id: 12,
    question: {
      es: "¿Dónde vivían los neandertales?",
      hy: "Որտե՞ղ էին ապրում նեանդերթալցիները։",
    },
    answer: {
      es: "Vivían en Europa y en parte de Asia.",
      hy: "Նրանք ապրում էին Եվրոպայում և Ասիայի մի մասում։",
    },
  },
  {
    id: 13,
    question: {
      es: "¿Cómo sabemos que los neandertales cuidaban a su grupo?",
      hy: "Ինչպե՞ս ենք իմանում, որ նեանդերթալցիները հոգ էին տանում իրենց խմբի մասին։",
    },
    answer: {
      es: "Porque hay restos de individuos que sobrevivieron a enfermedades o lesiones graves y necesitaron ayuda.",
      hy: "Քանի որ հայտնաբերվել են այնպիսի անհատների մնացորդներ, որոնք ապրել են ծանր հիվանդություններից կամ վնասվածքներից հետո և օգնության կարիք են ունեցել։",
    },
  },
  {
    id: 14,
    question: {
      es: "¿Cuándo y dónde apareció el Homo sapiens?",
      hy: "Ե՞րբ և որտե՞ղ է առաջացել բանական մարդը։",
    },
    answer: {
      es: "Apareció en África hace unos 300.000 años.",
      hy: "Այն առաջացել է Աֆրիկայում մոտ 300 հազար տարի առաջ։",
    },
  },
  {
    id: 15,
    question: {
      es: "¿A qué especie pertenecemos?",
      hy: "Ո՞ր տեսակին ենք մենք պատկանում։",
    },
    answer: {
      es: "Pertenecemos a la especie Homo sapiens.",
      hy: "Մենք պատկանում ենք Հոմո սապիենս տեսակին։",
    },
  },
  {
    id: 16,
    question: {
      es: "¿Vivieron algunas especies humanas al mismo tiempo?",
      hy: "Արդյո՞ք մարդկային որոշ տեսակներ ապրել են միաժամանակ։",
    },
    answer: {
      es: "Sí. Por ejemplo, los neandertales y los Homo sapiens vivieron al mismo tiempo.",
      hy: "Այո։ Օրինակ՝ նեանդերթալցիներն ու բանական մարդիկ ապրել են միաժամանակ։",
    },
  },
];

// 6. Respuesta corta para memorizar — Կարճ պատասխան՝ անգիր սովորելու համար
export const mustKnowShortSummary: TranslationItem = {
  id: "mk-summary",
  es: "La evolución humana comenzó en África y duró millones de años. Los principales cambios fueron el bipedismo, el aumento del cerebro y la reducción de la mandíbula y de los dientes. Los australopitecos caminaban sobre dos piernas. El Homo habilis fabricaba herramientas de piedra y el Homo erectus utilizaba el fuego. Los neandertales estaban adaptados al frío y cuidaban a su grupo. Nuestra especie, el Homo sapiens, apareció en África hace unos 300.000 años. La evolución no fue una línea recta y varias especies convivieron.",
  hy: "Մարդու էվոլյուցիան սկսվել է Աֆրիկայում և տևել է միլիոնավոր տարիներ։ Հիմնական փոփոխություններն էին երկոտանիությունը, ուղեղի մեծացումը և ծնոտի ու ատամների փոքրացումը։ Ավստրալոպիթեկները քայլում էին երկու ոտքի վրա։ Հմուտ մարդը պատրաստում էր քարե գործիքներ, իսկ ուղղաձիգ մարդն օգտագործում էր կրակը։ Նեանդերթալցիները հարմարված էին ցրտին և հոգ էին տանում իրենց խմբի մասին։ Մեր տեսակը՝ բանական մարդը, առաջացել է Աֆրիկայում մոտ 300 հազար տարի առաջ։ Էվոլյուցիան ուղիղ գիծ չէր, և մի քանի տեսակներ ապրել են միաժամանակ։",
};
