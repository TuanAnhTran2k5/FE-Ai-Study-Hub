import { Info } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function UploadPageHeader() {
  return (
    <div className="page-heading">
      <div>
        <h1>Upload Document</h1>
        <p>Share your knowledge with the community and help others learn.</p>
      </div>
      <Button className="guideline-button" variant="secondary" type="button">
        <Info size={18} />
        Upload Guidelines
      </Button>
    </div>
  );
}
