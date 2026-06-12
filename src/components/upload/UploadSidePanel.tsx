import {
  BookOpen,
  FileUp,
  Globe2,
  Image,
  Lightbulb,
  Pencil,
  Star,
  Trophy,
} from 'lucide-react';
import type { ReactNode } from 'react';

import { Select } from '@/components/ui/select';

export function UploadSidePanel() {
  return (
    <aside className="upload-side">
      <section className="upload-card tips-card">
        <h2>
          <Lightbulb size={22} />
          Tips for better reach
        </h2>
        <TipItem
          icon={<Pencil size={19} />}
          title="Use a clear and descriptive title"
          text="Help others understand your document"
        />
        <TipItem
          icon={<BookOpen size={19} />}
          title="Choose the correct subject & semester"
          text="So others can find it easily"
        />
        <TipItem
          icon={<FileUp size={19} />}
          title="Add a detailed description"
          text="Explain what's inside the document"
        />
        <TipItem
          icon={<Globe2 size={19} />}
          title="Make it public"
          text="Public documents help you earn more reputation!"
        />
      </section>

      <section className="upload-card">
        <h2>Additional Information</h2>
        <p className="side-label">Cover Image (Optional)</p>
        <div className="cover-upload">
          <Image size={26} />
          <strong>Upload a cover image</strong>
          <span>JPG, PNG up to 2MB</span>
        </div>
        <p className="side-label">Related Subjects (Optional)</p>
        <Select defaultValue="">
          <option value="" disabled>
            Select related subjects
          </option>
        </Select>
        <small>Select subjects related to this document</small>
      </section>

      <section className="upload-card reputation-card">
        <h2>
          <Star size={22} />
          Reputation Preview
        </h2>
        <p>You can earn the following points after your document is approved:</p>
        <ReputationItem label="Document Upload" value="+10 pts" />
        <ReputationItem label="Public Document Bonus" value="+5 pts" />
        <ReputationItem label="Quality Bonus (after review)" value="+5 - 20 pts" />
        <div className="total-potential">
          <strong>Total Potential</strong>
          <span>+20 ~ 35 pts</span>
        </div>
      </section>
    </aside>
  );
}

type TipItemProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function TipItem({ icon, title, text }: TipItemProps) {
  return (
    <div className="tip-item">
      <span>{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

type ReputationItemProps = {
  label: string;
  value: string;
};

function ReputationItem({ label, value }: ReputationItemProps) {
  return (
    <div className="reputation-item">
      <span>
        <Trophy size={16} />
        {label}
      </span>
      <strong>{value}</strong>
    </div>
  );
}
