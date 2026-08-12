import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import CheckBoxQuestion from './question/CheckBoxQuestion';
import DropDownQuestion from './question/DropDownQuestion';
import LongQuestion from './question/LongQuestion';
import MultiQuestion from './question/MultiQuestion';
import ShortQuestion from './question/ShortQuestion';
import useOutsideClick from '../../hooks/useOutsideClick';
import type { Dispatch, SetStateAction } from 'react';
import type { SurveyQuestionType } from '../../types';
import useSurveyActions from '../../hooks/useSurveyActions';
import {
  AlignLeft,
  CheckSquare2,
  ChevronDownSquare,
  CircleDot,
  TextCursorInput,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type QuestionType = SurveyQuestionType['type'];

interface QuestionProps {
  question: SurveyQuestionType;
  isFocused: boolean;
}

interface DropdownProps {
  selected: boolean;
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
  icon: LucideIcon;
}

const dropdownOptions: DropdownOption[] = [
  { label: '단답형', value: 'short', icon: TextCursorInput },
  { label: '장문형', value: 'long', icon: AlignLeft },
  { label: '객관식 질문', value: 'multi', icon: CircleDot },
  { label: '체크박스', value: 'checkbox', icon: CheckSquare2 },
  { label: '드롭다운', value: 'dropdown', icon: ChevronDownSquare },
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
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  font-size: 13px;
  color: #374151;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    outline: none;
    background-color: #f3f4f6;
    color: #007bff;
  }
`;

const DropdownIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 18px;
  color: inherit;
  transition: color 0.15s ease;
`;

const Dropdown = ({
  selected,
  onClick,
  setSelected,
  setType,
}: DropdownProps) => {
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
              const Icon = option.icon;

              return (
                <DropdownItem
                  key={option.value}
                  role="option"
                  tabIndex={-1}
                  onClick={() => {
                    setSelected(false);
                    setType(option.value);
                  }}
                >
                  <DropdownIcon aria-hidden="true">
                    <Icon size={17} strokeWidth={1.8} />
                  </DropdownIcon>
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

/**
 * Question Body Editor
 */
const Question = ({ type, isFocused }: QuestionProps) => {
  switch (type) {
    case 'short':
      return <ShortQuestion isFocused={isFocused} />;
    case 'long':
      return <LongQuestion isFocused={isFocused} />;
    case 'multi':
      return <MultiQuestion isFocused={isFocused} />;
    case 'checkbox':
      return <CheckBoxQuestion isFocused={isFocused} />;
    case 'dropdown':
      return <DropDownQuestion isFocused={isFocused} />;
    default:
      return null;
  }
};

const SurveyQuestion = ({ question, isFocused }: SurveyQuestionProps) => {
  const [selected, setSelected] = useState(false);
  /**
   *
   */
  const [type, setType] = useState('short');

  const handleClickDropdown = () => {
    setSelected(!selected);
  };

  return (
    <>
      <QuestionHeader>
        <QuestionTitle>{question.title}</QuestionTitle>
        <Dropdown
          selected={selected}
          onClick={handleClickDropdown}
          setSelected={setSelected}
          setType={setType}
        />
      </QuestionHeader>
      <Question type={question.type} isFocused={isFocused} />
    </>
  );
};

export default SurveyQuestion;
