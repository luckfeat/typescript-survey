const LongQuestion = ({ question }) => {
  return (
    <>
      <p>{question.title}</p>
      <div>{question.content.longText}</div>
    </>
  );
};

export default LongQuestion;
