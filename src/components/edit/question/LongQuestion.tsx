import type { QuestionByType } from '../../../types';

interface LongQuestionProps {
  question: QuestionByType<'long'>;
  isFocused: boolean;
}

const LongQuestion = ({ question, isFocused }: LongQuestionProps) => {
  return (
    <>
      {isFocused ? (
        <></>
      ) : (
        <>
          <div>{question.content.longText}</div>
        </>
      )}
    </>
  );
};

export default LongQuestion;
