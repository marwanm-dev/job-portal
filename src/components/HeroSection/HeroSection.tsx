export default function HeroSection() {
  return (
    <section className="bg-white font-semibold">
      <div className="bg-[url('/public/wave.svg')] bg-no-repeat bg-cover bg-center">
        <div className="mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-bold text-b9.5">
            “Looking for a Job in Jordan? We’ll <br />
            Handle the Rest”
          </h1>
          <p className="leading-6 font-normal mt-6 text-lg text-b8">
            Apply now for real job opportunities in Jordan.
            <br />
            We take care of your paperwork, medical exams, and visa process.
            <br />
            All you need to do is pack your bags.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="px-12 py-2.5 border border-b5 text-b5 rounded-full">
              Hire Workers
            </button>
            <button className="px-12 py-2.5 bg-b5 text-white rounded-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
