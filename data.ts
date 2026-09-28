export interface TranslationItem {
  id: string;
  es: string;
  hy: string;
}

export interface QAItem {
  id: number;
  question: {
    es: string;
    hy: string;
  };
  answer: {
    es: string;
    hy: string;
  };
}

export interface DetailedSection {
  number: number;
  title: {
    es: string;
    hy: string;
  };
  paragraphs?: TranslationItem[];
  items?: TranslationItem[];
  note?: {
    label?: { es: string; hy: string };
    es: string;
    hy: string;
  };
}

// 1. Полный текст (текст по предложениям для удобного интерактивного перевода при клике)
export const fullTextSentences: TranslationItem[] = [
  {
    id: "ft-1",
    es: "La evolución humana es el proceso de cambios que experimentaron los seres humanos y sus antepasados durante millones de años.",
    hy: "Մարդու էվոլյուցիան այն փոփոխությունների գործընթացն է, որոնց միջով մարդիկ և նրանց նախնիները անցել են միլիոնավոր տարիների ընթացքում։",
  },
  {
    id: "ft-2",
    es: "Los primeros antepasados humanos aparecieron en África.",
    hy: "Մարդկանց առաջին նախնիները հայտնվել են Աֆրիկայում։",
  },
  {
    id: "ft-3",
    es: "Con el paso del tiempo, fueron cambiando poco a poco y desarrollaron nuevas capacidades.",
    hy: "Ժամանակի ընթացքում նրանք աստիճանաբար փոխվել են և ձեռք բերել նոր կարողություններ։",
  },
  {
    id: "ft-4",
    es: "Uno de los cambios más importantes fue el bipedismo, es decir, la capacidad de caminar sobre dos piernas.",
    hy: "Ամենակարևոր փոփոխություններից մեկը երկոտանիությունն էր, այսինքն՝ երկու ոտքով քայլելու կարողությունը։",
  },
  {
    id: "ft-5",
    es: "Gracias al bipedismo, las manos quedaron libres y pudieron utilizarse para transportar objetos, recoger alimentos y fabricar herramientas.",
    hy: "Երկու ոտքով քայլելու շնորհիվ ձեռքերը ազատ դարձան և հնարավոր եղավ դրանք օգտագործել առարկաներ տեղափոխելու, սնունդ հավաքելու և գործիքներ պատրաստելու համար։",
  },
  {
    id: "ft-6",
    es: "Otro cambio importante fue el desarrollo del cerebro. El cerebro aumentó de tamaño y se hizo más complejo.",
    hy: "Մյուս կարևոր փոփոխությունը ուղեղի զարգացումն էր։ Ուղեղը մեծացավ և դարձավ ավելի բարդ։",
  },
  {
    id: "ft-7",
    es: "Esto permitió a los seres humanos pensar mejor, aprender, resolver problemas y comunicarse.",
    hy: "Դա մարդկանց հնարավորություն տվեց ավելի լավ մտածել, սովորել, խնդիրներ լուծել և հաղորդակցվել։",
  },
  {
    id: "ft-8",
    es: "También aprendieron a fabricar herramientas de piedra y a controlar el fuego.",
    hy: "Նրանք նաև սովորեցին քարե գործիքներ պատրաստել և վերահսկել կրակը։",
  },
  {
    id: "ft-9",
    es: "El fuego era muy importante porque servía para calentarse, cocinar alimentos, iluminarse y protegerse de los animales.",
    hy: "Կրակը շատ կարևոր էր, որովհետև այն օգտագործվում էր տաքանալու, սնունդ պատրաստելու, լուսավորելու և կենդանիներից պաշտպանվելու համար։",
  },
  {
    id: "ft-10",
    es: "Con el tiempo, los seres humanos desarrollaron formas de comunicación cada vez más complejas y finalmente apareció el lenguaje.",
    hy: "Ժամանակի ընթացքում մարդիկ զարգացրին հաղորդակցության ավելի բարդ ձևեր, և վերջապես զարգացավ լեզուն։",
  },
  {
    id: "ft-11",
    es: "El lenguaje permitió organizarse mejor, compartir información y transmitir conocimientos.",
    hy: "Լեզուն օգնեց մարդկանց ավելի լավ կազմակերպվել, տեղեկություններ փոխանցել և գիտելիքները փոխանցել ուրիշներին։",
  },
  {
    id: "ft-12",
    es: "Entre las principales etapas de la evolución humana encontramos al Australopithecus, al Homo habilis, al Homo erectus, a los neandertales y al Homo sapiens.",
    hy: "Մարդու էվոլյուցիայի հիմնական փուլերից են Ավստրալոպիթեկը, Homo habilis-ը, Homo erectus-ը, նեանդերթալցիները և Homo sapiens-ը։",
  },
  {
    id: "ft-13",
    es: "El Australopithecus caminaba sobre dos piernas. El Homo habilis fabricaba herramientas sencillas de piedra.",
    hy: "Ավստրալոպիթեկը քայլում էր երկու ոտքով։ Homo habilis-ը պատրաստում էր պարզ քարե գործիքներ։",
  },
  {
    id: "ft-14",
    es: "El Homo erectus controlaba el fuego y algunos grupos salieron de África.",
    hy: "Homo erectus-ը կարողանում էր վերահսկել կրակը, իսկ որոշ խմբեր դուրս եկան Աֆրիկայից։",
  },
  {
    id: "ft-15",
    es: "Los neandertales vivían principalmente en Europa y Asia y estaban adaptados al frío.",
    hy: "Նեանդերթալցիները հիմնականում ապրում էին Եվրոպայում և Ասիայում և հարմարված էին ցուրտ կլիմային։",
  },
  {
    id: "ft-16",
    es: "Finalmente, el Homo sapiens, nuestra especie, se extendió por todo el mundo y desarrolló un lenguaje y una cultura más complejos.",
    hy: "Վերջապես Homo sapiens-ը՝ մեր տեսակը, տարածվեց ամբողջ աշխարհում և զարգացրեց ավելի բարդ լեզու ու մշակույթ։",
  },
  {
    id: "ft-17",
    es: "En resumen, la evolución humana fue un proceso muy largo en el que nuestros antepasados desarrollaron el bipedismo, herramientas, un cerebro más complejo, el control del fuego y el lenguaje.",
    hy: "Ամփոփելով՝ մարդու էվոլյուցիան շատ երկար գործընթաց էր, որի ընթացքում մեր նախնիները զարգացրին երկու ոտքով քայլելը, գործիքների օգտագործումը, ավելի զարգացած ուղեղը, կրակի վերահսկումը և լեզուն։",
  },
];

