import type { SurveyQuestionType } from '../../types';

interface SurveyQuestionProps {
  question: SurveyQuestionType;
}

const SurveyQuestionItem = ({ question }: SurveyQuestionProps) => {
  switch (question.type) {
    case 'short':
      return <div>{question.content.shortText}</div>;
    case 'long':
      return <div>{question.content.longText}</div>;
    case 'multi':
      return (
        <ul>
          {question.content.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      );
    case 'checkbox':
      return (
        <ul>
          {question.content.options.map((option) => (
            <li key={option}>
              <label>
                <input type="checkbox" />
                {option}
              </label>
            </li>
          ))}
        </ul>
      );
    case 'dropdown':
      return (
        <select>
          {question.content.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      );
    case 'rating':
      return (
        <div>
          {question.content.start} ~ {question.content.end}
        </div>
      );
    default:
      return null;
  }
};

export default SurveyQuestionItem;
