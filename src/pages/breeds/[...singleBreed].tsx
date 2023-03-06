import Scale from "@/components/Scale";
import { makeRequest } from "@/utils/axios-utils";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

export default function SingleBreed() {
  const router = useRouter();
  const breedId = router.query.breedId;
  const { data, isLoading } = useQuery({
    queryKey: ["specific_breed", breedId],
    queryFn: () =>
      makeRequest({ url: "/api/specific_cat", params: { breedId: breedId } }),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>{data?.data.name + " Cat | CatWiki"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bengal Cat" />
      </Head>
      <div id="single_breed_main_container">
        <div
          id="hero_part_container"
          className="mt-5 grid 2xl:grid-cols-3 2xl:gap-28 2xl:place-items-start"
        >
          {data?.data.img_url && (
            <Image
              src={data?.data.img_url}
              alt="beautiful cat"
              width={200}
              height={200}
              className="w-full object-cover object-center h-64 md:h-96 rounded-[24px] lg:shadow-primary mb-5 lg:h-[35rem] 2xl:h-80"
            />
          )}
          <div id="details_container" className="mb-9 lg:mb-12 2xl:col-span-2">
            <h1 className="text-[#291507] font-primary font-[600] text-3xl md:text-4xl mt-5 md:mt-6 mb-5 md:mb-6 2xl:mt-0">
              {data?.data.name}
            </h1>
            <div className="font-primary text-base md:text-lg font-[500] text-[#291507] mb-5 lg:text-xl lg:mb-7 2xl:text-lg">
              {data?.data.description}
            </div>
            <div className="font-primary text-base font-[500] mb-5 lg:text-xl lg:mb-7 2xl:text-lg">
              <strong>Temperament: </strong>
              {data?.data.temperament}
            </div>
            <div className="font-primary text-base md:text-lg font-[500] mb-5 lg:text-xl lg:mb-7 2xl:text-lg">
              <strong>Origin: </strong>
              {data?.data.origin}
            </div>
            <div className="font-primary text-base md:text-lg font-[500] mb-5 lg:text-xl lg:mb-7 2xl:text-lg">
              <strong>Life Span: </strong>
              {data?.data.life_span}
            </div>
            <Scale name="Adaptability" value={data?.data.adaptability} />
            <Scale name="Affection level" value={data?.data.affection_level} />
            <Scale name="Child Friendly" value={data?.data.child_friendly} />
            <Scale name="Grooming" value={data?.data.grooming} />
            <Scale name="Intelligence" value={data?.data.intelligence} />
            <Scale name="Health issues" value={data?.data.health_issues} />
            <Scale name="Social needs" value={data?.data.social_needs} />
            <Scale name="Stranger friendly" value={data?.data.social_needs} />
          </div>
        </div>

        <div id="other_images" className="mb-9">
          <h2 className="text-[#291507] text-2xl font-primary font-[600] mb-7 lg:text-4xl lg:mb-11">
            Other Photos
          </h2>
          <div
            id="images"
            className="grid grid-cols-2 gap-5 md:gap-9 2xl:grid-cols-4"
          >
            {data?.data.other_photos &&
              data?.data.other_photos
                .slice(0, 8)
                .map((image: { id: string; url: string }) => {
                  return (
                    <Image
                      src={image.url}
                      alt={data.data.name}
                      width={200}
                      height={200}
                      className="rounded-2xl lg:rounded-3xl h-40 md:h-60 object-cover w-full lg:h-80"
                      key={image.id}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}
