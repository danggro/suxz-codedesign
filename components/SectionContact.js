import Link from "next/link";
import Button from "./Button";

export default function SectionContact() {
  return (
    <section id="contact" className="py-20 contact">
      <div className="text-center text-white">
        <h1 className="xl:text-[44px] text-[22px] font-extrabold">
          So? What Are You Waiting For
        </h1>
        <h4 className="xl:text-2xl text-[12px] px-[30px] font-medium">
          It's time to build your career, study in a relaxed and purposeful
          manner
        </h4>
      </div>
      <div className="mt-11 flex space-x-[25px] items-center justify-center">
        <Button variant="primary">Get Started</Button>
        <button className="xl:px-7 px-4 xl:h-[70px] h-[35px] xl:rounded-[10px] rounded-[5px] border border-transparent hover:border-white">
          <Link
            href=""
            className=" xl:text-[23px] text-[13px] text-white font-bold"
          >
            Contact Us
          </Link>
        </button>
      </div>
    </section>
  );
}
