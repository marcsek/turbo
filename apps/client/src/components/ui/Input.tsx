import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const inputStyles = cva(
  'rounded border border-neutral-500 bg-neutral-800 text-sm leading-none outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-offset-blue-500 focus:duration-75 w-full',
  {
    variants: { customSize: { small: 'p-2', medium: 'p-3', large: 'p-4' } },
    defaultVariants: { customSize: 'small' },
  }
);

interface Props
  extends VariantProps<typeof inputStyles>,
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  helperText?: string;
  labelText: string;
}

const Input: React.FC<Props> = ({ customSize, helperText, labelText, ...props }) => {
  return (
    <label className="flex flex-col items-start justify-center">
      <p className="ml-1.5 text-xs text-neutral-400">{labelText}</p>
      <input className={inputStyles({ customSize })} {...props} />
      <span className="ml-1.5 text-xs text-neutral-400">{helperText}</span>
    </label>
  );
};

export default Input;
