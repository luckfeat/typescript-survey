import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Container, Heading } from '../styles/common';
import Button from '../components/common/Button';
import { useState } from 'react';
import SurveyEditor from '../components/edit/SurveyEditor';
import SurveyResponse from '../components/edit/SurveyResponse';

const Wrapper = styled.div`
  background-color: #f0f4f8;
  min-height: 100vh;
`;

const Navigation = styled.nav`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const NavButtonContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const StyledButton = styled(Button)<{ active: boolean }>`
  background: none;
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => (props.active ? '#007bff' : '#999')};
  font-weight: ${(props) => (props.active ? '700' : '400')};
  border-bottom: ${(props) => (props.active ? '2px solid #007bff' : 'none')};
  transition: all 0.2s ease;

  &:hover {
    color: #007bff;
  }
`;

const Edit = () => {
  const { surveyId } = useParams();
  const [panel, setPanel] = useState('survey');

  return (
    <Wrapper>
      <Navigation>
        <NavContainer>
          <Heading>{surveyId}</Heading>
        </NavContainer>
        <NavButtonContainer>
          <StyledButton
            active={panel === 'survey'}
            onClick={() => {
              setPanel('survey');
            }}
          >
            질문
          </StyledButton>
          <StyledButton
            active={panel === 'response'}
            onClick={() => {
              setPanel('response');
            }}
          >
            응답
          </StyledButton>
        </NavButtonContainer>
      </Navigation>
      <Container>
        {panel === 'survey' ? <SurveyEditor /> : <SurveyResponse />}
      </Container>
    </Wrapper>
  );
};

export default Edit;
