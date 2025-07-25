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
    <div className="text-left bg-cyan rounded-[20px] p-6 gap-7 drop-shadow-lg max-w-[320px] sm:max-w-[360px] md:max-w-sm">
      <div className="w-10 h-10 bg-b5 text-white rounded-full flex-center mb-4">
        {icon}
      </div>
      <h5 className="mb-2">{title}</h5>
      <p className="p-sm text-neutral-950">{description}</p>
    </div>
  );
}
