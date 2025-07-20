import Button from "../../components/Button";
import LineBreak from "../../components/LineBreak";

export default function JobRequest() {
  return (
    <section className="bg-b7 relative z-0">
      <div className="px-6 lg:px-20 py-32 flex flex-col gap-8">
        <h1 className="text-white">
          Looking to Hire Skilled{" "}
          <span className="relative">
            Workers
            <img src="/underline.svg" className="absolute top-full right-12" />
          </span>{" "}
          <LineBreak />
          from Egypt
        </h1>
        <p className="p-lg text-white">
          Join our platform and connect with trusted Egyptian talent ready to
          work. <LineBreak />
          We’ll help you find the right candidates and we’ll support them
          through the entire visa process
        </p>
        <Button color="y5" className="text-base w-fit">
          Post a Job Request
        </Button>
      </div>
      <img
        src="\job-request.svg"
        alt="Job Request Graphic"
        className="hidden sm:block -z-10 w-[500px] md:w-auto absolute top-auto right-auto sm:-top-12 sm:right-0"
      />
    </section>
  );
}
