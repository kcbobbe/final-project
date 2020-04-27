let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/kanjicard", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let kanjiSeed =
[
  {
    "kanji": "一",
    "kname": 1,
    "kstroke": 1,
    "kmeaning": "one",
    "kgrade": 1,
    "kunyomi_ja": "ひと",
    "kunyomi": "hito",
    "onyomi_ja": "イチ",
    "onyomi": "ichi",
    "examples": [
      [
        "一年生（いちねんせい）",
        "first-year student"
      ],
      [
        "一番（いちばん）",
        "number one"
      ],
      [
        "一度（いちど）",
        "once"
      ],
      [
        "一杯（いっぱい）",
        "one cup of, a lot of"
      ],
      [
        "一緒（いっしょ）",
        "together"
      ],
      [
        "一分（いっぷん）",
        "one minute"
      ],
      [
        "一枚（いちまい）",
        "one (flat object) "
      ],
      [
        "一つ（ひとつ）",
        "one (object) "
      ],
      [
        "一人（ひとり）",
        "one person"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "何",
    "kname": "nani",
    "kstroke": 7,
    "kmeaning": "what, how many",
    "kgrade": 2,
    "kunyomi_ja": "なに、なん",
    "kunyomi": "nani, nan",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "幾何学（きかがく）",
        "geometry"
      ],
      [
        "何（なに）",
        "what"
      ],
      [
        "何色（なにいろ）",
        "what color"
      ],
      [
        "何しろ（なにしろ）",
        "at any rate, anyway"
      ],
      [
        "何か（なにか）",
        "something"
      ],
      [
        "何分（なんぷん）",
        "how many minutes"
      ],
      [
        "何時（なんじ）",
        "what time"
      ],
      [
        "何回（なんかい）",
        "how many times"
      ],
      [
        "何百（なんびゃく）",
        "hundreds"
      ],
      [
        "何度も（なんども）",
        "many times"
      ],
      [
        "何才（なんさい）",
        "how old"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "七",
    "kname": 7,
    "kstroke": 2,
    "kmeaning": "seven",
    "kgrade": 1,
    "kunyomi_ja": "なな、なの、ななつ",
    "kunyomi": "nana, nano, nanatsu",
    "onyomi_ja": "シチ",
    "onyomi": "shichi",
    "examples": [
      [
        "七時（しちじ）",
        "7 o'clock"
      ],
      [
        "十七（じゅうしち/じゅうなな）",
        "17"
      ],
      [
        "七五三（しちごさん）",
        "festival for children aged 7, 5 & 3"
      ],
      [
        "七回（ななかい）",
        "7 times"
      ],
      [
        "七週間（ななしゅうかん）",
        "7 weeks"
      ],
      [
        "七才（ななさい）",
        "7 years old"
      ],
      [
        "七日（なのか）",
        "7 days, 7th of the month"
      ],
      [
        "七つ（ななつ）",
        "7 (objects)"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "飼",
    "kname": "shi-ka(u)",
    "kstroke": 13,
    "kmeaning": "raise animals",
    "kgrade": 5,
    "kunyomi_ja": "か、かう",
    "kunyomi": "ka, kau",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "飼料（しりょう）",
        "fodder, feed"
      ],
      [
        "飼育する（しいくする）",
        "breed, raise, rear"
      ],
      [
        "飼う（かう）",
        "keep as a pet"
      ],
      [
        "飼い犬（かいいぬ）",
        "pet dog"
      ],
      [
        "羊飼い（ひつじかい）",
        "shepherd, shepherdess"
      ],
      [
        "放し飼い（はなしがい）",
        "pasturing, grazing"
      ]
    ],
    "radical": "⻟",
    "rad_order": 221,
    "rad_stroke": 8,
    "rad_name_ja": "しょくへん",
    "rad_name": "shokuhen",
    "rad_meaning": "food, to eat",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "示",
    "kname": "ji-shime(su)",
    "kstroke": 5,
    "kmeaning": "show",
    "kgrade": 5,
    "kunyomi_ja": "しめ、しめす",
    "kunyomi": "shime, shimesu",
    "onyomi_ja": "シ、ジ",
    "onyomi": "shi, ji",
    "examples": [
      [
        "示唆する（しさする）",
        "suggest, give a hint"
      ],
      [
        "示談（じだん）",
        "settlement out of court"
      ],
      [
        "掲示する（けいじする）",
        "put up a notice"
      ],
      [
        "指示する（しじする）",
        "indicate, instruct, direct"
      ],
      [
        "誇示する（こじする）",
        "emphasize, show off, display"
      ],
      [
        "展示する（てんじする）",
        "exhibit, display [v.t.]"
      ],
      [
        "表示する（ひょうじする）",
        "mark, display [v.t.]"
      ],
      [
        "暗示する（あんじする）",
        "hint, suggest"
      ],
      [
        "訓示する（くんじする）",
        "instruct, give instructions"
      ],
      [
        "啓示する（けいじする）",
        "apocalypse, reveal"
      ],
      [
        "示す（しめす）",
        "point out, indicate"
      ]
    ],
    "radical": "⽰",
    "rad_order": 144,
    "rad_stroke": 5,
    "rad_name_ja": "しめす",
    "rad_name": "shimesu",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "述",
    "kname": "jutsu-no(beru)",
    "kstroke": 8,
    "kmeaning": "state, mention, refer to, explain",
    "kgrade": 5,
    "kunyomi_ja": "の、のべる",
    "kunyomi": "no, noberu",
    "onyomi_ja": "ジュツ",
    "onyomi": "jutsu",
    "examples": [
      [
        "述語（じゅつご）",
        "predicate [n.]"
      ],
      [
        "著述家（ちょじゅつか）",
        "writer"
      ],
      [
        "述懐する（じゅっかいする）",
        "recollect, reminisce"
      ],
      [
        "供述する（きょうじゅつする）",
        "state, declare"
      ],
      [
        "陳述する（ちんじゅつする）",
        "testify, state, depose"
      ],
      [
        "詳述する（しょうじゅつする）",
        "explain in detail"
      ],
      [
        "記述する（きじゅつする）",
        "describe"
      ],
      [
        "口述する（こうじゅつする）",
        "state verbally"
      ],
      [
        "上述する（じょうじゅつする）",
        "state above"
      ],
      [
        "述べる（のべる）",
        "state, express, mention"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "序",
    "kname": "jo(ban)",
    "kstroke": 7,
    "kmeaning": "introductory part, order, preface",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジョ",
    "onyomi": "jo",
    "examples": [
      [
        "序文（じょぶん）",
        "preface, foreword"
      ],
      [
        "序曲（じょきょく）",
        "overture, prelude"
      ],
      [
        "序説（じょせつ）",
        "introduction"
      ],
      [
        "序列（じょれつ）",
        "rank, ranking order"
      ],
      [
        "順序（じゅんじょ）",
        "order, sequence, procedure"
      ],
      [
        "秩序（ちつじょ）",
        "order, regularity, system"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "織",
    "kname": "(so)shiki",
    "kstroke": 18,
    "kmeaning": "weave",
    "kgrade": 5,
    "kunyomi_ja": "お、おる、おり",
    "kunyomi": "o, oru, ori",
    "onyomi_ja": "ショク、シキ",
    "onyomi": "shoku, shiki",
    "examples": [
      [
        "染織（せんしょく）",
        "weaving and dyeing"
      ],
      [
        "紡織（ぼうしょく）",
        "spinning and weaving"
      ],
      [
        "織機（しょっき）",
        "loom, weaving machine"
      ],
      [
        "組織（そしき）",
        "organization, structure"
      ],
      [
        "織る（おる）",
        "weave"
      ],
      [
        "織り目（おりめ）",
        "texture"
      ],
      [
        "織物（おりもの）",
        "textile, fabric"
      ],
      [
        "毛織（けおり）",
        "woolen fabric, woolen cloth"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "税",
    "kname": "zei(kin)",
    "kstroke": 12,
    "kmeaning": "tax",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゼイ",
    "onyomi": "zei",
    "examples": [
      [
        "税金（ぜいきん）",
        "tax, duty"
      ],
      [
        "税関（ぜいかん）",
        "customs house"
      ],
      [
        "税理士（ぜいりし）",
        "tax counsellor"
      ],
      [
        "関税（かんぜい）",
        "customs, duty, tariff"
      ],
      [
        "所得税（しょとくぜい）",
        "income tax"
      ],
      [
        "間接税（かんせつぜい）",
        "indirect tax"
      ],
      [
        "納税する（のうぜいする）",
        "pay taxes"
      ],
      [
        "課税する（かぜいする）",
        "tax [v.t.]"
      ],
      [
        "脱税する（だつぜいする）",
        "evade tax"
      ],
      [
        "増税する（ぞうぜいする）",
        "increase tax"
      ],
      [
        "減税する（げんぜいする）",
        "decrease tax"
      ],
      [
        "免税する（めんぜいする）",
        "exempt from taxation [v.t.]"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "舌",
    "kname": "zetsu-shita",
    "kstroke": 6,
    "kmeaning": "tongue",
    "kgrade": 5,
    "kunyomi_ja": "した",
    "kunyomi": "shita",
    "onyomi_ja": "ゼツ",
    "onyomi": "zetsu",
    "examples": [
      [
        "舌癌（ぜつがん）",
        "tongue cancer"
      ],
      [
        "舌戦（ぜっせん）",
        "war of words"
      ],
      [
        "毒舌な（どくぜつな）",
        "verbally abusive, sharp-tongued"
      ],
      [
        "饒舌な（じょうぜつな）",
        "garrulous, talkative"
      ],
      [
        "舌（した）",
        "tongue"
      ],
      [
        "猫舌（ねこじた）",
        "unable to take hot food"
      ],
      [
        "二枚舌（にまいじた）",
        "double-dealing, double-tongued"
      ],
      [
        "舌打ちする（したうちする）",
        "smack one's lips"
      ]
    ],
    "radical": "⾆",
    "rad_order": 169,
    "rad_stroke": 6,
    "rad_name_ja": "した",
    "rad_name": "shita",
    "rad_meaning": "tongue",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "銭",
    "kname": "zeni",
    "kstroke": 14,
    "kmeaning": "money",
    "kgrade": 5,
    "kunyomi_ja": "ぜに",
    "kunyomi": "zeni",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "銭湯（せんとう）",
        "bath-house, public bath"
      ],
      [
        "金銭（きんせん）",
        "money, cash"
      ],
      [
        "賽銭（さいせん）",
        "monetary offering"
      ],
      [
        "釣り銭（つりせん）",
        "change [n.]"
      ],
      [
        "守銭奴（しゅせんど）",
        "miser"
      ],
      [
        "無銭飲食（むせんいんしょく）",
        "leaving without paying for food"
      ],
      [
        "銭（ぜに）",
        "money"
      ],
      [
        "小銭（こぜに）",
        "coins, small change"
      ],
      [
        "身銭（みぜに）",
        "one's own money"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "祖",
    "kname": "so(sen)",
    "kstroke": 9,
    "kmeaning": "ancestor",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソ",
    "onyomi": "so",
    "examples": [
      [
        "祖先（そせん）",
        "ancestor"
      ],
      [
        "祖国（そこく）",
        "fatherland, native country"
      ],
      [
        "祖父母（そふぼ）",
        "grandparents"
      ],
      [
        "元祖（がんそ）",
        "originator, founder, pioneer"
      ],
      [
        "教祖（きょうそ）",
        "founder of a religious sect, guru"
      ],
      [
        "先祖（せんぞ）",
        "ancestor"
      ]
    ],
    "radical": "⺭",
    "rad_order": 121,
    "rad_stroke": 4,
    "rad_name_ja": "しめすへん",
    "rad_name": "shimesuhen",
    "rad_meaning": "altar, festival, religious service",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "測",
    "kname": "soku-haka(ru)",
    "kstroke": 12,
    "kmeaning": "measure, conjecture",
    "kgrade": 5,
    "kunyomi_ja": "はか、はかる",
    "kunyomi": "haka, hakaru",
    "onyomi_ja": "ソク",
    "onyomi": "soku",
    "examples": [
      [
        "測候所（そっこうじょ）",
        "weather measurement station"
      ],
      [
        "憶測（おくそく）",
        "guess, speculation, supposition"
      ],
      [
        "不測（ふそく）",
        "unexpected [n.]"
      ],
      [
        "測量する（そくりょうする）",
        "measure (mass)  [v.t.]"
      ],
      [
        "測定する（そくていする）",
        "measure [v.t.]"
      ],
      [
        "観測する（かんそくする）",
        "observe"
      ],
      [
        "推測する（すいそくする）",
        "guess, conjecture"
      ],
      [
        "予測する（よそくする）",
        "predict, estimate"
      ],
      [
        "目測する（もくそくする）",
        "measure by eye"
      ],
      [
        "測る（はかる）",
        "measure (mass) [v.t.]"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "八",
    "kname": 8,
    "kstroke": 2,
    "kmeaning": "eight",
    "kgrade": 1,
    "kunyomi_ja": "や、よう、やっつ",
    "kunyomi": "ya, you, yattsu",
    "onyomi_ja": "ハチ",
    "onyomi": "hachi",
    "examples": [
      [
        "八月（はちがつ）",
        "August"
      ],
      [
        "八時間（はちじかん）",
        "8 hours"
      ],
      [
        "尺八（しゃくはち）",
        "bamboo flute"
      ],
      [
        "八回（はっかい）",
        "8 times"
      ],
      [
        "八分（はっぷん）",
        "8 minutes"
      ],
      [
        "八百（はっぴゃく）",
        "800"
      ],
      [
        "八つ（やっつ）",
        "8 (objects)"
      ],
      [
        "八百屋（やおや）",
        "greengrocer"
      ],
      [
        "八重桜（やえざくら）",
        "double-flowered cherry-tree"
      ],
      [
        "八日（ようか）",
        "8 days, 8th of the month"
      ]
    ],
    "radical": "⼋",
    "rad_order": 15,
    "rad_stroke": 2,
    "rad_name_ja": "はち",
    "rad_name": "hachi",
    "rad_meaning": "eight",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "属",
    "kname": "(sho)zoku",
    "kstroke": 12,
    "kmeaning": "belong to",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゾク",
    "onyomi": "zoku",
    "examples": [
      [
        "属性（ぞくせい）",
        "attribute [n.]"
      ],
      [
        "金属（きんぞく）",
        "metal"
      ],
      [
        "専属（せんぞく）",
        "exclusive, specialized [n.]"
      ],
      [
        "猫属（ねこぞく）",
        "the cat genus"
      ],
      [
        "属する（ぞくする）",
        "belong to, be affiliated with"
      ],
      [
        "配属する（はいぞくする）",
        "assign"
      ],
      [
        "従属する（じゅうぞくする）",
        "be subordinated to"
      ],
      [
        "付属する（ふぞくする）",
        "be attached, be associated"
      ],
      [
        "所属する（しょぞくする）",
        "belong to, be affiliated with"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "損",
    "kname": "son(gai)",
    "kstroke": 13,
    "kmeaning": "loss, damage, harm",
    "kgrade": 5,
    "kunyomi_ja": "そこ、そこねる、そこなう",
    "kunyomi": "soko, sokoneru, sokonau",
    "onyomi_ja": "ソン",
    "onyomi": "son",
    "examples": [
      [
        "損（そん）",
        "loss"
      ],
      [
        "損失（そんしつ）",
        "loss"
      ],
      [
        "損得（そんとく）",
        "loss and gain"
      ],
      [
        "損害（そんがい）",
        "damage, injury, loss"
      ],
      [
        "損傷（そんしょう）",
        "damage, injury"
      ],
      [
        "大損（おおぞん）",
        "heavy loss"
      ],
      [
        "損害賠償（そんがいばいしょう）",
        "restitution, compensation"
      ],
      [
        "破損する（はそんする）",
        "damage, be damaged"
      ],
      [
        "損ねる（そこねる）",
        "harm, hurt, injure [v.t.]"
      ],
      [
        "損なう（そこなう）",
        "harm, damage [v.t.]"
      ],
      [
        "見損なう（みそこなう）",
        "misjudge, miss, fail to see"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "退",
    "kname": "shirizo(ku)",
    "kstroke": 9,
    "kmeaning": "retreat, drive away, repel",
    "kgrade": 5,
    "kunyomi_ja": "しりぞ、しりぞく、しりぞける",
    "kunyomi": "shirizo, shirizoku, shirizokeru",
    "onyomi_ja": "タイ",
    "onyomi": "tai",
    "examples": [
      [
        "退屈な（たいくつな）",
        "tedious, bored"
      ],
      [
        "退廃的な（たいはいてきな）",
        "degenerate, decadent"
      ],
      [
        "退学する（たいがくする）",
        "drop out of school"
      ],
      [
        "退職する（たいしょくする）",
        "retire"
      ],
      [
        "退去する（たいきょする）",
        "depart, leave, recede"
      ],
      [
        "退場する（たいじょうする）",
        "leave, exit"
      ],
      [
        "退院する（たいいんする）",
        "leave hospital"
      ],
      [
        "辞退する（じたいする）",
        "decline an offer"
      ],
      [
        "衰退する（すいたいする）",
        "decay, retreat"
      ],
      [
        "撤退する（てったいする）",
        "evacuate, withdraw, repeal"
      ],
      [
        "退ける（しりぞける）",
        "repel, drive away, reject [v.t.]"
      ],
      [
        "退く（しりぞく）",
        "retreat, recede, withdraw [v.i.]"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "銅",
    "kname": "dou(zou)",
    "kstroke": 14,
    "kmeaning": "copper",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ドウ",
    "onyomi": "dou",
    "examples": [
      [
        "銅（どう）",
        "copper"
      ],
      [
        "銅山（どうざん）",
        "copper mine"
      ],
      [
        "銅貨（どうか）",
        "copper coin"
      ],
      [
        "銅像（どうぞう）",
        "bronze statue"
      ],
      [
        "青銅（せいどう）",
        "bronze"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "徳",
    "kname": "(dou)toku",
    "kstroke": 14,
    "kmeaning": "virtue",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "トク",
    "onyomi": "toku",
    "examples": [
      [
        "徳（とく）",
        "virtue, goodness"
      ],
      [
        "道徳（どうとく）",
        "morals"
      ],
      [
        "人徳（じんとく）",
        "natural virtue, personal virtue"
      ],
      [
        "不徳（ふとく）",
        "immorality, depravity"
      ],
      [
        "美徳（びとく）",
        "virtue"
      ],
      [
        "悪徳商法（あくとくしょうほう）",
        "corrupt business"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "犯",
    "kname": "han(nin)",
    "kstroke": 5,
    "kmeaning": "offense, commit (a crime), violate, defy",
    "kgrade": 5,
    "kunyomi_ja": "おか、おかす",
    "kunyomi": "oka, okasu",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "犯罪（はんざい）",
        "crime"
      ],
      [
        "犯行（はんこう）",
        "criminal act"
      ],
      [
        "犯人（はんにん）",
        "offender, criminal"
      ],
      [
        "防犯（ぼうはん）",
        "crime prevention"
      ],
      [
        "初犯（しょはん）",
        "first offender"
      ],
      [
        "共犯（きょうはん）",
        "accomplice"
      ],
      [
        "戦犯（せんぱん）",
        "war criminal"
      ],
      [
        "殺人犯（さつじんはん）",
        "murderer"
      ],
      [
        "知能犯（ちのうはん）",
        "intellectual criminal"
      ],
      [
        "犯す（おかす）",
        "commit, perpetrate, violate"
      ]
    ],
    "radical": "⺨",
    "rad_order": 78,
    "rad_stroke": 3,
    "rad_name_ja": "けものへん",
    "rad_name": "kemonohen",
    "rad_meaning": "beast",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "版",
    "kname": "han(ga)",
    "kstroke": 8,
    "kmeaning": "printing plate, publishing, edition",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "版（はん）",
        "plate, printing, edition"
      ],
      [
        "版画（はんが）",
        "art print"
      ],
      [
        "版元（はんもと）",
        "publisher"
      ],
      [
        "版権（はんけん）",
        "copyright"
      ],
      [
        "重版（じゅうはん）",
        "additional printing"
      ],
      [
        "凸版（とっぱん）",
        "letterpress, relief printing"
      ],
      [
        "活版（かっぱん）",
        "printing, typography"
      ],
      [
        "出版社（しゅっぱんしゃ）",
        "publisher"
      ],
      [
        "初版本（しょはんぼん）",
        "first edition"
      ],
      [
        "決定版（けっていばん）",
        "definitive edition"
      ],
      [
        "改訂版（かいていばん）",
        "revised edition"
      ],
      [
        "出版する（しゅっぱんする）",
        "publish"
      ]
    ],
    "radical": "",
    "rad_order": 115,
    "rad_stroke": 4,
    "rad_name_ja": "かたへん",
    "rad_name": "katahen",
    "rad_meaning": "split wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "俵",
    "kname": "tawara",
    "kstroke": 10,
    "kmeaning": "straw sack",
    "kgrade": 5,
    "kunyomi_ja": "たわら",
    "kunyomi": "tawara",
    "onyomi_ja": "ヒョウ",
    "onyomi": "hyou",
    "examples": [
      [
        "土俵（どひょう）",
        "sumo ring"
      ],
      [
        "一俵（いっぴょう）",
        "one straw bag"
      ],
      [
        "俵（たわら）",
        "bale, sack"
      ],
      [
        "米俵（こめだわら）",
        "straw rice bag"
      ],
      [
        "炭俵（すみだわら）",
        "sack for charcoal"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "婦",
    "kname": "(fuu)fu",
    "kstroke": 11,
    "kmeaning": "adult woman",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フ",
    "onyomi": "fu",
    "examples": [
      [
        "婦人（ふじん）",
        "woman, female"
      ],
      [
        "婦長（ふちょう）",
        "head nurse"
      ],
      [
        "婦警（ふけい）",
        "policewoman"
      ],
      [
        "主婦（しゅふ）",
        "housewife"
      ],
      [
        "夫婦（ふうふ）",
        "married couple"
      ],
      [
        "娼婦（しょうふ）",
        "prostitute"
      ],
      [
        "新婦（しんぷ）",
        "bride"
      ],
      [
        "看護婦（かんごふ）",
        "nurse"
      ],
      [
        "掃除婦（そうじふ）",
        "cleaning lady"
      ]
    ],
    "radical": "",
    "rad_order": 45,
    "rad_stroke": 3,
    "rad_name_ja": "おんなへん",
    "rad_name": "onnahen",
    "rad_meaning": "woman",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "富",
    "kname": "tomi",
    "kstroke": 12,
    "kmeaning": "rich, wealth",
    "kgrade": 5,
    "kunyomi_ja": "と、とむ、とみ",
    "kunyomi": "to, tomu, tomi",
    "onyomi_ja": "フ、フウ",
    "onyomi": "fu, fuu",
    "examples": [
      [
        "富豪（ふごう）",
        "wealthy person, millionaire"
      ],
      [
        "富士山（ふじさん）",
        "Mt. Fuji"
      ],
      [
        "富国強兵（ふこくきょうへい）",
        "national prosperity & defense"
      ],
      [
        "富裕な（ふゆうな）",
        "wealthy, rich, opulent"
      ],
      [
        "豊富な（ほうふな）",
        "abundant, rich, plentiful"
      ],
      [
        "富貴な（ふうきな）",
        "rich and honored"
      ],
      [
        "富む（とむ）",
        "rich with"
      ],
      [
        "富（とみ）",
        "wealth, fortune"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "九",
    "kname": 9,
    "kstroke": 2,
    "kmeaning": "nine",
    "kgrade": 1,
    "kunyomi_ja": "ここの、ここのつ",
    "kunyomi": "kokono, kokonotsu",
    "onyomi_ja": "キュウ、ク",
    "onyomi": "kyuu, ku",
    "examples": [
      [
        "九州（きゅうしゅう）",
        "Kyuushuu"
      ],
      [
        "九回（きゅうかい）",
        "9 times"
      ],
      [
        "九年（きゅうねん）",
        "9 years"
      ],
      [
        "九月（くがつ）",
        "September"
      ],
      [
        "九時（くじ）",
        "9 o'clock"
      ],
      [
        "十九日（じゅうくにち）",
        "19 days, 19th of the month"
      ],
      [
        "九日（ここのか）",
        "9 days, 9th of the month"
      ],
      [
        "九つ（ここのつ）",
        "9 (objects) "
      ]
    ],
    "radical": "⼄",
    "rad_order": 6,
    "rad_stroke": 1,
    "rad_name_ja": "おつ",
    "rad_name": "otsu",
    "rad_meaning": "the second",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "武",
    "kname": "bu(ryoku)",
    "kstroke": 8,
    "kmeaning": "military",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ブ、ム",
    "onyomi": "bu, mu",
    "examples": [
      [
        "武士（ぶし）",
        "warrior, samurai"
      ],
      [
        "武器（ぶき）",
        "weapon, arms"
      ],
      [
        "武力（ぶりょく）",
        "military power"
      ],
      [
        "武術（ぶじゅつ）",
        "martial arts"
      ],
      [
        "武道（ぶどう）",
        "martial arts, Bushido"
      ],
      [
        "武装する（ぶそうする）",
        "be armed"
      ],
      [
        "武者震い（むしゃぶるい）",
        "shake with excitement [n.]"
      ],
      [
        "影武者（かげむしゃ）",
        "secret power broker"
      ]
    ],
    "radical": "⽌",
    "rad_order": 100,
    "rad_stroke": 4,
    "rad_name_ja": "とめる",
    "rad_name": "tomeru",
    "rad_meaning": "to stop",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "複",
    "kname": "fuku(suu)",
    "kstroke": 14,
    "kmeaning": "compound, double, multiple",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "フク",
    "onyomi": "fuku",
    "examples": [
      [
        "複数（ふくすう）",
        "plural, multiple"
      ],
      [
        "複利（ふくり）",
        "compound interest"
      ],
      [
        "複写機（ふくしゃき）",
        "photocopying machine"
      ],
      [
        "複雑な（ふくざつな）",
        "complex, complicated"
      ],
      [
        "複製する（ふくせいする）",
        "reproduce, duplicate, reprint"
      ],
      [
        "複合する（ふくごうする）",
        "combine"
      ],
      [
        "重複する（ちょうふくする）",
        "be repeated, overlap [v.i.]"
      ]
    ],
    "radical": "⻂",
    "rad_order": 151,
    "rad_stroke": 5,
    "rad_name_ja": "ころもへん",
    "rad_name": "koromohen",
    "rad_meaning": "clothing",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "墓",
    "kname": "haka",
    "kstroke": 13,
    "kmeaning": "grave, tomb",
    "kgrade": 5,
    "kunyomi_ja": "はか",
    "kunyomi": "haka",
    "onyomi_ja": "ボ",
    "onyomi": "bo",
    "examples": [
      [
        "墓碑（ぼひ）",
        "gravestone, tombstone"
      ],
      [
        "墓地（ぼち）",
        "cemetery, graveyard"
      ],
      [
        "墓穴（ぼけつ）",
        "grave (hole in ground)"
      ],
      [
        "墓標（ぼひょう）",
        "grave-marker, gravestone"
      ],
      [
        "墓（はか）",
        "tomb"
      ],
      [
        "墓参り（はかまいり）",
        "visit to a grave"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "報",
    "kname": "(yo)hou",
    "kstroke": 12,
    "kmeaning": "inform, require, news, report, reward",
    "kgrade": 5,
    "kunyomi_ja": "むく、むくい、むくいる、むくう",
    "kunyomi": "muku, mukui, mukuiru, mukuu",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "報道（ほうどう）",
        "information, report"
      ],
      [
        "報酬（ほうしゅう）",
        "remuneration, recompense"
      ],
      [
        "情報（じょうほう）",
        "information, news"
      ],
      [
        "警報（けいほう）",
        "alarm, warning"
      ],
      [
        "速報（そくほう）",
        "news flash, quick report"
      ],
      [
        "天気予報（てんきよほう）",
        "weather forecast"
      ],
      [
        "報告する（ほうこくする）",
        "report, inform"
      ],
      [
        "報復する（ほうふくする）",
        "retaliate, take revenge"
      ],
      [
        "通報する（つうほうする）",
        "report [v.t.]"
      ],
      [
        "報じる（ほうじる）",
        "inform, report"
      ],
      [
        "報う（むくう）",
        "reward, recompense [v.i., v.t.]"
      ],
      [
        "報いる（むくいる）",
        "reward, recompense [v.i., v.t.]"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "防",
    "kname": "fuse(gu)",
    "kstroke": 7,
    "kmeaning": "prevent, protect from",
    "kgrade": 5,
    "kunyomi_ja": "ふせ、ふせぐ",
    "kunyomi": "fuse, fusegu",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "防水（ぼうすい）",
        "waterproofing"
      ],
      [
        "防音（ぼうおん）",
        "soundproofing"
      ],
      [
        "防虫剤（ぼうちゅうざい）",
        "insecticide"
      ],
      [
        "防腐剤（ぼうふざい）",
        "antiseptic, preservative [n.]"
      ],
      [
        "防災訓練（ぼうさいくんれん）",
        "disaster prevention drill"
      ],
      [
        "堤防（ていぼう）",
        "bank, levee, dike"
      ],
      [
        "消防車（しょうぼうしゃ）",
        "fire-engine"
      ],
      [
        "無防備な（むぼうびな）",
        "defenseless"
      ],
      [
        "防止する（ぼうしする）",
        "prevent"
      ],
      [
        "防衛する（ぼうえいする）",
        "defend, protect"
      ],
      [
        "予防する（よぼうする）",
        "prevent by taking precautions"
      ],
      [
        "防ぐ（ふせぐ）",
        "defend, protect, prevent"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "貿",
    "kname": "bou(ekifuu)",
    "kstroke": 12,
    "kmeaning": "trade, exchange",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "貿易（ぼうえき）",
        "trade"
      ],
      [
        "貿易業（ぼうえきぎょう）",
        "trading business"
      ],
      [
        "貿易風（ぼうえきふう）",
        "trade wind"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "務",
    "kname": "(nin)mu",
    "kstroke": 11,
    "kmeaning": "duty, work, serve",
    "kgrade": 5,
    "kunyomi_ja": "つと、つとめる、つとまる",
    "kunyomi": "tsuto, tsutomeru, tsutomaru",
    "onyomi_ja": "ム",
    "onyomi": "mu",
    "examples": [
      [
        "義務（ぎむ）",
        "duty, obligation"
      ],
      [
        "事務（じむ）",
        "business, office work"
      ],
      [
        "任務（にんむ）",
        "duty, mission, task"
      ],
      [
        "職務（しょくむ）",
        "professional duties"
      ],
      [
        "責務（せきむ）",
        "duty, obligation, responsibility"
      ],
      [
        "専務（せんむ）",
        "managing director"
      ],
      [
        "外務省（がいむしょう）",
        "Department of Foreign Affairs"
      ],
      [
        "法務省（ほうむしょう）",
        "Ministry of Justice"
      ],
      [
        "公務員（こうむいん）",
        "civil servant"
      ],
      [
        "勤務する（きんむする）",
        "work for"
      ],
      [
        "務める（つとめる）",
        "serve, exert oneself [v.t.]"
      ],
      [
        "務まる（つとまる）",
        "be fit for, function properly [v.i.]"
      ]
    ],
    "radical": "⼒",
    "rad_order": 24,
    "rad_stroke": 2,
    "rad_name_ja": "ちから",
    "rad_name": "chikara",
    "rad_meaning": "power",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "綿",
    "kname": "men-wata",
    "kstroke": 14,
    "kmeaning": "cotton",
    "kgrade": 5,
    "kunyomi_ja": "わた",
    "kunyomi": "wata",
    "onyomi_ja": "メン",
    "onyomi": "men",
    "examples": [
      [
        "綿花（めんか）",
        "raw cotton, cotton wool"
      ],
      [
        "綿糸（めんし）",
        "cotton yarn"
      ],
      [
        "綿棒（めんぼう）",
        "cotton swab"
      ],
      [
        "綿織物（めんおりもの）",
        "cotton fabrics, cotton textiles"
      ],
      [
        "木綿（もめん）",
        "cotton"
      ],
      [
        "綿密な（めんみつな）",
        "detailed, careful, thorough"
      ],
      [
        "綿（わた）",
        "raw cotton"
      ],
      [
        "綿菓子（わたがし）",
        "cotton candy"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "余",
    "kname": "yo(keina)",
    "kstroke": 7,
    "kmeaning": "remaining, excess",
    "kgrade": 5,
    "kunyomi_ja": "あま、あまり、あまる、あます",
    "kunyomi": "ama, amari, amaru, amasu",
    "onyomi_ja": "ヨ",
    "onyomi": "yo",
    "examples": [
      [
        "余地（よち）",
        "space, room, margin"
      ],
      [
        "余暇（よか）",
        "leisure, leisure time, spare time"
      ],
      [
        "余波（よは）",
        "secondary effect, aftermath"
      ],
      [
        "余韻（よいん）",
        "reverberation, lingering memory"
      ],
      [
        "余剰（よじょう）",
        "surplus, residue"
      ],
      [
        "余談（よだん）",
        "digression, sequel"
      ],
      [
        "余命（よめい）",
        "one's remaining years"
      ],
      [
        "余程（よほど）",
        "very, to a large extent, greatly"
      ],
      [
        "余計な（よけいな）",
        "extra, excessive"
      ],
      [
        "余分な（よぶんな）",
        "extra, excessive"
      ],
      [
        "余す（あます）",
        "save, leave over"
      ],
      [
        "余る（あまる）",
        "remain, be left over [v.i.]"
      ]
    ],
    "radical": "𠆢",
    "rad_order": 12,
    "rad_stroke": 2,
    "rad_name_ja": "ひとやね",
    "rad_name": "hitoyane",
    "rad_meaning": "person",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "略",
    "kname": "(sen)ryaku",
    "kstroke": 11,
    "kmeaning": "abridged, strategy, omit, abbreviate",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リャク",
    "onyomi": "ryaku",
    "examples": [
      [
        "略（りゃく）",
        "abbreviation, omission"
      ],
      [
        "略語（りゃくご）",
        "abbreviation, acronym"
      ],
      [
        "略字（りゃくじ）",
        "abbreviation, simplified character"
      ],
      [
        "略歴（りゃくれき）",
        "brief personal record, short CV"
      ],
      [
        "戦略（せんりゃく）",
        "strategy, tactics"
      ],
      [
        "策略（さくりゃく）",
        "scheme, tactic, stratagem, trick"
      ],
      [
        "略す（りゃくす）",
        "abbreviate"
      ],
      [
        "略奪する（りゃくだつする）",
        "loot, rob"
      ],
      [
        "攻略する（こうりゃくする）",
        "capture [v.t.]"
      ],
      [
        "侵略する（しんりゃくする）",
        "invade"
      ],
      [
        "省略する（しょうりゃくする）",
        "omit, abbreviate, abridge"
      ]
    ],
    "radical": "",
    "rad_order": 129,
    "rad_stroke": 5,
    "rad_name_ja": "たへん",
    "rad_name": "tahen",
    "rad_meaning": "rice paddy",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "十",
    "kname": 10,
    "kstroke": 2,
    "kmeaning": "ten",
    "kgrade": 1,
    "kunyomi_ja": "とお、と",
    "kunyomi": "too, to",
    "onyomi_ja": "ジュウ",
    "onyomi": "juu",
    "examples": [
      [
        "十（じゅう）",
        "10"
      ],
      [
        "十年（じゅうねん）",
        "10 years"
      ],
      [
        "十分な（じゅうぶんな）",
        "enough"
      ],
      [
        "十か月（じゅっかげつ）",
        "10 months"
      ],
      [
        "十冊（じゅっさつ）",
        "10 (bound objects)"
      ],
      [
        "十匹（じゅっぴき）",
        "10 (animals)"
      ],
      [
        "十分（じゅっぷん）",
        "10 minutes"
      ],
      [
        "十本（じゅっぽん）",
        "10 (long cylindrical objects)"
      ],
      [
        "十日（とおか）",
        "10 days, 10th of the month"
      ],
      [
        "十人十色（じゅうにんといろ）",
        "several men, several minds"
      ],
      [
        "*二十才（はたち）",
        "20 years old"
      ],
      [
        "*二十日（はつか）",
        "20 days, 20th day of the month"
      ]
    ],
    "radical": "⼗",
    "rad_order": 28,
    "rad_stroke": 2,
    "rad_name_ja": "じゅう",
    "rad_name": "juu",
    "rad_meaning": "ten",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "領",
    "kname": "(daitou)ryou",
    "kstroke": 14,
    "kmeaning": "territory, govern, rule",
    "kgrade": 5,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "リョウ",
    "onyomi": "ryou",
    "examples": [
      [
        "領土（りょうど）",
        "dominion, territory"
      ],
      [
        "領内（りょうない）",
        "territory, domains"
      ],
      [
        "領空（りょうくう）",
        "territorial airspace"
      ],
      [
        "領地（りょうち）",
        "territory, dominion"
      ],
      [
        "領域（りょういき）",
        "area, domain, territory, field"
      ],
      [
        "領事館（りょうじかん）",
        "consulate"
      ],
      [
        "領収書（りょうしゅうしょ）",
        "receipt"
      ],
      [
        "本領（ほんりょう）",
        "characteristic, speciality"
      ],
      [
        "要領（ようりょう）",
        "gist, point, knack"
      ],
      [
        "大統領（だいとうりょう）",
        "president (of a nation)"
      ],
      [
        "占領する（せんりょうする）",
        "occupy, capture, possess"
      ],
      [
        "横領する（おうりょうする）",
        "embezzle"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "域",
    "kname": "(chi)iki",
    "kstroke": 11,
    "kmeaning": "bounded area, region",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イキ",
    "onyomi": "iki",
    "examples": [
      [
        "地域（ちいき）",
        "area, region"
      ],
      [
        "水域（すいいき）",
        "waters, water area"
      ],
      [
        "区域（くいき）",
        "boundary, zone, territory"
      ],
      [
        "海域（かいいき）",
        "area of ocean"
      ],
      [
        "全域（ぜんいき）",
        "the whole area"
      ],
      [
        "聖域（せいいき）",
        "sacred precincts"
      ],
      [
        "領域（りょういき）",
        "area, domain, territory, field"
      ]
    ],
    "radical": "",
    "rad_order": 38,
    "rad_stroke": 3,
    "rad_name_ja": "つちへん",
    "rad_name": "tsuchihen",
    "rad_meaning": "earth",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宇",
    "kname": "u(jicha)",
    "kstroke": 6,
    "kmeaning": "universe",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ウ",
    "onyomi": "u",
    "examples": [
      [
        "宇宙（うちゅう）",
        "universe, cosmos, space"
      ],
      [
        "宇内（うだい）",
        "the whole world"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "沿",
    "kname": "en-so(u)",
    "kstroke": 8,
    "kmeaning": "along",
    "kgrade": 6,
    "kunyomi_ja": "そ、そう",
    "kunyomi": "so, sou",
    "onyomi_ja": "エン",
    "onyomi": "en",
    "examples": [
      [
        "沿道（えんどう）",
        "route, course, roadside"
      ],
      [
        "沿岸（えんがん）",
        "coast, shore"
      ],
      [
        "沿線（えんせん）",
        "along a railroad line"
      ],
      [
        "沿革（えんかく）",
        "history, development"
      ],
      [
        "沿う（そう）",
        "accompany, comply with"
      ],
      [
        "川沿い（かわぞい）",
        "along a river"
      ],
      [
        "山沿い（やまぞい）",
        "along a mountain"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "灰",
    "kname": "kai-hai",
    "kstroke": 6,
    "kmeaning": "ash",
    "kgrade": 6,
    "kunyomi_ja": "はい",
    "kunyomi": "hai",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "灰白色（かいはくしょく）",
        "grayish white"
      ],
      [
        "石灰（せっかい）",
        "lime, quicklime, caustic lime"
      ],
      [
        "灰（はい）",
        "ash"
      ],
      [
        "灰皿（はいざら）",
        "ashtray"
      ],
      [
        "灰色（はいいろ）",
        "grey, ashen"
      ],
      [
        "火山灰（かざんばい）",
        "volcanic ash"
      ]
    ],
    "radical": "⼚",
    "rad_order": 31,
    "rad_stroke": 2,
    "rad_name_ja": "がんだれ",
    "rad_name": "gandare",
    "rad_meaning": "cliff",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "閣",
    "kname": "kaku(ryou)",
    "kstroke": 14,
    "kmeaning": "tower, tall magnificent building, cabinet",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カク",
    "onyomi": "kaku",
    "examples": [
      [
        "閣僚（かくりょう）",
        "cabinet ministers"
      ],
      [
        "閣議（かくぎ）",
        "cabinet meeting"
      ],
      [
        "閣下（かっか）",
        "Your excellency"
      ],
      [
        "内閣（ないかく）",
        "cabinet, ministry"
      ],
      [
        "楼閣（ろうかく）",
        "multistoried building"
      ],
      [
        "仏閣（ぶっかく）",
        "Buddhist temple"
      ],
      [
        "金閣寺（きんかくじ）",
        "Kinkakuji Temple"
      ],
      [
        "銀閣寺（ぎんかくじ）",
        "Ginkakuji Temple"
      ],
      [
        "天守閣（てんしゅかく）",
        "castle tower"
      ],
      [
        "組閣する（そかくする）",
        "form a cabinet"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "割",
    "kname": "wa(ru)",
    "kstroke": 12,
    "kmeaning": "divide, split",
    "kgrade": 6,
    "kunyomi_ja": "わ、わる、わり、われる、さ、さく",
    "kunyomi": "wa, waru, wari, wareru, sa, saku",
    "onyomi_ja": "カツ",
    "onyomi": "katsu",
    "examples": [
      [
        "割愛する（かつあいする）",
        "omit, leave out, spare"
      ],
      [
        "分割する（ぶんかつする）",
        "partition, divide, separate"
      ],
      [
        "割る（わる）",
        "divide, break, crack [v.t.]"
      ],
      [
        "割れる（われる）",
        "break, split, crack [v.i.]"
      ],
      [
        "割り勘（わりかん）",
        "shared expenses"
      ],
      [
        "割り算（わりざん）",
        "division"
      ],
      [
        "割り引く（わりびく）",
        "discount [v.t.]"
      ],
      [
        "割合（わりあい）",
        "rate, ratio, proportion"
      ],
      [
        "一割（いちわり）",
        "ten percent"
      ],
      [
        "役割（やくわり）",
        "part, role, duties"
      ],
      [
        "割と（わりと）",
        "relatively, comparatively"
      ],
      [
        "割く（さく）",
        "split, rend, cut, spare (time)"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "株",
    "kname": "kabu(shiki)",
    "kstroke": 10,
    "kmeaning": "stock, share, stump",
    "kgrade": 6,
    "kunyomi_ja": "かぶ",
    "kunyomi": "kabu",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "株（かぶ）",
        "share, stock, stump"
      ],
      [
        "株式（かぶしき）",
        "stock [n.]"
      ],
      [
        "株価（かぶか）",
        "stock prices"
      ],
      [
        "株券（かぶけん）",
        "stock certificate"
      ],
      [
        "株主（かぶぬし）",
        "shareholder, stockholder"
      ],
      [
        "株主総会（かぶぬしそうかい）",
        "general meeting of stockholders"
      ],
      [
        "株式会社（かぶしきがいしゃ）",
        "stock company, corporation"
      ],
      [
        "株分け（かぶわけ）",
        "root division"
      ],
      [
        "切り株（きりかぶ）",
        "stump, stubble"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "干",
    "kname": "kan-ho(su)",
    "kstroke": 3,
    "kmeaning": "dry",
    "kgrade": 6,
    "kunyomi_ja": "ほ、ひ、ほす、ほし、ひる",
    "kunyomi": "ho, hi, hosu, hoshi, hiru",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "干満（かんまん）",
        "ebb and flow (of a tide)"
      ],
      [
        "干潮（かんちょう）",
        "ebb tide"
      ],
      [
        "若干（じゃっかん）",
        "some, a few [n., adv.]"
      ],
      [
        "干渉する（かんしょうする）",
        "interfere, intervene"
      ],
      [
        "干拓する（かんたくする）",
        "reclaim land"
      ],
      [
        "干す（ほす）",
        "dry, drain"
      ],
      [
        "梅干し（うめぼし）",
        "dried plum"
      ],
      [
        "干る（ひる）",
        "dry [v.i.]"
      ],
      [
        "干上がる（ひあがる）",
        "dry up, parch"
      ],
      [
        "潮干狩り（しおひがり）",
        "shell gathering (at low tide)"
      ]
    ],
    "radical": "⼲",
    "rad_order": 61,
    "rad_stroke": 3,
    "rad_name_ja": "かん",
    "rad_name": "kan",
    "rad_meaning": "to dry, shield",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "巻",
    "kname": "kan-ma(ku)",
    "kstroke": 9,
    "kmeaning": "roll up, volume, wind",
    "kgrade": 6,
    "kunyomi_ja": "ま、まく、まき",
    "kunyomi": "ma, maku, maki",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "巻末（かんまつ）",
        "end of a book"
      ],
      [
        "全巻（ぜんかん）",
        "the whole volume"
      ],
      [
        "別巻（べっかん）",
        "separate volume, extra issue"
      ],
      [
        "第一巻（だいいっかん）",
        "first volume"
      ],
      [
        "巻く（まく）",
        "wind, coil, roll [v.t.]"
      ],
      [
        "巻き添え（まきぞえ）",
        "get mixed up in [n.]"
      ],
      [
        "葉巻（はまき）",
        "cigar"
      ],
      [
        "渦巻き（うずまき）",
        "whirlpool, eddy, coil"
      ],
      [
        "のり巻き（のりまき）",
        "Sushi roll"
      ],
      [
        "絵巻物（えまきもの）",
        "picture scroll"
      ]
    ],
    "radical": "⼰",
    "rad_order": 58,
    "rad_stroke": 3,
    "rad_name_ja": "おのれ",
    "rad_name": "onore",
    "rad_meaning": "self",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "待",
    "kname": "ma(tsu)",
    "kstroke": 9,
    "kmeaning": "wait",
    "kgrade": 3,
    "kunyomi_ja": "まつ、またせる",
    "kunyomi": "matsu, mataseru",
    "onyomi_ja": "タイ",
    "onyomi": "tai",
    "examples": [
      [
        "待機する（たいきする）",
        "stand by"
      ],
      [
        "期待する（きたいする）",
        "hope"
      ],
      [
        "招待する（しょうたいする）",
        "invite"
      ],
      [
        "待つ（まつ）",
        "wait"
      ],
      [
        "待たせる（またせる）",
        "keep (a person) waiting"
      ],
      [
        "待ち合わせる（まちあわせる）",
        "rendezvous"
      ],
      [
        "待合室（まちあいしつ）",
        "waiting room"
      ]
    ],
    "radical": "⼻",
    "rad_order": 70,
    "rad_stroke": 3,
    "rad_name_ja": "ぎょうにんべん",
    "rad_name": "gyouninben",
    "rad_meaning": "step, stride, street, to go",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "看",
    "kname": "kan(gofu)",
    "kstroke": 9,
    "kmeaning": "watch, care for",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "看板（かんばん）",
        "sign, signboard, billboard"
      ],
      [
        "看守（かんしゅ）",
        "prison guard, jailer"
      ],
      [
        "看護婦（かんごふ）",
        "nurse"
      ],
      [
        "看破する（かんぱする）",
        "penetrate, see through"
      ],
      [
        "看病する（かんびょうする）",
        "nurse, attend (a sick person)"
      ],
      [
        "看護する（かんごする）",
        "nurse, attend (a sick person)"
      ]
    ],
    "radical": "⽬",
    "rad_order": 137,
    "rad_stroke": 5,
    "rad_name_ja": "め",
    "rad_name": "me",
    "rad_meaning": "eye",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "危",
    "kname": "abu(nai)",
    "kstroke": 6,
    "kmeaning": "dangerous",
    "kgrade": 6,
    "kunyomi_ja": "あぶ、あや、あぶない、あやうい、あやぶむ、あやうく",
    "kunyomi": "abu, aya, abunai, ayaui, ayabumu, ayauku",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "危機（きき）",
        "crisis"
      ],
      [
        "危害（きがい）",
        "injury, harm, danger"
      ],
      [
        "危篤（きとく）",
        "on the verge of death"
      ],
      [
        "危惧（きぐ）",
        "fear, misgivings"
      ],
      [
        "危険な（きけんな）",
        "dangerous, perilous, hazardous"
      ],
      [
        "危ない（あぶない）",
        "dangerous, watch out! [adj.]"
      ],
      [
        "危うく（あやうく）",
        "in imminent danger of, almost"
      ],
      [
        "危うい（あやうい）",
        "dangerous, critical [adj.]"
      ],
      [
        "危ぶむ（あやぶむ）",
        "have misgivings [v.t.]"
      ]
    ],
    "radical": "⼙",
    "rad_order": 30,
    "rad_stroke": 2,
    "rad_name_ja": "ふしづくり",
    "rad_name": "fushizukuri",
    "rad_meaning": "stamp, seal",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "揮",
    "kname": "(shi)ki(bou)",
    "kstroke": 12,
    "kmeaning": "wield, direct, command",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "揮発油（きはつゆ）",
        "volatile oil"
      ],
      [
        "指揮者（しきしゃ）",
        "conductor"
      ],
      [
        "指揮棒（しきぼう）",
        "conductor's baton"
      ],
      [
        "指揮する（しきする）",
        "command, direct, conduct"
      ],
      [
        "発揮する（はっきする）",
        "demonstrate one's ability"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "貴",
    "kname": "ki-touto(i)",
    "kstroke": 12,
    "kmeaning": "noble, your honorable, valuable, respect",
    "kgrade": 6,
    "kunyomi_ja": "たっと、とうと、たっとい、とうとい",
    "kunyomi": "tatto, touto, tattoi, toutoi",
    "onyomi_ja": "キ",
    "onyomi": "ki",
    "examples": [
      [
        "貴族（きぞく）",
        "noble, aristocrat"
      ],
      [
        "貴社（きしゃ）",
        "your company [respectful]"
      ],
      [
        "貴金属（ききんぞく）",
        "precious metal"
      ],
      [
        "貴婦人（きふじん）",
        "noblewoman"
      ],
      [
        "貴重品（きちょうひん）",
        "valuables, treasures"
      ],
      [
        "貴重な（きちょうな）",
        "precious, valuable"
      ],
      [
        "高貴な（こうきな）",
        "high class [adj.]"
      ],
      [
        "貴い（たっとい/とうとい）",
        "precious, exalted, sacred [adj.]"
      ],
      [
        "貴ぶ（たっとぶ/とうとぶ）",
        "value, prize, esteem [v.t.]"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "郷",
    "kname": "(ko)kyou",
    "kstroke": 11,
    "kmeaning": "hometown",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "キョウ、ゴウ",
    "onyomi": "kyou, gou",
    "examples": [
      [
        "郷里（きょうり）",
        "birth-place, home town"
      ],
      [
        "郷土（きょうど）",
        "native place, birth-place"
      ],
      [
        "郷愁（きょうしゅう）",
        "nostalgia, homesickness"
      ],
      [
        "故郷（こきょう）",
        "home town, native place"
      ],
      [
        "同郷（どうきょう）",
        "from the same birthplace"
      ],
      [
        "望郷（ぼうきょう）",
        "homesickness, nostalgia"
      ],
      [
        "愛郷心（あいきょうしん）",
        "love of one's hometown"
      ],
      [
        "帰郷する（ききょうする）",
        "return to one's home"
      ],
      [
        "近郷（きんごう）",
        "neighboring districts"
      ]
    ],
    "radical": "⻏",
    "rad_order": 73,
    "rad_stroke": 3,
    "rad_name_ja": "おおざと",
    "rad_name": "oozato",
    "rad_meaning": "village, country, city",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "警",
    "kname": "kei(satsu)",
    "kstroke": 19,
    "kmeaning": "guard against, warn, admonish",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケイ",
    "onyomi": "kei",
    "examples": [
      [
        "警察（けいさつ）",
        "police"
      ],
      [
        "警官（けいかん）",
        "police officer"
      ],
      [
        "警備（けいび）",
        "defense, guard, policing"
      ],
      [
        "警部（けいぶ）",
        "police inspector"
      ],
      [
        "警報（けいほう）",
        "alarm, warning"
      ],
      [
        "警鐘（けいしょう）",
        "alarm bell, fire bell"
      ],
      [
        "警視庁（けいしちょう）",
        "police headquarters"
      ],
      [
        "婦警（ふけい）",
        "policewoman"
      ],
      [
        "県警（けんけい）",
        "prefectural police"
      ],
      [
        "警告する（けいこくする）",
        "warn, advice"
      ],
      [
        "警戒する（けいかいする）",
        "warn, be vigilant [v.t.]"
      ]
    ],
    "radical": "⾔",
    "rad_order": 182,
    "rad_stroke": 7,
    "rad_name_ja": "げん",
    "rad_name": "gen",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "穴",
    "kname": "ana",
    "kstroke": 5,
    "kmeaning": "hole, cave",
    "kgrade": 6,
    "kunyomi_ja": "あな",
    "kunyomi": "ana",
    "onyomi_ja": "ケツ",
    "onyomi": "ketsu",
    "examples": [
      [
        "墓穴（ぼけつ）",
        "grave [n.]"
      ],
      [
        "穴（あな）",
        "hole"
      ],
      [
        "洞穴（ほらあな）",
        "cave, grotto"
      ],
      [
        "落とし穴（おとしあな）",
        "pitfall, trap, pit"
      ]
    ],
    "radical": "⽳",
    "rad_order": 146,
    "rad_stroke": 5,
    "rad_name_ja": "あな",
    "rad_name": "ana",
    "rad_meaning": "hole, cave",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "絹",
    "kname": "kinu",
    "kstroke": 13,
    "kmeaning": "silk",
    "kgrade": 6,
    "kunyomi_ja": "きぬ",
    "kunyomi": "kinu",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "絹布（けんぷ）",
        "silk, silk cloth"
      ],
      [
        "正絹（しょうけん）",
        "pure silk"
      ],
      [
        "絹（きぬ）",
        "silk"
      ],
      [
        "絹糸（きぬいと）",
        "silk thread"
      ],
      [
        "絹織物（きぬおりもの）",
        "silk goods"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "憲",
    "kname": "(gou)ken(teki)",
    "kstroke": 16,
    "kmeaning": "constitution",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ケン",
    "onyomi": "ken",
    "examples": [
      [
        "憲法（けんぽう）",
        "constitution"
      ],
      [
        "憲章（けんしょう）",
        "charter"
      ],
      [
        "違憲（いけん）",
        "unconstitutionality"
      ],
      [
        "立憲（りっけん）",
        "constitutionalism"
      ],
      [
        "立憲政治（りっけんせいじ）",
        "constitutional government"
      ],
      [
        "合憲的な（ごうけんてきな）",
        "constitutional"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "源",
    "kname": "minamoto",
    "kstroke": 13,
    "kmeaning": "source, origin",
    "kgrade": 6,
    "kunyomi_ja": "みなもと",
    "kunyomi": "minamoto",
    "onyomi_ja": "ゲン",
    "onyomi": "gen",
    "examples": [
      [
        "源泉（げんせん）",
        "source"
      ],
      [
        "源氏物語（げんじものがたり）",
        "the Tale of the Genji"
      ],
      [
        "源平合戦（げんぺいがっせん）",
        "battle b/t Genji & Heike clans"
      ],
      [
        "根源（こんげん）",
        "root, source, origin"
      ],
      [
        "起源（きげん）",
        "origin, beginning"
      ],
      [
        "語源（ごげん）",
        "word root, etymology"
      ],
      [
        "資源（しげん）",
        "natural resources"
      ],
      [
        "財源（ざいげん）",
        "financial resources"
      ],
      [
        "震源（しんげん）",
        "epicenter (of earthquake)"
      ],
      [
        "栄養源（えいようげん）",
        "source of nutrients"
      ],
      [
        "源（みなもと）",
        "source, origin"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "堂",
    "kname": "(shoku)dou",
    "kstroke": 11,
    "kmeaning": "hall",
    "kgrade": 4,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ドウ",
    "onyomi": "dou",
    "examples": [
      [
        "食堂（しょくどう）",
        "dining hall"
      ],
      [
        "議事堂（ぎじどう）",
        "Diet building"
      ],
      [
        "講堂（こうどう）",
        "auditorium"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "己",
    "kname": "onore",
    "kstroke": 3,
    "kmeaning": "oneself, self",
    "kgrade": 6,
    "kunyomi_ja": "おのれ",
    "kunyomi": "onore",
    "onyomi_ja": "コ、キ",
    "onyomi": "ko, ki",
    "examples": [
      [
        "自己（じこ）",
        "self, oneself"
      ],
      [
        "利己主義（りこしゅぎ）",
        "egoism, selfishness"
      ],
      [
        "知己（ちき）",
        "acquaintance, friend"
      ],
      [
        "克己心（こっきしん）",
        "spirit of self-denial/self-control"
      ],
      [
        "己（おのれ）",
        "oneself, you [insulting]"
      ]
    ],
    "radical": "⼰",
    "rad_order": 58,
    "rad_stroke": 3,
    "rad_name_ja": "おのれ",
    "rad_name": "onore",
    "rad_meaning": "self",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "后",
    "kname": "(koutai)gou",
    "kstroke": 6,
    "kmeaning": "empress",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "皇后（こうごう）",
        "empress"
      ],
      [
        "皇后陛下（こうごうへいか）",
        "her majesty the Empress"
      ],
      [
        "皇太后（こうたいごう）",
        "Queen Mother"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "孝",
    "kname": "(oya)kou(kou)",
    "kstroke": 7,
    "kmeaning": "filial piety",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "忠孝（ちゅうこう）",
        "loyalty and filial piety"
      ],
      [
        "親孝行な（おやこうこうな）",
        "having filial piety [adj.]"
      ],
      [
        "親不孝な（おやふこうな）",
        "lacking filial piety [adj.]"
      ],
      [
        "孝行する（こうこうする）",
        "exercise filial piety [v.i.]"
      ]
    ],
    "radical": "⼦",
    "rad_order": 46,
    "rad_stroke": 3,
    "rad_name_ja": "こ",
    "rad_name": "ko",
    "rad_meaning": "child, son",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "紅",
    "kname": "beni",
    "kstroke": 9,
    "kmeaning": "crimson, deep red, rouge",
    "kgrade": 6,
    "kunyomi_ja": "べに、くれない",
    "kunyomi": "beni, kurenai",
    "onyomi_ja": "コウ、ク",
    "onyomi": "kou, ku",
    "examples": [
      [
        "紅白（こうはく）",
        "red and white, auspicious colors"
      ],
      [
        "紅梅（こうばい）",
        "red-blossomed plum tree"
      ],
      [
        "紅葉（こうよう）",
        "autumn colors"
      ],
      [
        "紅茶（こうちゃ）",
        "black tea"
      ],
      [
        "深紅（しんく）",
        "deep crimson"
      ],
      [
        "紅色（べにいろ）",
        "red color"
      ],
      [
        "紅花（べにばな）",
        "safflower"
      ],
      [
        "口紅（くちべに）",
        "lipstick"
      ],
      [
        "紅（くれない）",
        "deep red, crimson"
      ],
      [
        "*紅葉（もみじ）",
        "Japanese maple"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "鋼",
    "kname": "hagane",
    "kstroke": 16,
    "kmeaning": "steel",
    "kgrade": 6,
    "kunyomi_ja": "はがね",
    "kunyomi": "hagane",
    "onyomi_ja": "コウ",
    "onyomi": "kou",
    "examples": [
      [
        "鋼材（こうざい）",
        "material made from steel"
      ],
      [
        "鋼板（こうはん）",
        "steel sheet, steel plate"
      ],
      [
        "鋼管（こうかん）",
        "steel pipe"
      ],
      [
        "製鋼（せいこう）",
        "steel manufacture"
      ],
      [
        "鉄鋼（てっこう）",
        "iron and steel"
      ],
      [
        "鋼（はがね）",
        "steel"
      ],
      [
        "鋼色（はがねいろ）",
        "steel blue"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "刻",
    "kname": "kiza(mu)",
    "kstroke": 8,
    "kmeaning": "engrave, carve, chop up, point of time",
    "kgrade": 6,
    "kunyomi_ja": "きざ、きざむ、きざみ",
    "kunyomi": "kiza, kizamu, kizami",
    "onyomi_ja": "コク",
    "onyomi": "koku",
    "examples": [
      [
        "刻印（こくいん）",
        "carved seal"
      ],
      [
        "刻一刻（こくいっこく）",
        "moment by moment"
      ],
      [
        "彫刻（ちょうこく）",
        "carving, engraving, sculpture"
      ],
      [
        "時刻（じこく）",
        "time, moment"
      ],
      [
        "定刻（ていこく）",
        "appointed time"
      ],
      [
        "即刻（そっこく）",
        "immediately, at once, instantly"
      ],
      [
        "夕刻（ゆうこく）",
        "evening, evening hour"
      ],
      [
        "深刻な（しんこくな）",
        "serious"
      ],
      [
        "遅刻する（ちこくする）",
        "be late [v.i.]"
      ],
      [
        "刻む（きざむ）",
        "mince, carve, chop up, hash"
      ],
      [
        "小刻みに（こきざみに）",
        "bit by bit"
      ],
      [
        "五分刻みに（ごふんきざみに）",
        "every 5 minutes"
      ]
    ],
    "radical": "⺉",
    "rad_order": 23,
    "rad_stroke": 2,
    "rad_name_ja": "りっとう",
    "rad_name": "rittou",
    "rad_meaning": "knife, sword",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "穀",
    "kname": "koku(motsu)",
    "kstroke": 14,
    "kmeaning": "cereal, grain",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "コク",
    "onyomi": "koku",
    "examples": [
      [
        "穀物（こくもつ）",
        "grain, cereal"
      ],
      [
        "穀類（こくるい）",
        "grains"
      ],
      [
        "穀倉（こくそう）",
        "granary"
      ],
      [
        "五穀（ごこく）",
        "the 5 grains"
      ],
      [
        "脱穀機（だっこくき）",
        "grain threshing machine"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "砂",
    "kname": "suna",
    "kstroke": 9,
    "kmeaning": "sand",
    "kgrade": 6,
    "kunyomi_ja": "すな",
    "kunyomi": "suna",
    "onyomi_ja": "サ、シャ",
    "onyomi": "sa, sha",
    "examples": [
      [
        "砂漠（さばく）",
        "desert"
      ],
      [
        "砂丘（さきゅう）",
        "sand dune, sand hill"
      ],
      [
        "砂州（さす）",
        "reef, sandbar, sandbank"
      ],
      [
        "砂糖（さとう）",
        "sugar"
      ],
      [
        "砂金（さきん）",
        "gold dust"
      ],
      [
        "土砂（どしゃ）",
        "earth and sand"
      ],
      [
        "土砂崩れ（どしゃくずれ）",
        "landslide"
      ],
      [
        "砂（すな）",
        "sand"
      ],
      [
        "砂地（すなち）",
        "sandy soil"
      ],
      [
        "砂場（すなば）",
        "sand pit"
      ],
      [
        "砂浜（すなはま）",
        "sandy beach"
      ],
      [
        "*砂利（じゃり）",
        "gravel"
      ]
    ],
    "radical": "",
    "rad_order": 143,
    "rad_stroke": 5,
    "rad_name_ja": "いしへん",
    "rad_name": "ishihen",
    "rad_meaning": "stone",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "裁",
    "kname": "sai-saba(ku)",
    "kstroke": 12,
    "kmeaning": "cut out, judge",
    "kgrade": 6,
    "kunyomi_ja": "た、さば、たつ、さばく",
    "kunyomi": "ta, saba, tatsu, sabaku",
    "onyomi_ja": "サイ",
    "onyomi": "sai",
    "examples": [
      [
        "裁判（さいばん）",
        "trial, judgment"
      ],
      [
        "裁判所（さいばんしょ）",
        "court, courthouse"
      ],
      [
        "裁縫（さいほう）",
        "sewing"
      ],
      [
        "裁量（さいりょう）",
        "discretion"
      ],
      [
        "洋裁（ようさい）",
        "dressmaking"
      ],
      [
        "制裁（せいさい）",
        "restraint, sanctions, punishment"
      ],
      [
        "体裁（ていさい）",
        "appearance, format, decency"
      ],
      [
        "独裁（どくさい）",
        "dictatorship, despotism"
      ],
      [
        "総裁（そうさい）",
        "president"
      ],
      [
        "仲裁する（ちゅうさいする）",
        "arbitrate, intercede"
      ],
      [
        "裁つ（たつ）",
        "cut [v.t.]"
      ],
      [
        "裁く（さばく）",
        "judge [v.t.]"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "策",
    "kname": "(zengo)saku",
    "kstroke": 12,
    "kmeaning": "scheme, measure, plan, means, policy",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "サク",
    "onyomi": "saku",
    "examples": [
      [
        "策（さく）",
        "plan, policy"
      ],
      [
        "策略（さくりゃく）",
        "scheme, tactic, strategy"
      ],
      [
        "策士（さくし）",
        "intriguer, tactician, schemer"
      ],
      [
        "対策（たいさく）",
        "counter-plan, counter-measure"
      ],
      [
        "政策（せいさく）",
        "government policy"
      ],
      [
        "方策（ほうさく）",
        "plan, policy"
      ],
      [
        "善後策（ぜんごさく）",
        "remedy, countermeasure"
      ]
    ],
    "radical": "⺮",
    "rad_order": 154,
    "rad_stroke": 6,
    "rad_name_ja": "たけかんむり",
    "rad_name": "takekanmuri",
    "rad_meaning": "bamboo",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "話",
    "kname": "wa-hana(su)",
    "kstroke": 13,
    "kmeaning": "speak",
    "kgrade": 2,
    "kunyomi_ja": "はな、はなす、はなし",
    "kunyomi": "hana, hanasu, hanashi",
    "onyomi_ja": "ワ",
    "onyomi": "wa",
    "examples": [
      [
        "電話（でんわ）",
        "telephone"
      ],
      [
        "会話（かいわ）",
        "conversation"
      ],
      [
        "話題（わだい）",
        "topic"
      ],
      [
        "童話（どうわ）",
        "fairy tale"
      ],
      [
        "話す（はなす）",
        "speak"
      ],
      [
        "話し方（はなしかた）",
        "way of talking"
      ],
      [
        "話（はなし）",
        "story, conversation"
      ],
      [
        "話し中（はなしちゅう）",
        "while talking, the line is busy"
      ],
      [
        "笑い話（わらいばなし）",
        "funny story"
      ],
      [
        "昔話（むかしばなし）",
        "folklore"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "蚕",
    "kname": "kaiko",
    "kstroke": 10,
    "kmeaning": "silkworm",
    "kgrade": 6,
    "kunyomi_ja": "かいこ",
    "kunyomi": "kaiko",
    "onyomi_ja": "サン",
    "onyomi": "san",
    "examples": [
      [
        "蚕糸（さんし）",
        "silk thread, silk yarn"
      ],
      [
        "養蚕（ようさん）",
        "sericulture, silkworm culture"
      ],
      [
        "蚕食する（さんしょくする）",
        "encroach, invade"
      ],
      [
        "蚕（かいこ）",
        "silkworm"
      ]
    ],
    "radical": "⾍",
    "rad_order": 174,
    "rad_stroke": 6,
    "rad_name_ja": "むし",
    "rad_name": "mushi",
    "rad_meaning": "worm, insect, bug",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "至",
    "kname": "shi-ita(ru)",
    "kstroke": 6,
    "kmeaning": "come to, arrive, lead to",
    "kgrade": 6,
    "kunyomi_ja": "いた、いたる",
    "kunyomi": "ita, itaru",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "至急（しきゅう）",
        "urgent, pressing"
      ],
      [
        "至上（しじょう）",
        "supremacy"
      ],
      [
        "至難（しなん）",
        "most difficult, next to impossible"
      ],
      [
        "至極（しごく）",
        "very, extremely, exceedingly"
      ],
      [
        "夏至（げし）",
        "summer solstice"
      ],
      [
        "冬至（とうじ）",
        "winter solstice"
      ],
      [
        "必至（ひっし）",
        "inevitable, desperate"
      ],
      [
        "至る（いたる）",
        "come, arrive"
      ],
      [
        "至る所（いたるところ）",
        "everywhere"
      ]
    ],
    "radical": "⾄",
    "rad_order": 167,
    "rad_stroke": 6,
    "rad_name_ja": "いたる",
    "rad_name": "itaru",
    "rad_meaning": "to arrive, reach",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "姿",
    "kname": "sugata",
    "kstroke": 9,
    "kmeaning": "figure, form, shape, appearance, posture",
    "kgrade": 6,
    "kunyomi_ja": "すがた",
    "kunyomi": "sugata",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "姿勢（しせい）",
        "attitude, posture"
      ],
      [
        "姿態（したい）",
        "figure, form, style"
      ],
      [
        "容姿（ようし）",
        "appearance, figure"
      ],
      [
        "雄姿（ゆうし）",
        "gallant figure"
      ],
      [
        "姿（すがた）",
        "figure, shape, appearance"
      ],
      [
        "姿見（すがたみ）",
        "full-length mirror"
      ],
      [
        "後ろ姿（うしろすがた）",
        "back view"
      ]
    ],
    "radical": "⼥",
    "rad_order": 44,
    "rad_stroke": 3,
    "rad_name_ja": "おんな",
    "rad_name": "onna",
    "rad_meaning": "woman",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "視",
    "kname": "shi(ya)",
    "kstroke": 11,
    "kmeaning": "regard, consider, see, vision",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "視野（しや）",
        "field of vision, outlook"
      ],
      [
        "視界（しかい）",
        "field of vision"
      ],
      [
        "視力（しりょく）",
        "eyesight"
      ],
      [
        "視点（してん）",
        "point of view"
      ],
      [
        "視聴者（しちょうしゃ）",
        "viewer, audience"
      ],
      [
        "警視庁（けいしちょう）",
        "police headquarters"
      ],
      [
        "近視（きんし）",
        "shortsightedness"
      ],
      [
        "視察する（しさつする）",
        "inspect, observe"
      ],
      [
        "軽視する（けいしする）",
        "think little of, ignore, slight"
      ],
      [
        "無視する（むしする）",
        "disregard, ignore"
      ],
      [
        "監視する（かんしする）",
        "observe, guard, inspect"
      ],
      [
        "重視する（じゅうしする）",
        "regard highly"
      ]
    ],
    "radical": "⾒",
    "rad_order": 179,
    "rad_stroke": 7,
    "rad_name_ja": "みる",
    "rad_name": "miru",
    "rad_meaning": "to see",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "磁",
    "kname": "ji(ryoku)",
    "kstroke": 14,
    "kmeaning": "magnetism, magnetic",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジ",
    "onyomi": "ji",
    "examples": [
      [
        "磁石（じしゃく）",
        "magnet"
      ],
      [
        "磁力（じりょく）",
        "magnetism, magnetic force"
      ],
      [
        "磁気（じき）",
        "magnetism"
      ],
      [
        "磁場（じば）",
        "magnetic field"
      ],
      [
        "磁極（じきょく）",
        "magnetic pole"
      ],
      [
        "磁器（じき）",
        "porcelain, china"
      ],
      [
        "電磁波（でんじは）",
        "electromagnetic waves"
      ]
    ],
    "radical": "",
    "rad_order": 143,
    "rad_stroke": 5,
    "rad_name_ja": "いしへん",
    "rad_name": "ishihen",
    "rad_meaning": "stone",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "樹",
    "kname": "ju(moku)",
    "kstroke": 16,
    "kmeaning": "standing tree, bush",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジュ",
    "onyomi": "ju",
    "examples": [
      [
        "樹木（じゅもく）",
        "trees and shrubs, arbor"
      ],
      [
        "樹脂（じゅし）",
        "resin"
      ],
      [
        "樹氷（じゅひょう）",
        "frost covered trees"
      ],
      [
        "樹海（じゅかい）",
        "sea of trees"
      ],
      [
        "樹皮（じゅひ）",
        "bark"
      ],
      [
        "植樹（しょくじゅ）",
        "tree-planting"
      ],
      [
        "果樹園（かじゅえん）",
        "orchard"
      ],
      [
        "街路樹（がいろじゅ）",
        "roadside trees"
      ],
      [
        "樹立する（じゅりつする）",
        "establish, found, set up"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宗",
    "kname": "shuu(kyou)",
    "kstroke": 8,
    "kmeaning": "religious sect, religion",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シュウ、ソウ",
    "onyomi": "shuu, sou",
    "examples": [
      [
        "宗教（しゅうきょう）",
        "religion"
      ],
      [
        "宗派（しゅうは）",
        "sect, denomination"
      ],
      [
        "浄土宗（じょうどしゅう）",
        "Pure Land sect, Jodo"
      ],
      [
        "天台宗（てんだいしゅう）",
        "Tendai sect"
      ],
      [
        "真言宗（しんごんしゅう）",
        "mantra sect, Shingon"
      ],
      [
        "改宗する（かいしゅうする）",
        "convert oneself [v.i.]"
      ],
      [
        "宗家（そうけ）",
        "head family of families"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "就",
    "kname": "shuu-tsu(ku)",
    "kstroke": 12,
    "kmeaning": "set about, engage (in an occupation), employ",
    "kgrade": 6,
    "kunyomi_ja": "つ、つく",
    "kunyomi": "tsu, tsuku",
    "onyomi_ja": "シュウ、ジュ",
    "onyomi": "shuu, ju",
    "examples": [
      [
        "就業時間（しゅうぎょうじかん）",
        "working hours"
      ],
      [
        "就職する（しゅうしょくする）",
        "find employment"
      ],
      [
        "就任する（しゅうにんする）",
        "assume office, be inaugurated"
      ],
      [
        "就航する（しゅうこうする）",
        "go into operation (ship, plane)"
      ],
      [
        "就学する（しゅうがくする）",
        "enter school, attend school"
      ],
      [
        "就労する（しゅうろうする）",
        "go to work, be at work"
      ],
      [
        "成就する（じょうじゅする）",
        "realize, complete"
      ],
      [
        "就ける（つける）",
        "put, place [v.t.]"
      ],
      [
        "就く（つく）",
        "take (a job) [v.i.]"
      ]
    ],
    "radical": "⺐",
    "rad_order": 52,
    "rad_stroke": 3,
    "rad_name_ja": "だいのまげあし",
    "rad_name": "dainomageashi",
    "rad_meaning": "lame leg",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "衆",
    "kname": "(min)shuu",
    "kstroke": 12,
    "kmeaning": "multitude, populace",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "シュウ、シュ",
    "onyomi": "shuu, shu",
    "examples": [
      [
        "民衆（みんしゅう）",
        "people, populace, masses"
      ],
      [
        "大衆（たいしゅう）",
        "general public"
      ],
      [
        "公衆（こうしゅう）",
        "the public"
      ],
      [
        "観衆（かんしゅう）",
        "spectators, onlookers"
      ],
      [
        "聴衆（ちょうしゅう）",
        "audience, attendance, hearers"
      ],
      [
        "群衆（ぐんしゅう）",
        "group, crowd, throng, mob"
      ],
      [
        "衆議院（しゅうぎいん）",
        "Lower House, House of Reps."
      ],
      [
        "アメリカ合衆国（がっしゅうこく）",
        "the United States of America"
      ]
    ],
    "radical": "⾎",
    "rad_order": 175,
    "rad_stroke": 6,
    "rad_name_ja": "ち",
    "rad_name": "chi",
    "rad_meaning": "blood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "縦",
    "kname": "tate",
    "kstroke": 16,
    "kmeaning": "vertical",
    "kgrade": 6,
    "kunyomi_ja": "たて",
    "kunyomi": "tate",
    "onyomi_ja": "ジュウ",
    "onyomi": "juu",
    "examples": [
      [
        "縦横に（じゅうおうに）",
        "in all directions, freely"
      ],
      [
        "縦断する（じゅうだんする）",
        "cut across, travel through"
      ],
      [
        "縦貫する（じゅうかんする）",
        "traverse, run through"
      ],
      [
        "操縦する（そうじゅうする）",
        "control, operate, pilot"
      ],
      [
        "縦（たて）",
        "length, height"
      ],
      [
        "縦書き（たてがき）",
        "vertical writing"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "開",
    "kname": "kai-hira(ku)",
    "kstroke": 12,
    "kmeaning": "open",
    "kgrade": 3,
    "kunyomi_ja": "ひら、ひらく、あ、あく、あける",
    "kunyomi": "hira, hiraku, a, aku, akeru",
    "onyomi_ja": "カイ",
    "onyomi": "kai",
    "examples": [
      [
        "開発する（かいはつする）",
        "develop"
      ],
      [
        "開放する（かいほうする）",
        "throw open"
      ],
      [
        "開設する（かいせつする）",
        "establish"
      ],
      [
        "開閉する（かいへいする）",
        "open and close"
      ],
      [
        "開始する（かいしする）",
        "start"
      ],
      [
        "公開する（こうかいする）",
        "present to the public"
      ],
      [
        "再開する（さいかいする）",
        "reopen"
      ],
      [
        "開く（ひらく）",
        "open [v.i., v.t.]"
      ],
      [
        "開く（あく）",
        "open [v.i.]"
      ],
      [
        "開ける（あける）",
        "open [v.t.]"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "縮",
    "kname": "chiji(mu)",
    "kstroke": 17,
    "kmeaning": "shrink",
    "kgrade": 6,
    "kunyomi_ja": "ちぢ、ちぢむ、ちぢまる、ちぢめる、ちぢれる、ちぢらす",
    "kunyomi": "chiji, chijimu, chijimaru, chijimeru, chijireru, chijirasu",
    "onyomi_ja": "シュク",
    "onyomi": "shuku",
    "examples": [
      [
        "縮尺（しゅくしゃく）",
        "reduced scale"
      ],
      [
        "軍縮（ぐんしゅく）",
        "armament reduction"
      ],
      [
        "縮小する（しゅくしょうする）",
        "reduce, curtail"
      ],
      [
        "収縮する（しゅうしゅくする）",
        "deflate, contract, shrink"
      ],
      [
        "伸縮する（しんしゅくする）",
        "expand and contract"
      ],
      [
        "短縮する（たんしゅくする）",
        "shorten, abbreviate"
      ],
      [
        "濃縮する（のうしゅくする）",
        "concentrate ( solution)"
      ],
      [
        "恐縮する（きょうしゅくする）",
        "feel obliged, feel indebted"
      ],
      [
        "縮む（ちぢむ）",
        "shrink, contract [v.i.]"
      ],
      [
        "縮める（ちぢめる）",
        "shrink, contract, shorten [v.t.]"
      ],
      [
        "縮らす（ちぢらす）",
        "curl, crimp [v.t.]"
      ],
      [
        "縮れる（ちぢれる）",
        "be wavy, be curled [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "処",
    "kname": "sho(chi)",
    "kstroke": 5,
    "kmeaning": "deal with, treat",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "処女（しょじょ）",
        "virgin, maiden"
      ],
      [
        "処方箋（しょほうせん）",
        "prescription"
      ],
      [
        "処置する（しょちする）",
        "treat [v.t.]"
      ],
      [
        "処罰する（しょばつする）",
        "punish"
      ],
      [
        "処刑する（しょけいする）",
        "execute"
      ],
      [
        "処分する（しょぶんする）",
        "dispose of, deal with, punish"
      ],
      [
        "処理する（しょりする）",
        "process, deal with"
      ],
      [
        "対処する（たいしょする）",
        "deal with, cope"
      ],
      [
        "善処する（ぜんしょする）",
        "handle carefully, use discretion"
      ]
    ],
    "radical": "⼏",
    "rad_order": 20,
    "rad_stroke": 2,
    "rad_name_ja": "きにょう",
    "rad_name": "kinyou",
    "rad_meaning": "table",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "署",
    "kname": "(shoubou)sho",
    "kstroke": 13,
    "kmeaning": "public-service station",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "署長（しょちょう）",
        "chief, head"
      ],
      [
        "署員（しょいん）",
        "staff member, station employee"
      ],
      [
        "部署（ぶしょ）",
        "one's post, one's station"
      ],
      [
        "警察署（けいさつしょ）",
        "police station"
      ],
      [
        "消防署（しょうぼうしょ）",
        "fire station"
      ],
      [
        "税務署（ぜいむしょ）",
        "tax office"
      ],
      [
        "署名する（しょめいする）",
        "sign (a document)"
      ],
      [
        "代署する（だいしょする）",
        "sign for another"
      ]
    ],
    "radical": "",
    "rad_order": 139,
    "rad_stroke": 5,
    "rad_name_ja": "よこめ",
    "rad_name": "yokome",
    "rad_meaning": "eye",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "諸",
    "kname": "sho(koku)",
    "kstroke": 15,
    "kmeaning": "various",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "諸説（しょせつ）",
        "various opinions"
      ],
      [
        "諸島（しょとう）",
        "archipelago, group of islands"
      ],
      [
        "諸君（しょくん）",
        "Gentlemen!, Ladies!"
      ],
      [
        "諸国（しょこく）",
        "various countries"
      ],
      [
        "諸般（しょはん）",
        "circumstances"
      ],
      [
        "諸問題（しょもんだい）",
        "various problems"
      ],
      [
        "諸行無常（しょぎょうむじょう）",
        "impermanence of worldly things"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "傷",
    "kname": "shou-kizu",
    "kstroke": 13,
    "kmeaning": "wound, injury, hurt",
    "kgrade": 6,
    "kunyomi_ja": "きず、いた、いたむ、いためる",
    "kunyomi": "kizu, ita, itamu, itameru",
    "onyomi_ja": "ショウ",
    "onyomi": "shou",
    "examples": [
      [
        "傷害事件（しょうがいじけん）",
        "assault [n.]"
      ],
      [
        "損傷（そんしょう）",
        "damage, injury"
      ],
      [
        "重傷（じゅうしょう）",
        "serious wound or injury"
      ],
      [
        "中傷する（ちゅうしょうする）",
        "slander, defame"
      ],
      [
        "負傷する（ふしょうする）",
        "be injured, be wounded"
      ],
      [
        "傷（きず）",
        "wound, injury, hurt, cut"
      ],
      [
        "傷口（きずぐち）",
        "wound"
      ],
      [
        "傷跡（きずあと）",
        "scar"
      ],
      [
        "傷つける（きずつける）",
        "hurt, wound [v.t.]"
      ],
      [
        "傷める（いためる）",
        "damage, impair, hurt [v.t.]"
      ],
      [
        "傷む（いたむ）",
        "be damaged, go bad [v.i.]"
      ],
      [
        "*火傷（やけど）",
        "burn [n.]"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "蒸",
    "kname": "mu(su)",
    "kstroke": 13,
    "kmeaning": "steam, evaporate",
    "kgrade": 6,
    "kunyomi_ja": "む、むす、むれる、むらす",
    "kunyomi": "mu, musu, mureru, murasu",
    "onyomi_ja": "ジョウ",
    "onyomi": "jou",
    "examples": [
      [
        "蒸気（じょうき）",
        "steam, vapor"
      ],
      [
        "蒸発する（じょうはつする）",
        "evaporate"
      ],
      [
        "蒸留する（じょうりゅうする）",
        "distill"
      ],
      [
        "蒸す（むす）",
        "steam, be humid"
      ],
      [
        "蒸し器（むしき）",
        "steamer"
      ],
      [
        "蒸し暑い（むしあつい）",
        "humid, sultry"
      ],
      [
        "蒸らす（むらす）",
        "steam, cook by steam [v.t.]"
      ],
      [
        "蒸れる（むれる）",
        "be well steamed [v.i.]"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "針",
    "kname": "shin-hari",
    "kstroke": 10,
    "kmeaning": "needle",
    "kgrade": 6,
    "kunyomi_ja": "はり",
    "kunyomi": "hari",
    "onyomi_ja": "シン",
    "onyomi": "shin",
    "examples": [
      [
        "針葉樹林（しんようじゅりん）",
        "conifer, needle-leaved tree"
      ],
      [
        "秒針（びょうしん）",
        "second hand"
      ],
      [
        "長針（ちょうしん）",
        "long hand"
      ],
      [
        "短針（たんしん）",
        "hour hand"
      ],
      [
        "指針（ししん）",
        "pointer, guiding principle"
      ],
      [
        "方針（ほうしん）",
        "objective, plan, policy"
      ],
      [
        "検針（けんしん）",
        "inspection of a meter"
      ],
      [
        "羅針盤（らしんばん）",
        "(mariner's) compass"
      ],
      [
        "避雷針（ひらいしん）",
        "lightning rod"
      ],
      [
        "針（はり）",
        "needle, fish hook, pointer, hand"
      ],
      [
        "針金（はりがね）",
        "wire"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "仁",
    "kname": "(kyou)nin",
    "kstroke": 4,
    "kmeaning": "benevolence, virtue, charity",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ジン、ニン",
    "onyomi": "jin, nin",
    "examples": [
      [
        "仁義（じんぎ）",
        "charity & righteousness"
      ],
      [
        "仁徳（じんとく）",
        "benevolence, goodness"
      ],
      [
        "仁愛（じんあい）",
        "benevolence, charity, love"
      ],
      [
        "仁王（におう）",
        "the two guardian Deva kings"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "垂",
    "kname": "sui-ta(reru)",
    "kstroke": 8,
    "kmeaning": "hang down, drip",
    "kgrade": 6,
    "kunyomi_ja": "た、たれる、たらす、たれ",
    "kunyomi": "ta, tareru, tarasu, tare",
    "onyomi_ja": "スイ",
    "onyomi": "sui",
    "examples": [
      [
        "垂線（すいせん）",
        "perpendicular line"
      ],
      [
        "懸垂（けんすい）",
        "pull-up, chinning exercise"
      ],
      [
        "虫垂炎（ちゅうすいえん）",
        "appendicitis"
      ],
      [
        "垂直な（すいちょくな）",
        "vertical, perpendicular"
      ],
      [
        "垂らす（たらす）",
        "hang, dangle, spill [v.t.]"
      ],
      [
        "垂れる（たれる）",
        "hang, dangle, droop [v.i]"
      ],
      [
        "垂れ（たれ）",
        "sauce, gravy, hanging"
      ],
      [
        "雨垂れ（あまだれ）",
        "raindrops"
      ]
    ],
    "radical": "⼟",
    "rad_order": 37,
    "rad_stroke": 3,
    "rad_name_ja": "つち",
    "rad_name": "tsuchi",
    "rad_meaning": "earth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "寸",
    "kname": "sun",
    "kstroke": 3,
    "kmeaning": "a bit of, unit of length",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "スン",
    "onyomi": "sun",
    "examples": [
      [
        "寸法（すんぽう）",
        "measurement, size"
      ],
      [
        "寸評（すんぴょう）",
        "brief review, thumbnail sketch"
      ],
      [
        "寸時（すんじ）",
        "moment, very short time"
      ],
      [
        "寸劇（すんげき）",
        "short play, skit"
      ],
      [
        "寸陰（すんいん）",
        "brief moment"
      ],
      [
        "一寸（いっすん）",
        "one sun (3.03 cm), a little"
      ],
      [
        "原寸大（げんすんだい）",
        "actual size, full size"
      ],
      [
        "寸前に（すんぜんに）",
        "just before"
      ],
      [
        "寸断する（すんだんする）",
        "cut to pieces"
      ]
    ],
    "radical": "⼨",
    "rad_order": 49,
    "rad_stroke": 3,
    "rad_name_ja": "すん",
    "rad_name": "sun",
    "rad_meaning": "inch, (2.25 cm)",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "閉",
    "kname": "hei-toji(ru)",
    "kstroke": 11,
    "kmeaning": "close",
    "kgrade": 6,
    "kunyomi_ja": "と、とじる、とざす、し、しめる、しまる",
    "kunyomi": "to, tojiru, tozasu, shi, shimeru, shimaru",
    "onyomi_ja": "ヘイ",
    "onyomi": "hei",
    "examples": [
      [
        "閉鎖的な（へいさてきな）",
        "unsociable, closed"
      ],
      [
        "開閉する（かいへいする）",
        "open and close"
      ],
      [
        "閉会する（へいかいする）",
        "close a meeting"
      ],
      [
        "閉店する（へいてんする）",
        "close shop"
      ],
      [
        "閉じる（とじる）",
        "close, end, shut [v.t.]"
      ],
      [
        "閉ざす（とざす）",
        "shut, be filled with anxiety [v.t.]"
      ],
      [
        "閉める（しめる）",
        "close [v.t.]"
      ],
      [
        "閉まる（しまる）",
        "close [v.i.]"
      ]
    ],
    "radical": "⾨",
    "rad_order": 208,
    "rad_stroke": 8,
    "rad_name_ja": "もんがまえ",
    "rad_name": "mongamae",
    "rad_meaning": "gate, door",
    "rad_position_ja": "かまえ, もんがまえ",
    "rad_position": "kamae, mongamae"
  },
  {
    "kanji": "盛",
    "kname": "saka(nna)",
    "kstroke": 11,
    "kmeaning": "prosperous, flourish, serve food",
    "kgrade": 6,
    "kunyomi_ja": "も、さか、もる、さかん、さかんな",
    "kunyomi": "mo, saka, moru, sakan, sakanna",
    "onyomi_ja": "セイ、ジョウ",
    "onyomi": "sei, jou",
    "examples": [
      [
        "盛衰（せいすい）",
        "rise and fall"
      ],
      [
        "隆盛（りゅうせい）",
        "prosperity"
      ],
      [
        "最盛期（さいせいき）",
        "golden age"
      ],
      [
        "盛況な（せいきょうな）",
        "successful, prosperous"
      ],
      [
        "盛大な（せいだいな）",
        "grand, prosperous, magnificent"
      ],
      [
        "繁盛する（はんじょうする）",
        "prosper, flourish, thrive"
      ],
      [
        "盛る（もる）",
        "pile up, dish up, heap up"
      ],
      [
        "山盛り（やまもり）",
        "a heap"
      ],
      [
        "酒盛り（さかもり）",
        "drinking bout, drinking party"
      ],
      [
        "目盛り（めもり）",
        "scale, gradation, point [n.]"
      ],
      [
        "盛んな（さかんな）",
        "prosperous, flourishing"
      ],
      [
        "働き盛り（はたらきざかり）",
        "prime of life"
      ]
    ],
    "radical": "⽫",
    "rad_order": 136,
    "rad_stroke": 5,
    "rad_name_ja": "さら",
    "rad_name": "sara",
    "rad_meaning": "plate, bowl",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "誠",
    "kname": "sei(jitsuna)",
    "kstroke": 13,
    "kmeaning": "sincerity, truth, reality, fidelity",
    "kgrade": 6,
    "kunyomi_ja": "まこと",
    "kunyomi": "makoto",
    "onyomi_ja": "セイ",
    "onyomi": "sei",
    "examples": [
      [
        "誠意（せいい）",
        "sincerity, good faith"
      ],
      [
        "忠誠（ちゅうせい）",
        "loyalty, sincerity"
      ],
      [
        "誠心誠意（せいしんせいい）",
        "in all sincerity"
      ],
      [
        "誠実な（せいじつな）",
        "sincere, honest, faithful"
      ],
      [
        "誠（まこと）",
        "truth, faith, fidelity"
      ],
      [
        "誠に（まことに）",
        "indeed, really, truly"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宣",
    "kname": "sen(den)",
    "kstroke": 9,
    "kmeaning": "proclaim, announce",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "宣教師（せんきょうし）",
        "missionary"
      ],
      [
        "宣戦布告（せんせんふこく）",
        "proclamation of war"
      ],
      [
        "独立宣言（どくりつせんげん）",
        "Declaration of Independence"
      ],
      [
        "宣言する（せんげんする）",
        "declare, proclaim, announce"
      ],
      [
        "宣伝する（せんでんする）",
        "publicize, propagandize"
      ],
      [
        "宣告する（せんこくする）",
        "pronounce, condemn"
      ],
      [
        "宣誓する（せんせいする）",
        "swear and oath"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "泉",
    "kname": "izumi",
    "kstroke": 9,
    "kmeaning": "spring, fountain",
    "kgrade": 6,
    "kunyomi_ja": "いずみ",
    "kunyomi": "izumi",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "温泉（おんせん）",
        "onsen, hot spring, spa"
      ],
      [
        "冷泉（れいせん）",
        "cold mineral spring"
      ],
      [
        "鉱泉（こうせん）",
        "mineral spring"
      ],
      [
        "源泉（げんせん）",
        "source"
      ],
      [
        "泉（いずみ）",
        "spring, fountain"
      ]
    ],
    "radical": "⽔",
    "rad_order": 109,
    "rad_stroke": 4,
    "rad_name_ja": "みず",
    "rad_name": "mizu",
    "rad_meaning": "water",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "染",
    "kname": "sen-so(meru)",
    "kstroke": 9,
    "kmeaning": "dye",
    "kgrade": 6,
    "kunyomi_ja": "そ、し、そめる、ぞめ、そまる、しみる、しみ",
    "kunyomi": "so, shi, someru, zome, somaru, shimiru, jimiru",
    "onyomi_ja": "セン",
    "onyomi": "sen",
    "examples": [
      [
        "染色（せんしょく）",
        "staining, stain, dyeing"
      ],
      [
        "染料（せんりょう）",
        "dyes"
      ],
      [
        "染色体（せんしょくたい）",
        "chromosome"
      ],
      [
        "伝染病（でんせんびょう）",
        "infectious disease, epidemic"
      ],
      [
        "染色する（せんしょくする）",
        "stain, dye"
      ],
      [
        "感染する（かんせんする）",
        "contract, be infected [v.i.]"
      ],
      [
        "汚染する（おせんする）",
        "pollute, contaminate [v.i.]"
      ],
      [
        "伝染する（でんせんする）",
        "contract, be infected [v.i.]"
      ],
      [
        "染める（そめる）",
        "dye, color [v.t.]"
      ],
      [
        "染まる（そまる）",
        "dye [v.i.]"
      ],
      [
        "染みる（しみる）",
        "pierce, permeate [v.i.]"
      ],
      [
        "染み（しみ）",
        "stain, spot"
      ]
    ],
    "radical": "⽊",
    "rad_order": 97,
    "rad_stroke": 4,
    "rad_name_ja": "き",
    "rad_name": "ki",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "善",
    "kname": "zen-yo(i)",
    "kstroke": 12,
    "kmeaning": "good",
    "kgrade": 6,
    "kunyomi_ja": "よ、よい",
    "kunyomi": "yo, yoi",
    "onyomi_ja": "ゼン",
    "onyomi": "zen",
    "examples": [
      [
        "善意（ぜんい）",
        "good faith, good will"
      ],
      [
        "善人（ぜんにん）",
        "good people"
      ],
      [
        "善行（ぜんこう）",
        "good deed"
      ],
      [
        "善悪（ぜんあく）",
        "good and evil"
      ],
      [
        "最善（さいぜん）",
        "the very best"
      ],
      [
        "親善試合（しんぜんじあい）",
        "friendly match"
      ],
      [
        "善良な（ぜんりょうな）",
        "virtuous, good"
      ],
      [
        "偽善的な（ぎぜんてきな）",
        "hypocritical"
      ],
      [
        "改善する（かいぜんする）",
        "better, improve"
      ],
      [
        "善い（よい）",
        "good, nice, pleasant"
      ]
    ],
    "radical": "⼝",
    "rad_order": 34,
    "rad_stroke": 3,
    "rad_name_ja": "くち",
    "rad_name": "kuchi",
    "rad_meaning": "mouth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "奏",
    "kname": "kana(deru)",
    "kstroke": 9,
    "kmeaning": "play music",
    "kgrade": 6,
    "kunyomi_ja": "かな、かなでる",
    "kunyomi": "kana, kanaderu",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "吹奏楽（すいそうがく）",
        "wind-instrument music"
      ],
      [
        "協奏曲（きょうそうきょく）",
        "concerto"
      ],
      [
        "演奏会（えんそうかい）",
        "concert"
      ],
      [
        "二重奏（にじゅうそう）",
        "instrumental duo"
      ],
      [
        "合奏する（がっそうする）",
        "play in concert"
      ],
      [
        "伴奏する（ばんそうする）",
        "accompany (music)"
      ],
      [
        "演奏する（えんそうする）",
        "perform (music)"
      ],
      [
        "奏でる（かなでる）",
        "play (an instrument)"
      ]
    ],
    "radical": "⼤",
    "rad_order": 43,
    "rad_stroke": 3,
    "rad_name_ja": "だい",
    "rad_name": "dai",
    "rad_meaning": "large, big",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "装",
    "kname": "(hou)sou(shi)",
    "kstroke": 12,
    "kmeaning": "dress, fit out, wear, pretend",
    "kgrade": 6,
    "kunyomi_ja": "よそお、よそおう",
    "kunyomi": "yosoo, yosoou",
    "onyomi_ja": "ソウ、ショウ",
    "onyomi": "sou, shou",
    "examples": [
      [
        "装置（そうち）",
        "equipment"
      ],
      [
        "服装（ふくそう）",
        "dress, clothes, outfit"
      ],
      [
        "洋装（ようそう）",
        "Western clothing"
      ],
      [
        "包装紙（ほうそうし）",
        "wrapping paper"
      ],
      [
        "仮装行列（かそうぎょうれつ）",
        "costume parade"
      ],
      [
        "装備する（そうびする）",
        "equip, fit out"
      ],
      [
        "改装する（かいそうする）",
        "remodel, reorganize"
      ],
      [
        "武装する（ぶそうする）",
        "arm [v.i.]"
      ],
      [
        "変装する（へんそうする）",
        "disguise oneself, masquerade"
      ],
      [
        "正装する（せいそうする）",
        "dress up, wear full dress"
      ],
      [
        "装束（しょうぞく）",
        "costume"
      ],
      [
        "装う（よそおう）",
        "dress, pretend, feign"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "層",
    "kname": "(kou)sou(biru)",
    "kstroke": 14,
    "kmeaning": "stratum, layer, level",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "階層（かいそう）",
        "class, social stratum, hierarchy"
      ],
      [
        "地層（ちそう）",
        "stratum"
      ],
      [
        "上層（じょうそう）",
        "upper stratum"
      ],
      [
        "下層（かそう）",
        "lower stratum"
      ],
      [
        "高層ビル（こうそうビル）",
        "skyscraper"
      ],
      [
        "成層圏（せいそうけん）",
        "stratosphere"
      ],
      [
        "知識層（ちしきそう）",
        "the intellectual class"
      ],
      [
        "読者層（どくしゃそう）",
        "class of readers"
      ]
    ],
    "radical": "⼫",
    "rad_order": 53,
    "rad_stroke": 3,
    "rad_name_ja": "しかばね",
    "rad_name": "shikabane",
    "rad_meaning": "corpse, awning",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "操",
    "kname": "ayatsu(ru)",
    "kstroke": 16,
    "kmeaning": "manipulate, operate, chastity",
    "kgrade": 6,
    "kunyomi_ja": "みさお、あやつ、あやつる",
    "kunyomi": "misao, ayatsu, ayatsuru",
    "onyomi_ja": "ソウ",
    "onyomi": "sou",
    "examples": [
      [
        "体操（たいそう）",
        "gymnastics, physical exercises"
      ],
      [
        "節操（せっそう）",
        "integrity, honor, chastity"
      ],
      [
        "操業する（そうぎょうする）",
        "operate, run"
      ],
      [
        "操作する（そうさする）",
        "operate, manage"
      ],
      [
        "操縦する（そうじゅうする）",
        "operate, control, pilot"
      ],
      [
        "操（みさお）",
        "chastity"
      ],
      [
        "操る（あやつる）",
        "manipulate, operate"
      ],
      [
        "操り人形（あやつりにんぎょう）",
        "puppet, marionette"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "友",
    "kname": "yuu-tomo",
    "kstroke": 4,
    "kmeaning": "friend",
    "kgrade": 2,
    "kunyomi_ja": "とも",
    "kunyomi": "tomo",
    "onyomi_ja": "ユウ",
    "onyomi": "yuu",
    "examples": [
      [
        "友人（ゆうじん）",
        "friend"
      ],
      [
        "友情（ゆうじょう）",
        "friendship"
      ],
      [
        "親友（しんゆう）",
        "close friend"
      ],
      [
        "友達（ともだち）",
        "friend"
      ]
    ],
    "radical": "⼜",
    "rad_order": 33,
    "rad_stroke": 2,
    "rad_name_ja": "また",
    "rad_name": "mata",
    "rad_meaning": "again, right hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "臓",
    "kname": "zou(motsu)",
    "kstroke": 19,
    "kmeaning": "internal organ",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ゾウ",
    "onyomi": "zou",
    "examples": [
      [
        "臓器（ぞうき）",
        "viscera, internal organs"
      ],
      [
        "臓物（ぞうもつ）",
        "entrails, giblets"
      ],
      [
        "内臓（ないぞう）",
        "internal organs, intestines"
      ],
      [
        "心臓（しんぞう）",
        "heart"
      ],
      [
        "肝臓（かんぞう）",
        "liver"
      ],
      [
        "腎臓（じんぞう）",
        "kidney"
      ],
      [
        "五臓六腑（ごぞうろっぷ）",
        "the internal organs"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "誕",
    "kname": "tan(joubi)",
    "kstroke": 15,
    "kmeaning": "be born, birth",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "タン",
    "onyomi": "tan",
    "examples": [
      [
        "誕生日（たんじょうび）",
        "birthday"
      ],
      [
        "生誕（せいたん）",
        "birth, nativity"
      ],
      [
        "降誕（こうたん）",
        "birth, nativity"
      ],
      [
        "誕生する（たんじょうする）",
        "be born"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "暖",
    "kname": "dan-atata(maru)",
    "kstroke": 13,
    "kmeaning": "warm",
    "kgrade": 6,
    "kunyomi_ja": "あたた、あたたかい、あたたまる、あたためる",
    "kunyomi": "atata, atatakai, atatamaru, atatameru",
    "onyomi_ja": "ダン",
    "onyomi": "dan",
    "examples": [
      [
        "暖流（だんりゅう）",
        "warm current"
      ],
      [
        "暖冬（だんとう）",
        "mild winter"
      ],
      [
        "暖房（だんぼう）",
        "heating system"
      ],
      [
        "暖炉（だんろ）",
        "fireplace, hearth"
      ],
      [
        "暖気（だんき）",
        "warmth"
      ],
      [
        "寒暖計（かんだんけい）",
        "thermometer"
      ],
      [
        "温暖な（おんだんな）",
        "warm [adj.]"
      ],
      [
        "暖かい（あたたかい）",
        "warm [adj.]"
      ],
      [
        "暖める（あたためる）",
        "warm, heat [v.t.]"
      ],
      [
        "暖まる（あたたまる）",
        "get warm, warm oneself [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 93,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宙",
    "kname": "chuu(gaeri)",
    "kstroke": 8,
    "kmeaning": "space, midair",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チュウ",
    "onyomi": "chuu",
    "examples": [
      [
        "宙返り（ちゅうがえり）",
        "somersault, loop"
      ],
      [
        "宙づり（ちゅうづり）",
        "hanging, suspended [n.]"
      ],
      [
        "宇宙（うちゅう）",
        "universe, cosmos, space"
      ],
      [
        "宇宙飛行士（うちゅうひこうし）",
        "astronaut"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "庁",
    "kname": "(keishi)chou",
    "kstroke": 5,
    "kmeaning": "government agency",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "庁舎（ちょうしゃ）",
        "government office building"
      ],
      [
        "官庁（かんちょう）",
        "government office"
      ],
      [
        "都庁（とちょう）",
        "Tokyo Metropolitan area office"
      ],
      [
        "県庁（けんちょう）",
        "prefectural office"
      ],
      [
        "警視庁（けいしちょう）",
        "police headquarters"
      ],
      [
        "環境庁（かんきょうちょう）",
        "the Department of Environment"
      ],
      [
        "気象庁（きしょうちょう）",
        "the Department of Meteorology"
      ]
    ],
    "radical": "⼴",
    "rad_order": 63,
    "rad_stroke": 3,
    "rad_name_ja": "まだれ",
    "rad_name": "madare",
    "rad_meaning": "slanting roof",
    "rad_position_ja": "たれ",
    "rad_position": "tare"
  },
  {
    "kanji": "頂",
    "kname": "chou-itada(ku)",
    "kstroke": 11,
    "kmeaning": "summit, receive humbly",
    "kgrade": 6,
    "kunyomi_ja": "いただ、いただく、いただき",
    "kunyomi": "itada, itadaku, itadaki",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "頂点（ちょうてん）",
        "top, summit"
      ],
      [
        "頂上（ちょうじょう）",
        "top, summit, peak"
      ],
      [
        "山頂（さんちょう）",
        "summit"
      ],
      [
        "絶頂（ぜっちょう）",
        "summit, peak, climax"
      ],
      [
        "有頂天（うちょうてん）",
        "ecstasy, rapture"
      ],
      [
        "登頂する（とうちょうする）",
        "climb to the summit"
      ],
      [
        "頂戴する（ちょうだいする）",
        "receive, be given [hum.]"
      ],
      [
        "頂く（いただく）",
        "receive, take food [hum.]"
      ],
      [
        "頂けない（いただけない）",
        "pitiful, miserable, shameful"
      ],
      [
        "頂（いただき）",
        "top, summit, spire, peak, crown"
      ]
    ],
    "radical": "⾴",
    "rad_order": 217,
    "rad_stroke": 9,
    "rad_name_ja": "おおがい",
    "rad_name": "oogai",
    "rad_meaning": "head, page",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "潮",
    "kname": "chou-shio",
    "kstroke": 15,
    "kmeaning": "tide",
    "kgrade": 6,
    "kunyomi_ja": "しお",
    "kunyomi": "shio",
    "onyomi_ja": "チョウ",
    "onyomi": "chou",
    "examples": [
      [
        "潮流（ちょうりゅう）",
        "tide, tidal current, trend"
      ],
      [
        "干潮（かんちょう）",
        "ebb tide"
      ],
      [
        "満潮（まんちょう）",
        "high tide"
      ],
      [
        "潮（しお）",
        "tide"
      ],
      [
        "潮時（しおどき）",
        "timing of tides, opportunity"
      ],
      [
        "潮干狩り（しおひがり）",
        "shell gathering"
      ],
      [
        "血潮（ちしお）",
        "blood"
      ],
      [
        "黒潮（くろしお）",
        "the Japan Current"
      ],
      [
        "引き潮（ひきしお）",
        "ebb tide"
      ],
      [
        "満ち潮（みちしお）",
        "high tide"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "賃",
    "kname": "(ya)chin",
    "kstroke": 13,
    "kmeaning": "wage, charges, fare, fee",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "チン",
    "onyomi": "chin",
    "examples": [
      [
        "賃金（ちんぎん）",
        "wages"
      ],
      [
        "賃上げ（ちんあげ）",
        "wage increase"
      ],
      [
        "家賃（やちん）",
        "rent"
      ],
      [
        "運賃（うんちん）",
        "freight rates, fare"
      ],
      [
        "工賃（こうちん）",
        "wages, pay"
      ],
      [
        "手間賃（てまちん）",
        "wages for labor, pay"
      ],
      [
        "電車賃（でんしゃちん）",
        "train fare"
      ],
      [
        "借り賃（かりちん）",
        "rent fare"
      ]
    ],
    "radical": "⾙",
    "rad_order": 187,
    "rad_stroke": 7,
    "rad_name_ja": "かい",
    "rad_name": "kai",
    "rad_meaning": "shell, property, wealth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "討",
    "kname": "tou-u(tsu)",
    "kstroke": 10,
    "kmeaning": "attack, study, examine, discuss",
    "kgrade": 6,
    "kunyomi_ja": "う、うつ",
    "kunyomi": "u, utsu",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "討議する（とうぎする）",
        "debate, discuss"
      ],
      [
        "討論する（とうろんする）",
        "debate, discuss"
      ],
      [
        "討伐する（とうばつする）",
        "subjugate, suppress"
      ],
      [
        "検討する（けんとうする）",
        "consider, examine"
      ],
      [
        "討つ（うつ）",
        "attack, strike, shoot, avenge"
      ],
      [
        "討ち死に（うちじに）",
        "death in battle"
      ],
      [
        "敵討ち（かたきうち）",
        "revenge [n.]"
      ],
      [
        "不意討ち（ふいうち）",
        "surprise attack"
      ]
    ],
    "radical": "",
    "rad_order": 183,
    "rad_stroke": 7,
    "rad_name_ja": "ごんべん",
    "rad_name": "gonben",
    "rad_meaning": "words, to speak, say",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "党",
    "kname": "(minshu)tou",
    "kstroke": 10,
    "kmeaning": "party, faction",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "党（とう）",
        "political party"
      ],
      [
        "党員（とういん）",
        "party member"
      ],
      [
        "党首（とうしゅ）",
        "party leader"
      ],
      [
        "党派（とうは）",
        "faction"
      ],
      [
        "党大会（とうたいかい）",
        "party convention"
      ],
      [
        "野党（やとう）",
        "opposition party"
      ],
      [
        "与党（よとう）",
        "party in power"
      ],
      [
        "政党（せいとう）",
        "political party"
      ],
      [
        "徒党（ととう）",
        "clique, faction, cabal"
      ],
      [
        "社会党（しゃかいとう）",
        "Socialist Party"
      ],
      [
        "共和党（きょうわとう）",
        "Republican Party"
      ],
      [
        "民主党（みんしゅとう）",
        "Democratic party"
      ]
    ],
    "radical": "⼉",
    "rad_order": 13,
    "rad_stroke": 2,
    "rad_name_ja": "ひとあし",
    "rad_name": "hitoashi",
    "rad_meaning": "human legs",
    "rad_position_ja": "あし",
    "rad_position": "ashi"
  },
  {
    "kanji": "上",
    "kname": "jou-ue",
    "kstroke": 3,
    "kmeaning": "up",
    "kgrade": 1,
    "kunyomi_ja": "うえ、うわ、かみ、あ、あげる、あがる、のぼ、のぼる",
    "kunyomi": "ue, uwa, kami, a, ageru, agaru, nobo, noboru",
    "onyomi_ja": "ジョウ、ショウ",
    "onyomi": "jou, shou",
    "examples": [
      [
        "上下する（じょうげする）",
        "go up and down"
      ],
      [
        "頂上（ちょうじょう）",
        "summit"
      ],
      [
        "上手（じょうず）",
        "skillful"
      ],
      [
        "以上（いじょう）",
        "more than, above"
      ],
      [
        "上人（しょうにん）",
        "priest"
      ],
      [
        "上（うえ）",
        "above, on top, upper part of"
      ],
      [
        "目上（めうえ）",
        "superior(s)"
      ],
      [
        "上回る（うわまわる）",
        "exceed"
      ],
      [
        "川上（かわかみ）",
        "upper reaches of a river"
      ],
      [
        "上がる（あがる）",
        "rise, climb up [v.i.]"
      ],
      [
        "上げる（あげる）",
        "raise [v.t.]"
      ],
      [
        "上る（のぼる）",
        "rise, climb up [v.i.]"
      ]
    ],
    "radical": "⼀",
    "rad_order": 1,
    "rad_stroke": 1,
    "rad_name_ja": "いち",
    "rad_name": "ichi",
    "rad_meaning": "one, horizontal stroke",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "達",
    "kname": "tatsu-tachi",
    "kstroke": 12,
    "kmeaning": "attain, suffix for plural",
    "kgrade": 4,
    "kunyomi_ja": "たち",
    "kunyomi": "tachi",
    "onyomi_ja": "タツ",
    "onyomi": "tatsu",
    "examples": [
      [
        "到達する（とうたつする）",
        "reach, arrive"
      ],
      [
        "発達する（はったつする）",
        "develop"
      ],
      [
        "調達する（ちょうたつする）",
        "supply"
      ],
      [
        "配達する（はいたつする）",
        "deliver"
      ],
      [
        "速達（そくたつ）",
        "express delivery"
      ],
      [
        "達する（たっする）",
        "reach"
      ],
      [
        "私達（わたしたち）",
        "we"
      ],
      [
        "子供達（こどもたち）",
        "children"
      ],
      [
        "友達（ともだち）",
        "friends"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "糖",
    "kname": "(budou)tou",
    "kstroke": 16,
    "kmeaning": "sugar",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "トウ",
    "onyomi": "tou",
    "examples": [
      [
        "糖分（とうぶん）",
        "sugar content"
      ],
      [
        "糖尿病（とうにょうびょう）",
        "diabetes"
      ],
      [
        "砂糖（さとう）",
        "sugar"
      ],
      [
        "果糖（かとう）",
        "fructose"
      ],
      [
        "ブドウ糖（ぶどうとう）",
        "glucose, grape sugar"
      ],
      [
        "グラニュー糖（グラニューとう）",
        "granulated sugar"
      ],
      [
        "血糖値（けっとうち）",
        "blood sugar level"
      ],
      [
        "製糖する（せいとうする）",
        "produce sugar"
      ]
    ],
    "radical": "",
    "rad_order": 156,
    "rad_stroke": 6,
    "rad_name_ja": "こめへん",
    "rad_name": "komehen",
    "rad_meaning": "rice",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "納",
    "kname": "nou-osa(meru)",
    "kstroke": 10,
    "kmeaning": "pay, accept, put away, supply",
    "kgrade": 6,
    "kunyomi_ja": "おさ、 おさめる、おさまる",
    "kunyomi": "osa, osameru, osamaru",
    "onyomi_ja": "ノウ、ナツ、ナ、ナン、トウ",
    "onyomi": "nou, nat, na, nan, tou",
    "examples": [
      [
        "納期（のうき）",
        "date of delivery or payment"
      ],
      [
        "納税する（のうぜいする）",
        "pay taxes"
      ],
      [
        "納入する（のうにゅうする）",
        "pay, supply"
      ],
      [
        "滞納する（たいのうする）",
        "default, fail to pay"
      ],
      [
        "収納する（しゅうのうする）",
        "receive, store, put away"
      ],
      [
        "納豆（なっとう）",
        "natto"
      ],
      [
        "納得する（なっとくする）",
        "consent, assent, understand"
      ],
      [
        "納屋（なや）",
        "shed, barn, outhouse"
      ],
      [
        "納戸（なんど）",
        "back room, storage room"
      ],
      [
        "出納係（すいとうがかり）",
        "cashier, treasurer, teller"
      ],
      [
        "納める（おさめる）",
        "obtain, reap, pay [v.t.]"
      ],
      [
        "納まる（おさまる）",
        "be in place, be settled [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "脳",
    "kname": "(zu)nou",
    "kstroke": 11,
    "kmeaning": "brain",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ノウ",
    "onyomi": "nou",
    "examples": [
      [
        "脳（のう）",
        "brain"
      ],
      [
        "脳髄（のうずい）",
        "brain"
      ],
      [
        "脳炎（のうえん）",
        "brain inflammation"
      ],
      [
        "脳死（のうし）",
        "brain death"
      ],
      [
        "脳裏（のうり）",
        "one's mind"
      ],
      [
        "脳細胞（のうさいぼう）",
        "brain cell"
      ],
      [
        "脳卒中（のうそっちゅう）",
        "stroke, cerebral hemorrhage"
      ],
      [
        "大脳（だいのう）",
        "cerebrum"
      ],
      [
        "小脳（しょうのう）",
        "cerebellum"
      ],
      [
        "頭脳（ずのう）",
        "head, brains, intellect"
      ],
      [
        "首脳（しゅのう）",
        "head, brains"
      ],
      [
        "洗脳する（せんのうする）",
        "brainwash"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "拝",
    "kname": "oga(mu)",
    "kstroke": 8,
    "kmeaning": "worship, humbly, pray, venerate",
    "kgrade": 6,
    "kunyomi_ja": "おが、おがむ",
    "kunyomi": "oga, ogamu",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "拝殿（はいでん）",
        "front shrine, hall of worship"
      ],
      [
        "拝啓（はいけい）",
        "Dear"
      ],
      [
        "拝金主義（はいきんしゅぎ）",
        "worship of money"
      ],
      [
        "拝見する（はいけんする）",
        "look at, see [hum.]"
      ],
      [
        "拝借する（はいしゃくする）",
        "borrow [hum.]"
      ],
      [
        "拝聴する（はいちょうする）",
        "listen to [hum.]"
      ],
      [
        "礼拝する（れいはいする）",
        "worship [v.t.]"
      ],
      [
        "崇拝する（すうはいする）",
        "adore, idolize, worship"
      ],
      [
        "参拝する（さんぱいする）",
        "pay visit to worship"
      ],
      [
        "拝む（おがむ）",
        "worship, pray, bow to"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "肺",
    "kname": "hai(katsuryou)",
    "kstroke": 9,
    "kmeaning": "lung",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "肺（はい）",
        "lung"
      ],
      [
        "肺臓（はいぞう）",
        "lungs"
      ],
      [
        "肺癌（はいがん）",
        "lung cancer"
      ],
      [
        "肺炎（はいえん）",
        "pneumonia"
      ],
      [
        "肺活量（はいかつりょう）",
        "lung capacity"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "俳",
    "kname": "hai(ku)",
    "kstroke": 10,
    "kmeaning": "haiku, actor",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハイ",
    "onyomi": "hai",
    "examples": [
      [
        "俳句（はいく）",
        "haiku poetry"
      ],
      [
        "俳人（はいじん）",
        "haiku poet"
      ],
      [
        "俳壇（はいだん）",
        "the world of the haiku"
      ],
      [
        "俳優（はいゆう）",
        "actor, actress"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "班",
    "kname": "han(chou)",
    "kstroke": 10,
    "kmeaning": "squad, group",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ハン",
    "onyomi": "han",
    "examples": [
      [
        "班（はん）",
        "group, party, section"
      ],
      [
        "斑点（はんてん）",
        "speck, fleck"
      ],
      [
        "班長（はんちょう）",
        "squad leader, group leader"
      ],
      [
        "二班（にはん）",
        "two groups, second group"
      ],
      [
        "取材班（しゅざいはん）",
        "team of reporters"
      ],
      [
        "作業班（さぎょうはん）",
        "work group"
      ],
      [
        "救護班（きゅうごはん）",
        "relief squad, rescue party"
      ]
    ],
    "radical": "",
    "rad_order": 120,
    "rad_stroke": 4,
    "rad_name_ja": "おうへん",
    "rad_name": "ouhen",
    "rad_meaning": "jewelry, jeweled king",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "秘",
    "kname": "hi(mitsu)",
    "kstroke": 10,
    "kmeaning": "secret",
    "kgrade": 6,
    "kunyomi_ja": "ひ、ひめる",
    "kunyomi": "hi, himeru",
    "onyomi_ja": "ヒ",
    "onyomi": "hi",
    "examples": [
      [
        "秘密（ひみつ）",
        "secret, secrecy"
      ],
      [
        "秘訣（ひけつ）",
        "key, the secret (of)"
      ],
      [
        "秘書（ひしょ）",
        "secretary"
      ],
      [
        "秘伝（ひでん）",
        "secret, mystery, secret formula"
      ],
      [
        "秘蔵（ひぞう）",
        "treasure, prize, cherish"
      ],
      [
        "秘宝（ひほう）",
        "treasure, treasured article"
      ],
      [
        "極秘（ごくひ）",
        "absolute secrecy"
      ],
      [
        "便秘（べんぴ）",
        "constipation"
      ],
      [
        "神秘的な（しんぴてきな）",
        "mysterious"
      ],
      [
        "黙秘する（もくひする）",
        "keep silent, stand mute"
      ],
      [
        "秘める（ひめる）",
        "hide, keep to oneself"
      ]
    ],
    "radical": "⽲",
    "rad_order": 145,
    "rad_stroke": 5,
    "rad_name_ja": "のぎへん",
    "rad_name": "nogihen",
    "rad_meaning": "grain",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "腹",
    "kname": "fuku-hara",
    "kstroke": 13,
    "kmeaning": "belly, heart, mind",
    "kgrade": 6,
    "kunyomi_ja": "はら",
    "kunyomi": "hara",
    "onyomi_ja": "フク",
    "onyomi": "fuku",
    "examples": [
      [
        "腹部（ふくぶ）",
        "abdomen"
      ],
      [
        "腹痛（ふくつう）",
        "stomach ache, abdominal pain"
      ],
      [
        "腹心（ふくしん）",
        "confidant, trusted friend"
      ],
      [
        "満腹（まんぷく）",
        "full, glutted [n.]"
      ],
      [
        "空腹（くうふく）",
        "hunger"
      ],
      [
        "切腹する（せっぷくする）",
        "commit seppuku"
      ],
      [
        "立腹する（りっぷくする）",
        "anger, get angry"
      ],
      [
        "腹（はら）",
        "abdomen, belly, stomach"
      ],
      [
        "腹違い（はらちがい）",
        "born of a different mother [n.]"
      ],
      [
        "腹を立てる（はらをたてる）",
        "take offense, get angry [v.t.]"
      ],
      [
        "腹が立つ（はらがたつ）",
        "take offense, get angry [v.i.]"
      ]
    ],
    "radical": "",
    "rad_order": 96,
    "rad_stroke": 4,
    "rad_name_ja": "にくづき",
    "rad_name": "nikuzuki",
    "rad_meaning": "meat, flesh",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "奮",
    "kname": "fun(sensuru)",
    "kstroke": 16,
    "kmeaning": "rouse up, be enlivened",
    "kgrade": 6,
    "kunyomi_ja": "ふる、ふるう",
    "kunyomi": "furu, furuu",
    "onyomi_ja": "フン",
    "onyomi": "fun",
    "examples": [
      [
        "奮発する（ふんぱつする）",
        "make a great effort, splurge"
      ],
      [
        "奮起する（ふんきする）",
        "stir, rouse oneself"
      ],
      [
        "奮戦する（ふんせんする）",
        "fight hard"
      ],
      [
        "発奮する（はっぷんする）",
        "be stimulated, be inspired"
      ],
      [
        "興奮する（こうふんする）",
        "get excited, be excited"
      ],
      [
        "奮う（ふるう）",
        "show, wield"
      ]
    ],
    "radical": "⼤",
    "rad_order": 43,
    "rad_stroke": 3,
    "rad_name_ja": "だい",
    "rad_name": "dai",
    "rad_meaning": "large, big",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "手",
    "kname": "te",
    "kstroke": 4,
    "kmeaning": "hand",
    "kgrade": 1,
    "kunyomi_ja": "て、た",
    "kunyomi": "te, ta",
    "onyomi_ja": "シュ、ズ",
    "onyomi": "shu, zu",
    "examples": [
      [
        "握手する（あくしゅする）",
        "shake hands"
      ],
      [
        "選手（せんしゅ）",
        "player (in game)"
      ],
      [
        "手話（しゅわ）",
        "sign language"
      ],
      [
        "上手な（じょうずな）",
        "skillful"
      ],
      [
        "手紙（てがみ）",
        "letter"
      ],
      [
        "手帳（てちょう）",
        "notebook"
      ],
      [
        "手伝う（てつだう）",
        "help"
      ],
      [
        "手前（てまえ）",
        "in front of oneself, this side"
      ],
      [
        "お手洗い（おてあらい）",
        "toilet"
      ],
      [
        "手綱（たづな）",
        "bridle"
      ],
      [
        "下手な（へたな）",
        "unskillful"
      ]
    ],
    "radical": "⼿",
    "rad_order": 84,
    "rad_stroke": 4,
    "rad_name_ja": "て",
    "rad_name": "te",
    "rad_meaning": "hand",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "陛",
    "kname": "(tennou)hei(ka)",
    "kstroke": 10,
    "kmeaning": "imperial palace steps",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヘイ",
    "onyomi": "hei",
    "examples": [
      [
        "陛下（へいか）",
        "your Majesty"
      ],
      [
        "天皇陛下（てんのうへいか）",
        "His Majesty the Emperor"
      ],
      [
        "皇后陛下（こうごうへいか）",
        "Her majesty the Empress"
      ],
      [
        "国王陛下（こくおうへいか）",
        "His Majesty the King"
      ],
      [
        "女王陛下（じょおうへいか）",
        "Her Majesty the Queen"
      ]
    ],
    "radical": "⻖",
    "rad_order": 74,
    "rad_stroke": 3,
    "rad_name_ja": "こざとへん",
    "rad_name": "kozatohen",
    "rad_meaning": "hill, mound",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "補",
    "kname": "ogina(u)",
    "kstroke": 12,
    "kmeaning": "supplement, supply, make up for",
    "kgrade": 6,
    "kunyomi_ja": "おぎな、おぎなう",
    "kunyomi": "ogina, oginau",
    "onyomi_ja": "ホ",
    "onyomi": "ho",
    "examples": [
      [
        "補欠（ほけつ）",
        "substitute, filling a vacancy"
      ],
      [
        "候補者（こうほしゃ）",
        "candidate, applicant"
      ],
      [
        "補佐する（ほさする）",
        "aid, help, assist, advise"
      ],
      [
        "補助する（ほじょする）",
        "help, assist, support, aid"
      ],
      [
        "補導する（ほどうする）",
        "guide, direct, protect"
      ],
      [
        "補足する（ほそくする）",
        "supplement, complement"
      ],
      [
        "補償する（ほしょうする）",
        "compensate"
      ],
      [
        "補充する（ほじゅうする）",
        "supplement, replenish, fill up"
      ],
      [
        "補給する（ほきゅうする）",
        "supply, replenish"
      ],
      [
        "補正する（ほせいする）",
        "revise, correct"
      ],
      [
        "補習する（ほしゅうする）",
        "give supplementary lessons"
      ],
      [
        "補う（おぎなう）",
        "fill up (a vacancy), make up"
      ]
    ],
    "radical": "⻂",
    "rad_order": 151,
    "rad_stroke": 5,
    "rad_name_ja": "ころもへん",
    "rad_name": "koromohen",
    "rad_meaning": "clothing",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "宝",
    "kname": "takara",
    "kstroke": 8,
    "kmeaning": "treasure",
    "kgrade": 6,
    "kunyomi_ja": "たから",
    "kunyomi": "takara",
    "onyomi_ja": "ホウ",
    "onyomi": "hou",
    "examples": [
      [
        "宝庫（ほうこ）",
        "treasure house, treasury"
      ],
      [
        "宝石（ほうせき）",
        "gem, jewel"
      ],
      [
        "財宝（ざいほう）",
        "treasure"
      ],
      [
        "国宝（こくほう）",
        "national treasure"
      ],
      [
        "家宝（かほう）",
        "heirloom"
      ],
      [
        "宝（たから）",
        "treasure"
      ],
      [
        "宝くじ（たからくじ）",
        "lottery"
      ],
      [
        "宝物（たからもの）",
        "treasure, treasured item"
      ],
      [
        "宝探し（たからさがし）",
        "treasure hunt"
      ],
      [
        "宝島（たからじま）",
        "treasure island"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "棒",
    "kname": "(ai)bou",
    "kstroke": 12,
    "kmeaning": "rod, stick, pole",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ボウ",
    "onyomi": "bou",
    "examples": [
      [
        "棒（ぼう）",
        "pole, rod, stick"
      ],
      [
        "棒状（ぼうじょう）",
        "cylindrical"
      ],
      [
        "棒立ち（ぼうだち）",
        "stand bolt upright [n.]"
      ],
      [
        "棒読み（ぼうよみ）",
        "read in monotone [n.]"
      ],
      [
        "相棒（あいぼう）",
        "partner, pal, accomplice"
      ],
      [
        "警棒（けいぼう）",
        "police baton, nightstick"
      ],
      [
        "泥棒（どろぼう）",
        "thief, burglar, robber, theft"
      ],
      [
        "延べ棒（のべぼう）",
        "ingot"
      ],
      [
        "用心棒（ようじんぼう）",
        "bodyguard"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "幕",
    "kname": "(uchi)maku",
    "kstroke": 13,
    "kmeaning": "curtain, shogunate",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "マク、バク",
    "onyomi": "maku, baku",
    "examples": [
      [
        "幕（まく）",
        "curtain (theater), hanging"
      ],
      [
        "天幕（てんまく）",
        "curtain, tent, pavilion"
      ],
      [
        "内幕（ないまく）",
        "inside information"
      ],
      [
        "煙幕（えんまく）",
        "smoke screen"
      ],
      [
        "垂れ幕（たれまく）",
        "hanging screen, curtain"
      ],
      [
        "除幕式（じょまくしき）",
        "unveiling ceremony"
      ],
      [
        "開幕する（かいまくする）",
        "raise the curtain"
      ],
      [
        "幕府（ばくふ）",
        "bakufu, shogunate"
      ],
      [
        "幕末（ばくまつ）",
        "End of Edo era"
      ]
    ],
    "radical": "⼱",
    "rad_order": 59,
    "rad_stroke": 3,
    "rad_name_ja": "はば",
    "rad_name": "haba",
    "rad_meaning": "cloth",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "密",
    "kname": "mitsu(do)",
    "kstroke": 11,
    "kmeaning": "close, secret, dense, fine",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ミツ",
    "onyomi": "mitsu",
    "examples": [
      [
        "密林（みつりん）",
        "dense forest, jungle"
      ],
      [
        "密度（みつど）",
        "density"
      ],
      [
        "密室（みっしつ）",
        "closed-door, locked room"
      ],
      [
        "秘密（ひみつ）",
        "secret, secrecy"
      ],
      [
        "密接な（みっせつな）",
        "close, intimate"
      ],
      [
        "過密な（かみつな）",
        "over populated"
      ],
      [
        "緊密な（きんみつな）",
        "close, intimate"
      ],
      [
        "親密な（しんみつな）",
        "intimate, friendly"
      ],
      [
        "厳密な（げんみつな）",
        "strict, rigorous"
      ],
      [
        "密告する（みっこくする）",
        "betray, inform (police), tip off"
      ],
      [
        "密集する（みっしゅうする）",
        "crowd, swarm"
      ],
      [
        "密売する（みつばいする）",
        "smuggle, bootleg"
      ]
    ],
    "radical": "⼧",
    "rad_order": 48,
    "rad_stroke": 3,
    "rad_name_ja": "うかんむり",
    "rad_name": "ukanmuri",
    "rad_meaning": "roof, house",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "盟",
    "kname": "(ka)mei(suru)",
    "kstroke": 13,
    "kmeaning": "alliance, oath",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "メイ",
    "onyomi": "mei",
    "examples": [
      [
        "盟友（めいゆう）",
        "sworn friend"
      ],
      [
        "盟約（めいやく）",
        "oath, pledge, pact, covenant"
      ],
      [
        "同盟（どうめい）",
        "alliance, union, league"
      ],
      [
        "連盟（れんめい）",
        "league, union, alliance"
      ],
      [
        "加盟する（かめいする）",
        "join, become a member"
      ]
    ],
    "radical": "⽫",
    "rad_order": 136,
    "rad_stroke": 5,
    "rad_name_ja": "さら",
    "rad_name": "sara",
    "rad_meaning": "plate, bowl",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "模",
    "kname": "mo(you)",
    "kstroke": 14,
    "kmeaning": "pattern, imitate, copy, model",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "モ、ボ",
    "onyomi": "mo, bo",
    "examples": [
      [
        "模範（もはん）",
        "model, example"
      ],
      [
        "模型（もけい）",
        "model, dummy"
      ],
      [
        "模様（もよう）",
        "pattern, figure, design"
      ],
      [
        "模擬試験（もぎしけん）",
        "trial examination, sham examination"
      ],
      [
        "模倣する（もほうする）",
        "imitate, copy"
      ],
      [
        "模造する（もぞうする）",
        "imitation, mimic"
      ],
      [
        "模写する（もしゃする）",
        "copy, reproduce"
      ],
      [
        "規模（きぼ）",
        "scale, scope, size"
      ]
    ],
    "radical": "",
    "rad_order": 98,
    "rad_stroke": 4,
    "rad_name_ja": "きへん",
    "rad_name": "kihen",
    "rad_meaning": "tree, wood",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "郵",
    "kname": "yuu(bin)",
    "kstroke": 11,
    "kmeaning": "mail",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ユウ",
    "onyomi": "yuu",
    "examples": [
      [
        "郵便（ゆうびん）",
        "mail, postal service"
      ],
      [
        "郵便物（ゆうびんぶつ）",
        "postal items"
      ],
      [
        "郵便局（ゆうびんきょく）",
        "post office"
      ],
      [
        "郵送料（ゆうそうりょう）",
        "postage, freight costs"
      ],
      [
        "郵便屋さん（ゆうびんやさん）",
        "postman"
      ],
      [
        "郵送する（ゆうそうする）",
        "mail, post, send"
      ]
    ],
    "radical": "⻏",
    "rad_order": 73,
    "rad_stroke": 3,
    "rad_name_ja": "おおざと",
    "rad_name": "oozato",
    "rad_meaning": "village, country, city",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "幼",
    "kname": "osana(i)",
    "kstroke": 5,
    "kmeaning": "very young, infantile",
    "kgrade": 6,
    "kunyomi_ja": "おさない",
    "kunyomi": "osanai",
    "onyomi_ja": "ヨウ",
    "onyomi": "you",
    "examples": [
      [
        "幼児（ようじ）",
        "infant, baby, child"
      ],
      [
        "幼女（ようじょ）",
        "little girl"
      ],
      [
        "幼虫（ようちゅう）",
        "larva, chrysalis"
      ],
      [
        "幼少（ようしょう）",
        "infancy, childhood, tender age"
      ],
      [
        "幼年期（ようねんき）",
        "childhood"
      ],
      [
        "幼稚園（ようちえん）",
        "kindergarten"
      ],
      [
        "幼稚な（ようちな）",
        "childish, infantile"
      ],
      [
        "幼い（おさない）",
        "very young, childish"
      ],
      [
        "幼子（おさなご）",
        "infant, baby, little child"
      ],
      [
        "幼心（おさなごころ）",
        "child's mind, child's heart"
      ],
      [
        "幼なじみ（おさななじみ）",
        "childhood friend"
      ]
    ],
    "radical": "⺓",
    "rad_order": 62,
    "rad_stroke": 3,
    "rad_name_ja": "いとがしら",
    "rad_name": "itogashira",
    "rad_meaning": "young, slight",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "紙",
    "kname": "shi-kami",
    "kstroke": 10,
    "kmeaning": "paper",
    "kgrade": 2,
    "kunyomi_ja": "かみ",
    "kunyomi": "kami",
    "onyomi_ja": "シ",
    "onyomi": "shi",
    "examples": [
      [
        "白紙（はくし）",
        "white paper"
      ],
      [
        "用紙（ようし）",
        "blank form"
      ],
      [
        "表紙（ひょうし）",
        "front cover"
      ],
      [
        "新聞紙（しんぶんし）",
        "newspaper"
      ],
      [
        "紙（かみ）",
        "paper"
      ],
      [
        "手紙（てがみ）",
        "letter"
      ]
    ],
    "radical": "",
    "rad_order": 158,
    "rad_stroke": 6,
    "rad_name_ja": "いとへん",
    "rad_name": "itohen",
    "rad_meaning": "thread",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "翌",
    "kname": "yoku(jitsu)",
    "kstroke": 11,
    "kmeaning": "the following, the next",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ヨク",
    "onyomi": "yoku",
    "examples": [
      [
        "翌日（よくじつ）",
        "the next day"
      ],
      [
        "翌週（よくしゅう）",
        "the following week"
      ],
      [
        "翌月（よくげつ）",
        "the following month"
      ],
      [
        "翌年（よくねん）",
        "the following year"
      ],
      [
        "翌春（よくしゅん）",
        "the following spring"
      ],
      [
        "翌朝（よくあさ）",
        "the next morning"
      ],
      [
        "翌々日（よくよくじつ）",
        "two days later"
      ]
    ],
    "radical": "⽻",
    "rad_order": 161,
    "rad_stroke": 6,
    "rad_name_ja": "はね",
    "rad_name": "hane",
    "rad_meaning": "feather, wing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "卵",
    "kname": "tamago",
    "kstroke": 7,
    "kmeaning": "egg",
    "kgrade": 6,
    "kunyomi_ja": "たまご",
    "kunyomi": "tamago",
    "onyomi_ja": "ラン",
    "onyomi": "ran",
    "examples": [
      [
        "卵黄（らんおう）",
        "egg yolk"
      ],
      [
        "卵白（らんぱく）",
        "white of an egg, albumin"
      ],
      [
        "卵巣（らんそう）",
        "ovary"
      ],
      [
        "卵管（らんかん）",
        "fallopian tube, oviduct"
      ],
      [
        "鶏卵（けいらん）",
        "hens egg"
      ],
      [
        "産卵する（さんらんする）",
        "lay eggs, spawn"
      ],
      [
        "卵（たまご）",
        "egg, spawn, roe"
      ],
      [
        "卵焼き（たまごやき）",
        "omelet"
      ],
      [
        "卵形（たまごがた）",
        "oval, egg-shaped"
      ]
    ],
    "radical": "⼙",
    "rad_order": 30,
    "rad_stroke": 2,
    "rad_name_ja": "ふしづくり",
    "rad_name": "fushizukuri",
    "rad_meaning": "stamp, seal",
    "rad_position_ja": "つくり",
    "rad_position": "tsukuri"
  },
  {
    "kanji": "覧",
    "kname": "(ten)ran(kai)",
    "kstroke": 17,
    "kmeaning": "look over, see",
    "kgrade": 6,
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "ラン",
    "onyomi": "ran",
    "examples": [
      [
        "要覧（ようらん）",
        "outline, survey, handbook"
      ],
      [
        "一覧表（いちらんひょう）",
        "list, table"
      ],
      [
        "観覧車（かんらんしゃ）",
        "Ferris wheel"
      ],
      [
        "展覧会（てんらんかい）",
        "exhibition"
      ],
      [
        "博覧会（はくらんかい）",
        "fair, exhibition, exposition"
      ],
      [
        "一覧する（いちらんする）",
        "take a glance, look over"
      ],
      [
        "回覧する（かいらんする）",
        "circulate (a magazine, etc.)"
      ],
      [
        "ご覧になる（ごらんになる）",
        "look [hon.]"
      ]
    ],
    "radical": "⾒",
    "rad_order": 179,
    "rad_stroke": 7,
    "rad_name_ja": "みる",
    "rad_name": "miru",
    "rad_meaning": "to see",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "裏",
    "kname": "ri-ura",
    "kstroke": 13,
    "kmeaning": "rear, reverse side, back",
    "kgrade": 6,
    "kunyomi_ja": "うら",
    "kunyomi": "ura",
    "onyomi_ja": "リ",
    "onyomi": "ri",
    "examples": [
      [
        "裏面（りめん）",
        "back, reverse side"
      ],
      [
        "表裏（ひょうり）",
        "front & back, inside & outside"
      ],
      [
        "脳裏（のうり）",
        "one's mind"
      ],
      [
        "裏（うら）",
        "back, reverse side"
      ],
      [
        "裏通り（うらどおり）",
        "side street, back street"
      ],
      [
        "裏口（うらぐち）",
        "backdoor, rear entrance"
      ],
      [
        "裏側（うらがわ）",
        "back, reverse side"
      ],
      [
        "裏表（うらおもて）",
        "both sides, a double-dealer"
      ],
      [
        "裏付ける（うらづける）",
        "support, corroborate, vouch"
      ],
      [
        "裏切る（うらぎる）",
        "betray"
      ],
      [
        "裏返す（うらがえす）",
        "turn inside out, turn over"
      ]
    ],
    "radical": "⾐",
    "rad_order": 177,
    "rad_stroke": 6,
    "rad_name_ja": "ころも",
    "rad_name": "koromo",
    "rad_meaning": "clothing",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "臨",
    "kname": "rin-nozo(mu)",
    "kstroke": 18,
    "kmeaning": "be present at, face, confront",
    "kgrade": 6,
    "kunyomi_ja": "のぞ、のぞむ",
    "kunyomi": "nozo, nozomu",
    "onyomi_ja": "リン",
    "onyomi": "rin",
    "examples": [
      [
        "臨終（りんじゅう）",
        "deathbed, dying hour"
      ],
      [
        "臨時（りんじ）",
        "temporary, extraordinary"
      ],
      [
        "臨場感（りんじょうかん）",
        "(stage, personal) presence"
      ],
      [
        "臨床医（りんしょうい）",
        "clinician"
      ],
      [
        "臨機応変（りんきおうへん）",
        "according to circumstance"
      ],
      [
        "臨席する（りんせきする）",
        "attend, be present"
      ],
      [
        "君臨する（くんりんする）",
        "reign, control, dictate"
      ],
      [
        "臨む（のぞむ）",
        "look out on, face, deal with"
      ]
    ],
    "radical": "⾂",
    "rad_order": 203,
    "rad_stroke": 6,
    "rad_name_ja": "しん",
    "rad_name": "shin",
    "rad_meaning": "retainer, minister",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "朗",
    "kname": "hoga(rakana)",
    "kstroke": 10,
    "kmeaning": "cheerful, clear, bright",
    "kgrade": 6,
    "kunyomi_ja": "ほが、ほがらかな",
    "kunyomi": "hoga, hogarakana",
    "onyomi_ja": "ロウ",
    "onyomi": "rou",
    "examples": [
      [
        "朗報（ろうほう）",
        "good news"
      ],
      [
        "明朗な（めいろうな）",
        "bright, clear, cheerful"
      ],
      [
        "朗々と（ろうろうと）",
        "clear, sonorous, full-sounding"
      ],
      [
        "朗読する（ろうどくする）",
        "read aloud, recite"
      ],
      [
        "朗らかな（ほがらかな）",
        "bright, cheerful"
      ]
    ],
    "radical": "⽉",
    "rad_order": 95,
    "rad_stroke": 4,
    "rad_name_ja": "つき",
    "rad_name": "tsuki",
    "rad_meaning": "moon, month, period",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "依",
    "kname": "i(raisuru)",
    "kstroke": 8,
    "kmeaning": "depend on",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "イ、エ",
    "onyomi": "i, e",
    "examples": [
      [
        "依頼心（いらいしん）",
        "spirit of dependence"
      ],
      [
        "依頼する（いらいする）",
        "request [v.t.]"
      ],
      [
        "依存する（いぞんする）",
        "depend on, rely on"
      ],
      [
        "依拠する（いきょする）",
        "based on"
      ],
      [
        "依然として（いぜんとして）",
        "still, as yet, as of old"
      ],
      [
        "帰依する（きえする）",
        "devote oneself to (religion)"
      ]
    ],
    "radical": "⺅",
    "rad_order": 11,
    "rad_stroke": 2,
    "rad_name_ja": "にんべん",
    "rad_name": "ninben",
    "rad_meaning": "person",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "違",
    "kname": "i-chiga(u)",
    "kstroke": 13,
    "kmeaning": "differ, violate, different, be mistaken",
    "kgrade": "n/a",
    "kunyomi_ja": "ちが、ちがう、ちがえる",
    "kunyomi": "chiga, chigau, chigaeru",
    "onyomi_ja": "イ",
    "onyomi": "i",
    "examples": [
      [
        "違憲（いけん）",
        "unconstitutionality"
      ],
      [
        "違和感（いわかん）",
        "feeling that something is wrong"
      ],
      [
        "違法な（いほうな）",
        "illegal"
      ],
      [
        "違反する（いはんする）",
        "violate, transgress"
      ],
      [
        "相違する（そういする）",
        "be different, vary, disagree"
      ],
      [
        "違う（ちがう）",
        "differ"
      ],
      [
        "食い違う（くいちがう）",
        "clash, run counter to"
      ],
      [
        "間違い（まちがい）",
        "mistake [n.]"
      ],
      [
        "勘違い（かんちがい）",
        "misunderstanding, wrong guess"
      ],
      [
        "間違える（まちがえる）",
        "err, make a mistake"
      ]
    ],
    "radical": "⻌",
    "rad_order": 72,
    "rad_stroke": 3,
    "rad_name_ja": "しんにょう",
    "rad_name": "shinnyou",
    "rad_meaning": "road, walk, to advance",
    "rad_position_ja": "にょう",
    "rad_position": "nyou"
  },
  {
    "kanji": "鋭",
    "kname": "ei-surudo(i)",
    "kstroke": 15,
    "kmeaning": "sharp",
    "kgrade": "n/a",
    "kunyomi_ja": "するど、するどい",
    "kunyomi": "surudo, surudoi",
    "onyomi_ja": "エイ",
    "onyomi": "ei",
    "examples": [
      [
        "鋭角（えいかく）",
        "acute angle"
      ],
      [
        "新鋭（しんえい）",
        "new & powerful, fresh"
      ],
      [
        "精鋭（せいえい）",
        "elite, picked, best"
      ],
      [
        "鋭利な（えいりな）",
        "sharp"
      ],
      [
        "鋭敏な（えいびんな）",
        "sharp, keen"
      ],
      [
        "先鋭な（せんえいな）",
        "radical"
      ],
      [
        "鋭い（するどい）",
        "pointed, sharp, keen"
      ]
    ],
    "radical": "",
    "rad_order": 206,
    "rad_stroke": 8,
    "rad_name_ja": "かねへん",
    "rad_name": "kanehen",
    "rad_meaning": "metal, gold, mineral",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "煙",
    "kname": "kemu(i)",
    "kstroke": 13,
    "kmeaning": "smoke",
    "kgrade": "n/a",
    "kunyomi_ja": "けむ、けむる、けむい、けむり",
    "kunyomi": "kemu, kemuru, kemui, kemuri",
    "onyomi_ja": "エン",
    "onyomi": "en",
    "examples": [
      [
        "煙突（えんとつ）",
        "chimney"
      ],
      [
        "煙幕（えんまく）",
        "smokescreen"
      ],
      [
        "黒煙（こくえん）",
        "black smoke"
      ],
      [
        "発煙筒（はつえんとう）",
        "smoke candle"
      ],
      [
        "喫煙所（きつえんじょ）",
        "smoking area"
      ],
      [
        "禁煙する（きんえんする）",
        "quit smoking"
      ],
      [
        "煙（けむり）",
        "smoke, fumes"
      ],
      [
        "煙る（けむる）",
        "smoke, appear dim [v.i.]"
      ],
      [
        "煙たい（けむたい）",
        "smoky, awkward feeling [adj.]"
      ]
    ],
    "radical": "",
    "rad_order": 111,
    "rad_stroke": 4,
    "rad_name_ja": "ひへん",
    "rad_name": "hihen",
    "rad_meaning": "fire",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "書",
    "kname": "sho-ka(ku)",
    "kstroke": 10,
    "kmeaning": "write, book",
    "kgrade": 2,
    "kunyomi_ja": "か、かく",
    "kunyomi": "ka, kaku",
    "onyomi_ja": "ショ",
    "onyomi": "sho",
    "examples": [
      [
        "書庫（しょこ）",
        "archive"
      ],
      [
        "書斎（しょさい）",
        "study (room)"
      ],
      [
        "書道（しょどう）",
        "calligraphy"
      ],
      [
        "辞書（じしょ）",
        "dictionary"
      ],
      [
        "秘書（ひしょ）",
        "(private) secretary"
      ],
      [
        "図書館（としょかん）",
        "library"
      ],
      [
        "教科書（きょうかしょ）",
        "text book"
      ],
      [
        "参考書（さんこうしょ）",
        "reference book"
      ],
      [
        "証明書（しょうめいしょ）",
        "certificate"
      ],
      [
        "書く（かく）",
        "write"
      ],
      [
        "横書き（よこがき）",
        "writing horizontally"
      ]
    ],
    "radical": "⽇",
    "rad_order": 92,
    "rad_stroke": 4,
    "rad_name_ja": "ひ",
    "rad_name": "hi",
    "rad_meaning": "sun, day, time",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "汚",
    "kname": "yogo(su)",
    "kstroke": 6,
    "kmeaning": "dirty",
    "kgrade": "n/a",
    "kunyomi_ja": "けが、よご、きたな、けがす、けがれる、けがらわしい、よごす、よごれる、きたない",
    "kunyomi": "kega, yogo, kitana, kegasu, kegareru, kegarawashii, yogosu, yogoreru, kitanai",
    "onyomi_ja": "オ",
    "onyomi": "o",
    "examples": [
      [
        "汚水（おすい）",
        "filthy water, sewage"
      ],
      [
        "汚物（おぶつ）",
        "filth, muck, dirt"
      ],
      [
        "汚職（おしょく）",
        "corruption, graft"
      ],
      [
        "汚名（おめい）",
        "stigma, dishonor, infamy"
      ],
      [
        "汚点（おてん）",
        "stain, blot, flaw, disgrace"
      ],
      [
        "汚染する（おせんする）",
        "pollute, contaminate"
      ],
      [
        "汚す（けがす）",
        "disgrace, dishonor [v.t.]"
      ],
      [
        "汚れる（けがれる）",
        "be corrupted, be polluted [v.i.]"
      ],
      [
        "汚らわしい（けがらわしい）",
        "filthy, obscene, dirty"
      ],
      [
        "汚す（よごす）",
        "make dirty[v.t.]"
      ],
      [
        "汚れる（よごれる）",
        "get dirty, become dirty [v.i.]"
      ],
      [
        "汚い（きたない）",
        "dirty, unclean, filthy"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "押",
    "kname": "ou-o(saeru)",
    "kstroke": 8,
    "kmeaning": "push",
    "kgrade": "n/a",
    "kunyomi_ja": "お、おす、おさえる",
    "kunyomi": "o, osu, osaeru",
    "onyomi_ja": "オウ",
    "onyomi": "ou",
    "examples": [
      [
        "押収する（おうしゅうする）",
        "seize, confiscate"
      ],
      [
        "押印する（おういんする）",
        "affix one's seal"
      ],
      [
        "押捺する（おうなつする）",
        "seal, stamp, imprint"
      ],
      [
        "押す（おす）",
        "push, press, stamp"
      ],
      [
        "押し売り（おしうり）",
        "high-pressure salesmanship"
      ],
      [
        "押し問答（おしもんどう）",
        "dispute, heated Q&A"
      ],
      [
        "押し入れ（おしいれ）",
        "closet"
      ],
      [
        "押さえる（おさえる）",
        "press down, stop, seize"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "欧",
    "kname": "(sei)ou",
    "kstroke": 8,
    "kmeaning": "Europe",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "オウ",
    "onyomi": "ou",
    "examples": [
      [
        "欧州（おうしゅう）",
        "Europe"
      ],
      [
        "欧米（おうべい）",
        "Europe and America, the West"
      ],
      [
        "西欧（せいおう）",
        "Western Europe"
      ],
      [
        "東欧（とうおう）",
        "Eastern Europe"
      ],
      [
        "南欧（なんおう）",
        "Southern Europe"
      ],
      [
        "北欧（ほくおう）",
        "Northern Europe"
      ]
    ],
    "radical": "⽋",
    "rad_order": 99,
    "rad_stroke": 4,
    "rad_name_ja": "あくび",
    "rad_name": "akubi",
    "rad_meaning": "to lack, yawn",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "菓",
    "kname": "(o)ka(shi)",
    "kstroke": 11,
    "kmeaning": "confectionery, cake",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "菓子（かし）",
        "pastry"
      ],
      [
        "菓子屋（かしや）",
        "confectionery shop"
      ],
      [
        "銘菓（めいか）",
        "cake of a well-known brand"
      ],
      [
        "和菓子（わがし）",
        "Japanese confectionery"
      ],
      [
        "洋菓子（ようがし）",
        "Western confectionery"
      ],
      [
        "水菓子（みずがし）",
        "fruit"
      ]
    ],
    "radical": "⺾",
    "rad_order": 71,
    "rad_stroke": 3,
    "rad_name_ja": "くさかんむり",
    "rad_name": "kusakanmuri",
    "rad_meaning": "grass",
    "rad_position_ja": "かんむり",
    "rad_position": "kanmuri"
  },
  {
    "kanji": "靴",
    "kname": "kutsu",
    "kstroke": 13,
    "kmeaning": "shoes",
    "kgrade": "n/a",
    "kunyomi_ja": "くつ",
    "kunyomi": "kutsu",
    "onyomi_ja": "カ",
    "onyomi": "ka",
    "examples": [
      [
        "軍靴（ぐんか）",
        "military shoes"
      ],
      [
        "製靴業（せいかぎょう）",
        "the shoemaking industry"
      ],
      [
        "靴（くつ）",
        "shoes, footwear"
      ],
      [
        "靴屋（くつや）",
        "shoemaker, shoe store"
      ],
      [
        "靴下（くつした）",
        "socks"
      ],
      [
        "靴墨（くつずみ）",
        "shoe polish"
      ],
      [
        "靴音（くつおと）",
        "walking sound, footsteps"
      ],
      [
        "革靴（かわぐつ）",
        "leather shoes"
      ],
      [
        "長靴（ながぐつ）",
        "long boots"
      ],
      [
        "運動靴（うんどうぐつ）",
        "sports shoes, sneakers"
      ],
      [
        "紳士靴（しんしぐつ）",
        "men's shoes"
      ]
    ],
    "radical": "⾰",
    "rad_order": 215,
    "rad_stroke": 9,
    "rad_name_ja": "つくりがわ",
    "rad_name": "tsukurigawa",
    "rad_meaning": "leather",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "掛",
    "kname": "(mi)ka(ke)",
    "kstroke": 11,
    "kmeaning": "set, hang",
    "kgrade": "n/a",
    "kunyomi_ja": "か、かける、かけ、かかる、かかり",
    "kunyomi": "ka, kakeru, kake, kakaru, kakari",
    "onyomi_ja": "",
    "onyomi": "n/a",
    "examples": [
      [
        "掛け算（かけざん）",
        "multiplication"
      ],
      [
        "腰掛け（こしかけ）",
        "seat, bench"
      ],
      [
        "仕掛け（しかけ）",
        "device, trick, mechanism"
      ],
      [
        "掛ける（かける）",
        "hang, cover, sit down, pour [v.t.]"
      ],
      [
        "出掛ける（でかける）",
        "got out, depart"
      ],
      [
        "言い掛ける（いいかける）",
        "begin speaking"
      ],
      [
        "心掛ける（こころがける）",
        "bear in mind, aim to"
      ],
      [
        "見せ掛ける（みせかける）",
        "pretend, feign"
      ],
      [
        "掛かる（かかる）",
        "hang, be locked [v.i.]"
      ],
      [
        "掛（かかり）",
        "charge, duty, post"
      ],
      [
        "親掛かり（おやがかり）",
        "dependent on one's parents"
      ]
    ],
    "radical": "⺘",
    "rad_order": 77,
    "rad_stroke": 3,
    "rad_name_ja": "てへん",
    "rad_name": "tehen",
    "rad_meaning": "hand",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "汗",
    "kname": "ase",
    "kstroke": 6,
    "kmeaning": "sweat",
    "kgrade": "n/a",
    "kunyomi_ja": "あせ",
    "kunyomi": "ase",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "汗腺（かんせん）",
        "sweat gland"
      ],
      [
        "発汗する（はっかんする）",
        "sweat [v.i.]"
      ],
      [
        "汗（あせ）",
        "sweat, perspiration"
      ],
      [
        "汗かき（あせかき）",
        "person who sweats a lot"
      ],
      [
        "汗だく（あせだく）",
        "dripping with sweat"
      ],
      [
        "汗ばむ（あせばむ）",
        "be slightly sweaty"
      ],
      [
        "冷や汗（ひやあせ）",
        "cold sweat"
      ]
    ],
    "radical": "⺡",
    "rad_order": 76,
    "rad_stroke": 3,
    "rad_name_ja": "さんずい",
    "rad_name": "sanzui",
    "rad_meaning": "water",
    "rad_position_ja": "へん",
    "rad_position": "hen"
  },
  {
    "kanji": "缶",
    "kname": "kan(zume)",
    "kstroke": 6,
    "kmeaning": "can",
    "kgrade": "n/a",
    "kunyomi_ja": "",
    "kunyomi": "n/a",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "缶（かん）",
        "can, tin"
      ],
      [
        "缶切り（かんきり）",
        "can opener"
      ],
      [
        "缶詰め（かんづめ）",
        "canned goods, tin can"
      ],
      [
        "空き缶（あきかん）",
        "empty can"
      ]
    ],
    "radical": "⽸",
    "rad_order": 159,
    "rad_stroke": 6,
    "rad_name_ja": "みずがめ",
    "rad_name": "mizugame",
    "rad_meaning": "earthen jar",
    "rad_position_ja": "",
    "rad_position": ""
  },
  {
    "kanji": "患",
    "kname": "kan-wazura(u)",
    "kstroke": 11,
    "kmeaning": "affected by disease, be ill, suffer",
    "kgrade": "n/a",
    "kunyomi_ja": "わずら、わずらう",
    "kunyomi": "wazura, wazurau",
    "onyomi_ja": "カン",
    "onyomi": "kan",
    "examples": [
      [
        "患者（かんじゃ）",
        "patient [n.]"
      ],
      [
        "患部（かんぶ）",
        "affected part"
      ],
      [
        "急患（きゅうかん）",
        "emergency case"
      ],
      [
        "患う（わずらう）",
        "fall ill"
      ],
      [
        "長患い（ながわずらい）",
        "long illness"
      ]
    ],
    "radical": "⼼",
    "rad_order": 80,
    "rad_stroke": 4,
    "rad_name_ja": "こころ",
    "rad_name": "kokoro",
    "rad_meaning": "heart, mind, spirit",
    "rad_position_ja": "",
    "rad_position": ""
  }
]

db.Kanji.deleteMany({})
  .then(() => db.Kanji.collection.insertMany(kanjiSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });