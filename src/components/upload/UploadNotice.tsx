import { Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function UploadNotice() {
  return (
    <div className="tip-bar">
      <span>
        <Shield size={20} />
        Important: By uploading, you agree that this content does not violate any copyright or
        community guidelines.
      </span>
      <Button variant="secondary" type="button">
        View Community Guidelines
      </Button>
    </div>
  );
}
