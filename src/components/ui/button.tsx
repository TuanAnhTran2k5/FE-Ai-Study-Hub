import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button className={cn('ui-button', `ui-button--${variant}`, className)} type={type} {...props}>
      {children}
    </button>
  );
}