// 2. Краткий текст
export const shortTextSentences: TranslationItem[] = [
  {
    id: "st-1",
    es: "La evolución humana comenzó en África hace millones de años.",
    hy: "Մարդու էվոլյուցիան սկսվել է Աֆրիկայում միլիոնավոր տարիներ առաջ։",
  },
  {
    id: "st-2",
    es: "Los antepasados de los seres humanos cambiaron poco a poco.",
    hy: "Մարդկանց նախնիները աստիճանաբար փոխվել են։",
  },
  {
    id: "st-3",
    es: "Aprendieron a caminar sobre dos piernas, utilizar las manos, fabricar herramientas y controlar el fuego.",
    hy: "Նրանք սովորել են քայլել երկու ոտքով, օգտագործել ձեռքերը, պատրաստել գործիքներ և վերահսկել կրակը։",
  },
  {
    id: "st-4",
    es: "También desarrollaron un cerebro más complejo y formas de comunicación más avanzadas. Con el tiempo apareció el lenguaje.",
    hy: "Նրանք նաև զարգացրել են ավելի բարդ ուղեղ և հաղորդակցության ավելի զարգացած ձևեր։ Ժամանակի ընթացքում զարգացել է լեզուն։",
  },
  {
    id: "st-5",
    es: "Entre las principales etapas de la evolución humana encontramos al Australopithecus, Homo habilis, Homo erectus, los neandertales y Homo sapiens. Homo sapiens es nuestra especie.",
    hy: "Մարդու էվոլյուցիայի հիմնական փուլերից են Ավստրալոպիթեկը, Homo habilis-ը, Homo erectus-ը, նեանդերթալցիները և Homo sapiens-ը։ Homo sapiens-ը մեր տեսակն է։",
  },
];

// 3. Вопросы и ответы (Блок 1: 20 вопросов)
export const generalQuestions: QAItem[] = [
  {
    id: 1,
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
    id: 2,
    question: {
      es: "¿Qué es la evolución humana?",
      hy: "Ի՞նչ է մարդու էվոլյուցիան։",
    },
    answer: {
      es: "Es el proceso de cambios de los seres humanos y sus antepasados durante millones de años.",
      hy: "Դա մարդկանց և նրանց նախնիների փոփոխությունների գործընթացն է միլիոնավոր տարիների ընթացքում։",
    },
  },
  {
    id: 3,
    question: {
      es: "¿Qué significa bipedismo?",
      hy: "Ի՞նչ է նշանակում երկոտանիություն։",
    },
    answer: {
      es: "Significa caminar sobre dos piernas.",
      hy: "Դա նշանակում է քայլել երկու ոտքով։",
    },
  },
  {
    id: 4,
    question: {
      es: "¿Por qué fue importante el bipedismo?",
      hy: "Ինչո՞ւ էր կարևոր երկոտանիությունը։",
    },
    answer: {
      es: "Porque dejó las manos libres.",
      hy: "Որովհետև ձեռքերը ազատ դարձան։",
    },
  },
  {
    id: 5,
    question: {
      es: "¿Para qué utilizaban las manos?",
      hy: "Ինչի՞ համար էին օգտագործում ձեռքերը։",
    },
    answer: {
      es: "Para transportar objetos y fabricar herramientas.",
      hy: "Առարկաներ տեղափոխելու և գործիքներ պատրաստելու համար։",
    },
  },
  {
    id: 6,
    question: {
      es: "¿Qué ocurrió con el cerebro durante la evolución?",
      hy: "Ի՞նչ տեղի ունեցավ ուղեղի հետ էվոլյուցիայի ընթացքում։",
    },
    answer: {
      es: "El cerebro aumentó de tamaño y se hizo más complejo.",
      hy: "Ուղեղը մեծացավ և դարձավ ավելի բարդ։",
    },
  },
  {
    id: 7,
    question: {
      es: "¿Qué fabricaban los primeros seres humanos?",
      hy: "Ի՞նչ էին պատրաստում առաջին մարդիկ։",
    },
    answer: {
      es: "Fabricaban herramientas, principalmente de piedra.",
      hy: "Նրանք պատրաստում էին գործիքներ, հիմնականում քարից։",
    },
  },
  {
    id: 8,
    question: {
      es: "¿Para qué servía el fuego?",
      hy: "Ինչի՞ համար էր օգտագործվում կրակը։",
    },
    answer: {
      es: "Para calentarse, cocinar, iluminarse y protegerse.",
      hy: "Տաքանալու, սնունդ պատրաստելու, լուսավորելու և պաշտպանվելու համար։",
    },
  },
  {
    id: 9,
    question: {
      es: "¿Qué permitió el desarrollo del lenguaje?",
      hy: "Ի՞նչ հնարավորություն տվեց լեզվի զարգացումը։",
    },
    answer: {
      es: "Permitió comunicarse, compartir información y colaborar.",
      hy: "Այն հնարավորություն տվեց հաղորդակցվել, տեղեկություններ փոխանցել և համագործակցել։",
    },
  },
  {
    id: 10,
    question: {
      es: "¿Qué hacía el Homo habilis?",
      hy: "Ի՞նչ էր անում Homo habilis-ը։",
    },
    answer: {
      es: "Fabricaba herramientas sencillas de piedra.",
      hy: "Նա պատրաստում էր պարզ քարե գործիքներ։",
    },
  },
  {
    id: 11,
    question: {
      es: "¿Qué característica importante tenía el Homo erectus?",
      hy: "Ի՞նչ կարևոր հատկություն ուներ Homo erectus-ը։",
    },
    answer: {
      es: "Controlaba el fuego y caminaba erguido.",
      hy: "Նա վերահսկում էր կրակը և քայլում ուղղաձիգ։",
    },
  },
  {
    id: 12,
    question: {
      es: "¿Dónde vivían principalmente los neandertales?",
      hy: "Որտե՞ղ էին հիմնականում ապրում նեանդերթալցիները։",
    },
    answer: {
      es: "En Europa y Asia.",
      hy: "Եվրոպայում և Ասիայում։",
    },
  },
  {
    id: 13,
    question: {
      es: "¿A qué clima estaban adaptados los neandertales?",
      hy: "Ի՞նչ կլիմայի էին հարմարված նեանդերթալցիները։",
    },
    answer: {
      es: "A climas fríos.",
      hy: "Ցուրտ կլիմային։",
    },
  },
  {
    id: 14,
    question: {
      es: "¿Cuál es nuestra especie?",
      hy: "Ո՞րն է մեր տեսակը։",
    },
    answer: {
      es: "Homo sapiens.",
      hy: "Homo sapiens-ը։",
    },
  },
  {
    id: 15,
    question: {
      es: "¿Dónde apareció Homo sapiens?",
      hy: "Որտե՞ղ է հայտնվել Homo sapiens-ը։",
    },
    answer: {
      es: "En África.",
      hy: "Աֆրիկայում։",
    },
  },
  {
    id: 16,
    question: {
      es: "¿Qué capacidades tenía Homo sapiens?",
      hy: "Ի՞նչ կարողություններ ուներ Homo sapiens-ը։",
    },
    answer: {
      es: "Tenía un lenguaje más desarrollado y fabricaba herramientas más complejas.",
      hy: "Նա ուներ ավելի զարգացած լեզու և պատրաստում էր ավելի բարդ գործիքներ։",
    },
  },
  {
    id: 17,
    question: {
      es: "Nombra tres cambios importantes de la evolución humana.",
      hy: "Նշի՛ր մարդու էվոլյուցիայի երեք կարևոր փոփոխություն։",
    },
    answer: {
      es: "El bipedismo, el desarrollo del cerebro y la fabricación de herramientas.",
      hy: "Երկոտանիությունը, ուղեղի զարգացումը և գործիքների պատրաստումը։",
    },
  },
  {
    id: 18,
    question: {
      es: "¿Por qué fue importante el fuego?",
      hy: "Ինչո՞ւ էր կրակը կարևոր։",
    },
    answer: {
      es: "Porque ayudaba a cocinar, calentarse y protegerse.",
      hy: "Որովհետև այն օգնում էր սնունդ պատրաստել, տաքանալ և պաշտպանվել։",
    },
  },
  {
    id: 19,
    question: {
      es: "¿La evolución humana ocurrió rápidamente?",
      hy: "Մարդու էվոլյուցիան արագ տեղի ունեցա՞վ։",
    },
    answer: {
      es: "No, ocurrió durante millones de años.",
      hy: "Ոչ, այն տեղի է ունեցել միլիոնավոր տարիների ընթացքում։",
    },
  },
  {
    id: 20,
    question: {
      es: "¿Qué cinco grupos importantes podemos recordar?",
      hy: "Ո՞ր հինգ կարևոր խմբերը կարող ենք հիշել։",
    },
    answer: {
      es: "Australopithecus, Homo habilis, Homo erectus, neandertales y Homo sapiens.",
      hy: "Ավստրալոպիթեկ, Homo habilis, Homo erectus, նեանդերթալցիներ և Homo sapiens։",
    },
  },
];

