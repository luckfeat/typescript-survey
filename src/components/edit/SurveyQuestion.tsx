import type { BaseQuestionProps } from '../../types';
import CheckBoxQuestion from './question/CheckBoxQuestion';
import DropDownQuestion from './question/DropDownQuestion';
import LongQuestion from './question/LongQuestion';
import MultiQuestion from './question/MultiQuestion';
import RatingQuestion from './question/RatingQuestion';
import ShortQuestion from './question/ShortQuestion';

const SurveyQuestion = ({ question, isFocused }: BaseQuestionProps) => {
  switch (question.type) {
    case 'short':
      return <ShortQuestion question={question} />;
    case 'long':
      return <LongQuestion question={question} />;
    case 'multi':
      return <MultiQuestion question={question} />;
    case 'checkbox':
      return <CheckBoxQuestion question={question} />;
    case 'dropdown':
      return <DropDownQuestion question={question} />;
    case 'rating':
      return <RatingQuestion question={question} />;
    default:
      return null;
  }
};

export default SurveyQuestion;
