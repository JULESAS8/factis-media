export type VerdictType = 'Faux' | 'Trompeur' | 'Vrai' | 'Exagéré';

export interface Article {
  id: string;
  title: string;
  category: string;
  author?: string;
  date: string;
  timeAgo?: string;
  timelineHour?: string;
  imageUrl: string;
  excerpt?: string;
  content?: string;
  readTime?: string;
  formatBadge?: string;
  formatColor?: string;
  isAnalysis?: boolean;
  isBreve?: boolean;
  isEnquete?: boolean;
  isSpecial?: boolean;
  kicker?: string;
  cardVariant?: 'highlightDark' | 'dark' | 'light';
}

export interface Story {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  thumb: string;
  excerpt?: string;
  typeLabel?: string;
  videoUrl?: string;
}

export interface FactCheck {
  id: string;
  claim: string;
  source: string;
  verdict: VerdictType;
  date: string;
  excerpt?: string;
}

export interface EbolaSnapshot {
  updatedAt: string;
  source: string;
  ituriShare: number;
  series: { date: string; cas: number; deces: number }[];
  repartition: { prov: string; cas: number; part: number }[];
}

export interface ProvinceExetat {
  name: string;
  proc: boolean;
  date?: string;
  best?: string;
}
