
import { Input } from '@/components/ui/input'; // Correct the import path to match your Input component
import React from 'react';
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form';
import {Control, Form} from 'react-hook-form'
import { z } from 'zod';
import { authformSchema } from '@/lib/utils';



interface CustomInput {
  control: Control<z.infer<typeof authformSchema>>
  name : string,
  label: string,
  placeholder: string, // Set the placeholder text for the input field
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
                type='text' // You can set the `type` based on requirements
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
