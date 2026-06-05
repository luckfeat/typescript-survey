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
          <Title />
          <Description />
        </>
      ) : (
        <>
          <Title placeholder={title} value={title} />
          <Description placeholder={description} value={description} />
        </>
      )}
    </>
  );
};

export default SurveyHeader;
