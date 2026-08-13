import type { QuestionByType } from '../../../types';
import {
  QuestionAnswerInput,
  QuestionAnswerText,
} from '../../../styles/common';

interface ShortQuestionProps {
  question: QuestionByType<'short'>;
  isFocused: boolean;
}

const ShortQuestion = ({ question, isFocused }: ShortQuestionProps) => {
  return (
    <>
      <QuestionAnswerText>단답형 텍스트</QuestionAnswerText>
    </>
  );
};

export default ShortQuestion;
