import { useForm, Resolver } from "react-hook-form";

import { useDispatch, useSelector } from 'react-redux';
import formSlice from '~redux/features/formSlice';

import { ReactHookForm } from '~hooks/forms';
import { Information } from '~components/forms/main';
import { FormValues } from '~components/forms/main/types.variable';


const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
        name: {
          type: "required",
          message: "This is required.",
        },
      }
      : {},
  }
}

interface mainFormProps {
  handleOnSubmitIndex: (data: any) => Promise<void>
}

export default ({ handleOnSubmitIndex, ...props}: mainFormProps) => {

  const reduxDispatch = useDispatch();

  const methods = useForm<FormValues>({ resolver });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors } } = methods;

  const handleOnSubmit = async(data: any) => {
    await reduxDispatch(formSlice.actions.uploadFromRequest(data));
  }

  return (
    <ReactHookForm handleOnSubmit={handleOnSubmit} handleSubmit={handleSubmit}>
      <Information methods={methods} />
      <input type="submit" />
    </ReactHookForm>
  );
};

export type {
  mainFormProps
}