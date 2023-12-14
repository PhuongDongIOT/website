import React from 'react';
import { UseFormReturn } from "react-hook-form";

import { checkPropertyObject } from '~utils/objects';
import { TypeListCheckBox } from '~components/common/components/TypeCommon';

import InputCustom from '~components/common/components/InputCustom';
import TextAreaCustom from '~components/common/components/TextAreaCustom';
import SelectCustom from '~components/common/components/SelectCustom';
import ListCheckBoxCustom from '~components/common/components/ListCheckBoxCustom';

type TypeListComponent = {
    [key: string]: any;
};

const listComponent: TypeListComponent = {
    'input': InputCustom,
    'textArea': TextAreaCustom,
    'listCheckBox': ListCheckBoxCustom,
    'select': SelectCustom,
}

type TypeMethods = UseFormReturn<any, any, undefined>

class MappingComponent {

    methods: TypeMethods;

    constructor(methods: TypeMethods) {
        this.methods = methods;
    }


    defenderComponent(key: string, field: string, labelField: string, col: number = 12, listParams: TypeListCheckBox[] = [], type = 'checkbox'): React.ReactNode {
        const {
            register,
            setValue,
            watch,
            formState: { errors } } = this.methods;
        if (checkPropertyObject(key, listComponent)) {
            const Component = listComponent[key];
            return (
                <div className={`w-${col === 12 ? 'full' : col + '\/12'}`} key={field}>
                    {Component({ legend: labelField, label: labelField, field: field, register: register, watch: watch, setValue: setValue, errors: errors, listParams: listParams, type: type })}
                </div>
            )
        }
        return null
    }
}

export {
    MappingComponent
}