interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="text-left bg-feat rounded-2xl p-6 gap-7 shadow-sm flex-1 max-w-xs">
      <div className="w-10 h-10 bg-b5 text-white rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-normal text-sm text-neutral-950">{description}</p>
    </div>
  );
}
