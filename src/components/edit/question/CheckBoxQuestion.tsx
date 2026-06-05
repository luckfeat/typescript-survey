import type { QuestionByType } from '../../../types';

interface CheckBoxQuestionProps {
  question: QuestionByType<'checkbox'>;
  isFocused: boolean;
}

const CheckBoxQuestion = ({ question, isFocused }: CheckBoxQuestionProps) => {
  return (
    <>
      {isFocused ? (
        <></>
      ) : (
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
      )}
    </>
  );
};

export default CheckBoxQuestion;
