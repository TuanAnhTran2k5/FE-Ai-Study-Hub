import { MoreVertical } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ActionMenuButton() {
  return (
    <Button className="more-button" variant="ghost" type="button" aria-label="Open actions">
      <MoreVertical size={20} />
    </Button>
  );
}
