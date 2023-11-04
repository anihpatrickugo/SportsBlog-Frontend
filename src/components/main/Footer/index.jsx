import Link from "next/link";
import Image from "next/image";

import instagram from "@/app/assets/icons/Instagram-icon.svg";
import twitter from "@/app/assets/icons/Twitter-icon.svg";
import facebook from "@/app/assets/icons/Facebook-icon.svg";

const Footer = () => {
  return (
    <footer className="w-screen bg-grey-stronger -mt-1">
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-5/12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-1 md:text-[8px]">
          <Link href="/" className="text-grey-strong hover:text-green-primary">
            HOME
          </Link>
          <Link
            href="/abou"
            className="text-grey-strong hover:text-green-primary"
          >
            ABOUT US
          </Link>
          <Link
            href="/contact"
            className="text-grey-strong hover:text-green-primary"
          >
            CONTACT US
          </Link>
          <Link
            href="/privacy"
            className="text-grey-strong hover:text-green-primary"
          >
            PRIVACY POLICY
          </Link>
          <Link
            href="/dmca"
            className="text-grey-strong hover:text-green-primary"
          >
            DMCA
          </Link>
          <Link
            href="/terms"
            className="text-grey-strong hover:text-green-primary"
          >
            TERMS & CONDITIONS
          </Link>
        </div>

        <div className="w-full md:w-1/12 flex justify-evenly md:justify-between md:gap-4  items-center my-10 md:my-0">
          <Link href="/" className="hover:bg-green-primary">
            <Image
              className="w-6"
              src={instagram}
              alt="instagram"
              height={500}
              width={500}
            />
          </Link>

          <Link href="/" className="hover:bg-green-primary">
            <Image
              className="w-6"
              src={twitter}
              alt="twitter"
              height={500}
              width={500}
            />
          </Link>

          <Link href="/" className="hover:bg-green-primary">
            <Image
              className="w-6"
              src={facebook}
              alt="facebook"
              height={500}
              width={500}
            />
          </Link>
        </div>

        <div className="w-full md:w-3/12 flex justify-center items-center gap-4 text-grey-strong text-xs">
          <p>&copy; @2023 SportsBlog</p>
          <Link className="hover:text-green-primary" href="/">
            Anih Patrick
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
