import type { QuestionByType } from '../../../types';
import Input from '../../common/Input';

interface ShortQuestionProps {
  // question: QuestionByType<'short'>;
  isFocused: boolean;
}

const ShortQuestion = ({ isFocused }: ShortQuestionProps) => {
  return (
    <>
      <Input />
    </>
  );
};

export default ShortQuestion;
