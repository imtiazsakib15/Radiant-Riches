import Container from "@/components/Container";
import { CiCircleInfo } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

const Header = () => {
  return (
    <Container>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-4">
        Best Website builders in the US
      </h1>
      <div className="flex items-center justify-between py-3 border-y mt-5 text-sm text-[#4B5665]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <CiCircleChevRight />
            <p>Last Updated - February 22, 2020 </p>
          </div>
          <div className="flex items-center gap-1">
            <CiCircleInfo />
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <select className="bg-transparent" name="" id="">
          <option value="Top Relevant">Top Relevant</option>
          <option value="A - Z">A - Z</option>
          <option value="Z - A">Z - A</option>
        </select>
      </div>
      <div className="space-x-4 flex mt-6 text-sm text-[#4B5665]">
        <span className="bg-white px-5 py-2.5 pr-10 rounded-xl">Tools</span>
        <span className="bg-white px-5 py-2.5 pr-10 rounded-xl">
          AWS Builder
        </span>
        <span className="bg-white px-5 py-2.5 pr-10 rounded-xl">
          Start Build
        </span>
        <span className="bg-white px-5 py-2.5 pr-10 rounded-xl">
          Build Supplies
        </span>
        <span className="bg-white px-5 py-2.5 pr-10 rounded-xl">Tooling</span>
        <span className="bg-white px-5 py-2.5 pr-10 rounded-xl">
          BlueHosting
        </span>
      </div>
      <div className="space-x-4 mt-3 text-sm text-[#5C6874]">
        <span>Home</span>
        <span>{">"}</span>
        <span>Hosting for all</span>
        <span>{">"}</span>
        <span>Hosting</span>
        <span>{">"}</span>
        <span>Hosting6</span>
        <span>{">"}</span>
        <span>Hosting5</span>
      </div>
    </Container>
  );
};

export default Header;
