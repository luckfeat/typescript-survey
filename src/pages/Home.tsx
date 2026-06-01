import Button from '../components/common/Button';
import { Container, Heading, SubHeading, Card } from '../styles/common';
import useCreateSurvey from '../hooks/useCreateSurvey';

const SurveyList = () => {
  return <div></div>;
};

const Home = () => {
  const { createSurvey } = useCreateSurvey();

  return (
    <Container>
      <Heading>설문지</Heading>
      <SubHeading>새로운 설문</SubHeading>
      <Button onClick={createSurvey}>+</Button>
      <SubHeading>최근 설문지</SubHeading>
      <SurveyList />
    </Container>
  );
};

export default Home;
