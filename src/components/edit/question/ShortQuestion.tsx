import type { QuestionByType } from '../../../types';

interface ShortQuestionProps {
  question: QuestionByType<'short'>;
  isFocused: boolean;
}

const ShortQuestion = ({ question, isFocused }: ShortQuestionProps) => {
  return (
    <>
      {isFocused ? (
        <></>
      ) : (
        <>
          <p>{question.title}</p>
          <div>{question.content.shortText}</div>
        </>
      )}
    </>
  );
};

export default ShortQuestion;
