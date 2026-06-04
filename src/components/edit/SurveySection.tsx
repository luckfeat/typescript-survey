import {
  SurveyQuestionContainer,
  SurveyHeaderContainer,
  HighlightBar,
  HeaderHighlightBar,
} from '../../styles/common';
import type { SurveySectionType } from '../../types';
import SurveyHeader from './SurveyHeader';
import SurveyQuestion from './SurveyQuestion';

interface SurveySectionProps {
  onClick: (e: React.MouseEvent) => void;
  focus: HTMLElement | null;
  survey: SurveySectionType;
}

const SurveySection = ({ onClick, focus, survey }: SurveySectionProps) => {
  const { sectionIndex, questions } = survey;
  const isFocused =
    focus?.dataset.containerId === `header-container-${sectionIndex}`;
  /**
   * if more than one section, display section index
   */
  return (
    <section onClick={onClick}>
      <h3>{sectionIndex}</h3>
      <SurveyHeaderContainer
        data-container-id={`header-container-${sectionIndex}`}
      >
        <HeaderHighlightBar className={isFocused ? 'active' : ''} />
        <SurveyHeader isFocused={isFocused} />
      </SurveyHeaderContainer>
      {questions.map((question, index) => {
        const isFocused =
          focus?.dataset.containerId === `question-container-${index}`;
        return (
          <SurveyQuestionContainer
            data-container-id={`question-container-${index}`}
          >
            <HighlightBar className={isFocused ? 'active' : ''} />
            <SurveyQuestion question={question} isFocused={isFocused} />
          </SurveyQuestionContainer>
        );
      })}
    </section>
  );
};

export default SurveySection;
