import { Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function DocumentsTip() {
  return (
    <div className="tip-bar">
      <span>
        <Shield size={20} />
        Tip: Make your documents public to help others and earn more reputation points!
      </span>
      <Button variant="secondary" type="button">
        Learn more about reputation
      </Button>
    </div>
  );
}
