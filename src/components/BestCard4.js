import Container from "@/components/Container";
import img from "@/assets/img.jpg";
import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";
import Stars from "@/components/Stars";
import { TiTick } from "react-icons/ti";

const BestCard4 = () => {
  return (
    <Container>
      <div className="bg-white relative flex flex-col md:flex-row items-center gap-5 lg:gap-6 p-4 mt-8 rounded-xl">
        <span className="absolute rounded-full border w-10 h-10 grid place-items-center -left-5 top-10 bg-white">
          4
        </span>
        <div className="p-4 text-center text-sm">
          <Image src={img} alt="Image" />
          <span>CDK</span>
        </div>
        <div className="flex-1">
          <p>
            <span className="font-bold">CDK Resposive Builder: </span>
            An extensive library of widgets and apps, and detailed step-by-step
            guides
          </p>
          <h4 className="text-[#2C384A] font-bold pt-1.5 pb-2">
            Main highlights
          </h4>
          <div className="ms-4 p-4 rounded-lg bg-[#FFF4ED] space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 text-[#1B88F4] bg-white rounded-lg">
                9.9
              </span>
              <p className="text-[#4B5665]">Building Responsive</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 text-[#1B88F4] bg-white rounded-lg">
                8.9
              </span>
              <p className="text-[#4B5665]">Cool</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 text-[#1B88F4] bg-white rounded-lg">
                8.9
              </span>
              <p className="text-[#4B5665]">Docs</p>
            </div>
          </div>
          <p className="text-[#2C384A] pt-4 pb-2">Why we love it</p>
          <div className="space-y-3 pb-4">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#EBF5FF] text-[#0855A1]">
                <TiTick />
              </span>
              <span className="text-[#4B5665]">Documentation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#EBF5FF] text-[#0855A1]">
                <TiTick />
              </span>
              <span className="text-[#4B5665]">Easy Use</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#EBF5FF] text-[#0855A1]">
                <TiTick />
              </span>
              <span className="text-[#4B5665]">Out of box</span>
            </div>
          </div>
          <span className="text-blue-600 pt-3 cursor-pointer">Show more</span>
        </div>
        <div className="mt-auto">
          <div className="md:absolute top-0 right-10 text-[#074786] bg-[#F3F9FF] flex flex-col items-center rounded-b-lg px-8 py-6">
            <h4 className="text-xl sm:text-2xl lg:text-[32px] flex">
              9.1 <CiCircleInfo className="-mt-3 text-xs" />
            </h4>
            <p className="text-sm pt-3 pb-1">Very Good</p>
            <Stars starCount={5} />
          </div>
          <button className="bg-[#1B88F4] text-white rounded-xl mt-4 px-20 lg:px-24 py-2">
            View
          </button>
        </div>
      </div>
    </Container>
  );
};

export default BestCard4;
