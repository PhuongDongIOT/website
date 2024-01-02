interface TypeListCheckBox {
    label: string;
    field: string;
    rows?: number;
    description?: string;
    placeholder?: string;
    defaultValue?: string | boolean;
    InputRef?: React.RefObject<HTMLInputElement>;
    value?: string | number | undefined,
    checker: boolean
}

interface TypeCommonProps {
    legend?: string;
    label: string;
    field: string;
    errors: any;
    setValue: any;
    watch: any;
    onChange?: any;
    listParams?: TypeListCheckBox[],
    type: string
}

type TypeValueString = string;
type TypeValueBoolean = boolean;

export type {
    TypeListCheckBox,
    TypeCommonProps,
    TypeValueString,
    TypeValueBoolean
}