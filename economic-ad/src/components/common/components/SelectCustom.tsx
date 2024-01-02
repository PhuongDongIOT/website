import React from 'react';
// import { logger } from '~utils/logger.utils';

import { TypeCommonProps, TypeValueString } from './TypeCommon';

import { SelectUi } from '~stories/SelectUi';
import type { ColourOption } from '~stories/SelectUi';

function SelectCustom({ label, field, setValue, watch, errors, onChange, listParams, ...props }: TypeCommonProps) {

    const handleOnChange = onChange ? onChange : (value: any): void => {
        const valueSelect: TypeValueString = value;
        console.log(valueSelect)
        // logger.info(`${field} - ${value}`)
        setValue(field, valueSelect);
    }

    const colourOptions: ColourOption[] = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];

    return (
        <SelectUi label={label} field={field} colourOptions={colourOptions} placeholder={'...'} defaultValue={watch('field') ?? []}
        onChange={handleOnChange}
        displayedError={{
            isShow: errors[field] ? true : false,
            message: `${errors[field]?.message}` ?? ''
        }}/>
    )
}

export default SelectCustom