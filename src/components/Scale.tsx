type ScaleProps = {
  name: string;
  value: number;
};

export default function Scale({ value, name }: ScaleProps) {
  let ratingScale = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-5 gap-2 lg:gap-7 font-primary text-base md:text-lg font-[500] mb-5 lg:text-xl lg:mb-7 2xl:text-lg">
      <strong>{name}:</strong>
      <section className="flex gap-1 lg:gap-4 2xl:justify-end 2xl:flex-1">
        {ratingScale.map((scale: number) => {
          return scale <= value ? (
            <span
              key={name + scale}
              className="h-3 bg-[#544439] w-14 lg:w-28 rounded-full lg:h-4 2xl:h-3"
            ></span>
          ) : (
            <span
              key={name + scale}
              className="h-3 bg-[#E0E0E0] w-14 lg:w-28 rounded-full lg:h-4 2xl:h-3"
            ></span>
          );
        })}
      </section>
    </div>
  );
}
