// Hadith and Sunnah entries, organized by category.
// English texts are translations/paraphrases. Always verify wording and grading against the
// cited collection or with a qualified scholar.

const CATEGORIES = [
  { id: "iman",      title: "Faith & Belief",                 desc: "The foundations of belief in Allah." },
  { id: "intent",    title: "Intentions & Sincerity",         desc: "Doing everything for the sake of Allah." },
  { id: "salah",     title: "Prayer (Salah)",                 desc: "The pillar that connects us to Allah." },
  { id: "fast",      title: "Fasting & Ramadan",              desc: "Fasting, Laylat al-Qadr and voluntary fasts." },
  { id: "charity",   title: "Charity & Generosity",           desc: "Giving, sharing and doing good." },
  { id: "dunya",     title: "This World & the Hereafter",     desc: "Living in the dunya with the akhirah in mind." },
  { id: "knowledge", title: "Knowledge & the Quran",          desc: "Learning, teaching and reciting." },
  { id: "character", title: "Character & Manners",            desc: "Honesty, gentleness, modesty and good conduct." },
  { id: "family",    title: "Family & Kindness to Parents",   desc: "Mothers, fathers, children and relatives." },
  { id: "community", title: "Brotherhood, Neighbors & Society", desc: "Rights of Muslims, neighbors and people." },
  { id: "sabr",      title: "Patience & Trust in Allah",      desc: "Hardship, tawakkul and hope." },
  { id: "tawba",     title: "Repentance & Forgiveness",       desc: "Returning to Allah after mistakes." },
  { id: "dhikr",     title: "Dhikr & Dua",                    desc: "Remembering and calling upon Allah." },
  { id: "eating",    title: "Eating & Drinking",              desc: "Daily sunnah at the table." },
  { id: "clean",     title: "Cleanliness & Daily Habits",     desc: "Wudu, hygiene and starting with the right." },
  { id: "sleep",     title: "Sleep & Waking",                 desc: "Sunnah for the night and morning." },
  { id: "greet",     title: "Greetings & Social Etiquette",   desc: "Salam, hospitality and good manners with people." },
  { id: "out",       title: "Home, Masjid & Travel",          desc: "Sunnah for leaving, entering and journeys." },
  { id: "marriage",  title: "Marriage & Spouses",             desc: "Choosing a spouse and living with kindness." },
  { id: "speech",    title: "Speech & the Tongue",            desc: "Guarding what we say." },
  { id: "business",  title: "Business & Earning a Living",    desc: "Honest trade, work and halal income." },
  { id: "health",    title: "Health & Wellbeing",             desc: "Seeking cures and caring for the body." },
  { id: "death",     title: "Death, the Grave & the Hereafter", desc: "Preparing for the meeting with Allah." },
  { id: "hajj",      title: "Hajj & Special Days",            desc: "Hajj, Umrah, Arafah, Ashura and Eid." }
];

const H = (cat, text, ref) => ({ type: "hadith", cat, text, ref });
const S = (cat, text, ref) => ({ type: "sunnah", cat, text, ref });

