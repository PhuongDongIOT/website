import React, {useState} from 'react';
// import { logger } from '~utils/logger.utils';

import { TypeCommonProps, TypeValueBoolean, TypeListCheckBox } from './TypeCommon';

import { ListCheckBoxUi } from '~stories/ListCheckBoxUi';

function ListCheckBoxCustom({ legend, label, field, setValue, errors, onChange, listParams, type, ...props }: TypeCommonProps) {

    const [listParamsCheckBox, setListParamsCheckBox] = useState<TypeListCheckBox[] | undefined>(listParams)
    const handleOnChange = onChange ? onChange : (event: React.ChangeEvent<HTMLInputElement>, fieldFunction: string): void => {

        const valueInput: TypeValueBoolean = event.target?.checked ? true : false;        
        let cLoneListParams = listParams ? [...listParams] : [];
        if(type === 'radio') {
            cLoneListParams.map((value: TypeListCheckBox) => value.checker = false)
        }
        const indexFieldFunction = cLoneListParams.findIndex((value: TypeListCheckBox) => value.field === fieldFunction);
        if(indexFieldFunction >= 0) {
            cLoneListParams[indexFieldFunction].checker = valueInput;
        }
        // logger.info(`${fieldFunction} - ${valueInput}`)
        setListParamsCheckBox(cLoneListParams)
        setValue(field, cLoneListParams);
    }

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