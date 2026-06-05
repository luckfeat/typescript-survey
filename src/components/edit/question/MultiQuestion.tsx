import type { QuestionByType } from '../../../types';

interface MultiQuestionProps {
  question: QuestionByType<'multi'>;
  isFocused: boolean;
}

const MultiQuestion = ({ question, isFocused }: MultiQuestionProps) => {
  return (
    <>
      {isFocused ? (
        <></>
      ) : (
        <>
          <p>{question.title}</p>
          <ul>
            {question.content.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default MultiQuestion;
