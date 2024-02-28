import Container from "@/components/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#212731] pt-12 pb-16">
      <Container>
        <div className="flex flex-col sm:flex-row">
          <div className="text-[#B6BDC4] flex sm:w-2/3 md:w-1/2 justify-between">
            <div className="flex flex-col">
              <h4 className="text-white">Categories</h4>
              <Link href="/">Web Builder</Link>
              <Link href="/">Hosting</Link>
              <Link href="/">Data Center</Link>
              <Link href="/">Robotic-Automation</Link>
            </div>
            <div className="flex flex-col">
              <h4 className="text-white">Contact</h4>
              <Link href="/">Contact</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms Of Service</Link>
              <Link href="/">Categories</Link>
              <Link href="/">About</Link>
            </div>
          </div>
          <div className="flex items-center justify-center text-sm sm:w-1/3 md:w-1/2 py-8">
            <select className="bg-transparent text-[#D1D6DA]" name="" id="">
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
