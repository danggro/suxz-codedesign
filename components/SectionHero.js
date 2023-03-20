import Image from "next/image";
import Button from "./Button";
import Container from "./Container";

export default function SectionHero() {
  return (
    <section id="hero" className="xl:pt-[105px] mt-[25px] xl:mb-0 ">
      <div className=" w-[263px] mx-auto sm:hidden ">
        <div className="relative">
          <div className="bg-white xl:shadow-hero shadow-hero-mobile xl:px-[14px] px-[7px] xl:pt-2 pt-2 xl:pb-5 pb-2 xl:rounded-[10px] rounded-[5px] absolute xl:top-[84px] top-[28px] xl:-left-[14px] -left-7">
            <p className="font-bold xl:text-[10px] text-[5px] text-secondary">
              Members
            </p>
            <h5 className="font-bold xl:text-[15px] text-[8px] text-primary xl:mt-1">
              70,200
            </h5>
            <Image
              src="/bar.png"
              width="58"
              height="29"
              alt=""
              className="mt-1"
            />
          </div>
          <Image
            src="/header_img.png"
            width="263"
            height="300"
            alt=""
            className=""
          />
        </div>
      </div>
      <Container>
        <div className="items-start xl:flex">
          <div className="xl:w-6/12">
            <h4 className="xl:text-xl text-[10px] font-bold tracking-[0.15em] uppercase text-purple xl:mt-[60px] mt-[33px]">
              suxz make it easy
            </h4>
            <h1 className="font-extrabold xl:text-[64px] text-[32px] text-primary xl:pr-32 pr-14">
              Find Your Way Of Success
            </h1>
            <p className="xl:pr-16 pr-12 xl:text-2xl text-[12px] font-medium text-primary xl:mt-[26px] mt-[13px]">
              We help you to increase self-confidence and train yourself in a
              direction, and make you more creative in developing a work
            </p>
            <div className="flex xl:space-x-[46px] space-x-[23px]  xl:mt-10 mt-5 ">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Our Services</Button>
            </div>
          </div>
          <div className="justify-end hidden xl:w-6/12 xl:flex">
            <div className="relative">
              <div className="bg-white shadow-hero px-[14px] pt-2 pb-5 rounded-[10px] absolute top-[84px] -left-[14px]">
                <p className="font-bold text-[10px] text-secondary">Members</p>
                <h5 className="font-bold text-[15px] text-primary mt-1">
                  70,200
                </h5>
                <Image
                  src="/bar.png"
                  width="116"
                  height="58"
                  alt=""
                  className="mt-2"
                />
              </div>
              <Image
                src="/header_img.png"
                width="572"
                height="616"
                alt=""
                className="-z-10"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
