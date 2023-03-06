import Image from "next/image";

export default function Loader() {
  return (
    <div
      id="loading_container"
      className="flex-1 flex items-center justify-center"
    >
      <Image src="/loading.svg" alt="Loading...." width={200} height={200} />
    </div>
  );
}
