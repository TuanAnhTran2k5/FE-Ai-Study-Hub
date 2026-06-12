import { Shield } from 'lucide-react';

import { TipBar } from '@/components/common/TipBar';
import { Button } from '@/components/ui/button';

export function DocumentsTip() {
  return (
    <TipBar
      icon={Shield}
      message="Tip: Make your documents public to help others and earn more reputation points!"
      action={
      <Button variant="secondary" type="button">
        Learn more about reputation
      </Button>
      }
    />
  );
}
