import { Shield, UploadCloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { TipBar } from '@/components/common/TipBar';
import { Button } from '@/components/ui/button';
import { routePath } from '@/models/routePath';

export function CommunityUploadTip() {
  const navigate = useNavigate();

  return (
    <TipBar
      icon={Shield}
      message="Upload your documents to help others and earn reputation points!"
      action={
      <Button type="button" onClick={() => navigate(routePath.upload)}>
        <UploadCloud size={18} />
        Upload Document
      </Button>
      }
    />
  );
}
