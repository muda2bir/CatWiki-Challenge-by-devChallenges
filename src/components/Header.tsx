import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <Image
        src="/CatwikiLogo.svg"
        alt="CatWiki"
        width={125}
        height={125}
        className="py-4 w-auto h-auto md:h-16 lg:h-20 2xl:my-2"
      />
    </Link>
  );
}
