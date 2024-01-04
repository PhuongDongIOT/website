import { logger } from '~utils/logger.utils';

interface FormFactory {
    valueForm: any;
    
    handleOnChangeForm(): void;
}

type TypeElement = 'Input' | 'Select' | 'CheckBox';
type TypeOnChange  =  any | null;

class HandleSaveElementForm implements FormFactory {
    field: string;
    onChange: TypeOnChange;
    setValue: any;
    valueForm: any;
    typeValue: TypeElement;

    constructor(field: string, onChange: TypeOnChange, setValue: any, valueForm: any, typeValue: TypeElement) {
        this.field = field;
        this.onChange = onChange;
        this.setValue = setValue;
        this.valueForm = valueForm;
        this.typeValue = typeValue;
    }

    handleChangeValueElement() {
        switch(this.typeValue){            
            case 'CheckBox':
                this.valueForm = this.valueForm ? true : false;
            break;
        }
    }

    handleOnChangeForm() {
        if(this.onChange) {
            return this.onChange;
        } else {       
            logger.info(this.valueForm);
            this.handleChangeValueElement();
            this.setValue(this.field, this.valueForm);
        }
    }
}

function funcSaveElementForm(field: string, onChange: TypeOnChange, setValue: any, valueForm: any, typeValue: TypeElement): void {
    const handleSaveElementForm: HandleSaveElementForm  = new HandleSaveElementForm(field, onChange, setValue, valueForm, typeValue);
    handleSaveElementForm.handleOnChangeForm();
}

export {
    funcSaveElementForm,
}