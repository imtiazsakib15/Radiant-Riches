import BestChoiceCard from "@/components/BestChoiceCard";
import BestValueCard from "@/components/BestValueCard";
import BestCard3 from "@/components/BestCard3";
import BestCard4 from "@/components/BestCard4";
import Header from "@/components/Header";
import SignUp from "@/components/SignUp";
import RelatedDeals from "@/components/RelatedDeals";

const Home = () => {
  return (
    <>
      <Header />
      <BestChoiceCard />
      <BestValueCard />
      <BestCard3 />
      <BestCard4 />
      <RelatedDeals />
      <SignUp />
    </>
  );
};

export default Home;
