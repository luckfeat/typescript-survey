import { surveysAtom } from '../../stores/survey/atom';
import { useAtomValue } from 'jotai';
import SurveySection from './SurveySection';
import { useState } from 'react';

const SurveyEditor = () => {
  const survey = useAtomValue(surveysAtom);
  const surveyList = survey.surveys;
  const surveyLength = surveyList.length;
  const [focus, setFocus] = useState<HTMLElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    const container = e.target?.closest('[data-container-id]');
    if (!(container instanceof HTMLElement)) return;
    setFocus(container);
  };

  return (
    <div>
      {surveyList.map((survey) => {
        return (
          <SurveySection
            length={surveyLength}
            focus={focus}
            onClick={handleClick}
            survey={survey}
          />
        );
      })}
    </div>
  );
};

export default SurveyEditor;
