import Container from "@/components/Container";
import img from "@/assets/img.jpg";
import Image from "next/image";
import { CiCircleInfo, CiTrophy } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Stars from "@/components/Stars";

const BestChoiceCard = () => {
  return (
    <Container>
      <div className="bg-white relative flex flex-col md:flex-row items-center gap-5 lg:gap-6 p-4 mt-8">
        <span className="absolute rounded-full border w-7 h-7 grid place-items-center -left-3 top-10 bg-white">
          3
        </span>
        <div className="p-4 text-center text-sm">
          <Image src={img} alt="Image" />
          <span>Builder 1</span>
        </div>
        <div className="flex-1">
          <p>
            <span className="font-bold">
              WixPro 72-Inch Responsive Website Builder-{" "}
            </span>
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <h4 className="text-[#2C384A] font-bold pt-1.5 pb-2">
            Main highlights
          </h4>
          <p className="ps-4">
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <span className="text-blue-600 pt-3 flex items-center">
            Show more <IoIosArrowDown />
          </span>
        </div>
        <div className="mt-auto">
          <div className="md:absolute top-0 right-10 text-[#074786] bg-[#F3F9FF] flex flex-col items-center rounded-b-lg px-8 py-6">
            <h4 className="text-xl sm:text-2xl lg:text-[32px] flex">
              9.3 <CiCircleInfo className="-mt-3 text-xs" />
            </h4>
            <p className="text-sm pt-3 pb-1">Exceptional</p>
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

export default BestChoiceCard;
