export default function LoginSection() {
  return (
    <section className="w-full h-full flex flex-col justify-start items-center gap-2">
      <div className="w-full h-fit pxsm:px-10 flex flex-col gap-12 justify-center items-center py-[20vh]">
        <h1 className="text-center font-Inter font-semibold text-3xl md:text-4xl tracking-tight">
          Try Proto for free
        </h1>
        <form className="w-[280px] sm:w-[336px] h-fit flex flex-col gap-6 items-center">
          <input
            type="text"
            placeholder="Email"
            className="bg-white w-full h-fit border-[0.2rem] tracking-[0.2px] border-black border-solid px-4 py-2 rounded-md focus:outline-solid focus:outline-[#5953d0] focus:border-[#5953d0] placeholder:font-Inter placeholder:text-[#7f7f7f] placeholder:font-base"
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-white w-full h-fit border-[0.2rem] tracking-[0.2px]  border-black border-solid px-4 py-2 rounded-md placeholder:font-Inter focus:outline-[#5953d0] focus:border-[#5953d0] placeholder:text-[#7f7f7f] placeholder:font-base"
          />
          <button
            type="submit"
            className="w-full my-6 bg-black text-white font-medium px-4 py-3 rounded-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Create an account
          </button>
          <div className="flex flex-row gap-2 items-center justify-center">
            <p className="font-medium tracking-[0.1px]">
              Already have an account?
            </p>
            <button className="text-[#5953d0] font-medium tracking-[0.1px]">
              Log In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
