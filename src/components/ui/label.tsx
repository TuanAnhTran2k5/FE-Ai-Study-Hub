import type { LabelHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={cn('ui-label', className)} {...props}>
      {children}
    </label>
  );
}
