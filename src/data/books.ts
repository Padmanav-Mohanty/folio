import { Book, Genre } from "@/types"

export const books: Book[] = [
  {
    id: "1",
    title: "The Cartographer's Daughter",
    author: "Elena Marsh",
    slug: "the-cartographers-daughter",
    genre: "Historical Fiction",
    language: "English",
    description:
      "In a world where maps hold more than geography, young Lyra inherits her father's atlas — one that charts not places, but secrets buried across centuries. A gripping tale of discovery, betrayal, and the cartography of the human heart.",
    coverColor: ["#8B4513", "#C0702A", "#6B3410"],
    readers: 2841,
    pages: 320,
    uploadedAt: "2026-05-02",
    featured: true,
    content: `The atlas arrived on a Tuesday, wrapped in oilcloth and addressed in her father's handwriting — a handwriting she had not seen in eleven years.

Lyra Voss stood at the entrance of her small apartment and stared at the parcel for a long moment before picking it up. It was heavier than she expected. Maps always were.

Her father, Emilio Voss, had been the foremost cartographer of the age — a title that meant very little to the general public but everything to certain quiet institutions whose names appeared on no official records. He had charted coastlines that had shifted, cities that no longer existed, and at least one river that nobody else had ever found.

When she finally unwrapped the oilcloth, the atlas inside was old. Older than old. The leather cover was the color of dried blood, and the spine was cracked in three places. On the front cover, stamped in gold leaf so faded it was nearly invisible: Mappae Veritatis. Vol. VII.

The Map of Truths. Volume Seven. She did not know there had been a Volume Six, let alone seven. She did not know what truths it mapped. But as she opened the cover and saw the first page, she understood that her father had not merely left her a book. He had left her a problem.`,
  },
  {
    id: "2",
    title: "The Silent Garden",
    author: "Mira Kohen",
    slug: "the-silent-garden",
    genre: "Literary Fiction",
    language: "English",
    description:
      "A quiet meditation on grief and renewal, set in a walled garden that refuses to bloom until its keeper finally lets go of the past.",
    coverColor: ["#2D5016", "#4A7C25", "#1A3009"],
    readers: 1240,
    pages: 248,
    uploadedAt: "2026-04-18",
    content: `The garden had not flowered in three years, and everyone in the village had an opinion about why.

Noor didn't care for opinions. She cared for the soil, which she turned every morning before the heat made the work unbearable, and for the silence, which she had come to prefer over conversation.

Her grandmother had kept this garden for forty years before her, and in all that time it had never once gone fallow. Noor suspected the garden knew something the village didn't — that grief has its own season, and it cannot be rushed by wanting.

She knelt by the dead rosebush nearest the wall and pressed her palm into the dirt, the way her grandmother used to, as if the earth might answer if asked gently enough.`,
  },
  {
    id: "3",
    title: "Ember & Ash",
    author: "Priya Nair",
    slug: "ember-and-ash",
    genre: "Fantasy",
    language: "English",
    description:
      "Two sisters on opposite sides of a war neither of them chose, bound by a fire that burns through every promise they make to forget each other.",
    coverColor: ["#5c1a1a", "#8f2a2a", "#400d0d"],
    readers: 2104,
    pages: 412,
    uploadedAt: "2026-06-01",
    content: `The fire had not gone out in nine hundred years, and Kestrel had been told, since she was old enough to understand the telling, that it never would.

She stood at the edge of the Ember Wall with her sword unsheathed and her sister's old cloak still draped over her shoulders, too big for her even now. Somewhere across the valley, beneath the same indifferent stars, her sister Sable wore the colors of the army that had burned their village.

Neither of them had chosen this war. It had chosen them, the way fire chooses whatever is dry enough to take it.

Kestrel touched the hilt of her sword and thought, not for the first time, that she would rather be ash than enemy.`,
  },
  {
    id: "4",
    title: "Cold Light of Day",
    author: "Sam Wells",
    slug: "cold-light-of-day",
    genre: "Mystery",
    language: "English",
    description:
      "A detective returns to her hometown to solve a murder that everyone insists was already solved twenty years ago.",
    coverColor: ["#1a1a3a", "#2a2a6f", "#0d0d2a"],
    readers: 673,
    pages: 296,
    uploadedAt: "2026-03-22",
    content: `The case file was thinner than she remembered, which was strange, because she remembered it being thin even then.

Detective Inspector Cara Voss hadn't planned on returning to Halworth. She certainly hadn't planned on reopening a case that the department had closed two decades ago, with a confession, a conviction, and a man who had spent eighteen years in prison for something Cara was no longer sure he'd done.

The light coming through the station window was the particular gray of a town that never quite warmed up, even in summer. She set the file down and started reading from the beginning, the way she always did, looking for the lie that everyone else had missed.`,
  },
  {
    id: "5",
    title: "The Root Beneath",
    author: "Claire Donovan",
    slug: "the-root-beneath",
    genre: "Romance",
    language: "English",
    description:
      "Two rival vineyard owners are forced to share a harvest season, and discover that some roots run deeper than property lines.",
    coverColor: ["#6B3410", "#A0522D", "#3a1c08"],
    readers: 3201,
    pages: 280,
    uploadedAt: "2026-05-29",
    content: `The fence between their two vineyards had stood for sixty years, and Margot Hale fully intended for it to stand for sixty more.

Then a storm took it down in a single night, along with half the eastern rows, and she found herself standing in the wreckage at six in the morning across from Theo Marchetti, the man she had spent a decade calling her enemy.

"We could rebuild it," he said, surveying the damage. "Or we could not."

Margot did not trust the warmth that rose in her chest at the sound of his voice. She had not trusted it in ten years, and she was not about to start now, no matter what the harvest demanded of either of them.`,
  },
  {
    id: "6",
    title: "Forgotten Stars",
    author: "Olusegun Bello",
    slug: "forgotten-stars",
    genre: "Science Fiction",
    language: "English",
    description:
      "The last navigator of a dying generation ship must chart a course to a star that, according to every instrument aboard, no longer exists.",
    coverColor: ["#1a2e3a", "#2a4f6f", "#0d1f2a"],
    readers: 1558,
    pages: 356,
    uploadedAt: "2026-02-14",
    content: `The star had been there for four hundred years of the ship's records, and then, one cycle, it simply wasn't.

Adaeze checked the readings three times before she allowed herself to believe them. Stars did not vanish. Not really. They could collapse, they could dim past detection, but they did not simply stop existing between one scan and the next, leaving no trace, no remnant, nothing at all.

She was the last navigator the Calliope had left, the others lost to time and attrition and the slow grinding patience of a four-hundred-year voyage. It fell to her, now, to decide whether to trust the star that wasn't there, or the six thousand sleeping colonists whose lives depended on her being right.`,
  },
  {
    id: "7",
    title: "Salt and Memory",
    author: "Yuki Tanaka",
    slug: "salt-and-memory",
    genre: "Historical Fiction",
    language: "English",
    description:
      "A fisherman's daughter pieces together her family's history through the salt-stained letters her grandmother left behind after the war.",
    coverColor: ["#4a3010", "#7a5020", "#2a1a08"],
    readers: 447,
    pages: 264,
    uploadedAt: "2026-01-30",
    content: `The letters had been kept in a tin box that smelled of salt and rust, and Emi had nearly thrown them away twice before she finally sat down to read them.

Her grandmother had never spoken of the years before the harbor was rebuilt. Whatever had happened in that time lived only in these pages, in handwriting that grew smaller and more careful as the letters went on, as if her grandmother had been trying to take up less space in the world.

Emi unfolded the first letter carefully, the paper soft as cloth from decades of folding and unfolding, and began to read about a version of her grandmother she had never been allowed to know.`,
  },
  {
    id: "8",
    title: "Glass House",
    author: "Dana Reeves",
    slug: "glass-house",
    genre: "Horror",
    language: "English",
    description:
      "A family moves into a house made almost entirely of glass, and slowly realizes that something has been watching them from inside the walls the whole time.",
    coverColor: ["#2a2a2a", "#4a4a4a", "#1a1a1a"],
    readers: 918,
    pages: 232,
    uploadedAt: "2026-06-15",
    content: `The realtor had called it "a once-in-a-lifetime opportunity," and looking up at the house for the first time, Nora supposed that was technically true.

Every wall facing the road was glass, floor to ceiling, the kind of architecture that photographed beautifully and lived strangely. Her husband loved it instantly. Her daughter said nothing at all, just stood in the gravel driveway staring up at the second floor with an expression Nora couldn't read.

It wasn't until the third night, lying awake and watching her own reflection watch her back, that Nora began to wonder whether the glass was reflecting anything at all — or whether something on the other side of it had simply learned to mimic what it saw.`,
  },
]

export const genres: Genre[] = [
  { name: "Fantasy", icon: "🧙", count: 84 },
  { name: "Science Fiction", icon: "🔬", count: 61 },
  { name: "Historical Fiction", icon: "🗡️", count: 47 },
  { name: "Mystery", icon: "💀", count: 59 },
  { name: "Romance", icon: "💘", count: 92 },
  { name: "Literary Fiction", icon: "📖", count: 38 },
  { name: "Horror", icon: "😱", count: 29 },
  { name: "Adventure", icon: "🌍", count: 55 },
]
