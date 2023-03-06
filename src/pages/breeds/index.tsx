import { makeRequest } from "@/utils/axios-utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HeroCatsType } from "../api/CatType.types";
import { AxiosResponse } from "axios";

export default function MostSearchedBreeds() {
  const queryClient = useQueryClient();
  const topCatsQuery: any = useQuery(
    ["top_cats"],
    () => makeRequest({ url: "/api/hero_cats" }),
    {
      initialData: () => {
        const heroCats = queryClient.getQueryData(["hero_cats"]);
        if (heroCats) {
          return heroCats;
        } else {
          return undefined;
        }
      },
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <>
      <Head>
        <title>Most Searched Breeds | CatWiki</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Most Searched Breeds of Cat" />
      </Head>
      <h1 className="text-[#291507] font-primary font-[700] text-3xl md:text-4xl mt-5 mb-9 md:mb-12">
        Top 10 most searched breeds
      </h1>

      <div id="component_holder" className="flex flex-col gap-8 md:gap-12 mb-8">
        {topCatsQuery.data?.data &&
          topCatsQuery.data?.data
            .slice(0, 10)
            .map((cat: HeroCatsType, idx: number) => {
              return (
                <div
                  id="cat_details_container"
                  className="flex flex-col gap-6 md:flex-row"
                  key={cat.id}
                >
                  <div id="image_container">
                    <Link href={`breeds/cat_breeds?breedId=${cat.id}`}>
                      <Image
                        src={cat.image_url}
                        alt="Cat"
                        width={200}
                        height={200}
                        className="w-full md:w-72 h-72 md:h-48 object-cover rounded-[24px]"
                      />
                    </Link>
                  </div>

                  <div id="text_container" className="w-full">
                    <Link href={`breeds/cat_breeds?breedId=${cat.id}`}>
                      <h2 className="font-primary text-2xl font-[600] text-[#291507] mb-4">
                        {idx + 1}. {cat.name}
                      </h2>
                    </Link>
                    <p className="font-primary text-base lg:text-lg font-[500] text-[#291507]">
                      {cat.description.slice(0, 250)}.....
                    </p>
                    <Link
                      href={`breeds/cat_breeds?breedId=${cat.id}`}
                      className="underline underline-offset-4 text-[#291507] font-primary"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}
