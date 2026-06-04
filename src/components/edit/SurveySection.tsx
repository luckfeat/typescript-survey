import {
  SurveyQuestionContainer,
  SurveyHeaderContainer,
  HighlightBar,
  HeaderHighlightBar,
  Title,
  Description,
} from '../../styles/common';
import type { SurveySectionType } from '../../types';
import SurveyQuestionItem from './SurveyQuestion';

interface SurveySectionProps {
  onClick: (e: React.MouseEvent) => void;
  focus: HTMLElement | null;
  survey: SurveySectionType;
}

const SurveySection = ({ onClick, focus, survey }: SurveySectionProps) => {
  const { sectionIndex, questions } = survey;
  const isFocused = focus?.dataset.containerId;
  /**
   * if more than one section, display section index
   */
  return (
    <section onClick={onClick}>
      <h3>{sectionIndex}</h3>
      <SurveyHeaderContainer
        data-container-id={`header-container-${sectionIndex}`}
      >
        <HeaderHighlightBar
          className={
            isFocused === `header-container-${sectionIndex}` ? 'active' : ''
          }
        />
        <Title />
        <Description />
      </SurveyHeaderContainer>
      {questions.map((question, index) => {
        return (
          <SurveyQuestionContainer
            data-container-id={`question-container-${index}`}
          >
            <HighlightBar
              className={
                isFocused === `question-container-${index}` ? 'active' : ''
              }
            />
            <SurveyQuestionItem question={question} />
          </SurveyQuestionContainer>
        );
      })}
    </section>
  );
};

export default SurveySection;
