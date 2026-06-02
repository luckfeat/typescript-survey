import { surveysAtom } from '../../stores/survey/atom';
import { useAtom } from 'jotai';
import { useRef, useState } from 'react';
import SurveySection from './SurveySection';

const SurveyEditor = () => {
  const [surveys, setSurveys] = useAtom(surveysAtom);
  const [focus, setFocus] = useState();
  const focusRef = useRef();
  const { surveys: surveyList } = surveys;

  return (
    <div>
      {surveyList.map((survey) => {
        return <SurveySection survey={survey} />;
      })}
    </div>
  );
};

export default SurveyEditor;
