import { useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { SurveyQuestionType } from '../../types';
import styled from '@emotion/styled';
import CheckBoxQuestion from './question/CheckBoxQuestion';
import DropDownQuestion from './question/DropDownQuestion';
import LongQuestion from './question/LongQuestion';
import MultiQuestion from './question/MultiQuestion';
import RatingQuestion from './question/RatingQuestion';
import ShortQuestion from './question/ShortQuestion';
import useOutsideClick from '../../hooks/useOutsideClick';

type QuestionType = SurveyQuestionType['type'];

interface QuestionProps {
  question: SurveyQuestionType;
  isFocused: boolean;
}

interface DropdownProps {
  selected: boolean;
  setType: Dispatch<SetStateAction<QuestionType>>;
  setSelected: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
}

interface SurveyQuestionProps {
  question: SurveyQuestionType;
  isFocused: boolean;
}

interface DropdownOption {
  label: string;
  value: QuestionType;
}

const dropdownOptions: DropdownOption[] = [
  { label: '단답형', value: 'short' },
  { label: '장문형', value: 'long' },
  { label: '객관식 질문', value: 'multi' },
  { label: '체크박스', value: 'checkbox' },
  { label: '드롭다운', value: 'dropdown' },
];

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

const QuestionTitle = styled.h3`
  flex: 1;
  min-width: 0;
  margin: 0;
  color: #1f2937;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

const DropdownContainer = styled.div`
  flex-shrink: 0;
  margin-left: auto;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 140px;
`;

const DropdownTrigger = styled.button`
  width: 100%;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  background-color: #ffffff;
  color: #1f2937;
  padding: 8px 12px;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: #007bff;
  }

  &:focus-visible {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.16);
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  width: 100%;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
  z-index: 10;
  box-sizing: border-box;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  font-size: 13px;
  color: #374151;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    outline: none;
    background-color: #f3f4f6;
  }
`;

const Question = ({ question, isFocused }: QuestionProps) => {
  switch (question.type) {
    case 'short':
      return <ShortQuestion question={question} isFocused={isFocused} />;
    case 'long':
      return <LongQuestion question={question} isFocused={isFocused} />;
    case 'multi':
      return <MultiQuestion question={question} isFocused={isFocused} />;
    case 'checkbox':
      return <CheckBoxQuestion question={question} isFocused={isFocused} />;
    case 'dropdown':
      return <DropDownQuestion question={question} isFocused={isFocused} />;
    case 'rating':
      return <RatingQuestion question={question} isFocused={isFocused} />;
    default:
      return null;
  }
};

const Dropdown = ({
  selected,
  setType,
  onClick,
  setSelected,
}: DropdownProps) => {
  const handleDropdownClick = (option: QuestionType) => {
    setType(option);
    setSelected(false);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    setSelected(false);
  });

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownWrapper>
        <DropdownTrigger
          type="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          onClick={onClick}
        >
          Option 1
        </DropdownTrigger>
        {selected && (
          <DropdownMenu role="listbox">
            {dropdownOptions.map((option) => {
              return (
                <DropdownItem
                  role="option"
                  tabIndex={-1}
                  onClick={() => {
                    handleDropdownClick(option.value);
                  }}
                >
                  {option.label}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        )}
      </DropdownWrapper>
    </DropdownContainer>
  );
};

const SurveyQuestion = ({ question, isFocused }: SurveyQuestionProps) => {
  const [, setType] = useState(question.type);
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      <QuestionHeader>
        <QuestionTitle>{question.title}</QuestionTitle>
        <Dropdown
          selected={selected}
          setType={setType}
          onClick={handleClick}
          setSelected={setSelected}
        />
      </QuestionHeader>
      <Question question={question} isFocused={isFocused} />
    </>
  );
};

export default SurveyQuestion;
