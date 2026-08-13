import type { QuestionByType } from '../../../types';
import {
  QuestionAnswerInput,
  QuestionAnswerText,
} from '../../../styles/common';

interface LongQuestionProps {
  question: QuestionByType<'long'>;
  isFocused: boolean;
}

const LongQuestion = ({ question, isFocused }: LongQuestionProps) => {
  return (
    <>
      <QuestionAnswerText>장문형 텍스트</QuestionAnswerText>
    </>
  );
};

export default LongQuestion;
