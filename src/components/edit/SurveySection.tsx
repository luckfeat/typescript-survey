import styled from '@emotion/styled';
import {
  SurveyQuestionContainer,
  SurveyHeaderContainer,
} from '../../styles/common';
import type { SurveySectionType } from '../../types';
import SurveyQuestionItem from './SurveyQuestion';

interface SurveySectionProps {
  onClick: (e: React.MouseEvent) => void;
  focus: HTMLElement | null;
  survey: SurveySectionType;
}

const Title = styled.input`
  width: calc(100% - 32px);
  font-size: 28px;
  font-weight: 700;
  height: 48px;
  padding-top: 8px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }
`;

const Description = styled.input`
  width: calc(100% - 32px);
  font-size: 14px;
  margin-bottom: 16px;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }
`;

const SurveySection = ({ onClick, focus, survey }: SurveySectionProps) => {
  const { sectionIndex, questions } = survey;
  const isFocused = focus?.dataset.containerId;
  /**
   * if more than one section, display section index
   * highlight focused container
   */
  return (
    <section onClick={onClick}>
      <h3>{sectionIndex}</h3>
      <SurveyHeaderContainer
        data-container-id={`header-container-${sectionIndex}`}
        className={
          isFocused === `header-container-${sectionIndex}` ? 'active' : ''
        }
      >
        <Title />
        <Description />
      </SurveyHeaderContainer>
      {questions.map((question, index) => {
        return (
          <SurveyQuestionContainer
            data-container-id={`question-container-${index}`}
            className={
              isFocused === `question-container-${index}` ? 'active' : ''
            }
          >
            <SurveyQuestionItem question={question} />
          </SurveyQuestionContainer>
        );
      })}
    </section>
  );
};

export default SurveySection;
