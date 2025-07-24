interface StepCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center border-2 border-b5 rounded-xl px-6 pb-12 pt-6 hover:shadow-md transition-all h-full">
      <img src={icon} className="p-3" />
      <div className="flex flex-col items-center justify-center gap-3">
        <h5 className="text-b9">{title}</h5>
        <p className="p-sm text-b8">{description}</p>
      </div>
    </div>
  );
}
