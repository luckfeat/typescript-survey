export interface Survey {
  id: string;
  surveys: SurveySection[];
}

export interface SurveySection {
  sectionIndex: number;
  question: SurveyQuestion[];
}

export interface SurveyQuestion {
  title: string;
  type: SurveyQuestionType;
  content:
    | { shortText: string }
    | { longText: string }
    | { options: string[] }
    | { start: number; end: number };
}

export type SurveyQuestionType =
  | 'short'
  | 'long'
  | 'multi'
  | 'checkbox'
  | 'dropdown'
  | 'rating';
