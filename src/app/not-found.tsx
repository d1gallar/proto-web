import BlackRoundBackArrow from "@/components/BlackRoundBackArrow";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-row justify-center items-center min-w-screen min-h-screen bg-[#fe8e8e]">
      <div className="w-full h-full flex flex-col gap-8 mx-10 p-8 md:mx-0 md:w-1/2 md:h-1/2 bg-white border-2 border-black border-solid rounded-lg md:border-6 md:gap-10 md:p-20 font-Inter">
        <h1 className="text-7xl font-extrabold text-center">404</h1>
        <div className="text-xl font-medium text-center">
          <p>Uh Oh. We have run into an error.</p>
          <p>Sorry! This page could not be found!</p>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <Link
            href="/"
            className="flex flex-row gap-2 items-center text-white bg-black border-2 border-black border-solid rounded-md px-6 py-3 font-base hover:scale-105 transition:color ease-in-out duration-200"
          >
            <BlackRoundBackArrow fillcolor="white" className="scale-75" />
            <p>Go Back</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
