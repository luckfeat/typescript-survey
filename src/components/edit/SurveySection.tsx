import styled from '@emotion/styled';
import { SurveyTitleContainer } from '../../styles/common';
import type { SurveySection } from '../../types';

interface SurveySectionProps {
  survey: SurveySection;
}

const Title = styled.input`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  height: 48px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: inherit;

  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }
`;

const Description = styled.input`
  width: 100%;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: inherit;

  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }
`;

const SurveySection = ({ survey }: SurveySectionProps) => {
  /**
   * if more than one section, display section index
   */
  return (
    <section>
      <SurveyTitleContainer>
        <Title />
        <Description />
      </SurveyTitleContainer>
    </section>
  );
};

export default SurveySection;
