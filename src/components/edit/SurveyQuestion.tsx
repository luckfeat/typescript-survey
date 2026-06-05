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
      return <ShortQuestion question={question} isFocused={isFocused} />;
    case 'long':
      return <LongQuestion question={question} isFocused={isFocused} />;
    case 'multi':
      return <MultiQuestion question={question} isFocused={isFocused} />;
    case 'checkbox':
      return <CheckBoxQuestion question={question} isFocused={isFocused} />;
    case 'dropdown':
      return <DropDownQuestion question={question} isFocused={isFocused} />;
    case 'rating':
      return <RatingQuestion question={question} isFocused={isFocused} />;
    default:
      return null;
  }
};

export default SurveyQuestion;
