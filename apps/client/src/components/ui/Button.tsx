import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import LoadingSpinner from './Spinner';

const buttonStyles = cva(
  'flex justify-center rounded py-3 px-5 text-sm uppercase leading-none tracking-wider disabled:pointer-events-none disabled:bg-neutral-800 duration-100 hover:duration-150 focus:ring-2 focus:ring-blue-200/90 active:duration-75',
  {
    variants: {
      intent: {
        primary: 'bg-blue-600 hover:bg-blue-500 focus:ring-blue-200/90',
        secondary: 'bg-neutral-700 hover:bg-neutral-600 focus:ring-neutral-400/90',
      },
    },
    defaultVariants: { intent: 'primary' },
  }
);

interface Props
  extends VariantProps<typeof buttonStyles>,
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<Props> = ({ loading = false, intent, className, children, ...props }) => {
  return (
    <button className={`${className} ${buttonStyles({ intent })}`} disabled={loading ? true : props.disabled} {...props}>
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;
