import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

type TipBarProps = {
  icon: LucideIcon;
  message: string;
  action?: ReactNode;
};

export function TipBar({ icon: Icon, message, action }: TipBarProps) {
  return (
    <div className="tip-bar">
      <span>
        <Icon size={20} />
        {message}
      </span>
      {action}
    </div>
  );
}
