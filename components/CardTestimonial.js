import Image from "next/image";

export default function CardTestimonial({ image, name, say, job }) {
  return (
    <div className="border border-purple rounded-[10px] text-center xl:w-[240px] w-full xl:h-[305px] h-[160px] relative xl:mb-0 mb-10">
      <Image
        src={image}
        width="80"
        height="80"
        alt=""
        className="absolute left-[50%] -translate-x-[50%] -translate-y-[50%] scale-[65%] xl:scale-100"
      />

      <h4 className="font-bold xl:text-[22px] text-[11px] text-primary xl:mt-20 mt-10">
        {name}
      </h4>
      <p className="text-secondary xl:text-[15px] text-[8px] mt-1">{job}</p>
      <p className="xl:text-[17px] text-[8px] text-primary xl:mt-[30px] mt-[15px] px-5">
        {say}
      </p>
    </div>
  );
}
