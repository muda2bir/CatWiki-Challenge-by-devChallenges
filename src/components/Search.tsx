import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "@/utils/axios-utils";
import { HeroCatsType } from "@/pages/api/CatType.types";

export default function Search() {
  const queryClient = useQueryClient();
  const searchList: any = useQuery(
    ["search_list"],
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

  const [modalState, setModalState] = useState<boolean>(false);
  const [filteredData, settFilteredData] = useState<HeroCatsType[] | []>([]);
  let modalRef = useClickOutside(() => {
    setModalState(false);
  });

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const searchKeyword = event.target.value;
    const newFilter = searchList.data.data.filter((value: HeroCatsType) => {
      return value.name.toLowerCase().includes(searchKeyword.toLowerCase());
    });
    searchKeyword === "" ? settFilteredData([]) : settFilteredData(newFilter);
  }

  return (
    <>
      {modalState && (
        <div
          id="modal_background"
          className="fixed w-screen h-screen bg-[#00000066] top-0 left-0 z-10"
        ></div>
      )}
      <div id="search_bar_container_mobile" className="md:hidden">
        <div
          id="search-box_container_mobile"
          className="bg-white text-black flex font-primary w-24 justify-between items-center py-[0.3rem] px-3 rounded-full text-sm"
          onClick={() => setModalState(true)}
        >
          Search
          <Image
            src="/search.svg"
            alt="search here"
            width={200}
            height={200}
            className="w-4 h-4"
          />
        </div>
        {modalState && (
          <div
            id="main_input_container"
            className="bg-white py-1 px-5 rounded-md absolute -top-5 left-[-30px] w-[200%] z-50"
            ref={modalRef}
          >
            <span className="flex mb-12">
              <Image
                src="/close.svg"
                alt="close"
                width={200}
                height={200}
                className="w-7 h-7 bg-[#9797971a] p-[0.1rem] rounded-sm ml-auto"
                onClick={() => setModalState(false)}
              />
            </span>

            <div
              id="input_container"
              className="rounded-full border-[1px] border-[#333] flex items-center"
            >
              <input
                type="text"
                placeholder="Enter your breed"
                className="w-full h-full outline-none font-primary py-2.5 px-5 text-lg rounded-full"
                onChange={handleFilter}
              />

              <Image
                src="/search.svg"
                alt="search here"
                width={200}
                height={200}
                className="w-6 h-6 mr-3"
              />
            </div>

            <div id="search_list_container" className="py-5 px-1 mb-4">
              <ul className="font-primary h-56 overflow-auto overflow-x-hidden">
                {filteredData.slice(0, 15).map((listItem: HeroCatsType) => {
                  return (
                    <li key={listItem.id}>
                      <Link
                        href={`/breeds/cat_breed?breedId=${listItem.id}`}
                        className="block hover:bg-[#9797971a] text-lg py-3 px-3 rounded-lg"
                      >
                        {listItem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Big Screens Search Bar */}

      <div id="search_bar_desktop_tablets" className="w-3/4 hidden md:block">
        <div
          id="main_container"
          className="flex bg-white items-center justify-between rounded-full w-full relative"
        >
          <input
            type="text"
            placeholder="Enter your breed"
            className="w-full h-full outline-none font-primary py-3 px-5 text-lg rounded-full lg:py-4"
            onChange={handleFilter}
          />
          <Image
            src="/search.svg"
            alt="search here"
            width={200}
            height={200}
            className="w-5 h-5 mr-5"
          />
          {filteredData.length !== 0 && (
            <ul className="font-primary h-56 overflow-auto overflow-x-hidden absolute top-[130%] left-0 bg-white z-20 w-full rounded-2xl py-3 px-3">
              {filteredData.slice(0, 15).map((listItem: HeroCatsType) => {
                return (
                  <li key={listItem.id}>
                    <Link
                      href={`/breeds/cat_breed?breedId=${listItem.id}`}
                      className="block hover:bg-[#9797971a] text-lg py-3 px-3 rounded-lg"
                    >
                      {listItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
