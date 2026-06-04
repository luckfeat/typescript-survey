const RatingQuestion = ({ question }) => {
  return (
    <>
      <p>{question.title}</p>
      <div>
        {question.content.start} ~ {question.content.end}
      </div>
    </>
  );
};

export default RatingQuestion;
