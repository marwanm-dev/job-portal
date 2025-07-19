import Button from "../../components/Button";

export default function HeroSection() {
  return (
    <section className="">
      <div className="bg-[url('/public/wave.svg')] bg-no-repeat bg-cover bg-center">
        <div className="px-6 py-24 text-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-b9.5">
              “Looking for a Job in Jordan? We’ll <br />
              Handle the Rest”
            </h1>
            <p className="p-lg text-b8">
              Apply now for real job opportunities in Jordan.
              <br />
              We take care of your paperwork, medical exams, and visa process.
              <br />
              All you need to do is pack your bags.
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button variant="outline">Hire Workers</Button>
            <Button variant="primary">Apply Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
