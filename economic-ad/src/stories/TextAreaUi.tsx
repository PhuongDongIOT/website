import React, { ChangeEvent } from "react";
import type { TypeMessage } from './SupplementTextElement';
import { SupplementTextElement } from './SupplementTextElement';


type TypeCssTextArea = {
  fontText: string,
  fontSize: string,
  color: string,
}

const defaultCssTextArea: TypeCssTextArea = {
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

interface TextAreaUiProps {
  paramCss?: TypeCssTextArea;
  label: string;
  field: string;
  rows?: number;
  placeholder?: string;
  paraphrase?: TypeMessage;
  displayedError?:  TypeMessage;
  defaultValue?: string;
  TextAreaRef?: React.RefObject<HTMLTextAreaElement>;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaUi = ({ paramCss = defaultCssTextArea, label , field, rows = 3, paraphrase = defaultParaphrase, placeholder="...", defaultValue = "", displayedError = defaultDisplayedError, TextAreaRef, onChange, ...props }: TextAreaUiProps) => {

  const colorTextArea: string = `text-${paramCss.color}-900 placeholder:text-${paramCss.color}-400 ring-${paramCss.color}-300 focus:ring-${paramCss.color}-600`;
  const colorSupplementTextArea: string = `text-${paramCss.color}-600`;
  const fontTextArea: string = `text-${paramCss.fontText} font-${paramCss.fontSize}`;
  const variableClassNameLabel: string = `block ${fontTextArea} leading-6 ${colorTextArea}`;

  const variableClassNameTextArea: string = `block w-full rounded-md border-0 py-1.5 px-1 ${fontTextArea} shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:leading-6 ${colorTextArea}`;
  const variableClassNameSupplementTextArea: string = `mt-3 ${fontTextArea} ${colorSupplementTextArea}`;

  return (
    <div className="col-span-full mx-2">
      <label htmlFor={field} className={variableClassNameLabel}>
        {label}
      </label>
      <div className="mt-2">
        <textarea
          ref={TextAreaRef}
          onChange={onChange}
          id={field}
          name={field}
          rows={rows}
          placeholder={placeholder}
          className={variableClassNameTextArea}
          defaultValue={defaultValue}
        />
      </div>
      <SupplementTextElement variableClassNameSupplement={variableClassNameSupplementTextArea} paraphrase={paraphrase}  displayedError={displayedError}/>
    </div>
  )
}


export type {
  TextAreaUiProps
}

export {
  TextAreaUi
}

export default TextAreaUi