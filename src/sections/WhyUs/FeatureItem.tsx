interface FeatureItemProps {
  icon: string;
  label: string;
}

export default function FeatureItem({ icon, label }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-4">
      <img src={icon} alt={label} />
      <h4 className="text-b9">{label}</h4>
    </div>
  );
}
