export type ConferenceTopicEntry = {
  conference: string;
  topics: string[];
  source: "position-paper" | "prep-document" | "resolution";
};

export const CONFERENCE_TOPICS: ConferenceTopicEntry[] = [
  {
    conference: "THAIMUN XII",
    source: "position-paper",
    topics: [
      "Addressing the rise of designer drugs in circumventing drug detection and anti-drug regulation",
      "Addressing the rise of illegal online pharmacies in global drug distribution",
    ],
  },
  {
    conference: "NISMUN III",
    source: "resolution",
    topics: ["The question of the consideration of Universal Basic Income"],
  },
  {
    conference: "Regents MUN I",
    source: "prep-document",
    topics: ["US immigration and nationality reform, asylum policy, and deportation due process"],
  },
  {
    conference: "CISMUN IV",
    source: "position-paper",
    topics: [
      "The question of the implementation and usage of palliative instead of curative medication",
      "The question of the legalization and regulation of euthanasia",
    ],
  },
  {
    conference: "STAMUN XI",
    source: "position-paper",
    topics: ["The question of strengthening global mental health infrastructure post-pandemic"],
  },
  {
    conference: "SISBMUN III",
    source: "position-paper",
    topics: [
      "The question of preventing anti-satellite weapon tests by major powers",
      "The question of regulating commercial lunar and asteroid mining missions",
    ],
  },
  {
    conference: "TSIMUN I",
    source: "position-paper",
    topics: ["The question of establishing ethical frameworks for the global use of artificial intelligence"],
  },
  {
    conference: "NewtonMUN I",
    source: "position-paper",
    topics: ["The question of global health standards in vulnerable and undeveloped regions"],
  },
  {
    conference: "MUN07 IV",
    source: "position-paper",
    topics: [
      "The question of combatting human trafficking networks across Western Europe with an emphasis on Paris",
    ],
  },
  {
    conference: "THAIMUN XIII",
    source: "position-paper",
    topics: [
      "The question of imposing tariffs on foreign states",
      "The question of regulating legal immigration",
      "The question of providing military aid to foreign states",
    ],
  },
  {
    conference: "HEXAMUN '26",
    source: "position-paper",
    topics: ["The Indochinese Independence Wars Against French Colonialism"],
  },
];

export function topicsForConference(conference: string): string[] {
  return CONFERENCE_TOPICS.find((entry) => entry.conference === conference)?.topics ?? [];
}
