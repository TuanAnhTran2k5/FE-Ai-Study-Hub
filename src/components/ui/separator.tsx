import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type SeparatorProps = HTMLAttributes<HTMLHRElement>;

export function Separator({ className, ...props }: SeparatorProps) {
  return <hr className={cn('ui-separator', className)} {...props} />;
}
