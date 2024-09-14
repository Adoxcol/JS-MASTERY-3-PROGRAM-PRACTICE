
import { Input } from '@/components/ui/input'; // Correct the import path to match your Input component
import React from 'react';
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form';
import {Control, FieldPath, Form} from 'react-hook-form'
import { z } from 'zod';
import { authformSchema } from '@/lib/utils';




interface CustomInput {
  control: Control<z.infer<typeof authformSchema>>;
  name: FieldPath<z.infer<typeof authformSchema>>,
  label: string,
  placeholder: string,
  type?: string, // Add type as an optional property
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          {/* Ensure that the label, input, and error message are properly rendered */}
          <FormLabel className='form-label'>
            {label}
          </FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                type={name=== 'password' ? 'password':'text'} //
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2'>
              {/* Error message rendering */}
            </FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
