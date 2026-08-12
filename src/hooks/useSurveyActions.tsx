import { useSetAtom } from 'jotai';
import { surveysAtom } from '../stores/survey/atom';
import type { Survey, SurveyQuestionType } from '../types';

type QuestionType = SurveyQuestionType['type'];

const createQuestionForType = (
  title: string,
  type: QuestionType,
): SurveyQuestionType => {
  switch (type) {
    case 'short':
      return {
        title,
        type: 'short',
        content: { shortText: '' },
      };

    case 'long':
      return {
        title,
        type: 'long',
        content: { longText: '' },
      };

    case 'multi':
      return {
        title,
        type: 'multi',
        content: { options: [] },
      };

    case 'checkbox':
      return {
        title,
        type: 'checkbox',
        content: { options: [] },
      };

    case 'dropdown':
      return {
        title,
        type: 'dropdown',
        content: { options: [] },
      };
  }
};

const updateSurvey = (
  previousSurvey: Survey,
  sectionIndex: number,
  questionIndex: number,
  newType: QuestionType,
): Survey => {
  return {
    ...previousSurvey,
    surveys: previousSurvey.surveys.map((section) => {
      /**
       * 수정하고자 하는 section 이 아닌 경우 반환
       */
      if (section.sectionIndex !== sectionIndex) {
        return section;
      }

      return {
        ...section,
        questions: section.questions.map((question, index) => {
          if (index !== questionIndex) {
            return question;
          }

          return createQuestionForType(question.title, newType);
        }),
      };
    }),
  };
};

const useSurveyActions = () => {
  const setSurvey = useSetAtom(surveysAtom);

  const changeQuestionType = (
    sectionIndex: number,
    questionIndex: number,
    newType: QuestionType,
  ) => {
    setSurvey((previousSurvey) => {
      return updateSurvey(previousSurvey, sectionIndex, questionIndex, newType);
    });
  };

  return { changeQuestionType };
};

export default useSurveyActions;
