import Container from "@/components/Container";

const SignUp = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center md:justify-between py-12">
        <h2 className="text-center md:text-left text-xl sm:text-2xl lg:text-[32px] text-[#5C6874] max-w-[398px]">
          Sign up and get exclusive special deals
        </h2>
        <div className="flex items-center mt-4 w-full max-w-80 lg:max-w-[445px]">
          <input
            className="p-3 rounded-l-lg w-full focus:outline-blue-600"
            type="text"
          />
          <button className="text-sm bg-[#1B88F4] min-w-max text-white p-3.5 rounded-r-lg">
            Sign Up
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
