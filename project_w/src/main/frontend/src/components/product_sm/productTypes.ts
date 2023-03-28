export interface wineState {
  pid: number;
  imageUrl?: string;
  korName: string;
  engName?: string;
  price?: number;
  type?: number;
  body?: number;
  acidity?: number;
  tannin?: number;
  sweet?: number;
  alcohol?: string;
  country?: string;
  region?: string;
  desc?: string;
  starPoint?: number;
  recommendedSnack?: string;
  grapeVariety?: string;
  like: boolean;
}
