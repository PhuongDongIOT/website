import type { OptionsFlags } from '~utils/types';
import { TypeListCheckBox } from '~components/common/components/TypeCommon';

type defendedFeild = {
    label: string,
    component: string,
    col?: number,
    listParams?: TypeListCheckBox[],
    type?: 'checkbox' | 'radio'
}

type FormValuesComponentsKey = {
    [key: string]: defendedFeild
}

type FormValuesComponents = {
    name: defendedFeild,
    email: defendedFeild,
    description: defendedFeild,
    byEmail: defendedFeild,
    pushNotifications: defendedFeild,
    country: defendedFeild,
}

type FormValues = OptionsFlags<FormValuesComponents, string>;

const FormValuesComponents: FormValuesComponents = {
    name: {
        label: 'Name',
        component: 'input',
        col: 6,
    },
    email: {
        label: 'Email',
        component: 'input',
        col: 6,
    },
    description: {
        label: 'Description',
        component: 'textArea'
    },
    byEmail: {
        label: 'Description',
        component: 'listCheckBox',
        type: 'checkbox',
        listParams: [
            {
                field: 'comments',
                label: 'Comments',
                defaultValue: false,
                description: 'Get notified when someones posts a comment on a posting.',
                checker: false,
            },
            {
                field: 'candidates',
                label: 'Candidates',
                defaultValue: false,
                description: 'Get notified when a candidate applies for a job.',
                checker: false,
            },
            {
                field: 'offers',
                label: 'Offers',
                defaultValue: false,
                description: 'Get notified when a candidate accepts or rejects an offer.',
                checker: false,
            }
        ],
    },
    pushNotifications: {
        label: 'Push Notifications',
        component: 'listCheckBox',
        type: 'radio',
        listParams: [
            {
                field: 'everything',
                label: 'Everything',
                defaultValue: false,
                description: '',
                checker: false,
            },
            {
                field: 'email',
                label: 'Same as email',
                defaultValue: false,
                description: '',
                checker: false,
            },
            {
                field: 'notifications',
                label: 'No push notifications',
                defaultValue: false,
                description: '',
                checker: false,
            }
        ]
    },    
    country: {
        label: 'Country',
        component: 'select'
    },
}

export {
    FormValuesComponents
}

export type {
    defendedFeild,
    FormValues
}