import styled from '@emotion/styled';
import {
  SurveyQuestionContainer,
  SurveyTitleContainer,
} from '../../styles/common';
import type { SurveySectionType } from '../../types';
import SurveyQuestionItem from './SurveyQuestion';

interface SurveySectionProps {
  survey: SurveySectionType;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const SurveySection = ({ survey }: SurveySectionProps) => {
  const { sectionIndex, questions } = survey;
  /**
   * if more than one section, display section index
   */
  return (
    <section>
      <h3>{sectionIndex}</h3>
      <SurveyTitleContainer>
        <InputWrapper>
          <Title />
          <Description />
        </InputWrapper>
      </SurveyTitleContainer>
      {questions.map((question) => {
        return (
          <SurveyQuestionContainer>
            <SurveyQuestionItem question={question} />
          </SurveyQuestionContainer>
        );
      })}
    </section>
  );
};

export default SurveySection;
