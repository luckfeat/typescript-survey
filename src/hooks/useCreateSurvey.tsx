import { useNavigate } from 'react-router-dom';

const useCreateSurvey = () => {
  const navigte = useNavigate();

  const createSurvey = () => {
    navigte('/survey/test/edit');
  };

  return { createSurvey };
};

export default useCreateSurvey;
