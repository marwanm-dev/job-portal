import Button from "../../components/Button";
import Input from "../../components/Input";
import LineBreak from "../../components/LineBreak";

export default function Footer() {
  return (
    <footer className="bg-b7 text-white py-12 px-6 md:px-20 flex flex-col gap-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 flex-wrap">
        {/* Logo + Description */}
        <div className="flex flex-col gap-10">
          <img src="/footer-logo.svg" className="w-fit" />
          <h5 className="text-gray4">
            Empowering Egyptian talent to work <LineBreak />
            abroad safely, legally, and <LineBreak />
            confidently.
          </h5>
        </div>

        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <h4>Company</h4>
          <ul className="space-y-3 text-sm text-white font-light">
            <li>About Us</li>
            <li>Why us</li>
            <li>For Companies</li>
            <li>For Employers</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <h4>Company</h4>
          <ul className="space-y-3 text-sm text-white font-light">
            <li>Services</li>
            <li>How it works</li>
            <li>Frequent questions</li>
            <li>Contact info</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h4>Newsletter</h4>
          <div className="flex flex-col gap-3">
            <Input
              variant="outline"
              type="email"
              placeholder="Email Address"
              className="outline"
            />
            <Button variant="primary" color="y5">
              Subscribe now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white gap-2">
        <p>© Copyright SB 2025. Designed by Nada elborhamy</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
