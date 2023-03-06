import Image from "next/image";
import Link from "next/link";
import CatWikiLogo from "../../public/CatwikiLogo.svg";

export default function Footer() {
  return (
    <div
      id="footer_container"
      className="bg-black px-7 py-9 lg:px-12 text-white rounded-t-3xl flex flex-col lg:flex-row lg:items-center lg:justify-between items-start gap-3 mt-auto"
    >
      <Link href="/">
        <Image
          src={CatWikiLogo}
          alt="CatWikiLogo"
          className="invert h-8 w-auto"
        />
      </Link>
      <span className="font-primary text-xs lg:text-sm">
        © created by{" "}
        <Link
          href="https://www.linkedin.com/in/muda2bir/"
          className="underline font-[700]"
          target="_blank"
        >
          muda2bir
        </Link>
        - devChallenge.io 2023
      </span>
    </div>
  );
}
