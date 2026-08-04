import type { QuestionByType } from '../../../types';

interface DropDownQuestionProps {
  question: QuestionByType<'dropdown'>;
  isFocused: boolean;
}

const DropDownQuestion = ({ question, isFocused }: DropDownQuestionProps) => {
  return (
    <>
      {isFocused ? (
        <></>
      ) : (
        <>
          <select>
            {question.content.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </>
      )}
    </>
  );
};

export default DropDownQuestion;
