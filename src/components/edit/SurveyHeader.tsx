import { Title, Description } from '../../styles/common';

interface SurveyHeaderProps {
  isFocused: boolean;
}

const SurveyHeader = ({ isFocused }: SurveyHeaderProps) => {
  return (
    <>
      {isFocused ? (
        <></>
      ) : (
        <>
          {' '}
          <Title />
          <Description />
        </>
      )}
    </>
  );
};

export default SurveyHeader;
