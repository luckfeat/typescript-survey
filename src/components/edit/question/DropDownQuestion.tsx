import type { QuestionByType } from '../../../types';

interface DropDownQuestionProps {
  // question: QuestionByType<'dropdown'>;
  isFocused: boolean;
}

const DropDownQuestion = ({ isFocused }: DropDownQuestionProps) => {
  return (
    <>
      {/* <select>
            {question.content.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select> */}
      <div>drop down</div>
    </>
  );
};

export default DropDownQuestion;
