import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="text-center">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-b9.5">Why You'll Love this website</h2>
          <p className="p-lg text-b8">
            We make your journey to work abroad simple, fast, and stress-free.
            <br />
            Here’s why thousands trust us to guide them from job search to visa
            approval.
          </p>
        </div>
        <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
          <FeatureCard
            icon={
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.499756 24C0.499756 10.7452 11.2449 0 24.4998 0C37.7546 0 48.4998 10.7452 48.4998 24C48.4998 37.2548 37.7546 48 24.4998 48C11.2449 48 0.499756 37.2548 0.499756 24Z"
                  fill="#074A80"
                />
                <path
                  d="M24.4998 12.3333C27.4179 15.528 29.0763 19.674 29.1664 23.9999C29.0763 28.3259 27.4179 32.4718 24.4998 35.6666M24.4998 12.3333C21.5816 15.528 19.9232 19.674 19.8331 23.9999C19.9232 28.3259 21.5816 32.4718 24.4998 35.6666M24.4998 12.3333C18.0564 12.3333 12.8331 17.5566 12.8331 23.9999C12.8331 30.4432 18.0564 35.6666 24.4998 35.6666M24.4998 12.3333C30.9431 12.3333 36.1664 17.5566 36.1664 23.9999C36.1664 30.4432 30.9431 35.6666 24.4998 35.6666M13.4164 20.4999H35.5831M13.4164 27.4999H35.5831"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="All-in-One Process"
            description="From submitting your documents to getting your visa approved — we guide you every step of the way in one single platform"
          />

          <FeatureCard
            icon={
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 24C0.5 10.7452 11.2452 0 24.5 0C37.7548 0 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.5 37.2548 0.5 24Z"
                  fill="#074A80"
                />
                <path
                  d="M28.1633 15.0362C28.4518 14.9699 28.7537 14.9951 29.0272 15.1082C29.3007 15.2213 29.5322 15.4168 29.6896 15.6675L31.1061 17.9291C31.2203 18.1112 31.3742 18.2652 31.5564 18.3794L33.8179 19.7959C34.0692 19.9531 34.2651 20.1848 34.3785 20.4586C34.4919 20.7324 34.5172 21.0347 34.4507 21.3235L33.8522 23.9228C33.8039 24.1329 33.8039 24.3512 33.8522 24.5613L34.4507 27.162C34.5165 27.4504 34.491 27.7521 34.3776 28.0253C34.2642 28.2986 34.0686 28.5297 33.8179 28.6868L31.5564 30.1047C31.3742 30.2189 31.2203 30.3729 31.1061 30.555L29.6896 32.8166C29.5324 33.0675 29.301 33.2633 29.0275 33.3767C28.754 33.4901 28.4519 33.5155 28.1633 33.4493L25.5626 32.8508C25.353 32.8027 25.1352 32.8027 24.9256 32.8508L22.3249 33.4493C22.0363 33.5155 21.7342 33.4901 21.4607 33.3767C21.1872 33.2633 20.9558 33.0675 20.7987 32.8166L19.3822 30.555C19.2675 30.3727 19.1131 30.2188 18.9304 30.1047L16.6703 28.6882C16.4193 28.5311 16.2236 28.2997 16.1102 28.0262C15.9968 27.7526 15.9714 27.4506 16.0376 27.162L16.6347 24.5613C16.6829 24.3512 16.6829 24.1329 16.6347 23.9228L16.0361 21.3235C15.9698 21.0346 15.9952 20.7321 16.1089 20.4583C16.2226 20.1845 16.4188 19.9529 16.6703 19.7959L18.9304 18.3794C19.1131 18.2653 19.2675 18.1114 19.3822 17.9291L20.7987 15.6675C20.9559 15.4171 21.1872 15.2218 21.4604 15.1087C21.7336 14.9956 22.0352 14.9702 22.3235 15.0362L24.9256 15.6333C25.1352 15.6814 25.353 15.6814 25.5626 15.6333L28.1633 15.0362Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M21.7021 25.0058L24.6021 27.7832L28.7847 20.7007"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Verified Jobs Only"
            description="No scams, no confusion. We connect you only with trusted companies looking for real workers"
          />

          <FeatureCard
            icon={
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.500244 24C0.500244 10.7452 11.2454 0 24.5002 0C37.7551 0 48.5002 10.7452 48.5002 24C48.5002 37.2548 37.7551 48 24.5002 48C11.2454 48 0.500244 37.2548 0.500244 24Z"
                  fill="#074A80"
                />
                <g clipPath="url(#clip0_2778_2672)">
                  <path
                    d="M30.3517 16.7784H19.6711C18.9504 16.7784 18.3662 17.3627 18.3662 18.0833V23.0569C18.3662 23.7776 18.9504 24.3618 19.6711 24.3618H30.3517C31.0723 24.3618 31.6565 23.7776 31.6565 23.0569V18.0833C31.6565 17.3627 31.0723 16.7784 30.3517 16.7784Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.585 22.2883H21.5176M22.9715 22.2774H27.0296M18.4095 18.873H31.5921"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 35.6458C31.4318 35.6458 36.6459 30.4318 36.6459 24C36.6459 17.5681 31.4318 12.3541 25 12.3541C18.5682 12.3541 13.3542 17.5681 13.3542 24C13.3542 30.4318 18.5682 35.6458 25 35.6458Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.485 27.0876C30.0879 26.8438 31.1598 26.5199 31.4827 26.911C31.8315 27.334 31.3906 28.2527 30.9843 28.9661"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3906 27.3708C19.3434 28.1276 22.1574 29.2856 25.155 29.2856C28.0128 29.2856 29.7575 28.25 30.6621 27.6173"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2778_2672">
                    <rect
                      width="26"
                      height="26"
                      fill="white"
                      transform="translate(12 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Visa Support Included"
            description="We don’t stop at finding you a job. We help you with medical tests, contract approval, and the entire visa application"
          />
        </div>
      </div>
    </section>
  );
}
