import Footer from "@/components/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="bg-[#FBFCFD]">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