const ENTRIES = [
  // ===== FAITH & BELIEF =====
  H("iman", "Islam is built upon five: testifying that there is no god but Allah and that Muhammad is His Messenger, establishing the prayer, giving zakat, performing Hajj, and fasting Ramadan.", "Sahih al-Bukhari 8, Sahih Muslim 16"),
  H("iman", "Faith has over seventy branches. The highest is saying La ilaha illa Allah, the lowest is removing harm from the road, and modesty is a branch of faith.", "Sahih Muslim 35, Sahih al-Bukhari 9"),
  H("iman", "Whoever dies knowing that there is no god but Allah will enter Paradise.", "Sahih Muslim 26"),
  H("iman", "Allah says: I am as My servant expects Me to be, and I am with him when he remembers Me. (Hadith Qudsi)", "Sahih al-Bukhari 7405, Sahih Muslim 2675"),

  // ===== INTENTIONS & SINCERITY =====
  H("intent", "Actions are judged by intentions, and every person will have what they intended.", "Sahih al-Bukhari 1, Sahih Muslim 1907"),
  H("intent", "Allah does not look at your appearances or your wealth, but He looks at your hearts and your deeds.", "Sahih Muslim 2564"),
  H("intent", "The religion is sincerity (naseehah): to Allah, His Book, His Messenger, the leaders of the Muslims and their common people.", "Sahih Muslim 55"),
  H("intent", "The most beloved deeds to Allah are those done consistently, even if small.", "Sahih al-Bukhari 6464, Sahih Muslim 783"),
  H("intent", "Among the first to be judged on the Day of Resurrection will be people who acted to be seen and praised. Their deeds will not benefit them.", "Sahih Muslim 1905"),

  // ===== PRAYER =====
  H("salah", "Pray as you have seen me praying.", "Sahih al-Bukhari 631"),
  H("salah", "The five daily prayers are like a river at your door in which you bathe five times a day. Would any dirt remain on you?", "Sahih al-Bukhari 528, Sahih Muslim 667"),
  H("salah", "The first thing a servant will be held to account for on the Day of Resurrection is his prayer.", "Jami at-Tirmidhi 413, Sunan an-Nasa'i"),
  H("salah", "Prayer in congregation is twenty-seven degrees better than prayer on one's own.", "Sahih al-Bukhari 645, Sahih Muslim 650"),
  H("salah", "Whoever prays Fajr is under the protection of Allah.", "Sahih Muslim 657"),
  H("salah", "The coolness of my eyes was placed in prayer.", "Sunan an-Nasa'i 3940"),
  H("salah", "The best day on which the sun rises is Friday.", "Sahih Muslim 854"),
  H("salah", "The two rak'ahs before Fajr are better than the world and everything in it.", "Sahih Muslim 725"),
  S("salah", "Pray the regular sunnah prayers (rawatib) with the obligatory prayers. Whoever prays twelve rak'ahs a day, Allah builds for him a house in Paradise.", "Sahih Muslim 728"),
  S("salah", "Pray the Duha (forenoon) prayer, which the Prophet ﷺ encouraged as charity for every joint of the body.", "Sahih Muslim 720"),
  S("salah", "Pray at night. The best prayer after the obligatory prayers is the night prayer.", "Sahih Muslim 1163"),
  S("salah", "When you hear the adhan, repeat what the muadhdhin says.", "Sahih al-Bukhari 611, Sahih Muslim 383"),
  S("salah", "Make dua between the adhan and the iqamah. It is not rejected.", "Sunan Abi Dawud 521, Jami at-Tirmidhi 212"),
  S("salah", "Straighten the rows in congregational prayer, for straightening the rows is part of the perfection of prayer.", "Sahih al-Bukhari 723, Sahih Muslim 433"),
  S("salah", "On Friday, bathe, go early to the masjid and listen quietly to the khutbah.", "Sahih al-Bukhari 881, Sahih Muslim 850"),

  // ===== FASTING & RAMADAN =====
  H("fast", "Whoever fasts Ramadan out of faith and seeking reward, his previous sins will be forgiven.", "Sahih al-Bukhari 38, Sahih Muslim 760"),
  H("fast", "When Ramadan begins, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained.", "Sahih al-Bukhari 1899, Sahih Muslim 1079"),
  H("fast", "Fasting is a shield.", "Sahih al-Bukhari 1894, Sahih Muslim 1151"),
  H("fast", "The fasting person has two joys: one when he breaks his fast, and one when he meets his Lord.", "Sahih al-Bukhari 1904, Sahih Muslim 1151"),
  H("fast", "Seek Laylat al-Qadr in the odd nights of the last ten nights of Ramadan.", "Sahih al-Bukhari 2017"),
  H("fast", "Whoever stands in prayer on Laylat al-Qadr out of faith and seeking reward will have his previous sins forgiven.", "Sahih al-Bukhari 2014, Sahih Muslim 760"),
  S("fast", "Eat suhoor before the fast, for there is blessing in suhoor.", "Sahih al-Bukhari 1923, Sahih Muslim 1095"),
  S("fast", "Break your fast with fresh dates, or dry dates, or water.", "Sunan Abi Dawud 2356, Jami at-Tirmidhi 696"),
  S("fast", "Feed a fasting person at iftar. You receive a reward like his, without reducing his reward.", "Jami at-Tirmidhi 807"),
  S("fast", "Fast six days of Shawwal after Ramadan. It is as if one has fasted the whole year.", "Sahih Muslim 1164"),
  S("fast", "Fast on Mondays and Thursdays, as the Prophet ﷺ regularly did.", "Jami at-Tirmidhi"),
  S("fast", "Fast three days of every month.", "Sahih al-Bukhari 1979, Sahih Muslim 1159"),

  // ===== CHARITY & GENEROSITY =====
  H("charity", "Charity does not decrease wealth.", "Sahih Muslim 2588"),
  H("charity", "Protect yourself from the Fire, even with half a date given in charity.", "Sahih al-Bukhari 1417, Sahih Muslim 1016"),
  H("charity", "The upper (giving) hand is better than the lower (receiving) hand.", "Sahih al-Bukhari 1429, Sahih Muslim 1033"),
  H("charity", "Every act of goodness is charity.", "Sahih Muslim 1005"),
  H("charity", "A good word is charity.", "Sahih al-Bukhari 2989, Sahih Muslim 1009"),
  H("charity", "Seven will be shaded by Allah on the Day when there is no shade but His, among them a person who gives charity so secretly that his left hand does not know what his right hand gave.", "Sahih al-Bukhari 660, Sahih Muslim 1031"),
  H("charity", "No Muslim plants a tree or sows a crop and then a bird, person or animal eats from it, except that it counts as charity for him.", "Sahih al-Bukhari 2320, Sahih Muslim 1553"),
  S("charity", "Remove harmful things from the road. It is a charity.", "Sahih al-Bukhari 2989, Sahih Muslim 1009"),
  S("charity", "Give gifts to one another and you will love one another.", "al-Adab al-Mufrad 594"),

  // ===== THIS WORLD & THE HEREAFTER =====
  H("dunya", "Be in this world as if you were a stranger or a traveler.", "Sahih al-Bukhari 6416"),
  H("dunya", "What do I have to do with this world? I am like a rider who rests in the shade of a tree and then goes on and leaves it.", "Jami at-Tirmidhi 2377"),
  H("dunya", "The world is a prison for the believer and a paradise for the disbeliever.", "Sahih Muslim 2956"),
  H("dunya", "If the son of Adam had a valley of gold, he would want a second. Nothing fills his belly except dust, and Allah forgives whoever repents.", "Sahih al-Bukhari 6436, Sahih Muslim 1048"),
  H("dunya", "Richness is not having many possessions. True richness is the richness of the soul.", "Sahih al-Bukhari 6446, Sahih Muslim 1051"),
  H("dunya", "Look at those who are below you, and do not look at those above you. That is better, so that you do not belittle the favors of Allah upon you.", "Sahih Muslim 2963"),
  H("dunya", "There are two blessings many people lose out on: health and free time.", "Sahih al-Bukhari 6412"),
  H("dunya", "Whoever wakes up secure in his home, healthy in his body, with his food for the day, it is as if the whole world has been given to him.", "Jami at-Tirmidhi 2346, Sunan Ibn Majah 4141"),
  H("dunya", "Three follow the deceased: his family, his wealth and his deeds. Two return and one remains. His family and wealth return, and his deeds remain.", "Sahih al-Bukhari 6514, Sahih Muslim 2960"),
  H("dunya", "Remember often the destroyer of pleasures: death.", "Jami at-Tirmidhi 2307, Sunan an-Nasa'i 1824"),
  H("dunya", "Visit the graves, for they remind you of the Hereafter.", "Sahih Muslim 976"),

  // ===== KNOWLEDGE & THE QURAN =====
  H("knowledge", "The best of you are those who learn the Quran and teach it.", "Sahih al-Bukhari 5027"),
  H("knowledge", "Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise.", "Sahih Muslim 2699"),
  H("knowledge", "When a person dies, his deeds end except for three: ongoing charity, beneficial knowledge, and a righteous child who prays for him.", "Sahih Muslim 1631"),
  H("knowledge", "Whoever Allah wants good for, He gives him understanding of the religion.", "Sahih al-Bukhari 71, Sahih Muslim 1037"),
  H("knowledge", "Convey from me, even if it is one verse.", "Sahih al-Bukhari 3461"),
  H("knowledge", "Seeking knowledge is an obligation upon every Muslim.", "Sunan Ibn Majah 224"),
  H("knowledge", "Whoever recites a letter of the Book of Allah earns a good deed, and each good deed is multiplied by ten.", "Jami at-Tirmidhi 2910"),
  H("knowledge", "Read the Quran, for it will come on the Day of Resurrection as an intercessor for its companions.", "Sahih Muslim 804"),
  H("knowledge", "The one who recites the Quran skillfully will be with the noble and obedient angels.", "Sahih al-Bukhari 4937, Sahih Muslim 798"),

  // ===== CHARACTER & MANNERS =====
  H("character", "Whoever believes in Allah and the Last Day, let him speak good or remain silent.", "Sahih al-Bukhari 6018, Sahih Muslim 47"),
  H("character", "The strong person is not the one who overpowers others, but the one who controls himself in anger.", "Sahih al-Bukhari 6114, Sahih Muslim 2609"),
  H("character", "Make things easy and do not make them difficult; give good news and do not drive people away.", "Sahih al-Bukhari 69, Sahih Muslim 1734"),
  H("character", "The believers with the most complete faith are those with the best character.", "Sunan Abi Dawud 4682, Jami at-Tirmidhi 1162"),
  H("character", "I was sent to perfect good character.", "al-Adab al-Mufrad 273"),
  H("character", "Nothing is heavier on the Scale on the Day of Resurrection than good character.", "Sunan Abi Dawud 4799, Jami at-Tirmidhi 2002"),
  H("character", "The signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is trusted he betrays.", "Sahih al-Bukhari 33, Sahih Muslim 59"),
  H("character", "Honesty leads to righteousness, and righteousness leads to Paradise. Lying leads to wickedness, and wickedness leads to the Fire.", "Sahih al-Bukhari 6094, Sahih Muslim 2607"),
  H("character", "Modesty brings nothing but good.", "Sahih al-Bukhari 6117, Sahih Muslim 37"),
  H("character", "Allah is gentle and loves gentleness in all matters.", "Sahih al-Bukhari 6024, Sahih Muslim 2165"),
  H("character", "A man asked the Prophet ﷺ for advice. He said: Do not become angry.", "Sahih al-Bukhari 6116"),
  H("character", "Beware of suspicion, for suspicion is the worst of speech.", "Sahih al-Bukhari 6066, Sahih Muslim 2563"),
  H("character", "Whoever has an atom's weight of arrogance in his heart will not enter Paradise. Allah is beautiful and loves beauty. Arrogance is rejecting the truth and looking down on people.", "Sahih Muslim 91"),
  H("character", "Part of the excellence of a person's Islam is leaving that which does not concern him.", "Jami at-Tirmidhi 2317"),
  H("character", "The believer does not slander, curse, or speak obscenely.", "Jami at-Tirmidhi 1977"),
  H("character", "Shall I tell you who is forbidden from the Fire? Everyone who is gentle, easy-going and close to people.", "Jami at-Tirmidhi 2488"),

  // ===== FAMILY & KINDNESS TO PARENTS =====
  H("family", "A man asked: Who deserves my good company most? He said: Your mother. Then who? Your mother. Then who? Your mother. Then who? Your father.", "Sahih al-Bukhari 5971, Sahih Muslim 2548"),
  H("family", "The best of you are the best to their families, and I am the best of you to my family.", "Jami at-Tirmidhi 3895, Sunan Ibn Majah 1977"),
  H("family", "Whoever is tested with daughters and treats them well, they will be a shield for him from the Fire.", "Sahih al-Bukhari 5995, Sahih Muslim 2629"),
  H("family", "Stay with her (your mother), for Paradise is beneath her feet.", "Sunan an-Nasa'i 3104"),
  H("family", "The one who cuts the ties of kinship will not enter Paradise.", "Sahih al-Bukhari 5984, Sahih Muslim 2556"),
  H("family", "Whoever wants his provision expanded and his life extended should maintain the ties of kinship.", "Sahih al-Bukhari 5985, Sahih Muslim 2557"),
  H("family", "The one who looks after the widow and the poor is like the one who strives in the cause of Allah.", "Sahih al-Bukhari 5353, Sahih Muslim 2982"),
  H("family", "I and the one who cares for an orphan will be in Paradise like this (he held two fingers together).", "Sahih al-Bukhari 5304"),
  H("family", "Command your children to pray when they are seven years old.", "Sunan Abi Dawud 495, Jami at-Tirmidhi 407"),
  S("family", "Kiss and show affection to your children. The Prophet ﷺ said that whoever does not show mercy will not be shown mercy.", "Sahih al-Bukhari 5997, Sahih Muslim 2318"),
  S("family", "Help your family with housework, as the Prophet ﷺ used to do.", "Sahih al-Bukhari 676"),

  // ===== BROTHERHOOD, NEIGHBORS & SOCIETY =====
  H("community", "None of you truly believes until he loves for his brother what he loves for himself.", "Sahih al-Bukhari 13, Sahih Muslim 45"),
  H("community", "A Muslim is the one from whose tongue and hand other Muslims are safe.", "Sahih al-Bukhari 10, Sahih Muslim 40"),
  H("community", "Whoever does not show mercy to people, Allah will not show mercy to him.", "Sahih al-Bukhari 7376, Sahih Muslim 2319"),
  H("community", "Show mercy to those on earth, and the One in the heavens will show mercy to you.", "Sunan Abi Dawud 4941, Jami at-Tirmidhi 1924"),
  H("community", "Jibril kept advising me about the neighbor until I thought he would make him an heir.", "Sahih al-Bukhari 6014, Sahih Muslim 2624"),
  H("community", "He is not a believer who eats his fill while his neighbor goes hungry beside him.", "al-Adab al-Mufrad 112"),
  H("community", "Whoever conceals a Muslim's faults, Allah will conceal his faults on the Day of Resurrection.", "Sahih al-Bukhari 2442, Sahih Muslim 2580"),
  H("community", "Do not envy one another, do not hate one another, do not turn away from one another, and be servants of Allah as brothers.", "Sahih al-Bukhari 6064, Sahih Muslim 2559"),
  H("community", "Do you know what backbiting is? It is mentioning your brother in a way he dislikes.", "Sahih Muslim 2589"),
  H("community", "The believers, in their mutual love, mercy and compassion, are like one body. When one part suffers, the whole body responds with sleeplessness and fever.", "Sahih al-Bukhari 6011, Sahih Muslim 2586"),
  H("community", "Whoever is not thankful to people is not thankful to Allah.", "Sunan Abi Dawud 4811, Jami at-Tirmidhi 1954"),
  H("community", "Whoever relieves a believer of a worldly hardship, Allah will relieve him of a hardship on the Day of Resurrection.", "Sahih Muslim 2699"),
  S("community", "Visit the sick, follow funerals, accept invitations. These are rights of one Muslim over another.", "Sahih al-Bukhari 1240, Sahih Muslim 2162"),
  S("community", "Reconcile between people. The Prophet ﷺ said it is better than the rank of fasting, prayer and charity.", "Sunan Abi Dawud 4919, Jami at-Tirmidhi 2509"),

  // ===== PATIENCE & TRUST IN ALLAH =====
  H("sabr", "How wonderful is the affair of the believer. All of it is good for him. If something good happens, he is grateful, and that is good for him. If something bad happens, he is patient, and that is good for him.", "Sahih Muslim 2999"),
  H("sabr", "No fatigue, illness, worry, grief, harm or distress befalls a Muslim, even a thorn that pricks him, except that Allah expiates some of his sins for it.", "Sahih al-Bukhari 5641, Sahih Muslim 2573"),
  H("sabr", "If Allah loves a people, He tests them.", "Jami at-Tirmidhi 2396"),
  H("sabr", "If you relied on Allah as He should be relied upon, He would provide for you as He provides for the birds: they go out hungry in the morning and return full.", "Jami at-Tirmidhi 2344, Sunan Ibn Majah 4164"),
  H("sabr", "A man asked: Should I tie my camel or trust in Allah? He said: Tie it and trust in Allah.", "Jami at-Tirmidhi 2517"),
  H("sabr", "Patience is at the first strike of calamity.", "Sahih al-Bukhari 1283, Sahih Muslim 926"),
  H("sabr", "Whoever tries to be patient, Allah will make him patient. No one is given a gift better and more vast than patience.", "Sahih al-Bukhari 1469, Sahih Muslim 1053"),
  H("sabr", "The strong believer is better and more beloved to Allah than the weak believer, though there is good in both. Seek what benefits you, ask Allah for help, and do not give up. If something afflicts you, do not say: if only I had done this. Say: Allah decreed, and what He willed, He did.", "Sahih Muslim 2664"),
  S("sabr", "When struck by a calamity, say: Inna lillahi wa inna ilayhi raji'un (We belong to Allah and to Him we return).", "Sahih Muslim 918"),

  // ===== REPENTANCE & FORGIVENESS =====
  H("tawba", "Allah is more pleased with the repentance of His servant than one of you who finds his lost camel in the desert after despairing.", "Sahih al-Bukhari 6308, Sahih Muslim 2744"),
  H("tawba", "Every son of Adam sins, and the best of those who sin are those who repent.", "Jami at-Tirmidhi 2499, Sunan Ibn Majah 4251"),
  H("tawba", "Follow a bad deed with a good deed and it will wipe it out.", "Jami at-Tirmidhi 1987"),
  H("tawba", "Allah accepts the repentance of a servant until his soul reaches his throat.", "Jami at-Tirmidhi 3537"),
  H("tawba", "Allah stretches out His hand at night to accept the repentance of those who sinned in the day, and in the day to accept the repentance of those who sinned at night, until the sun rises from the west.", "Sahih Muslim 2759"),
  S("tawba", "Seek forgiveness often. The Prophet ﷺ said: I seek Allah's forgiveness and repent to Him more than seventy times a day.", "Sahih al-Bukhari 6307"),

  // ===== DHIKR & DUA =====
  H("dhikr", "Two phrases are light on the tongue, heavy on the Scale, and beloved to the Most Merciful: SubhanAllahi wa bihamdihi, SubhanAllahil-Adheem.", "Sahih al-Bukhari 6406, Sahih Muslim 2694"),
  H("dhikr", "The best remembrance is La ilaha illa Allah, and the best dua is Alhamdulillah.", "Jami at-Tirmidhi 3383, Sunan Ibn Majah 3800"),
  H("dhikr", "Dua is worship.", "Sunan Abi Dawud 1479, Jami at-Tirmidhi 2969"),
  H("dhikr", "Our Lord descends to the lowest heaven in the last third of every night and says: Who is calling upon Me that I may answer him? Who is asking of Me that I may give him? Who is seeking forgiveness that I may forgive him?", "Sahih al-Bukhari 1145, Sahih Muslim 758"),
  H("dhikr", "Whoever says SubhanAllahi wa bihamdihi a hundred times a day, his sins are forgiven even if they are like the foam of the sea.", "Sahih al-Bukhari 6405, Sahih Muslim 2691"),
  H("dhikr", "Whoever sends one blessing upon me, Allah will send ten blessings upon him.", "Sahih Muslim 408"),
  S("dhikr", "Say the morning and evening adhkar and remember Allah often throughout the day.", "Sunan Abi Dawud, Jami at-Tirmidhi"),
  S("dhikr", "After each obligatory prayer, say SubhanAllah 33 times, Alhamdulillah 33 times and Allahu Akbar 34 times.", "Sahih Muslim 596"),

  // ===== EATING & DRINKING =====
  S("eating", "Say Bismillah before eating, eat with your right hand, and eat from what is nearest to you.", "Sahih al-Bukhari 5376, Sahih Muslim 2022"),
  S("eating", "If you forget to say Bismillah at the beginning, say: Bismillahi awwalahu wa akhirahu (In the name of Allah at its beginning and end).", "Sunan Abi Dawud 3767, Jami at-Tirmidhi 1858"),
  H("eating", "The son of Adam fills no vessel worse than his stomach. A few morsels to keep his back straight are enough. If he must fill it, then a third for food, a third for drink and a third for breath.", "Jami at-Tirmidhi 2380, Sunan Ibn Majah 3349"),
  S("eating", "After eating, say: Alhamdulillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwa.", "Sunan Abi Dawud 4023, Jami at-Tirmidhi 3458"),
  S("eating", "Do not blow into your drink.", "Sunan Abi Dawud 3728, Jami at-Tirmidhi 1888"),
  S("eating", "The Prophet ﷺ would breathe three times outside the cup when drinking.", "Sahih Muslim 2028"),
  S("eating", "Never criticize food. The Prophet ﷺ would eat it if he liked it, and leave it if he did not.", "Sahih al-Bukhari 3563, Sahih Muslim 2064"),
  H("eating", "Use the black seed, for it is a cure for every disease except death.", "Sahih al-Bukhari 5688, Sahih Muslim 2215"),

  // ===== CLEANLINESS & DAILY HABITS =====
  H("clean", "Purity is half of faith.", "Sahih Muslim 223"),
  H("clean", "Whoever performs wudu well, his sins come out of his body, even from under his fingernails.", "Sahih Muslim 245"),
  S("clean", "Use the siwak (miswak), especially before prayer and upon waking. The Prophet ﷺ said he would have made it obligatory for every prayer if it were not a hardship.", "Sahih al-Bukhari 887, Sahih Muslim 252"),
  S("clean", "Five things are from the fitrah: circumcision, shaving the pubic hair, trimming the mustache, clipping the nails, and plucking the underarm hair.", "Sahih al-Bukhari 5889, Sahih Muslim 257"),
  S("clean", "Begin with the right side when performing wudu, combing the hair, putting on shoes and in all good things.", "Sahih al-Bukhari 168, Sahih Muslim 268"),
  S("clean", "When entering the bathroom, say: Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith (O Allah, I seek refuge in You from evil and evil beings).", "Sahih al-Bukhari 142, Sahih Muslim 375"),

  // ===== SLEEP & WAKING =====
  S("sleep", "Before sleeping, perform wudu and lie on your right side.", "Sahih al-Bukhari 6311"),
  S("sleep", "Recite Ayat al-Kursi when you go to bed. A guardian from Allah will stay with you, and Satan will not come near you until morning.", "Sahih al-Bukhari 2311"),
  S("sleep", "Before sleeping, recite Surah al-Ikhlas, al-Falaq and an-Nas, blow into your hands and wipe over your body, as the Prophet ﷺ did.", "Sahih al-Bukhari 5017"),
  S("sleep", "When going to sleep, say: Bismika Allahumma amutu wa ahya (In Your name, O Allah, I die and I live).", "Sahih al-Bukhari 6324"),
  S("sleep", "Upon waking, say: Alhamdulillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur (Praise be to Allah who gave us life after causing us to die, and to Him is the resurrection).", "Sahih al-Bukhari 6312"),
  S("sleep", "The Prophet ﷺ disliked sleeping before Isha and talking after it.", "Sahih al-Bukhari 568, Sahih Muslim 647"),

  // ===== GREETINGS & SOCIAL ETIQUETTE =====
  S("greet", "Greet one another with salam (As-salamu alaykum). Spreading salam builds love between people.", "Sahih Muslim 54"),
  S("greet", "Smile at others. Smiling in the face of your brother is a form of charity.", "Jami at-Tirmidhi 1956"),
  H("greet", "Do not belittle any good deed, even meeting your brother with a cheerful face.", "Sahih Muslim 2626"),
  S("greet", "Shake hands when you meet. Two Muslims do not meet and shake hands except that they are forgiven before they part.", "Sunan Abi Dawud 5212, Jami at-Tirmidhi 2727"),
  S("greet", "When you sneeze, say Alhamdulillah. The one who hears you should say Yarhamukallah (may Allah have mercy on you).", "Sahih al-Bukhari 6224"),
  S("greet", "The rider greets the walker, the walker greets the one sitting, and the smaller group greets the larger group.", "Sahih al-Bukhari 6231, Sahih Muslim 2160"),
  S("greet", "Honor your guest. Hospitality lasts three days, and anything beyond that is charity.", "Sahih al-Bukhari 6019, Sahih Muslim 48"),
  S("greet", "Do not make a person get up from his seat to sit in it yourself.", "Sahih al-Bukhari 6269, Sahih Muslim 2177"),
  S("greet", "Ask permission before entering a home, up to three times. If there is no answer, leave.", "Sahih al-Bukhari 6245, Sahih Muslim 2153"),

  // ===== HOME, MASJID & TRAVEL =====
  S("out", "When entering your home, say Bismillah. Satan then says to his companions: there is no lodging or dinner for you here.", "Sahih Muslim 2018"),
  S("out", "When leaving home, say: Bismillah, tawakkaltu ala Allah, la hawla wa la quwwata illa billah.", "Sunan Abi Dawud 5095, Jami at-Tirmidhi 3426"),
  S("out", "Enter the masjid with your right foot and say: Allahumma iftah li abwaba rahmatik. When leaving, step out with the left foot and say: Allahumma inni as'aluka min fadlik.", "Sahih Muslim 713"),
  S("out", "Pray two rak'ahs when entering the masjid, before sitting down.", "Sahih al-Bukhari 444, Sahih Muslim 714"),
  H("out", "Whoever purifies himself at home and then walks to one of the houses of Allah to perform an obligatory prayer, one step erases a sin and the other raises him a rank.", "Sahih Muslim 666"),
  S("out", "When mounting a vehicle for travel, say Bismillah and Alhamdulillah, then recite the travel dua beginning: Subhanal-ladhi sakhkhara lana hadha.", "Sahih Muslim 1342"),
  S("out", "When three people travel together, they should appoint one of them as leader.", "Sunan Abi Dawud 2608"),
  S("out", "When returning from a journey, begin at the masjid and pray two rak'ahs.", "Sahih al-Bukhari 3088, Sahih Muslim 716"),
  S("out", "When it rains, say: Allahumma sayyiban nafi'an (O Allah, make it a beneficial rain).", "Sahih al-Bukhari 1032"),
  S("out", "When you see the new moon, say: Allahumma ahillahu alayna bil-yumni wal-iman, was-salamati wal-islam. Rabbi wa rabbuk Allah.", "Jami at-Tirmidhi 3451"),
  S("out", "When you hear a rooster crow, ask Allah for His bounty, for it has seen an angel. When you hear a donkey bray, seek refuge in Allah from Satan, for it has seen a devil.", "Sahih al-Bukhari 3303, Sahih Muslim 2729"),
  S("out", "On a journey, say Allahu Akbar when going up and SubhanAllah when coming down.", "Sahih al-Bukhari 2993"),
  S("out", "When you stop at a place during travel, say: A'udhu bi-kalimatillahit-tammati min sharri ma khalaq. Nothing will harm you until you leave.", "Sahih Muslim 2708"),

  // ===== MORE FAITH & BELIEF =====
  H("iman", "Whoever has three things will taste the sweetness of faith: that Allah and His Messenger are more beloved to him than anything else, that he loves a person only for the sake of Allah, and that he hates to return to disbelief as he hates to be thrown into the Fire.", "Sahih al-Bukhari 16, Sahih Muslim 43"),
  H("iman", "None of you truly believes until I am more beloved to him than his father, his children and all people.", "Sahih al-Bukhari 15, Sahih Muslim 44"),
  H("iman", "Faith is to believe in Allah, His angels, His Books, His Messengers, the Last Day, and to believe in the divine decree, its good and its bad.", "Sahih Muslim 8"),
  H("iman", "Ihsan is to worship Allah as if you see Him. If you do not see Him, know that He sees you.", "Sahih Muslim 8, Sahih al-Bukhari 50"),
  H("iman", "Allah has ninety-nine names, one hundred minus one. Whoever memorizes them will enter Paradise.", "Sahih al-Bukhari 2736, Sahih Muslim 2677"),
  H("iman", "Whoever says: I am pleased with Allah as my Lord, Islam as my religion and Muhammad as my Messenger, Paradise is guaranteed for him.", "Sahih Muslim 1884"),
  H("iman", "Allah wrote: My mercy prevails over My wrath.", "Sahih al-Bukhari 3194, Sahih Muslim 2751"),
  H("iman", "Allah is more merciful to His servants than a mother is to her child.", "Sahih al-Bukhari 5999, Sahih Muslim 2754"),
  H("iman", "Everything happens by the decree of Allah, even incapacity and wisdom.", "Sahih Muslim 2655"),

  // ===== MORE INTENTIONS & SINCERITY =====
  H("intent", "Whoever intends to do a good deed but does not do it, Allah writes it as one complete good deed. If he intends it and does it, Allah writes it from ten up to seven hundred times, and more.", "Sahih al-Bukhari 6491, Sahih Muslim 131"),
  H("intent", "Allah loves the servant who is righteous, self-sufficient and unknown to people.", "Sahih Muslim 2965"),

  // ===== MORE PRAYER =====
  H("salah", "Whoever prays the two cool prayers (Fajr and Asr) will enter Paradise.", "Sahih al-Bukhari 574, Sahih Muslim 635"),
  H("salah", "Whoever prays Isha in congregation, it is as if he stood half the night. Whoever prays Fajr in congregation, it is as if he prayed the whole night.", "Sahih Muslim 656"),
  H("salah", "Whoever misses the Asr prayer, it is as if he has lost his family and his wealth.", "Sahih al-Bukhari 552, Sahih Muslim 626"),
  H("salah", "A servant is closest to his Lord when he is in prostration, so make plenty of dua in it.", "Sahih Muslim 482"),
  H("salah", "Whoever prostrates once to Allah, Allah raises him a degree and erases a sin from him.", "Sahih Muslim 488"),
  H("salah", "There is no prayer for the one who does not recite the Opening of the Book (al-Fatiha).", "Sahih al-Bukhari 756, Sahih Muslim 394"),
  H("salah", "Your Lord is shy and generous. He is shy to return the hands of His servant empty when he raises them to Him.", "Sunan Abi Dawud 1488, Jami at-Tirmidhi 3556"),
  S("salah", "Say Ameen when the imam says Ameen after al-Fatiha. Whoever's Ameen matches that of the angels, his past sins are forgiven.", "Sahih al-Bukhari 780, Sahih Muslim 410"),
  S("salah", "Make the Witr prayer the last of your night prayers.", "Sahih al-Bukhari 998, Sahih Muslim 751"),
  S("salah", "The Prophet ﷺ usually prayed eleven rak'ahs at night, with long standing, bowing and prostration.", "Sahih al-Bukhari 1147, Sahih Muslim 738"),
  S("salah", "Pray two rak'ahs after wudu. The Prophet ﷺ told Bilal he heard his footsteps ahead of him in Paradise because of this habit.", "Sahih al-Bukhari 1149"),
  S("salah", "In prostration, say: Subhana rabbiyal-A'la (Glory be to my Lord, the Most High).", "Sahih Muslim 772"),
  S("salah", "After the adhan, send blessings on the Prophet ﷺ and say: Allahumma rabba hadhihid-da'watit-tammah, wassalatil-qa'imah, ati Muhammadan al-wasilata wal-fadilah.", "Sahih al-Bukhari 614"),
  S("salah", "Send many blessings upon the Prophet ﷺ on Friday.", "Sunan Abi Dawud 1047, Sunan Ibn Majah 1085"),

  // ===== MORE FASTING =====
  H("fast", "Whoever forgets and eats or drinks while fasting should complete his fast. It is Allah who fed him and gave him drink.", "Sahih al-Bukhari 1933, Sahih Muslim 1155"),
  H("fast", "Whoever does not give up false speech and acting upon it, Allah has no need of his giving up food and drink.", "Sahih al-Bukhari 1903"),
  H("fast", "Three people's dua is not rejected: the just ruler, the fasting person until he breaks his fast, and the oppressed.", "Jami at-Tirmidhi 2526, Sunan Ibn Majah 1752"),
  S("fast", "When breaking the fast, say: Dhahaba az-zama'u wabtallatil-uruqu wa thabatal-ajru in sha Allah (The thirst has gone, the veins are moist, and the reward is confirmed, if Allah wills).", "Sunan Abi Dawud 2357"),
  S("fast", "Spend the last ten nights of Ramadan in i'tikaf (retreat in the masjid), as the Prophet ﷺ did.", "Sahih al-Bukhari 2026, Sahih Muslim 1172"),
  S("fast", "On Laylat al-Qadr, say: Allahumma innaka afuwwun tuhibbul-afwa fa'fu anni (O Allah, You are Pardoning and love to pardon, so pardon me).", "Jami at-Tirmidhi 3513, Sunan Ibn Majah 3850"),
  S("fast", "Be generous in Ramadan. The Prophet ﷺ was the most generous of people, and most generous in Ramadan.", "Sahih al-Bukhari 6, Sahih Muslim 2308"),
  S("fast", "Fast on the Day of Ashura (10th of Muharram). It expiates the sins of the previous year.", "Sahih Muslim 1162"),
  S("fast", "Fast on the Day of Arafah (9th of Dhul Hijjah) if you are not performing Hajj. It expiates the sins of the previous year and the coming year.", "Sahih Muslim 1162"),

  // ===== MORE CHARITY =====
  H("charity", "Whoever builds a masjid for Allah, Allah will build for him a house in Paradise.", "Sahih al-Bukhari 450, Sahih Muslim 533"),
  H("charity", "Allah says: Spend, O son of Adam, and I will spend on you.", "Sahih al-Bukhari 5352, Sahih Muslim 993"),
  H("charity", "Every Muslim must give charity. If he has nothing, let him work with his hands, benefit himself and give charity. If he cannot, let him help someone in need. If he cannot, let him do good and avoid evil. That is charity for him.", "Sahih al-Bukhari 1445, Sahih Muslim 1008"),
  H("charity", "Every morning two angels come down. One says: O Allah, give the spender a replacement. The other says: O Allah, give the miser destruction.", "Sahih al-Bukhari 1442, Sahih Muslim 1010"),
  H("charity", "A man was forgiven because he gave water to a thirsty dog. In every living creature there is a reward.", "Sahih al-Bukhari 2363, Sahih Muslim 2244"),
  H("charity", "A woman was punished because of a cat she imprisoned until it died. She did not feed it or let it eat from the earth.", "Sahih al-Bukhari 3318, Sahih Muslim 2242"),
  S("charity", "Pay zakat al-fitr before the people go out to the Eid prayer.", "Sahih al-Bukhari 1503, Sahih Muslim 984"),

  // ===== MORE THIS WORLD & THE HEREAFTER =====
  H("dunya", "Take advantage of five before five: your youth before old age, your health before sickness, your wealth before poverty, your free time before being busy, and your life before death.", "al-Mustadrak of al-Hakim"),
  H("dunya", "The most beloved places to Allah are the masjids, and the most hated places to Allah are the markets.", "Sahih Muslim 671"),
  H("dunya", "Beware of this world. It is sweet and green, and Allah has made you successors in it to see how you act.", "Sahih Muslim 2742"),
  H("dunya", "Fear Allah and be moderate in seeking provision. No soul will die until it has received its full provision.", "Sunan Ibn Majah 2144"),

  // ===== MORE KNOWLEDGE & THE QURAN =====
  H("knowledge", "The superiority of the scholar over the worshiper is like the superiority of the moon over all the stars.", "Sunan Abi Dawud 3641, Jami at-Tirmidhi 2682"),
  H("knowledge", "Allah does not take away knowledge by snatching it from people. He takes it away by taking away the scholars.", "Sahih al-Bukhari 100, Sahih Muslim 2673"),
  H("knowledge", "Whoever guides someone to good will have a reward like the one who does it.", "Sahih Muslim 1893"),
  H("knowledge", "Surah al-Ikhlas is equal to a third of the Quran.", "Sahih al-Bukhari 5013"),
  H("knowledge", "Al-Fatiha is the greatest surah in the Quran.", "Sahih al-Bukhari 4474"),
  H("knowledge", "Ayat al-Kursi is the greatest verse in the Book of Allah.", "Sahih Muslim 810"),
  H("knowledge", "Whoever recites the last two verses of Surah al-Baqarah at night, they will suffice him.", "Sahih al-Bukhari 5009, Sahih Muslim 807"),
  H("knowledge", "Whoever memorizes the first ten verses of Surah al-Kahf will be protected from the Dajjal.", "Sahih Muslim 809"),
  H("knowledge", "The believer who recites the Quran is like a citron: its fragrance is sweet and its taste is sweet.", "Sahih al-Bukhari 5020, Sahih Muslim 797"),
  H("knowledge", "Allah raises some people by this Book and lowers others by it.", "Sahih Muslim 817"),

  // ===== MORE CHARACTER =====
  H("character", "Whoever is deprived of gentleness is deprived of all good.", "Sahih Muslim 2592"),
  H("character", "Whoever controls his anger when he is able to act on it, Allah will call him before all of creation on the Day of Resurrection.", "Sunan Abi Dawud 4777, Jami at-Tirmidhi 2021"),
  H("character", "Righteousness is good character. Sin is what wavers in your heart and you dislike for people to know about.", "Sahih Muslim 2553"),
  H("character", "Leave what makes you doubt for what does not make you doubt.", "Jami at-Tirmidhi 2518, Sunan an-Nasa'i 5711"),
  H("character", "Return the trust to the one who trusted you, and do not betray the one who betrayed you.", "Sunan Abi Dawud 3534, Jami at-Tirmidhi 1264"),
  H("character", "A believer is not bitten from the same hole twice.", "Sahih al-Bukhari 6133, Sahih Muslim 2998"),
  H("character", "Beware of oppression, for oppression is darknesses on the Day of Resurrection.", "Sahih al-Bukhari 2447, Sahih Muslim 2578"),
  H("character", "Help your brother, whether he is the oppressor or the oppressed. To help the oppressor is to stop him from oppressing.", "Sahih al-Bukhari 2444"),
  H("character", "Allah increases a servant in honor for forgiving, and whoever humbles himself for Allah, Allah raises him.", "Sahih Muslim 2588"),
  S("character", "Do everything with excellence (ihsan). Allah has prescribed excellence in all things.", "Sahih Muslim 1955"),
  S("character", "The Prophet ﷺ never struck anything with his hand, neither a servant nor a woman, except when fighting in the cause of Allah.", "Sahih Muslim 2328"),

  // ===== MORE FAMILY =====
  H("family", "The pleasure of the Lord is in the pleasure of the father, and the anger of the Lord is in the anger of the father.", "Jami at-Tirmidhi 1899"),
  H("family", "Disobedience to parents is among the major sins.", "Sahih al-Bukhari 2654, Sahih Muslim 87"),
  H("family", "May he be humiliated whose parents reach old age, one or both, and he does not enter Paradise because of them.", "Sahih Muslim 2551"),
  H("family", "A man wanted to join jihad. The Prophet ﷺ asked: Are your parents alive? He said yes. He said: Then strive in their service.", "Sahih al-Bukhari 3004, Sahih Muslim 2549"),
  H("family", "Whoever supports two girls until they reach maturity, he and I will come on the Day of Resurrection like this (joining his fingers).", "Sahih Muslim 2631"),
  H("family", "Fear Allah and treat your children fairly.", "Sahih al-Bukhari 2587, Sahih Muslim 1623"),
  H("family", "The best dinar a man spends is the dinar he spends on his family.", "Sahih Muslim 994"),

  // ===== MORE BROTHERHOOD & SOCIETY =====
  H("community", "The believer to the believer is like a building, each part strengthening the other.", "Sahih al-Bukhari 481, Sahih Muslim 2585"),
  H("community", "Whoever among you sees an evil, let him change it with his hand. If he cannot, then with his tongue. If he cannot, then with his heart, and that is the weakest of faith.", "Sahih Muslim 49"),
  H("community", "He is not one of us who does not show mercy to our young and respect our elders.", "Jami at-Tirmidhi 1919, Sunan Abi Dawud 4943"),
  H("community", "The believer is a mirror to his brother. The believer is the brother of the believer; he protects him from loss and guards him in his absence.", "Sunan Abi Dawud 4918"),
  H("community", "Whoever defends the honor of his brother in his absence, Allah will keep the Fire away from his face on the Day of Resurrection.", "Jami at-Tirmidhi 1931"),
  H("community", "It is not lawful for a Muslim to abandon his brother for more than three days.", "Sahih al-Bukhari 6077, Sahih Muslim 2559"),
  H("community", "The best of companions to Allah is the one who is best to his companion, and the best of neighbors is the one who is best to his neighbor.", "Jami at-Tirmidhi 1944"),
  H("community", "Each of you is a shepherd and each of you is responsible for his flock.", "Sahih al-Bukhari 893, Sahih Muslim 1829"),
  S("community", "Prepare food for the family of someone who has died, for they are preoccupied with their loss.", "Sunan Abi Dawud 3132, Jami at-Tirmidhi 998"),

  // ===== MORE PATIENCE & TRUST =====
  H("sabr", "When Allah wants good for someone, He afflicts him with trials.", "Sahih al-Bukhari 5645"),
  H("sabr", "When a servant falls sick or travels, he is credited with the same reward as the good deeds he used to do when healthy and at home.", "Sahih al-Bukhari 2996"),
  S("sabr", "In times of distress, say: La ilaha illallah al-Azim al-Halim, La ilaha illallah Rabbul-Arshil-Azim, La ilaha illallah Rabbus-samawati wa Rabbul-ardi wa Rabbul-Arshil-Karim.", "Sahih al-Bukhari 6345, Sahih Muslim 2730"),
  S("sabr", "The dua of Yunus: La ilaha illa anta, subhanaka, inni kuntu minaz-zalimin. No Muslim makes this dua for anything except that Allah answers him.", "Jami at-Tirmidhi 3505"),
  S("sabr", "Seek refuge from worry and grief: Allahumma inni a'udhu bika minal-hammi wal-hazan.", "Sahih al-Bukhari 6369"),
  S("sabr", "When you have an important decision, pray two rak'ahs of istikhara and make the istikhara dua.", "Sahih al-Bukhari 1162"),

  // ===== MORE REPENTANCE =====
  H("tawba", "Allah says: O son of Adam, as long as you call upon Me and hope in Me, I will forgive you for what you have done, and I do not mind. Even if your sins reach the clouds of the sky and then you ask My forgiveness, I will forgive you.", "Jami at-Tirmidhi 3540"),
  H("tawba", "A man who had killed ninety-nine people asked a scholar if he could repent. He was told yes, and to go to a land of righteous people. He died on the way, and the angels of mercy took him.", "Sahih al-Bukhari 3470, Sahih Muslim 2766"),
  S("tawba", "Say: Astaghfirullahal-ladhi la ilaha illa huwal-hayyul-qayyumu wa atubu ilayh. Whoever says it is forgiven, even if he fled from battle.", "Sunan Abi Dawud 1517, Jami at-Tirmidhi 3577"),
  S("tawba", "Say Sayyid al-Istighfar (the master of seeking forgiveness) in the morning and evening. Whoever says it with certainty during the day and dies that day will be among the people of Paradise.", "Sahih al-Bukhari 6306"),

  // ===== MORE DHIKR & DUA =====
  H("dhikr", "The example of the one who remembers his Lord and the one who does not is like the living and the dead.", "Sahih al-Bukhari 6407"),
  H("dhikr", "Shall I tell you of the best of your deeds, the purest with your Lord, and the highest in your ranks? The remembrance of Allah.", "Jami at-Tirmidhi 3377, Sunan Ibn Majah 3790"),
  H("dhikr", "Whoever says La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa ala kulli shay'in qadir a hundred times in a day, it is equal to freeing ten slaves, and a hundred good deeds are written for him.", "Sahih al-Bukhari 3293, Sahih Muslim 2691"),
  H("dhikr", "Whoever says SubhanAllahil-Azim wa bihamdihi, a palm tree is planted for him in Paradise.", "Jami at-Tirmidhi 3464"),
  H("dhikr", "La hawla wa la quwwata illa billah is a treasure from the treasures of Paradise.", "Sahih al-Bukhari 6384, Sahih Muslim 2704"),
  H("dhikr", "Allah is pleased with the servant who eats a meal and praises Him for it, or drinks a drink and praises Him for it.", "Sahih Muslim 2734"),
  H("dhikr", "Three supplications are answered without doubt: that of the oppressed, that of the traveler, and that of a parent for his child.", "Sunan Abi Dawud 1536, Jami at-Tirmidhi 1905"),
  H("dhikr", "Nothing is more honorable to Allah than dua.", "Jami at-Tirmidhi 3370"),
  H("dhikr", "Whoever recites Ayat al-Kursi after every obligatory prayer, nothing stands between him and Paradise except death.", "Sunan al-Kubra of an-Nasa'i"),
  S("dhikr", "Recite Surah al-Ikhlas, al-Falaq and an-Nas three times each in the morning and evening. They will suffice you against everything.", "Sunan Abi Dawud 5082, Jami at-Tirmidhi 3575"),

  // ===== MORE EATING & DRINKING =====
  H("eating", "Whoever eats seven Ajwa dates in the morning, no poison or magic will harm him that day.", "Sahih al-Bukhari 5445, Sahih Muslim 2047"),
  H("eating", "The food of one person is enough for two, the food of two is enough for four, and the food of four is enough for eight.", "Sahih al-Bukhari 5392, Sahih Muslim 2058"),
  S("eating", "Do not eat or drink with your left hand, for Satan eats and drinks with his left hand.", "Sahih Muslim 2020"),
  S("eating", "Do not wipe your hand after eating until you lick your fingers or have them licked.", "Sahih Muslim 2031"),
  S("eating", "If a morsel falls, remove any dirt from it and eat it. Do not leave it for Satan.", "Sahih Muslim 2034"),
  S("eating", "When given milk, say: Allahumma barik lana fihi wa zidna minhu (O Allah, bless us in it and give us more of it).", "Jami at-Tirmidhi 3455"),

  // ===== MORE CLEANLINESS & HABITS =====
  H("clean", "Whoever performs wudu as I have performed it, then prays two rak'ahs without his mind wandering, his previous sins will be forgiven.", "Sahih al-Bukhari 159, Sahih Muslim 226"),
  S("clean", "Do not hold your private parts with your right hand while urinating, and do not clean yourself with the right hand.", "Sahih al-Bukhari 153, Sahih Muslim 267"),
  S("clean", "Wear perfume. The Prophet ﷺ never refused perfume when it was offered.", "Sahih al-Bukhari 2582"),
  S("clean", "Wear white clothes, for they are among your best clothes, and shroud your dead in them.", "Sunan Abi Dawud 3878, Jami at-Tirmidhi 994"),
  S("clean", "Whoever has hair should honor it (keep it clean and neat).", "Sunan Abi Dawud 4163"),

  // ===== MORE SLEEP & WAKING =====
  S("sleep", "Before getting into bed, dust the bed with the edge of your garment, for you do not know what has come onto it.", "Sahih al-Bukhari 6320, Sahih Muslim 2714"),
  S("sleep", "The Prophet ﷺ would place his right hand under his right cheek when sleeping.", "Sunan Abi Dawud 5045"),
  S("sleep", "If you fear you will not wake up at night, pray Witr before sleeping.", "Sahih Muslim 755"),
  S("sleep", "When you wake up from sleep, wash your hands three times before putting them in a vessel, for you do not know where your hand spent the night.", "Sahih al-Bukhari 162, Sahih Muslim 278"),
  S("sleep", "Whoever wakes at night and says La ilaha illallah wahdahu la sharika lah..., then makes dua, it will be answered. If he makes wudu and prays, his prayer will be accepted.", "Sahih al-Bukhari 1154"),
  S("sleep", "If you see a bad dream, spit lightly three times to your left, seek refuge in Allah from Satan, and do not tell anyone. It will not harm you.", "Sahih al-Bukhari 6995, Sahih Muslim 2261"),

  // ===== MORE GREETINGS & ETIQUETTE =====
  S("greet", "A man asked: Which Islam is best? He said: Feeding people and greeting those you know and those you do not know.", "Sahih al-Bukhari 12, Sahih Muslim 39"),
  S("greet", "Whoever is done a favor and says to the one who did it Jazakallahu khayran has done his best in praising him.", "Jami at-Tirmidhi 2035"),
  S("greet", "When you yawn, put your hand over your mouth, for Satan enters.", "Sahih Muslim 2995"),
  S("greet", "When three people are together, two should not whisper privately and leave the third out, because that would upset him.", "Sahih al-Bukhari 6288, Sahih Muslim 2183"),
  S("greet", "When sneezing, cover your face with your hand or cloth and lower your voice.", "Sunan Abi Dawud 5029, Jami at-Tirmidhi 2745"),
  S("greet", "Whoever does you a favor, reward him. If you cannot find anything to reward him with, keep making dua for him until you feel you have repaid him.", "Sunan Abi Dawud 1672, Sunan an-Nasa'i 2567"),

  // ===== MARRIAGE & SPOUSES =====
  H("marriage", "If someone whose religion and character you are pleased with proposes to you, marry him. If you do not, there will be trials and great corruption on earth.", "Jami at-Tirmidhi 1084, Sunan Ibn Majah 1967"),
  H("marriage", "A woman is married for four things: her wealth, her lineage, her beauty and her religion. Choose the one with religion.", "Sahih al-Bukhari 5090, Sahih Muslim 1466"),
  H("marriage", "The world is a provision, and the best provision of the world is a righteous wife.", "Sahih Muslim 1467"),
  H("marriage", "O young people, whoever among you can afford marriage should marry, for it lowers the gaze and protects chastity. Whoever cannot should fast, for it is a shield.", "Sahih al-Bukhari 5066, Sahih Muslim 1400"),
  H("marriage", "A believing man should not hate a believing woman. If he dislikes one trait in her, he will be pleased with another.", "Sahih Muslim 1469"),
  H("marriage", "Treat women kindly. Woman was created from a rib, and if you try to straighten it you will break it.", "Sahih al-Bukhari 5186, Sahih Muslim 1468"),
  H("marriage", "Whatever you spend seeking the face of Allah, you will be rewarded for it, even the morsel you put in your wife's mouth.", "Sahih al-Bukhari 56, Sahih Muslim 1628"),
  S("marriage", "Hold a wedding feast (walimah), even if it is with just one sheep.", "Sahih al-Bukhari 5167, Sahih Muslim 1427"),
  S("marriage", "To the newlyweds, say: Barakallahu laka wa baraka alayka wa jama'a baynakuma fi khayr.", "Sunan Abi Dawud 2130, Jami at-Tirmidhi 1091"),
  S("marriage", "The Prophet ﷺ raced with Aisha, may Allah be pleased with her. He won once, and she won once.", "Sunan Abi Dawud 2578"),
  S("marriage", "Before intimacy, say: Bismillah, Allahumma jannibnash-shaytana wa jannibish-shaytana ma razaqtana.", "Sahih al-Bukhari 141, Sahih Muslim 1434"),

  // ===== SPEECH & THE TONGUE =====
  H("speech", "A servant may speak a word pleasing to Allah without giving it a thought, and Allah raises him many degrees because of it. Another may speak a word displeasing to Allah without thinking, and he sinks into Hell because of it.", "Sahih al-Bukhari 6478"),
  H("speech", "Whoever guarantees to me what is between his two jaws and what is between his two legs, I guarantee Paradise for him.", "Sahih al-Bukhari 6474"),
  H("speech", "Will people be thrown on their faces into the Fire for anything other than the harvests of their tongues?", "Jami at-Tirmidhi 2616, Sunan Ibn Majah 3973"),
  H("speech", "It is enough of a lie for a person to narrate everything he hears.", "Sahih Muslim 5"),
  H("speech", "Whoever remains silent is saved.", "Jami at-Tirmidhi 2501"),
  H("speech", "The one who spreads gossip (namimah) will not enter Paradise.", "Sahih al-Bukhari 6056, Sahih Muslim 105"),
  H("speech", "Whoever leaves arguing while he is in the right, a house will be built for him in the upper part of Paradise.", "Sunan Abi Dawud 4800, Jami at-Tirmidhi 1993"),
  H("speech", "Whoever calls to guidance will have a reward like the rewards of those who follow him, without that reducing their rewards at all.", "Sahih Muslim 2674"),
  S("speech", "When angry, say: A'udhu billahi minash-shaytanir-rajim. If you are standing, sit down. If still angry, lie down.", "Sahih al-Bukhari 3282, Sahih Muslim 2610, Sunan Abi Dawud 4782"),

  // ===== BUSINESS & EARNING A LIVING =====
  H("business", "The truthful and trustworthy merchant will be with the prophets, the truthful and the martyrs.", "Jami at-Tirmidhi 1209"),
  H("business", "The buyer and the seller have the choice as long as they have not separated. If they are honest and clear, their deal will be blessed. If they lie and hide faults, the blessing of their deal will be erased.", "Sahih al-Bukhari 2079, Sahih Muslim 1532"),
  H("business", "Whoever cheats us is not one of us.", "Sahih Muslim 101"),
  H("business", "No one has ever eaten better food than what he earned from the work of his own hands. The Prophet of Allah, Dawud (David), used to eat from the work of his own hands.", "Sahih al-Bukhari 2072"),
  H("business", "May Allah have mercy on a man who is easygoing when he sells, when he buys, and when he asks for payment.", "Sahih al-Bukhari 2076"),
  H("business", "Pay the worker his wages before his sweat dries.", "Sunan Ibn Majah 2443"),
  H("business", "Whoever gives time to someone struggling to pay, or forgives his debt, Allah will shade him in His shade on the Day of Resurrection.", "Sahih Muslim 3006"),
  H("business", "The Prophet ﷺ cursed the one who takes interest, the one who pays it, the one who records it and the two who witness it.", "Sahih Muslim 1598"),
  H("business", "Whoever takes the wealth of people intending to repay it, Allah will help him repay. Whoever takes it intending to destroy it, Allah will destroy him.", "Sahih al-Bukhari 2387"),
  H("business", "It is better for one of you to take his rope, gather firewood and carry it on his back and sell it, than to go to people asking, whether they give him or refuse.", "Sahih al-Bukhari 1470"),
  H("business", "Allah is pure and accepts only that which is pure.", "Sahih Muslim 1015"),
  S("business", "Make this dua for debt: Allahummak-fini bihalalika an haramik, wa aghnini bifadlika amman siwak.", "Jami at-Tirmidhi 3563"),

  // ===== HEALTH & WELLBEING =====
  H("health", "Allah did not send down a disease except that He also sent down its cure.", "Sahih al-Bukhari 5678"),
  H("health", "O servants of Allah, seek treatment. Allah has not made a disease except that He made a cure for it, except for one disease: old age.", "Sunan Abi Dawud 3855, Jami at-Tirmidhi 2038"),
  H("health", "Your body has a right over you, your eyes have a right over you, and your family has a right over you.", "Sahih al-Bukhari 1975"),
  H("health", "If you hear of a plague in a land, do not enter it. If it breaks out in a land where you are, do not leave it.", "Sahih al-Bukhari 5728, Sahih Muslim 2219"),
  H("health", "Ask Allah for forgiveness and well-being, for after certainty, nobody has been given anything better than well-being.", "Jami at-Tirmidhi 3558, Sunan Ibn Majah 3849"),
  H("health", "Healing is in three things: a gulp of honey, cupping, and branding with fire. But I forbid my ummah from branding.", "Sahih al-Bukhari 5680"),
  S("health", "When visiting the sick, say: La ba'sa tahurun in sha Allah (No harm, it is a purification, if Allah wills).", "Sahih al-Bukhari 3616"),
  S("health", "When you see someone afflicted with a trial, say quietly: Alhamdulillahil-ladhi afani mimmabtalaka bihi. Allah will keep that affliction away from you.", "Jami at-Tirmidhi 3431"),

  // ===== DEATH, THE GRAVE & THE HEREAFTER =====
  H("death", "Whoever's last words are La ilaha illallah will enter Paradise.", "Sunan Abi Dawud 3116"),
  H("death", "Prompt your dying ones to say La ilaha illallah.", "Sahih Muslim 916"),
  H("death", "The grave is the first stage of the stages of the Hereafter. If one is saved from it, what comes after is easier.", "Jami at-Tirmidhi 2308, Sunan Ibn Majah 4267"),
  H("death", "Paradise is surrounded by hardships, and the Fire is surrounded by desires.", "Sahih Muslim 2822, Sahih al-Bukhari 6487"),
  H("death", "Allah says: I have prepared for My righteous servants what no eye has seen, no ear has heard, and no human heart has imagined.", "Sahih al-Bukhari 3244, Sahih Muslim 2824"),
  H("death", "A servant's feet will not move on the Day of Resurrection until he is asked about his life and how he spent it, his knowledge and what he did with it, his wealth and how he earned and spent it, and his body and how he used it.", "Jami at-Tirmidhi 2417"),
  H("death", "Whoever loves to meet Allah, Allah loves to meet him. Whoever dislikes to meet Allah, Allah dislikes to meet him.", "Sahih al-Bukhari 6507, Sahih Muslim 2683"),
  H("death", "None of you should wish for death because of a harm that has befallen him. If he must, let him say: O Allah, keep me alive as long as life is better for me, and take me when death is better for me.", "Sahih al-Bukhari 5671, Sahih Muslim 2680"),
  H("death", "Whoever attends a funeral until the prayer is offered gets one qirat of reward. Whoever stays until burial gets two qirats, each like a great mountain.", "Sahih al-Bukhari 1325, Sahih Muslim 945"),
  S("death", "When visiting graves, say: As-salamu alaykum ahlad-diyari minal-mu'minina wal-muslimin, wa inna in sha Allahu bikum lahiqun.", "Sahih Muslim 975"),
  S("death", "In the final sitting of prayer, seek refuge in Allah from the punishment of the grave, the punishment of Hell, the trials of life and death, and the trial of the False Messiah.", "Sahih al-Bukhari 1377, Sahih Muslim 588"),

  // ===== HAJJ & SPECIAL DAYS =====
  H("hajj", "Whoever performs Hajj for Allah, and does not engage in obscenity or wrongdoing, will return like the day his mother gave birth to him.", "Sahih al-Bukhari 1521, Sahih Muslim 1350"),
  H("hajj", "One Umrah to the next expiates what is between them, and an accepted Hajj has no reward less than Paradise.", "Sahih al-Bukhari 1773, Sahih Muslim 1349"),
  H("hajj", "Take your rites of Hajj from me.", "Sahih Muslim 1297"),
  H("hajj", "There is no day on which Allah frees more of His servants from the Fire than the Day of Arafah.", "Sahih Muslim 1348"),
  H("hajj", "The Prophet ﷺ was asked which deed is best. He said: Faith in Allah and His Messenger. Then what? Jihad in the cause of Allah. Then what? An accepted Hajj.", "Sahih al-Bukhari 1519, Sahih Muslim 83"),
  H("hajj", "No good deeds done on other days are better than those done in these ten days (of Dhul Hijjah).", "Sahih al-Bukhari 969"),
  S("hajj", "Say the talbiyah during Hajj: Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.", "Sahih al-Bukhari 1549, Sahih Muslim 1184"),
  S("hajj", "Eat some dates before going out to the Eid al-Fitr prayer.", "Sahih al-Bukhari 953"),
  S("hajj", "On the day of Eid, return from the prayer by a different route from the one you took to it.", "Sahih al-Bukhari 986")
];

const DAILY_ARABIC = {
  bismillah: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
};
