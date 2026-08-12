import type { QuestionByType } from '../../../types';

interface LongQuestionProps {
  // question: QuestionByType<'long'>;
  isFocused: boolean;
}

const LongQuestion = ({ isFocused }: LongQuestionProps) => {
  return (
    <>
      <div>long</div>
    </>
  );
};

export default LongQuestion;
