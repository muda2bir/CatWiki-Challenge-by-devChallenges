import Image from "next/image";
import Link from "next/link";
import ImageOne from "../../public/image 1.png";
import ImageTwo from "../../public/image 2.png";
import ImageThree from "../../public/image 3.png";

function WhyCat() {
  return (
    <>
      <div
        id="main_container"
        className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center 2xl:gap-48"
      >
        <div id="details_container">
          <h1 className="text-[#291507] text-4xl font-[700] font-primary relative before:content-[''] before:bg-[#291507] before:h-1 before:w-14 before:absolute before:rounded-full before:-top-6 before:left-0 mb-11">
            Why should you have a cat?
          </h1>
          <p className="text-[#291507] font-primary font-[500] text-lg leading-5 mb-6 lg:text-xl">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <Link
            href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=If%20you%E2%80%99re%20thinking%20of%20owning%20a%20cat%2C%20these,...%205%20They%20have%20long%20life%20spans.%20"
            target="_blank"
            className="font-primary text-sm text-center text-[#291507] opacity-60 font-[700] lg:text-lg"
          >
            Read More →
          </Link>
        </div>

        <div
          id="cat_image_container"
          className="grid grid-cols-2 gap-5 md:gap-9 md:items-right mb-[87px] md:w-1/2 lg:w-full m-auto lg:gap-5 2xl:w-2/3"
        >
          <Image
            src={ImageTwo}
            alt="Cat"
            className="w-auto md:justify-self-end h-full"
          />
          <Image src={ImageThree} alt="Cat" className="w-auto row-span-2" />
          <Image
            src={ImageOne}
            alt="Cat"
            className="justify-self-end h-full w-full"
          />
        </div>
      </div>
    </>
  );
}

export default WhyCat;
