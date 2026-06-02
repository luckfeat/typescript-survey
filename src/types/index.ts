export interface Survey {
  id: string;
  surveys: SurveySectionType[];
}

export interface SurveySectionType {
  sectionIndex: number;
  questions: SurveyQuestionType[];
}

export type SurveyQuestionType =
  | {
      title: string;
      type: 'short';
      content: { shortText: string };
    }
  | {
      title: string;
      type: 'long';
      content: { longText: string };
    }
  | {
      title: string;
      type: 'multi';
      content: { options: string[] };
    }
  | {
      title: string;
      type: 'checkbox';
      content: { options: string[] };
    }
  | {
      title: string;
      type: 'dropdown';
      content: { options: string[] };
    }
  | {
      title: string;
      type: 'rating';
      content: { start: number; end: number };
    };
