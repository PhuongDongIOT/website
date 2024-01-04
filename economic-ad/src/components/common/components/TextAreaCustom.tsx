import React from 'react';
import { funcSaveElementForm } from '~helpers/forms/form.helper';

import { TypeCommonProps, TypeValueString } from './TypeCommon';

import { TextAreaUi } from '~stories/TextAreaUi';

function TextAreaCustom({ label, field, setValue, watch, errors, onChange, listParams, ...props }: TypeCommonProps) {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => funcSaveElementForm(field, onChange, setValue, event.target?.value, 'Input');

    return (
        <TextAreaUi label={label} field={field} placeholder={'...'}
            defaultValue={watch(field) ?? ''}
            onChange={handleOnChange}
            displayedError={{
                isShow: errors[field] ? true : false,
                message: `${errors[field]?.message}` ?? ''
            }}
            {...props} />
    )
}

export default TextAreaCustom