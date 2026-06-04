import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 770px;
  margin: 0 auto;
`;

export const SurveyHeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-top: 12px solid #007bff;
  border-radius: 8px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-left: 4px solid transparent;
  transition: border-left-color 0.2s ease;

  &.active {
    border-left-color: #ffd700;
  }
`;

export const SurveyQuestionContainer = styled(Container)`
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  border-left: 4px solid transparent;
  transition: border-left-color 0.2s ease;

  &.active {
    border-left-color: #ffd700;
  }
`;

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

export const SubHeading = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

export const Card = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;
