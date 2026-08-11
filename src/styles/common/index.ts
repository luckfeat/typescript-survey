import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 770px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const HighlightBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background-color: transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: background-color 0.2s ease;

  &.active {
    background-color: #ffd700;
  }
`;

export const HeaderHighlightBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background-color: transparent;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 8px;
  transition: background-color 0.2s ease;

  &.active {
    background-color: #ffd700;
  }
`;

export const SurveyHeaderContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-top: 12px solid #007bff;
  border-radius: 8px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  overflow: visible;
`;

export const SurveyQuestionContainer = styled(Container)`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const Heading = styled.h1`
  font-size: 34px;
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

export const Title = styled.input`
  width: calc(100% - 32px);
  font-size: 34px;
  font-weight: 700;
  height: 48px;
  padding-top: 8px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: inherit;
  box-sizing: border-box;
  background-color: transparent;
  background-image: linear-gradient(#007bff, #007bff);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0 2px;
  color: #333;
  transition: background-size 0.25s ease;

  &[readonly] {
    border-bottom-color: transparent;
  }

  &:focus {
    outline: none;
    border-bottom-color: transparent;
    background-size: 100% 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Description = styled.input`
  width: calc(100% - 32px);
  font-size: 14px;
  margin-bottom: 16px;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: inherit;
  box-sizing: border-box;
  background-color: transparent;
  background-image: linear-gradient(#007bff, #007bff);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0 2px;
  color: #4b5563;
  transition: background-size 0.25s ease;

  &[readonly] {
    border-bottom-color: transparent;
  }

  &:focus {
    outline: none;
    border-bottom-color: transparent;
    background-size: 100% 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
