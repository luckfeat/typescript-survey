const DropDownQuestion = ({ question }) => {
  return (
    <>
      <p>{question.title}</p>
      <select>
        {question.content.options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default DropDownQuestion;
