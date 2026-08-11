import { Title, Description } from '../../styles/common';

interface SurveyHeaderProps {
  title: string;
  description: string;
  isFocused: boolean;
}

const SurveyHeader = ({ title, description, isFocused }: SurveyHeaderProps) => {
  return (
    <>
      {isFocused ? (
        <>
          <Title placeholder={title} />
          <Description placeholder={description} />
        </>
      ) : (
        <>
          <Title value={title} readOnly={!isFocused} />
          <Description value={description} readOnly={!isFocused} />
        </>
      )}
    </>
  );
};

export default SurveyHeader;
