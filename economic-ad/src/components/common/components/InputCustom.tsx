import React from 'react';
// import { logger } from '~utils/logger.utils';

import { TypeCommonProps, TypeValueString } from './TypeCommon';

import { InputUi } from '~stories/InputUi';

function InputCustom({ label, field, setValue, watch, errors, onChange, listParams, ...props }: TypeCommonProps) {

    const handleOnChange = onChange ? onChange : (event: React.ChangeEvent<HTMLInputElement>): void => {

        const valueInput: TypeValueString = event.target?.value ? `${event.target?.value}` : '';

        // logger.info(`${field} - ${valueInput}`)
        setValue(field, valueInput);
    }

    return (
        <InputUi label={label} field={field} placeholder={'...'}
            defaultValue={watch(field) ?? ''}
            onChange={handleOnChange}
            displayedError={{
                isShow: errors[field] ? true : false,
                message: `${errors[field]?.message}` ?? ''
            }}
            {...props} />
    )
}

export default InputCustom