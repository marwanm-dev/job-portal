import FeatureItem from "./FeatureItem";
export default function WhyUs() {
  return (
    <section className="px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Side - Image Collage */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <img
            src="/WhyUs-1.png"
            alt="Worker"
            className="w-full h-full object-cover row-span-3 rounded-xl overflow-hidden"
          />
          <img
            src="/WhyUs-2.png"
            alt="Blurred background"
            className="w-full h-full object-cover row-span-2 rounded-xl overflow-hidden"
          />
          <img
            src="/WhyUs-3.png"
            alt="Passport and Approval"
            className="w-full h-full object-cover rounded-xl overflow-hidden"
          />
        </div>
        {/* Right Side - Text + Features */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-b9">
              We Work with the Right People So You Get the Right Job
            </h2>
            <p className="p-lg text-b7">
              We only connect with verified companies and serious job seekers.
              Our goal is to create real opportunities — no scams, no stress.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FeatureItem icon="/verified-jobs.svg" label="Verified Jobs" />
            <FeatureItem icon="/resume-support.svg" label="Resume Support" />
            <FeatureItem
              icon="/trusted-companies.svg"
              label="Trusted Companies"
            />
            <FeatureItem
              icon="/top-talent-network.svg"
              label="Top Talent Network"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
