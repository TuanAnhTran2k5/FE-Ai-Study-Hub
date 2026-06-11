import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type FieldProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Field({ children, className, ...props }: FieldProps) {
  return (
    <div className={cn('ui-field', className)} {...props}>
      {children}
    </div>
  );
}
