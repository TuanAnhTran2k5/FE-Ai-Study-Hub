import { UploadCloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { routePath } from '@/models/routePath';

export function DocumentsPageHeader() {
  const navigate = useNavigate();

  return (
    <div className="page-heading">
      <div>
        <h1>My Documents</h1>
        <p>Manage and organize all your uploaded documents.</p>
      </div>
      <Button className="upload-button" type="button" onClick={() => navigate(routePath.upload)}>
        <UploadCloud size={20} />
        Upload Document
      </Button>
    </div>
  );
}
