import React, { ChangeEvent } from "react";
import type { TypeMessage } from './SupplementTextElement';
import { SupplementTextElement } from './SupplementTextElement';


type TypeCssInput = {
  fontText: string,
  fontSize: string,
  color: string,
}

const defaultCssInput: TypeCssInput = {
  fontText: 'sm',
  fontSize: 'medium',
  color: 'blue',
}

const defaultParaphrase: TypeMessage = {
  isShow: false,
  message: ''
}

const defaultDisplayedError: TypeMessage = {
  isShow: false,
  message: ''
}

interface InputUiProps {
  paramCss?: TypeCssInput;
  label: string;
  field: string;
  rows?: number;
  placeholder?: string;
  paraphrase?: TypeMessage;
  displayedError?: TypeMessage;
  defaultValue?: string;
  InputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputUi = ({ paramCss = defaultCssInput, label, field, rows = 3, paraphrase = defaultParaphrase, placeholder = "...", defaultValue = "", displayedError = defaultDisplayedError, InputRef, onChange, ...props }: InputUiProps) => {

  const colorInput: string = `text-${paramCss.color}-900 placeholder:text-${paramCss.color}-400 ring-${paramCss.color}-300 focus:ring-${paramCss.color}-600`;
  const colorSupplementInput: string = `text-${paramCss.color}-600`;
  const fontInput: string = `text-${paramCss.fontText} font-${paramCss.fontSize}`;
  const variableClassNameLabel: string = `block ${fontInput} leading-6 ${colorInput}`;

  const variableClassNameInput: string = `block w-full rounded-md border-0 py-1.5 px-1 ${fontInput} shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:leading-6 ${colorInput}`;
  const variableClassNameSupplementInput: string = `mt-3 ${fontInput} ${colorSupplementInput}`;

  return (
    <div className="col-span-full mx-2">
      <label htmlFor={field} className={variableClassNameLabel}>
        {label}
      </label>
      <div className="mt-2">
        <input
          ref={InputRef}
          onChange={onChange}
          id={field}
          name={field}
          placeholder={placeholder}
          className={variableClassNameInput}
          defaultValue={defaultValue}
        />
      </div>
      <SupplementTextElement variableClassNameSupplement={variableClassNameSupplementInput} paraphrase={paraphrase} displayedError={displayedError} />
    </div>
  )
}


export type {
  InputUiProps
}

export {
  InputUi
}