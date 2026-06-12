import {
  Bot,
  CloudUpload,
  FileText,
  MessageCircle,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

function LoginHero() {
  return (
    <div className="relative flex h-full min-h-[650px] flex-col overflow-hidden rounded-3xl  p-8">
      {/* Background glow */}
      <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" />

      {/* Header Text */}
      <div className="relative z-10">
        <h1 className="text-[34px] font-black leading-tight tracking-tight text-slate-950">
          Welcome Back! <span>👋</span>
          <br />
          Login to <span className="text-blue-600">Your Account</span>
        </h1>

        <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
          Login to continue discovering, sharing and learning with AI Study Hub
          community.
        </p>
      </div>

      {/* Logo image */}
      <div className="relative z-10 mt-8 flex justify-center">
        <div className="relative">
          <img
            src="/img/LoginHero_BG.png"
            alt="AI Study Hub"
            className="h-[250px] w-[460px] object-contain drop-shadow-xl"
          />

          {/* Floating stats */}
          <div className="absolute -left-8 top-8 space-y-3">
            <StatCard
              icon={<FileText size={16} />}
              value="12K+"
              label="Documents"
            />
            <StatCard
              icon={<MessageCircle size={16} />}
              value="25K+"
              label="AI Chats"
            />
            <StatCard
              icon={<Users size={16} />}
              value="5K+"
              label="Active Users"
            />
          </div>

          {/* Cloud */}
          <div className="absolute -right-1 top-12 flex size-16 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg">
            <CloudUpload size={30} />
          </div>
        </div>
      </div>

      {/* Feature Card */}
      <div className="relative z-10 mt-auto rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
        <FeatureItem
          icon={<ShieldCheck size={20} />}
          title="Secure & Private"
          desc="Your data is encrypted and always protected."
          color="bg-blue-100 text-blue-600"
        />
        <FeatureItem
          icon={<CloudUpload size={20} />}
          title="Access Anywhere"
          desc="Access your documents and AI assistant anytime, anywhere."
          color="bg-emerald-100 text-emerald-600"
        />
        <FeatureItem
          icon={<Users size={20} />}
          title="Join Community"
          desc="Connect with thousands of students and share knowledge."
          color="bg-yellow-100 text-yellow-600"
        />
        <FeatureItem
          icon={<Trophy size={20} />}
          title="Earn & Grow"
          desc="Earn reputation, badges and climb the leaderboard."
          color="bg-violet-100 text-violet-600"
        />
      </div>
    </div>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex w-[118px] items-center gap-2 rounded-xl border border-slate-200 bg-white/90 p-2 shadow-md backdrop-blur">
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-xs font-bold text-slate-900">{value}</p>
        <p className="text-[10px] text-slate-500">{label}</p>
      </div>
    </div>
  );
}

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
};

function FeatureItem({ icon, title, desc, color }: FeatureItemProps) {
  return (
    <div className="flex gap-3 py-2">
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-2xl ${color}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-950">{title}</h3>
        <p className="mt-0.5 text-xs leading-5 text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

export default LoginHero;
