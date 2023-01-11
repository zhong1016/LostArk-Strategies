// "npc": "NPC",
// "location": "位置",
// "love": "愛情",
// "attention": "關注",
// "friendly": "友好",
// "trust": "信賴"
// "maxAffinity": "最大好感度",
// "normal": "普通",

interface favorabilityIn {
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

export { type favorabilityIn };
