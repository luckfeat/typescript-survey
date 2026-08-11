export interface Survey {
  id: string;
  surveys: SurveySectionType[];
}

export interface SurveySectionType {
  sectionIndex: number;
  title: string;
  description: string;
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
    };

export type QuestionByType<T extends SurveyQuestionType['type']> = Extract<
  SurveyQuestionType,
  { type: T }
>;
