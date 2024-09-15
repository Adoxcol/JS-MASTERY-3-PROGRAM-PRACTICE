import { Input } from '@/components/ui/input';
import React from 'react';
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

// Schema definition
const formSchema = authFormSchema('sign-up');

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type?: string; // Optional type property
}

const CustomInput = ({ control, name, label, placeholder, type = 'text' }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className='form-item'>
          {/* Label for the input */}
          <FormLabel className='form-label'>
            {label}
          </FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                type={type} // Use the passed type or default to 'text'
                {...field}
              />
            </FormControl>
            {/* Render error message if there is one */}
            {error && (
              <FormMessage className='form-message mt-2'>
                {error.message}
              </FormMessage>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
