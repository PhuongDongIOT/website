import React,  { useContext } from 'react';

interface ReactHookFormProps {
    children: React.ReactNode,
    handleOnSubmit: any, 
    handleSubmit: any,
}

function ReactHookForm({children, handleOnSubmit, handleSubmit, ...props}: ReactHookFormProps) {
  const onSubmit = handleSubmit(handleOnSubmit)

  return (
    <form onSubmit={onSubmit}>
      { children }
    </form>
  )
}

export {
    ReactHookForm
}