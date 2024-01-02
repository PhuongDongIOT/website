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

interface TypeListCheckBox {
    label: string;
    field: string;
    rows?: number;
    value?: string | number | undefined;
    checker: boolean;
    description?: string;
    placeholder?: string;
    defaultValue?: string;
    InputRef?: React.RefObject<HTMLInputElement>;
}

interface ListCheckBoxUiProps {
    paramCss?: TypeCssInput;
    legend?: string;
    field?: string;
    listParams?: Array<TypeListCheckBox>;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>, field: string) => void) | any;
    paraphrase?: TypeMessage;
    displayedError?: TypeMessage;
    type?: 'checkbox' | 'radio'
}

const ListCheckBoxUi = ({ paramCss = defaultCssInput, legend = "", field, listParams = [], onChange, paraphrase = defaultParaphrase, displayedError = defaultDisplayedError, type, ...props }: ListCheckBoxUiProps) => {

    const colorInput: string = `text-${paramCss.color}-600 placeholder:text-${paramCss.color}-400 ring-${paramCss.color}-300 focus:ring-${paramCss.color}-600`;
    const colorSupplementInput: string = `text-${paramCss.color}-600`;
    const fontInput: string = `text-${paramCss.fontText} font-${paramCss.fontSize}`;
    const variableClassNameLabel: string = `text-${paramCss.color}-500`;

    const variableClassNameInput: string = `h-4 w-4 rounded border-gray-30 ${colorInput}`;
    const variableClassNameSupplementInput: string = `mt-3 ${fontInput} ${colorSupplementInput}`;

    return (
        <div className="col-span-full mx-2">
            <fieldset>
                {legend && <legend className="text-sm font-semibold leading-6 text-gray-900">{legend}</legend>}
                <div className="mt-6 space-y-6">
                    {listParams && listParams.map((param: TypeListCheckBox, index: number) =>

                        <div className="relative flex gap-x-3" key={`${param.field}-${index}`}>
                            <div className="flex h-6 items-center">
                                <input
                                    ref={param.InputRef}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event, param.field)}
                                    id={param.field}
                                    name={type === 'radio' ? field : param.field}
                                    checked={param.checker ? true : false}
                                    value={param.value}
                                    type={type}
                                    className={variableClassNameInput}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor={param.field} className={variableClassNameLabel}>
                                    {param.label}
                                </label>
                                {param.description && <p className="text-gray-500">{param.description}</p>}
                            </div>
                        </div>
                    )}
                </div>
            </fieldset>
            <SupplementTextElement variableClassNameSupplement={variableClassNameSupplementInput} paraphrase={paraphrase} displayedError={displayedError} />
        </div>
    )
}


export type {
    ListCheckBoxUiProps
}

export {
    ListCheckBoxUi
}