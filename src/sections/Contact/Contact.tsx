import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import Input from "../../components/Input";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [successes, setSuccesses] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = { ...initialState };
    const newSuccesses = { ...initialState };

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    else if (form.firstName.trim().length < 3)
      newErrors.firstName = "Must be at least 3 characters";
    else newSuccesses.firstName = "Looks good!";

    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    else if (form.lastName.trim().length < 3)
      newErrors.lastName = "Must be at least 3 characters";
    else newSuccesses.lastName = "Looks good!";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Invalid email address";
    else newSuccesses.email = "Valid email!";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 3)
      newErrors.message = "Must be at least 3 characters";
    else newSuccesses.message = "Looks good!";

    const isFormEmpty = Object.values(form).some((val) => val.trim() === "");

    setErrors(newErrors);
    setSuccesses(newSuccesses);
    return !isFormEmpty;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    setErrors({ ...errors, [id]: "" });
    setSubmitted(false);

    const newSuccesses = { ...successes };

    if (id === "email")
      if (!value.trim()) newSuccesses.email = "";
      else if (!emailRegex.test(value)) newSuccesses.email = "";
      else newSuccesses.email = "Valid email!";
    else
      newSuccesses[id as keyof typeof form] =
        value.trim().length > 2 ? "Looks good!" : "";

    setSuccesses(newSuccesses);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Form submitted!");
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm(initialState);
      setErrors(initialState);
      setSuccesses(initialState);
    } else toast.error("Please fix the errors.");
  };

  const inputClasses = (field: keyof typeof form) =>
    `${errors[field] ? "error" : ""} ${submitted ? "bg-primary-gray placeholder-disabled pointer-events-none" : ""}`;

  const labelClasses = submitted ? "text-disabled" : "";

  return (
    <section className="px-6 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left */}
        <div className="flex flex-col gap-10 flex-7/12">
          <h2 className="text-b9.5">
            You Will Grow, You Will Succeed. We Promise That
          </h2>
          <p className="p-lg text-b8">
            Whether you’re looking for your first job abroad or ready to take
            the next big step, we’re here to support you with every document,
            every call, and every flight.
            <br />
            <br />
            We believe in your potential, and we’re building the bridge to get
            you there.
          </p>
        </div>

        {/* Right: Form */}
        <div className="bg-light-gray px-10 py-14 rounded-2xl flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-b9">Contact Info</h3>
            <p className="p-sm text-b8">
              Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* First Name */}
              <div className="w-full flex flex-col">
                <label htmlFor="firstName" className={labelClasses}>
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Your name"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputClasses("firstName")}
                />
                {errors.firstName ? (
                  <span className="error">{errors.firstName}</span>
                ) : (
                  successes.firstName && (
                    <span className="success">{successes.firstName}</span>
                  )
                )}
              </div>

              {/* Last Name */}
              <div className="w-full flex flex-col">
                <label htmlFor="lastName" className={labelClasses}>
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Your last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputClasses("lastName")}
                />
                {errors.lastName ? (
                  <span className="error">{errors.lastName}</span>
                ) : (
                  successes.lastName && (
                    <span className="success">{successes.lastName}</span>
                  )
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className={labelClasses}>
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                className={inputClasses("email")}
              />
              {errors.email ? (
                <span className="error">{errors.email}</span>
              ) : (
                successes.email && (
                  <span className="success">{successes.email}</span>
                )
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <Input
                isTextarea
                id="message"
                placeholder="Your message..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                className={inputClasses("message")}
              />
              {errors.message ? (
                <span className="error">{errors.message}</span>
              ) : (
                successes.message && (
                  <span className="success">{successes.message}</span>
                )
              )}
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
