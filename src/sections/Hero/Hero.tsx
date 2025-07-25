import Button from "../../components/Button";
import LineBreak from "../../components/LineBreak";

export default function Hero() {
  return (
    <section>
      <div className="bg-[url('/wave.svg')] bg-no-repeat bg-cover bg-center">
        <div className="container flex flex-col gap-10 mx-auto px-6 sm:px-6 lg:px-8 py-24 text-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-b9.5">
              “Looking for a Job in Jordan? We’ll <LineBreak />
              Handle the Rest”
            </h1>
            <p className="p-lg text-b8">
              Apply now for real job opportunities in Jordan.
              <LineBreak />
              We take care of your paperwork, medical exams, and visa process.
              <LineBreak />
              All you need to do is pack your bags.
            </p>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="outline">Hire Workers</Button>
            <Button variant="primary">Apply Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
