<<<<<<< HEAD
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
=======
import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
>>>>>>> b630af94cf38e29d45b378547d97ff6279140bb0