// 4. Подробные тематические разделы (1 - 16)
export const detailedSections: DetailedSection[] = [
  {
    number: 1,
    title: {
      es: "¿Qué es la evolución humana?",
      hy: "Ի՞նչ է մարդու էվոլյուցիան։",
    },
    paragraphs: [
      {
        id: "d1-p1",
        es: "La evolución humana es el proceso de cambios que experimentaron los seres humanos y sus antepasados durante millones de años.",
        hy: "Մարդու էվոլյուցիան այն փոփոխությունների գործընթացն է, որոնց միջով մարդիկ և նրանց նախնիները անցել են միլիոնավոր տարիների ընթացքում։",
      },
      {
        id: "d1-p2",
        es: "Los seres humanos no aparecieron de repente con las características que tenemos actualmente. Nuestros antepasados cambiaron poco a poco durante un periodo muy largo.",
        hy: "Մարդիկ միանգամից չեն հայտնվել այնպիսի տեսքով և հատկանիշներով, ինչպիսին ունեն այսօր։ Մեր նախնիները շատ երկար ժամանակի ընթացքում աստիճանաբար փոփոխվել են։",
      },
      {
        id: "d1-p3",
        es: "Durante la evolución, los antepasados humanos aprendieron a caminar sobre dos piernas, utilizar mejor las manos, fabricar herramientas, controlar el fuego y comunicarse.",
        hy: "Էվոլյուցիայի ընթացքում մարդկանց նախնիները սովորեցին քայլել երկու ոտքով, ավելի լավ օգտագործել ձեռքերը, պատրաստել գործիքներ, վերահսկել կրակը և հաղորդակցվել։",
      },
    ],
  },
  {
    number: 2,
    title: {
      es: "El origen de los seres humanos",
      hy: "Մարդկանց ծագումը",
    },
    paragraphs: [
      {
        id: "d2-p1",
        es: "Los primeros antepasados de los seres humanos aparecieron en África.",
        hy: "Մարդկանց առաջին նախնիները հայտնվել են Աֆրիկայում։",
      },
      {
        id: "d2-p2",
        es: "En África se han encontrado algunos de los restos humanos más antiguos.",
        hy: "Աֆրիկայում հայտնաբերվել են մարդու ամենահին մնացորդներից մի քանիսը։",
      },
      {
        id: "d2-p3",
        es: "Más tarde, diferentes grupos humanos salieron de África y se extendieron por otros continentes.",
        hy: "Հետագայում մարդկանց տարբեր խմբեր դուրս եկան Աֆրիկայից և տարածվեցին այլ մայրցամաքներում։",
      },
    ],
    note: {
      label: { es: "Para recordar", hy: "Հիշելու համար" },
      es: "África → origen de los primeros antepasados humanos.",
      hy: "Աֆրիկա → մարդկանց առաջին նախնիների ծագման վայր։",
    },
  },
  {
    number: 3,
    title: {
      es: "Los homínidos",
      hy: "Հոմինիդները",
    },
    paragraphs: [
      {
        id: "d3-p1",
        es: "Los homínidos son el grupo de primates al que pertenecen los seres humanos y sus antepasados.",
        hy: "Հոմինիդները պրիմատների այն խումբն են, որին պատկանում են մարդիկ և նրանց նախնիները։",
      },
      {
        id: "d3-p2",
        es: "Los homínidos desarrollaron diferentes características a lo largo de millones de años.",
        hy: "Միլիոնավոր տարիների ընթացքում հոմինիդների մոտ զարգացան տարբեր կարևոր հատկանիշներ։",
      },
    ],
    items: [
      {
        id: "d3-i1",
        es: "el bipedismo",
        hy: "երկու ոտքով քայլելը",
      },
      {
        id: "d3-i2",
        es: "el desarrollo de las manos",
        hy: "ձեռքերի զարգացումը",
      },
      {
        id: "d3-i3",
        es: "el aumento del cerebro",
        hy: "ուղեղի մեծացումն ու զարգացումը",
      },
      {
        id: "d3-i4",
        es: "la fabricación de herramientas",
        hy: "գործիքների պատրաստումը",
      },
      {
        id: "d3-i5",
        es: "el desarrollo del lenguaje",
        hy: "լեզվի զարգացումը",
      },
    ],
  },
  {
    number: 4,
    title: {
      es: "El bipedismo",
      hy: "Երկու ոտքով քայլելը",
    },
    paragraphs: [
      {
        id: "d4-p1",
        es: "El bipedismo significa caminar sobre dos piernas.",
        hy: "Երկոտանիությունը նշանակում է քայլել երկու ոտքով։",
      },
      {
        id: "d4-p2",
        es: "Fue uno de los cambios más importantes de la evolución humana.",
        hy: "Դա մարդու էվոլյուցիայի ամենակարևոր փոփոխություններից մեկն էր։",
      },
      {
        id: "d4-p3",
        es: "Al caminar sobre dos piernas, las manos quedaron libres.",
        hy: "Երկու ոտքով քայլելու շնորհիվ ձեռքերը ազատ դարձան։",
      },
      {
        id: "d4-p4",
        es: "Las manos podían utilizarse para transportar alimentos, cuidar a las crías y fabricar herramientas.",
        hy: "Ձեռքերը հնարավոր դարձավ օգտագործել սնունդ տեղափոխելու, փոքրերին խնամելու և գործիքներ պատրաստելու համար։",
      },
    ],
    note: {
      label: { es: "Palabra importante", hy: "Կարևոր բառ" },
      es: "bípedo = que camina sobre dos piernas",
      hy: "երկոտանի = երկու ոտքով քայլող",
    },
  },
  {
    number: 5,
    title: {
      es: "Las manos",
      hy: "Ձեռքերը",
    },
    paragraphs: [
      {
        id: "d5-p1",
        es: "Las manos se hicieron cada vez más hábiles.",
        hy: "Ձեռքերը աստիճանաբար ավելի ճկուն և հմուտ դարձան։",
      },
      {
        id: "d5-p2",
        es: "Los seres humanos podían agarrar objetos con mayor precisión.",
        hy: "Մարդիկ կարող էին ավելի ճշգրիտ բռնել առարկաները։",
      },
      {
        id: "d5-p3",
        es: "Esto permitió fabricar herramientas de piedra, madera y otros materiales.",
        hy: "Դա հնարավորություն տվեց պատրաստել քարից, փայտից և այլ նյութերից գործիքներ։",
      },
    ],
  },
  {
    number: 6,
    title: {
      es: "El desarrollo del cerebro",
      hy: "Ուղեղի զարգացումը",
    },
    paragraphs: [
      {
        id: "d6-p1",
        es: "Durante la evolución humana, el cerebro aumentó de tamaño y se hizo más complejo.",
        hy: "Մարդու էվոլյուցիայի ընթացքում ուղեղը մեծացավ և դարձավ ավելի բարդ ու զարգացած։",
      },
      {
        id: "d6-p2",
        es: "Un cerebro más desarrollado permitió mejorar la capacidad de pensar, aprender y resolver problemas.",
        hy: "Ավելի զարգացած ուղեղը հնարավորություն տվեց ավելի լավ մտածել, սովորել և լուծել խնդիրներ։",
      },
      {
        id: "d6-p3",
        es: "También permitió organizar actividades en grupo y desarrollar nuevas formas de comunicación.",
        hy: "Այն նաև հնարավորություն տվեց խմբով կազմակերպել գործունեությունը և զարգացնել հաղորդակցության նոր ձևեր։",
      },
    ],
  },
  {
    number: 7,
    title: {
      es: "Las herramientas",
      hy: "Գործիքները",
    },
    paragraphs: [
      {
        id: "d7-p1",
        es: "Una herramienta es un objeto utilizado para realizar una actividad o un trabajo.",
        hy: "Գործիքը առարկա է, որն օգտագործվում է որևէ աշխատանք կամ գործողություն կատարելու համար։",
      },
      {
        id: "d7-p2",
        es: "Los primeros seres humanos fabricaron herramientas sencillas principalmente de piedra.",
        hy: "Առաջին մարդիկ պարզ գործիքներ էին պատրաստում հիմնականում քարից։",
      },
      {
        id: "d7-p3",
        es: "Las herramientas servían para cortar, cazar, romper huesos y preparar alimentos.",
        hy: "Գործիքներն օգտագործվում էին կտրելու, որս անելու, ոսկորներ կոտրելու և սնունդ պատրաստելու համար։",
      },
    ],
  },
  {
    number: 8,
    title: {
      es: "El fuego",
      hy: "Կրակը",
    },
    paragraphs: [
      {
        id: "d8-p1",
        es: "El control del fuego fue otro avance fundamental.",
        hy: "Կրակի վերահսկումը ևս մեկ շատ կարևոր առաջընթաց էր։",
      },
      {
        id: "d8-p2",
        es: "El fuego proporcionaba calor y luz.",
        hy: "Կրակը տալիս էր ջերմություն և լույս։",
      },
      {
        id: "d8-p3",
        es: "También permitía cocinar los alimentos y protegerse de algunos animales.",
        hy: "Այն նաև հնարավորություն էր տալիս եփել սնունդը և պաշտպանվել որոշ կենդանիներից։",
      },
      {
        id: "d8-p4",
        es: "Las personas podían reunirse alrededor del fuego y pasar más tiempo juntas.",
        hy: "Մարդիկ կարող էին հավաքվել կրակի շուրջ և ավելի երկար ժամանակ միասին անցկացնել։",
      },
    ],
    items: [
      { id: "d8-i1", es: "calor", hy: "ջերմություն" },
      { id: "d8-i2", es: "luz", hy: "լույս" },
      { id: "d8-i3", es: "cocinar", hy: "եփել" },
      { id: "d8-i4", es: "protección", hy: "պաշտպանություն" },
    ],
    note: {
      label: { es: "Funciones del fuego", hy: "Կրակի նշանակությունը" },
      es: "calor | luz | cocinar | protección",
      hy: "ջերմություն | լույս | եփել | պաշտպանություն",
    },
  },
  {
    number: 9,
    title: {
      es: "El lenguaje y la comunicación",
      hy: "Լեզուն և հաղորդակցությունը",
    },
    paragraphs: [
      {
        id: "d9-p1",
        es: "Los seres humanos fueron desarrollando formas de comunicación cada vez más complejas.",
        hy: "Մարդիկ աստիճանաբար զարգացրին ավելի բարդ հաղորդակցության ձևեր։",
      },
      {
        id: "d9-p2",
        es: "Finalmente desarrollaron el lenguaje.",
        hy: "Վերջիվերջո զարգացավ լեզուն։",
      },
      {
        id: "d9-p3",
        es: "El lenguaje permitió compartir información, organizar la caza y transmitir conocimientos.",
        hy: "Լեզուն հնարավորություն տվեց փոխանցել տեղեկություններ, կազմակերպել որսը և գիտելիքները փոխանցել ուրիշներին։",
      },
      {
        id: "d9-p4",
        es: "Gracias al lenguaje, los miembros de un grupo podían colaborar mejor.",
        hy: "Լեզվի շնորհիվ խմբի անդամները կարող էին ավելի լավ համագործակցել։",
      },
    ],
  },
  {
    number: 10,
    title: {
      es: "Principales etapas: Australopithecus",
      hy: "Մարդու էվոլյուցիայի հիմնական փուլերը՝ Ավստրալոպիթեկ",
    },
    paragraphs: [
      {
        id: "d10-p1",
        es: "El Australopithecus vivió en África.",
        hy: "Ավստրալոպիթեկն ապրել է Աֆրիկայում։",
      },
      {
        id: "d10-p2",
        es: "Caminaba sobre dos piernas.",
        hy: "Նա քայլում էր երկու ոտքով։",
      },
      {
        id: "d10-p3",
        es: "Tenía un cerebro más pequeño que los seres humanos actuales.",
        hy: "Նրա ուղեղն ավելի փոքր էր, քան ժամանակակից մարդու ուղեղը։",
      },
    ],
    note: {
      label: { es: "Recordar", hy: "Հիշել" },
      es: "Australopithecus → África + bipedismo",
      hy: "Ավստրալոպիթեկ → Աֆրիկա + երկու ոտքով քայլել",
    },
  },
  {
    number: 11,
    title: {
      es: "Homo habilis",
      hy: "Homo habilis (Հմուտ մարդ)",
    },
    paragraphs: [
      {
        id: "d11-p1",
        es: "Homo habilis significa «hombre hábil».",
        hy: "Homo habilis նշանակում է «հմուտ մարդ»։",
      },
      {
        id: "d11-p2",
        es: "Vivió en África.",
        hy: "Ապրել է Աֆրիկայում։",
      },
      {
        id: "d11-p3",
        es: "Fabricaba herramientas sencillas de piedra.",
        hy: "Պատրաստում էր պարզ քարե գործիքներ։",
      },
    ],
    note: {
      label: { es: "Recordar", hy: "Հիշել" },
      es: "Homo habilis → herramientas",
      hy: "Homo habilis → գործիքներ",
    },
  },
  {
    number: 12,
    title: {
      es: "Homo erectus",
      hy: "Homo erectus (Ուղղաձիգ մարդ)",
    },
    paragraphs: [
      {
        id: "d12-p1",
        es: "Homo erectus significa «hombre erguido».",
        hy: "Homo erectus նշանակում է «ուղղաձիգ մարդ»։",
      },
      {
        id: "d12-p2",
        es: "Caminaba completamente erguido.",
        hy: "Նա քայլում էր ամբողջովին ուղղաձիգ դիրքով։",
      },
      {
        id: "d12-p3",
        es: "Algunos grupos de Homo erectus salieron de África y llegaron a otras partes del mundo.",
        hy: "Homo erectus-ի որոշ խմբեր դուրս եկան Աֆրիկայից և հասան աշխարհի այլ տարածքներ։",
      },
      {
        id: "d12-p4",
        es: "Aprendió a controlar el fuego.",
        hy: "Նա սովորեց վերահսկել կրակը։",
      },
    ],
    note: {
      label: { es: "Recordar", hy: "Հիշել" },
      es: "Homo erectus → fuego + salida de África",
      hy: "Homo erectus → կրակ + Աֆրիկայից դուրս գալ",
    },
  },
  {
    number: 13,
    title: {
      es: "Homo neanderthalensis",
      hy: "Homo neanderthalensis (Նեանդերթալյան մարդ)",
    },
    paragraphs: [
      {
        id: "d13-p1",
        es: "Los neandertales vivieron principalmente en Europa y Asia.",
        hy: "Նեանդերթալցիները հիմնականում ապրել են Եվրոպայում և Ասիայում։",
      },
      {
        id: "d13-p2",
        es: "Estaban adaptados a climas fríos.",
        hy: "Նրանք հարմարված էին ցուրտ կլիմային։",
      },
      {
        id: "d13-p3",
        es: "Fabricaban herramientas y cazaban animales.",
        hy: "Նրանք պատրաստում էին գործիքներ և կենդանիներ որսում։",
      },
      {
        id: "d13-p4",
        es: "También cuidaban a los miembros de su grupo.",
        hy: "Նրանք նաև հոգ էին տանում իրենց խմբի անդամների մասին։",
      },
      {
        id: "d13-p5",
        es: "Enterraban a algunos de sus muertos.",
        hy: "Նրանք թաղում էին իրենց մահացածներից որոշներին։",
      },
    ],
    note: {
      label: { es: "Recordar", hy: "Հիշել" },
      es: "Neandertales → Europa y Asia + frío + enterramientos",
      hy: "Նեանդերթալցիներ → Եվրոպա և Ասիա + ցուրտ + թաղումներ",
    },
  },
  {
    number: 14,
    title: {
      es: "Homo sapiens",
      hy: "Homo sapiens (Բանական մարդ)",
    },
    paragraphs: [
      {
        id: "d14-p1",
        es: "Homo sapiens es nuestra especie.",
        hy: "Homo sapiens-ը մեր տեսակն է։",
      },
      {
        id: "d14-p2",
        es: "Surgió en África y posteriormente se extendió por todo el mundo.",
        hy: "Այն առաջացել է Աֆրիկայում և հետագայում տարածվել ամբողջ աշխարհում։",
      },
      {
        id: "d14-p3",
        es: "Tenía una gran capacidad para comunicarse, aprender y fabricar herramientas complejas.",
        hy: "Նա ուներ հաղորդակցվելու, սովորելու և բարդ գործիքներ պատրաստելու մեծ կարողություն։",
      },
      {
        id: "d14-p4",
        es: "También desarrolló manifestaciones artísticas.",
        hy: "Նա նաև զարգացրեց արվեստի տարբեր ձևեր։",
      },
    ],
    note: {
      label: { es: "Recordar", hy: "Հիշել" },
      es: "Homo sapiens → nuestra especie",
      hy: "Homo sapiens → մեր տեսակը",
    },
  },
  {
    number: 15,
    title: {
      es: "Orden básico",
      hy: "Հիմնական հերթականությունը",
    },
    paragraphs: [
      {
        id: "d15-p1",
        es: "Australopithecus → Homo habilis → Homo erectus → Homo neanderthalensis / Homo sapiens",
        hy: "Ավստրալոպիթեկ → Homo habilis → Homo erectus → նեանդերթալյան մարդ / Homo sapiens",
      },
    ],
    note: {
      label: { es: "⚠️ Nota importante", hy: "⚠️ Կարևոր նշում" },
      es: "La evolución humana no fue una línea completamente recta. Diferentes especies humanas existieron en distintos momentos y algunas coincidieron en el tiempo.",
      hy: "Մարդու էվոլյուցիան ամբողջովին ուղիղ գիծ չի եղել։ Մարդու տարբեր տեսակներ գոյություն են ունեցել տարբեր ժամանակներում, իսկ որոշ տեսակներ նույնիսկ ապրել են նույն ժամանակաշրջանում։",
    },
  },
  {
    number: 16,
    title: {
      es: "Cambios fundamentales de la evolución humana",
      hy: "Մարդու էվոլյուցիայի հիմնական փոփոխությունները",
    },
    items: [
      {
        id: "d16-i1",
        es: "1. Bipedismo: Caminar sobre dos piernas.",
        hy: "1. Երկոտանիություն: Քայլել երկու ոտքով։",
      },
      {
        id: "d16-i2",
        es: "2. Manos libres y más hábiles: Utilizar las manos para diferentes actividades.",
        hy: "2. Ազատ և ավելի հմուտ ձեռքեր: Ձեռքերն օգտագործել տարբեր գործողությունների համար։",
      },
      {
        id: "d16-i3",
        es: "3. Desarrollo del cerebro: Mayor capacidad para aprender y pensar.",
        hy: "3. Ուղեղի զարգացում: Սովորելու և մտածելու ավելի մեծ կարողություն։",
      },
      {
        id: "d16-i4",
        es: "4. Fabricación de herramientas",
        hy: "4. Գործիքների պատրաստում",
      },
      {
        id: "d16-i5",
        es: "5. Control del fuego",
        hy: "5. Կրակի վերահսկում",
      },
      {
        id: "d16-i6",
        es: "6. Desarrollo del lenguaje",
        hy: "6. Լեզվի զարգացում",
      },
      {
        id: "d16-i7",
        es: "7. Cooperación entre los miembros del grupo",
        hy: "7. Խմբի անդամների միջև համագործակցություն",
      },
    ],
  },
];

