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
  length: number;
  onClick: (e: React.MouseEvent) => void;
  focus: HTMLElement | null;
  survey: SurveySectionType;
}

const getHeaderContainerId = (sectionIndex: number) =>
  `header-container-${sectionIndex}`;

const getQuestionContainerId = (sectionIndex: number, questionIndex: number) =>
  `question-container-${sectionIndex}-${questionIndex}`;

const SurveySection = ({
  length,
  onClick,
  focus,
  survey,
}: SurveySectionProps) => {
  const { sectionIndex, title, description, questions } = survey;
  const isFocused = (containerId: string) => focusedContainerId === containerId;
  const focusedContainerId = focus?.dataset.containerId;
  const headerContainerId = getHeaderContainerId(sectionIndex);
  const isHeaderFocused = isFocused(headerContainerId);
  return (
    <section onClick={onClick}>
      <h4>
        {length} 중 {sectionIndex} 섹션
      </h4>
      <SurveyHeaderContainer data-container-id={headerContainerId}>
        <HeaderHighlightBar className={isHeaderFocused ? 'active' : ''} />
        <SurveyHeader
          title={title}
          description={description}
          isFocused={isHeaderFocused}
        />
      </SurveyHeaderContainer>
      {questions.map((question, index) => {
        const questionContainerId = getQuestionContainerId(sectionIndex, index);
        const isQuestionFocused = isFocused(questionContainerId);

        return (
          <SurveyQuestionContainer
            key={questionContainerId}
            data-container-id={questionContainerId}
          >
            <HighlightBar className={isQuestionFocused ? 'active' : ''} />
            <SurveyQuestion question={question} isFocused={isQuestionFocused} />
          </SurveyQuestionContainer>
        );
      })}
    </section>
  );
};

export default SurveySection;
