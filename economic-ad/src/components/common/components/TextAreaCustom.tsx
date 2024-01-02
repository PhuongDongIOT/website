import React from 'react';
// import { logger } from '~utils/logger.utils';

import { TypeCommonProps, TypeValueString } from './TypeCommon';

import { TextAreaUi } from '~stories/TextAreaUi';

function TextAreaCustom({ label, field, setValue, watch, errors, onChange, listParams, ...props }: TypeCommonProps) {

    const handleOnChange = onChange ? onChange : (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const valueTextArea: TypeValueString = event.target?.value ? `${event.target?.value}` : '';
        // logger.info(`${field} - ${valueTextArea}`)
        setValue(field, valueTextArea);
    }

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