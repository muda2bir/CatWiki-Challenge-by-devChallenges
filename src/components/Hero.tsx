import { HeroCatsType } from "@/pages/api/CatType.types";
import { makeRequest } from "@/utils/axios-utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import HeroImageLg from "../../public/HeroImagelg.png";
import Search from "./Search";

/*

/posts -> ["posts"]
/posts/1 -> ["posts", post.id]
/posts?authorId=1 -> ["posts", { authorId: 1 }]
/posts/2/comments -> ["posts", post.id, "comments"]

*/

export default function Hero() {
  const heroCatsQuery = useQuery({
    queryKey: ["hero_cats"],
    queryFn: () => makeRequest({ url: "/api/hero_cats" }),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div id="hero_container" className="relative">
      <picture>
        <Image
          src={HeroImageLg}
          alt="Hero Image"
          className="w-full h-auto rounded-t-3xl 2xl:h-[35rem] 2xl:object-cover"
          priority
        />
      </picture>

      <div
        id="hero_heading_para_container"
        className="absolute top-5 left-7 w-1/2 2xl:w-1/3 2xl:top-11 2xl:left-24"
      >
        <h1 className="text-white font-logo text-lg mb-2 md:hidden">CatWiki</h1>
        {/* /This will only render on the small or mobile devices */}
        <Image
          src="/CatwikiLogo.svg"
          alt="CatWiki"
          width={125}
          height={125}
          className="py-4 w-auto h-auto hidden md:block invert lg:h-24 2xl:h-36"
        />
        {/* /This is going to render on medium or large devices */}
        <p className="text-white font-primary text-xs font-[500] md:text-xl lg:text-2xl 2xl:text-3xl 2xl:leading-10 mb-3 md:mb-8">
          Get to know more about your cat breed
        </p>

        {/* Search Component will come here */}
        <Search />
      </div>

      <div
        id="most_searched_breed_container"
        className="bg-[#E3E1DC] px-7 pt-5 pb-8 md:px-9 md:pt-8 md:pb-11 rounded-b-3xl mb-20 lg:pb-14 2xl:px-24 2xl:pt-10 2xl:pb-24"
      >
        <h2 className="font-primary text-sm font-medium text-[#291507] relative after:content-[''] after:bg-[#4D270C] after:h-1 after:w-12 after:absolute after:rounded-full after:top-6 after:left-0 mb-7 lg:mb-10 md:text-lg md:after:w-16 md:after:top-8 lg:text-xl lg:after:top-9">
          Most Searched Breeds
        </h2>

        <div
          id="heading_container"
          className="flex justify-between align-bottom mb-7 lg:mb-12"
        >
          <h3 className="text-[#291507] font-primary font-bold text-lg md:text-3xl lg:text-4xl">
            66+ Breeds For you to discover
          </h3>
          <Link
            href="/breeds"
            className="font-primary font-bold text-sm text-center text-[#291507] opacity-60 lg:text-lg"
          >
            See More →
          </Link>
        </div>

        <div
          id="images_container"
          className="grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-3.5 md:gap-10 items-end"
        >
          {heroCatsQuery.data?.data &&
            heroCatsQuery.data?.data.slice(0, 4).map((cat: HeroCatsType) => {
              return (
                <div id="single_image_container" key={cat.id}>
                  <Link href={`/breeds/cat_breed?breedId=${cat.id}`}>
                    <Image
                      src={cat.image_url}
                      alt={cat.name}
                      width={200}
                      height={200}
                      className="w-full rounded-xl mb-2 object-cover h-32 md:h-64 lg:h-48 2xl:h-64"
                    />
                    <span className="text-[#291507] font-primary text-xs font-[600] md:text-lg">
                      {cat.name}
                    </span>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
