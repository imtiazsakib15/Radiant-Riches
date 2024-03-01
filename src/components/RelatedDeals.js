import Container from "@/components/RelatedDeals";
import RelatedDealsCard from "./RelatedDealsCard";

const RelatedDeals = () => {
  return (
    <Container>
      <h2 className="text-[#2C384A] text-xl sm:text-2xl lg:text-[32px] pt-20 pb-10">
        Related deals you might like for
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <RelatedDealsCard />
        <RelatedDealsCard />
        <RelatedDealsCard />
      </div>
    </Container>
  );
};

export default RelatedDeals;
