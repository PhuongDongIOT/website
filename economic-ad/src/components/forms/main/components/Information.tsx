// import dynamic from 'next/dynamic';
import { UseFormReturn } from "react-hook-form";
import type { FormValues, defendedFeild } from '../types.variable';
import { FormValuesComponents } from '../types.variable';

import { MappingComponent } from '~hooks/forms';
import { Object3D } from "three";

// import TextAreaCustom from '~components/common/components/TextAreaCustom';
// const TextAreaCustom = dynamic(() => import('~components/common/components/TextAreaCustom'), { ssr: false });

interface InformationProps {
  methods: UseFormReturn<FormValues, any, undefined>
}

function Information({ methods, ...props }: InformationProps) {

  const mappingComponent: MappingComponent = new MappingComponent(methods);

  return (
    <div className="flex flex-wrap w-full">
      {
        Object.keys(FormValuesComponents)
          .map((valuesComponent: string) =>
            mappingComponent.defenderComponent(
              FormValuesComponents[valuesComponent].component,
              valuesComponent,
              FormValuesComponents[valuesComponent].label,
              FormValuesComponents[valuesComponent].col,
              FormValuesComponents[valuesComponent].listParams,
              FormValuesComponents[valuesComponent].type))
      }
      <div className="w-1/12 w-2/12 w-3/12 w-4/12 w-5/12 w-6/12 w-7/12 w-8/12 w-9/12 w-10/12 w-11/12 w-12/12">

      </div>
    </div>
  )
}

export default Information;