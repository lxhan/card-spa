export interface TarotQuestion {
  id: number;
  title: string;
  sub_title: string;
  display_order: number;
  image_url: string;
  tarot_cards: TarotCard[];
}

export interface TarotCard {
  id: number;
  tarot_question_id: number;
  tarot_code: number;
  name: string;
  gender: number;
  upright: boolean;
  image_url: string;
  keyword: string;
  suggestion: TarotCardSuggestion[];
  description: string;
}

export interface TarotCardSuggestion {
  key: string;
  value: string;
}

export interface QueryParams {
  question_id: string;
  card_id: string;
  gender: string;
}
