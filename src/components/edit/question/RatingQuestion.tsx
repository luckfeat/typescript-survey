import type { QuestionByType } from '../../../types';

interface RatingQuestionProps {
  question: QuestionByType<'rating'>;
  isFocused: boolean;
}

const RatingQuestion = ({ question, isFocused }: RatingQuestionProps) => {
  return (
    <>
      {isFocused ? (
        <></>
      ) : (
        <>
          <p>{question.title}</p>
          <div>
            {question.content.start} ~ {question.content.end}
          </div>
        </>
      )}
    </>
  );
};

export default RatingQuestion;
