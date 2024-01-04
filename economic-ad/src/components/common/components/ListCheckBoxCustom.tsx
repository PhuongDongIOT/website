import React, {useState} from 'react';
import { funcSaveElementForm } from '~helpers/forms/form.helper';
// import { logger } from '~utils/logger.utils';

import { TypeCommonProps, TypeValueBoolean, TypeListCheckBox } from './TypeCommon';

import { ListCheckBoxUi } from '~stories/ListCheckBoxUi';

function ListCheckBoxCustom({ legend, label, field, setValue, errors, onChange, listParams, type, ...props }: TypeCommonProps) {

    const [listParamsCheckBox, setListParamsCheckBox] = useState<TypeListCheckBox[] | undefined>(listParams);

    const handleOnChangeCustom = onChange ? onChange : (event: React.ChangeEvent<HTMLInputElement>, fieldFunction: string): void => {

        const valueInput: TypeValueBoolean = event.target?.checked ? true : false;        
        let cloneListParams = listParams ? [...listParams] : [];
        if(type === 'radio') {
            cloneListParams.map((value: TypeListCheckBox) => value.checker = false)
        }
        const indexFieldFunction = cloneListParams.findIndex((value: TypeListCheckBox) => value.field === fieldFunction);
        if(indexFieldFunction >= 0) {
            cloneListParams[indexFieldFunction].checker = valueInput;
        }
        
        setListParamsCheckBox(cloneListParams)
        setValue(field, cloneListParams);
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, fieldFunction: string): void => funcSaveElementForm(field, handleOnChangeCustom(event, fieldFunction), setValue, event.target?.value, 'Input')

    return (
        <ListCheckBoxUi legend={legend}  listParams={listParamsCheckBox} onChange={handleOnChange} type={type}
            displayedError={{
                isShow: errors[field] ? true : false,
                message: `${errors[field]?.message}` ?? ''
            }}
            {...props} />
    )
}

export default ListCheckBoxCustom