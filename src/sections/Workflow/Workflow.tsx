import StepCard from "./StepCard";

const steps = [
  {
    icon: "/upload.svg",
    title: "Upload Your CV",
    description: "Let us know who you are—just upload your CV and basic info.",
  },
  {
    icon: "/match.svg",
    title: "We Match You with the Right Job",
    description:
      "Sit back while we find the best-fit opportunity for your skills.",
  },
  {
    icon: "/contract.svg",
    title: "Sign Your Contract",
    description:
      "Once matched, your job offer is ready—we’ll help finalize the paperwork.",
  },
  {
    icon: "/plane.svg",
    title: "We Handle the Travel & Visa",
    description:
      "We guide you through the visa steps, medical exam, and travel prep.",
  },
];

export default function Workflow() {
  return (
    <section className="px-6 py-12 flex-between flex-col gap-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-b9.5">How it works</h2>
        <p className="p-lg text-b8">
          From uploading your CV to boarding your flight ,we make every step
          simple, clear, and stress-free.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:max-w-11/12 2xl:max-w-10/12">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
}
