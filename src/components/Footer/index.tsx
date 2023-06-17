import Link from "next/link";
import WhiteProtoLogo from "../WhiteProtoLogo";

export default function Footer() {
  return (
    <footer className="bg-black w-full h-full p-10 flex flex-col justify-between items-center sm:flex-row sm:items-start sm:py-20 gap-10">
      <div className="flex flex-col gap-4 ">
        <Link href="/" className="flex flex-row justify-center">
          <WhiteProtoLogo />
        </Link>
        <p className="font-Inter font-base text-xs tracking-tight text-white">
          &copy; Proto 2023. All rights reserved.
        </p>
      </div>
      <div className="w-fit h-full font-Inter text-white flex flex-col sm:flex-row gap-12">
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <p className="font-semibold">Welcome</p>
          <ul className="flex flex-col gap-2 font-base text-sm list-none items-center sm:items-start">
            <li>
              <Link href="/getting-started">
                <p>Get Started</p>
              </Link>
            </li>
            <li>
              <Link href="/community">
                <p>Community</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <p className="font-semibold">More Info</p>
          <ul className="flex flex-col gap-2 font-base text-sm list-none items-center sm:items-start">
            <li>
              <Link href="/faq">
                <p>FAQ</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <p className="font-semibold">Company</p>
          <ul className="flex flex-col gap-2 font-base text-sm list-none items-center sm:items-start">
            <li>
              <Link href="/terms">
                <p>Terms of Use</p>
              </Link>
            </li>
            <li>
              <Link href="/policy">
                <p>Privacy Policy</p>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <p>Support</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
