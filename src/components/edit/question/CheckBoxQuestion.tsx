const CheckBoxQuestion = ({ question }) => {
  return (
    <>
      <p>{question.title}</p>
      <ul>
        {question.content.options.map((option) => (
          <li key={option}>
            <label>
              <input type="checkbox" />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CheckBoxQuestion;
