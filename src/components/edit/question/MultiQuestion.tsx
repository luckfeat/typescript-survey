import type { QuestionByType } from '../../../types';

interface MultiQuestionProps {
  // question: QuestionByType<'multi'>;
  isFocused: boolean;
}

const MultiQuestion = ({ isFocused }: MultiQuestionProps) => {
  return (
    <>
      <div>multi</div>
    </>
  );
};

export default MultiQuestion;
