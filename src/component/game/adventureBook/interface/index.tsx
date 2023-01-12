// "adventureBook": "冒險之書",
// "eightyPercent": "80%",
// "fiftyPercent": "50%",
// "fortyPercent": "40%",
// "ninetyPercent": "90%",
// "seventyPercent": "70%",
// "sixtyPercent": "60%",
// "tenPercent": "10%",
// "thirtyPercent": "30%",
// "twentyPercent": "20%"

interface AdventureBookIn {
  adventureBook: string;
  eightyPercent: string;
  fiftyPercent: string;
  fortyPercent: string;
  ninetyPercent: string;
  seventyPercent: string;
  sixtyPercent: string;
  tenPercent: string;
  thirtyPercent: string;
  twentyPercent: string;
  key?: React.Key;
}

interface AdventureBookCompIn {
  adventureBookData: AdventureBookIn[];
}
export { type AdventureBookIn, type AdventureBookCompIn };
