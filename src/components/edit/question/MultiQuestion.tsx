const MultiQuestion = ({ question }) => {
  return (
    <>
      <p>{question.title}</p>
      <ul>
        {question.content.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </>
  );
};

export default MultiQuestion;
