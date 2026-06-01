import { useParams } from 'react-router-dom';

const Survey = () => {
  const { surveyId } = useParams();

  return <div>{surveyId}</div>;
};

export default Survey;