// 17. Словарь: Vocabulario imprescindible para el examen
export interface VocabItem {
  id: number;
  es: string;
  hy: string;
}

export const examVocabulary: VocabItem[] = [
  { id: 1, es: "la evolución", hy: "էվոլյուցիա" },
  { id: 2, es: "el ser humano", hy: "մարդ" },
  { id: 3, es: "los antepasados", hy: "նախնիներ" },
  { id: 4, es: "los homínidos", hy: "հոմինիդներ" },
  { id: 5, es: "el bipedismo", hy: "երկու ոտքով քայլելը" },
  { id: 6, es: "bípedo", hy: "երկոտանի" },
  { id: 7, es: "el cerebro", hy: "ուղեղ" },
  { id: 8, es: "las manos", hy: "ձեռքեր" },
  { id: 9, es: "las herramientas", hy: "գործիքներ" },
  { id: 10, es: "la piedra", hy: "քար" },
  { id: 11, es: "el fuego", hy: "կրակ" },
  { id: 12, es: "controlar el fuego", hy: "վերահսկել կրակը" },
  { id: 13, es: "fabricar", hy: "պատրաստել" },
  { id: 14, es: "caminar", hy: "քայլել" },
  { id: 15, es: "cazar", hy: "որս անել" },
  { id: 16, es: "comunicarse", hy: "հաղորդակցվել" },
  { id: 17, es: "el lenguaje", hy: "լեզու" },
  { id: 18, es: "África", hy: "Աֆրիկա" },
  { id: 19, es: "los restos", hy: "մնացորդներ" },
  { id: 20, es: "la especie", hy: "տեսակ" },
  { id: 21, es: "los neandertales", hy: "նեանդերթալցիներ" },
  { id: 22, es: "Homo sapiens", hy: "բանական մարդ" },
  { id: 23, es: "extenderse", hy: "տարածվել" },
  { id: 24, es: "adaptarse", hy: "հարմարվել" },
];

