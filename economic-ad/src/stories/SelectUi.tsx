import React from 'react';

import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';

import type { TypeMessage } from './SupplementTextElement';
import { SupplementTextElement } from './SupplementTextElement';

interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

type TypeCssSelect = {
    fontText: string,
    fontSize: string,
    color: string,
}

const colourStyles: StylesConfig<ColourOption, true> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : undefined,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? data.color
                        : color.alpha(0.3).css()
                    : undefined,
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

const defaultParaphrase: TypeMessage = {
    isShow: false,
    message: ''
}

const defaultDisplayedError: TypeMessage = {
    isShow: false,
    message: ''
}

const defaultCssSelect: TypeCssSelect = {
    fontText: 'sm',
    fontSize: 'medium',
    color: 'blue',
}

interface SelectUiProps {
    paramCss?: TypeCssSelect;
    label: string;
    field: string;
    colourOptions: Array<ColourOption>;
    placeholder?: string;
    paraphrase?: TypeMessage;
    displayedError?: TypeMessage;
    defaultValue?: Array<ColourOption>;
    SelectRef?: React.RefObject<HTMLSelectElement>;
    onChange?: (any) => void;
}

const SelectUi = ({ paramCss = defaultCssSelect, label, field, placeholder = "...", defaultValue, displayedError = defaultDisplayedError, paraphrase = defaultParaphrase, SelectRef, onChange, colourOptions, ...props }: SelectUiProps) => {

    const colorSelect: string = `text-${paramCss.color}-900 placeholder:text-${paramCss.color}-400 ring-${paramCss.color}-300 focus:ring-${paramCss.color}-600`;
    const colorSupplementSelect: string = `text-${paramCss.color}-600`;
    const fontSelect: string = `text-${paramCss.fontText} font-${paramCss.fontSize}`;
    const variableClassNameLabel: string = `block ${fontSelect} leading-6 ${colorSelect}`;

    const variableClassNameSupplementSelect: string = `mt-3 ${fontSelect} ${colorSupplementSelect}`;

    return (
        <div className="col-span-full mx-2">
            <label htmlFor={field} className={variableClassNameLabel}>
                {label}
            </label>
            <div className="mt-2">
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    options={colourOptions}
                    styles={colourStyles}
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
            </div>
            <SupplementTextElement variableClassNameSupplement={variableClassNameSupplementSelect} paraphrase={paraphrase} displayedError={displayedError} />
        </div>
    )
};

export type {
    SelectUiProps,
    ColourOption
}

export {
    SelectUi
}