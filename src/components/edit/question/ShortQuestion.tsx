const ShortQuestion = ({ question }) => {
  return (
    <>
      <p>{question.title}</p>
      <div>{question.content.shortText}</div>
    </>
  );
};

export default ShortQuestion;