// 18. Резюме для запоминания
export const summaryForMemorizing: TranslationItem = {
  id: "sec-18-resumen",
  es: "La evolución humana comenzó en África hace millones de años. Los homínidos fueron desarrollando el bipedismo, unas manos más hábiles y un cerebro más complejo. Aprendieron a fabricar herramientas, controlar el fuego y comunicarse mediante el lenguaje. Entre las principales especies se encuentran Australopithecus, Homo habilis, Homo erectus, los neandertales y Homo sapiens. Homo sapiens es la especie humana actual.",
  hy: "Մարդու էվոլյուցիան սկսվել է Աֆրիկայում միլիոնավոր տարիներ առաջ։ Հոմինիդների մոտ աստիճանաբար զարգացել են երկու ոտքով քայլելը, ավելի հմուտ ձեռքերը և ավելի բարդ ուղեղը։ Նրանք սովորել են գործիքներ պատրաստել, վերահսկել կրակը և հաղորդակցվել լեզվի միջոցով։ Հիմնական տեսակներից են Ավստրալոպիթեկը, Homo habilis-ը, Homo erectus-ը, նեանդերթալցիները և Homo sapiens-ը։ Homo sapiens-ը ժամանակակից մարդու տեսակն է։",
};

// 19. Экзаменационные вопросы и ответы (15 вопросов)
export const examQuestions: QAItem[] = [
  {
    id: 1,
    question: {
      es: "¿Qué es la evolución humana?",
      hy: "Ի՞նչ է մարդու էվոլյուցիան։",
    },
    answer: {
      es: "La evolución humana es el proceso de cambios de los seres humanos y sus antepasados durante millones de años.",
      hy: "Մարդու էվոլյուցիան մարդկանց և նրանց նախնիների՝ միլիոնավոր տարիների ընթացքում տեղի ունեցած փոփոխությունների գործընթացն է։",
    },
  },
  {
    id: 2,
    question: {
      es: "¿Dónde aparecieron los primeros antepasados humanos?",
      hy: "Որտե՞ղ են հայտնվել մարդկանց առաջին նախնիները։",
    },
    answer: {
      es: "En África.",
      hy: "Աֆրիկայում։",
    },
  },
  {
    id: 3,
    question: {
      es: "¿Qué es el bipedismo?",
      hy: "Ի՞նչ է երկոտանիությունը։",
    },
    answer: {
      es: "Es la capacidad de caminar sobre dos piernas.",
      hy: "Դա երկու ոտքով քայլելու կարողությունն է։",
    },
  },
  {
    id: 4,
    question: {
      es: "¿Por qué fue importante el bipedismo?",
      hy: "Ինչո՞ւ էր կարևոր երկու ոտքով քայլելը։",
    },
    answer: {
      es: "Porque dejó las manos libres para transportar objetos y fabricar herramientas.",
      hy: "Քանի որ ձեռքերը ազատ դարձան առարկաներ տեղափոխելու և գործիքներ պատրաստելու համար։",
    },
  },
  {
    id: 5,
    question: {
      es: "¿Qué ocurrió con el cerebro durante la evolución?",
      hy: "Ի՞նչ տեղի ունեցավ ուղեղի հետ էվոլյուցիայի ընթացքում։",
    },
    answer: {
      es: "Aumentó de tamaño y se hizo más complejo.",
      hy: "Այն մեծացավ և դարձավ ավելի բարդ։",
    },
  },
  {
    id: 6,
    question: {
      es: "¿Para qué servían las primeras herramientas?",
      hy: "Ինչի՞ համար էին օգտագործվում առաջին գործիքները։",
    },
    answer: {
      es: "Para cortar, cazar y preparar alimentos.",
      hy: "Կտրելու, որս անելու և սնունդ պատրաստելու համար։",
    },
  },
  {
    id: 7,
    question: {
      es: "¿Para qué servía el fuego?",
      hy: "Ինչի՞ համար էր անհրաժեշտ կրակը։",
    },
    answer: {
      es: "Para calentarse, iluminarse, cocinar y protegerse.",
      hy: "Տաքանալու, լուսավորելու, սնունդ պատրաստելու և պաշտպանվելու համար։",
    },
  },
  {
    id: 8,
    question: {
      es: "¿Qué especie fabricaba herramientas sencillas de piedra?",
      hy: "Ո՞ր տեսակն էր պարզ քարե գործիքներ պատրաստում։",
    },
    answer: {
      es: "Homo habilis.",
      hy: "Homo habilis-ը։",
    },
  },
  {
    id: 9,
    question: {
      es: "¿Qué especie aprendió a controlar el fuego?",
      hy: "Ո՞ր տեսակն էր սովորել վերահսկել կրակը։",
    },
    answer: {
      es: "Homo erectus.",
      hy: "Homo erectus-ը։",
    },
  },
  {
    id: 10,
    question: {
      es: "¿Dónde vivían principalmente los neandertales?",
      hy: "Որտե՞ղ էին հիմնականում ապրում նեանդերթալցիները։",
    },
    answer: {
      es: "En Europa y Asia.",
      hy: "Եվրոպայում և Ասիայում։",
    },
  },
  {
    id: 11,
    question: {
      es: "¿Cuál es nuestra especie?",
      hy: "Ո՞րն է մեր տեսակը։",
    },
    answer: {
      es: "Homo sapiens.",
      hy: "Homo sapiens-ը։",
    },
  },
  {
    id: 12,
    question: {
      es: "¿Dónde surgió Homo sapiens?",
      hy: "Որտե՞ղ է առաջացել Homo sapiens-ը։",
    },
    answer: {
      es: "En África.",
      hy: "Աֆրիկայում։",
    },
  },
  {
    id: 13,
    question: {
      es: "¿Por qué fue importante el lenguaje?",
      hy: "Ինչո՞ւ էր լեզուն կարևոր։",
    },
    answer: {
      es: "Porque permitió comunicarse, compartir información y colaborar.",
      hy: "Քանի որ այն հնարավորություն տվեց հաղորդակցվել, տեղեկություններ փոխանցել և համագործակցել։",
    },
  },
  {
    id: 14,
    question: {
      es: "Nombra tres cambios importantes de la evolución humana.",
      hy: "Նշի՛ր մարդու էվոլյուցիայի երեք կարևոր փոփոխություն։",
    },
    answer: {
      es: "El bipedismo, el desarrollo del cerebro y la fabricación de herramientas.",
      hy: "Երկոտանիությունը, ուղեղի զարգացումը և գործիքների պատրաստումը։",
    },
  },
  {
    id: 15,
    question: {
      es: "¿La evolución humana fue una línea completamente recta?",
      hy: "Մարդու էվոլյուցիան ամբողջովին ուղիղ գի՞ծ էր։",
    },
    answer: {
      es: "No. Existieron diferentes especies humanas y algunas vivieron al mismo tiempo.",
      hy: "Ոչ։ Գոյություն են ունեցել մարդու տարբեր տեսակներ, և դրանցից որոշները ապրել են նույն ժամանակաշրջանում։",
    },
  },
];

