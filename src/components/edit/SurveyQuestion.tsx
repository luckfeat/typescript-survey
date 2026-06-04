import type { SurveyQuestionType } from '../../types';

interface SurveyQuestionProps {
  question: SurveyQuestionType;
}

const SurveyQuestion = ({ question }: SurveyQuestionProps) => {
  switch (question.type) {
    case 'short':
      return (
        <>
          <p>{question.title}</p>
          <div>{question.content.shortText}</div>
        </>
      );
    case 'long':
      return (
        <>
          <p>{question.title}</p>
          <div>{question.content.longText}</div>
        </>
      );
    case 'multi':
      return (
        <>
          <p>{question.title}</p>
          <ul>
            {question.content.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </>
      );
    case 'checkbox':
      return (
        <>
          <p>{question.title}</p>
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
        </>
      );
    case 'dropdown':
      return (
        <>
          <p>{question.title}</p>
          <select>
            {question.content.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </>
      );
    case 'rating':
      return (
        <>
          <p>{question.title}</p>
          <div>
            {question.content.start} ~ {question.content.end}
          </div>
        </>
      );
    default:
      return null;
  }
};

export default SurveyQuestion;
