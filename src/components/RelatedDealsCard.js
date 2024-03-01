import img from "@/assets/img.jpg";
import Image from "next/image";

const RelatedDealsCard = () => {
  return (
    <div className="rounded-lg space-y-3">
      <Image className="p-4" src={img} alt="Image" width={150} height={110} />
      <div className="flex gap-2 text-[#074786]">
        <span>20% Off</span>
        <span>Limited time </span>
      </div>
      <h4 className="font-bold text-center text-[#626E79]">Webbuilder 1</h4>
      <p>Computer Modern clasic with wix support</p>
      <div>
        <span className="text-xl text-[#5C6874]">$39.96</span>
        <span className="text-[#9FA9B3] text-sm">$49.96</span>
        <span className="text-[#EF4C5D] text-[13px]">(20% Off)</span>
      </div>
      <button className="bg-[#1B88F4] text-white rounded-xl mt-4 w-full py-2">
        View Deal
      </button>
    </div>
  );
};

export default RelatedDealsCard;