// Специальный раздел: Текст для запоминания
export interface MemorizeItem {
  id: string;
  es: string;
  hy: string;
  esHighlights: string[];
  hyHighlights: string[];
}

export const memorizeSectionData = {
  keyPoints: [
    {
      num: 1,
      conceptEs: "África + Millones de años",
      conceptHy: "Աֆրիկա + Միլիոնավոր տարիներ",
      descEs: "Origen de los primeros antepasados",
      descHy: "Առաջին նախնիների ծագումը",
    },
    {
      num: 2,
      conceptEs: "Bipedismo + Herramientas + Fuego",
      conceptHy: "Երկու ոտքով քայլել + Գործիքներ + Կրակ",
      descEs: "Caminar sobre dos piernas, fabricar herramientas y controlar el fuego",
      descHy: "Քայլել երկու ոտքով, գործիքներ պատրաստել և կրակը վերահսկել",
    },
    {
      num: 3,
      conceptEs: "Cerebro + Lenguaje",
      conceptHy: "Ուղեղ + Լեզու",
      descEs: "Cerebro más desarrollado, comunicarse y colaborar",
      descHy: "Զարգացած ուղեղ, հաղորդակցվել և համագործակցել",
    },
    {
      num: 4,
      conceptEs: "5 Etapas clave",
      conceptHy: "5 Հիմնական փուլեր",
      descEs: "Australopithecus → Homo habilis → Homo erectus → Neandertales → Homo sapiens",
      descHy: "Ավստրալոպիթեկ → Homo habilis → Homo erectus → Նեանդերթալցիներ → Homo sapiens",
    },
    {
      num: 5,
      conceptEs: "Homo sapiens = Nuestra especie",
      conceptHy: "Homo sapiens = Մեր տեսակը",
      descEs: "Nuestra especie actual",
      descHy: "Մեր ներկայիս տեսակը",
    },
  ],
  paragraphs: [
    {
      id: "mem-p1",
      es: "La evolución humana es el proceso de cambios de los seres humanos y sus antepasados durante millones de años.",
      hy: "Մարդու էվոլյուցիան մարդկանց և նրանց նախնիների փոփոխությունների գործընթացն է միլիոնավոր տարիների ընթացքում։",
      esHighlights: ["proceso de cambios", "millones de años"],
      hyHighlights: ["փոփոխությունների գործընթացն է", "միլիոնավոր տարիների ընթացքում"],
    },
    {
      id: "mem-p2",
      es: "Los primeros antepasados humanos aparecieron en África. Aprendieron a caminar sobre dos piernas, fabricar herramientas y controlar el fuego.",
      hy: "Մարդկանց առաջին նախնիները հայտնվել են Աֆրիկայում։ Նրանք սովորեցին քայլել երկու ոտքով, պատրաստել գործիքներ և վերահսկել կրակը։",
      esHighlights: ["aparecieron en África", "caminar sobre dos piernas", "fabricar herramientas", "controlar el fuego"],
      hyHighlights: ["հայտնվել են Աֆրիկայում", "քայլել երկու ոտքով", "պատրաստել գործիքներ", "վերահսկել կրակը"],
    },
    {
      id: "mem-p3",
      es: "Su cerebro se hizo más desarrollado y apareció el lenguaje, que ayudó a comunicarse y colaborar.",
      hy: "Նրանց ուղեղը ավելի զարգացավ, և առաջացավ լեզուն, որը օգնեց հաղորդակցվել և համագործակցել։",
      esHighlights: ["cerebro se hizo más desarrollado", "apareció el lenguaje", "comunicarse y colaborar"],
      hyHighlights: ["ուղեղը ավելի զարգացավ", "առաջացավ լեզուն", "հաղորդակցվել և համագործակցել"],
    },
    {
      id: "mem-p4",
      es: "Entre las principales etapas están Australopithecus, Homo habilis, Homo erectus, los neandertales y Homo sapiens.",
      hy: "Հիմնական փուլերից են Ավստրալոպիթեկը, Homo habilis-ը, Homo erectus-ը, նեանդերթալցիները և Homo sapiens-ը։",
      esHighlights: ["Australopithecus", "Homo habilis", "Homo erectus", "los neandertales", "Homo sapiens"],
      hyHighlights: ["Ավստրալոպիթեկը", "Homo habilis-ը", "Homo erectus-ը", "նեանդերթալցիները", "Homo sapiens-ը"],
    },
    {
      id: "mem-p5",
      es: "Homo sapiens es nuestra especie.",
      hy: "Homo sapiens-ը մեր տեսակն է։",
      esHighlights: ["Homo sapiens", "nuestra especie"],
      hyHighlights: ["Homo sapiens-ը", "մեր տեսակն է"],
    },
  ],
};

