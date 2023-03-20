import Image from "next/image";

export default function CardLearnings({ image, title, desc, purple }) {
  return (
    <div
      className={`p-[30px] rounded-xl  ${
        purple ? "bg-purple text-white" : "bg-white "
      }`}
    >
      <Image
        src={image}
        width="80"
        height="80"
        alt=""
        className="mx-auto xl:0"
      />
      <div className="w-[189px] xl:text-left text-center xl:m-0 mx-auto">
        <h3
          className={`text-xl font-bold  mt-[30px] ${
            purple ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-[14px] text-primary mt-[10px] ${
            purple ? "text-white" : "text-primary"
          }`}
        >
          {desc}
        </p>
      </div>
      <div className="text-center xl:text-left mt-[30px]">
        <button className="w-[189px] h-9 border border-[#44E4C9] hover:bg-white hover:text-[#44E4C9] rounded-md text=[15] font-bold bg-[#44E4C9] text-white ">
          See Class
        </button>
      </div>
    </div>
  );
}
