import FAQItem from "./FAQItem";

const faqData = [
  {
    number: "01",
    question: "Who can apply through the platform",
    answer:
      "Any Egyptian citizen who is looking for a job abroad can apply — whether you're a skilled worker (like a technician, driver, or nurse) or unskilled (like a cleaner or helper). All you need is a valid ID, passport, and a CV. If you're not sure where to start, our team will help you prepare everything.",
  },
  {
    number: "02",
    question: "Do you help with visa processing?",
    answer:
      "Yes! We assist with the entire visa process from start to finish — including documentation, medical exams, and interview preparation.",
  },
  {
    number: "03",
    question: "What countries do you work with?",
    answer:
      "We work with countries across the Middle East, Europe, and Asia. You’ll be matched based on your skills and preferences.",
  },
  {
    number: "04",
    question: "Is it free to apply?",
    answer:
      "Yes, applying through our platform is 100% free. We only connect you with verified employers and never ask for upfront payments.",
  },
  {
    number: "05",
    question: "How long does the process take?",
    answer:
      "It usually takes 2 to 6 weeks depending on the job, country, and visa requirements. We'll keep you updated at every stage.",
  },
];

export default function FAQ() {
  return (
    <section className="px-6 lg:px-20 py-20">
      <div className="mx-auto flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-b9.5">Frequently Asked Questions</h2>
          <p className="p-lg text-center text-b8 mb-10 mx-auto">
            We’ve answered the most common ones to help you understand the
            process, from applying for a job to getting your visa.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {faqData.map(({ number, question, answer }) => (
            <FAQItem
              key={number}
              number={number}
              question={question}
              answer={answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
