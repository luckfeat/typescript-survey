import type { QuestionByType } from '../../../types';

interface CheckBoxQuestionProps {
  // question: QuestionByType<'checkbox'>;
  isFocused: boolean;
}

const CheckBoxQuestion = ({ isFocused }: CheckBoxQuestionProps) => {
  return (
    <>
      {/* {question.content.options.map((option) => (
              <li key={option}>
                <label>
                  <input type="checkbox" />
                  {option}
                </label>
              </li>
            ))} */}
      <div>check box</div>
    </>
  );
};

export default CheckBoxQuestion;
