import { Shield, UploadCloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { routePath } from '@/models/routePath';

export function CommunityUploadTip() {
  const navigate = useNavigate();

  return (
    <div className="tip-bar">
      <span>
        <Shield size={20} />
        Upload your documents to help others and earn reputation points!
      </span>
      <Button type="button" onClick={() => navigate(routePath.upload)}>
        <UploadCloud size={18} />
        Upload Document
      </Button>
    </div>
  );
}
