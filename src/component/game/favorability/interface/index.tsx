// "npc": "NPC",
// "location": "位置",
// "love": "愛情",
// "attention": "關注",
// "friendly": "友好",
// "trust": "信賴"
// "maxAffinity": "最大好感度",
// "normal": "普通",

interface FavorabilityIn {
  npc: string;
  location: string;
  love: string;
  attention: string | string[];
  friendly: string | string[];
  trust: string | string[];
  maxAffinity: string;
  normal: string;
  key?: React.Key;
}

interface FavorabilityCompIn {
  favorabilityData: FavorabilityIn[];
}

export { type FavorabilityIn, type FavorabilityCompIn };
