import Button from "../../components/Button";

export default function Contact() {
  return (
    <section className="px-6 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text Content  */}
        <div className="flex flex-col gap-10 flex-7/12">
          <h2 className="text-b9.5">
            You Will Grow, You Will Succeed. We Promise That
          </h2>
          <p className="p-lg text-b8">
            Whether you’re looking for your first job abroad or ready to take
            the next big step,we’re here to support you with every document,
            every call, and every flight
            <br />
            <br />
            We believe in your potential, and we’re building the bridge to get
            you there
          </p>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-light-gray px-10 py-14 rounded-2xl flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-b9">Contact Info</h3>
            <p className="p-sm text-b8">
              Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="Your name" />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Your last name" />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="Your email address" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message..." rows={6} />
            </div>
            <Button type="submit" variant="primary" className="w-fit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
