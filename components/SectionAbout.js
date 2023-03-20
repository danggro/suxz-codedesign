import Image from "next/image";

import Companies from "./Companies";
import Container from "./Container";
import SectionAboutItem from "./SectionAboutItem";
import SectionHeader from "./SectionHeader";
import Star from "./Star";

export default function SectionAbout() {
  return (
    <section id="about" className="pt-10 xl:py-20 ">
      <Container>
        <div className="items-start xl:flex">
          <div className="relative xl:w-6/12">
            <div className="absolute bottom-0 translate-y-[50%] xl:right-[100px] right-[50px] xl:w-[286px] w-[143px] xl:py-4 py-2 bg-white flex rounded-xl xl:space-x-[20px] space-x-[10px] xl:shadow-about shadow-about-mobile ">
              <Image
                src="/avatar-about.png"
                width="60"
                height="60"
                alt=""
                className="object-contain ml-3 xl:ml-5 xl:scale-100"
              />
              <div>
                <p className="xl:text-lg text-[9px] font-bold text-primary">
                  Sarah Manrope
                </p>
                <p className="text-secondary xl:text-[12px] text-[6px] font-bold">
                  Designer
                </p>
                <div className="xl:mt-[10px] flex xl:space-x-1 xl:scale-100 origin-left scale-50">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/about.png"
                width="600"
                height="516"
                alt=""
                className=""
              />
            </div>
          </div>
          <div className="xl:pl-[138px] xl:w-6/12 xl:m-0 mt-20">
            <SectionHeader
              section="about us"
              main="We Help Improve Your Work Experience"
              subMain="We help you to increase self-confidence and train yourself in a direction."
              sizeh3="w-11/12"
            />
            <div className="xl:mt-[50px] mt-[25px] ">
              <SectionAboutItem padr="xl:pr-20">
                Study and produce creation to get a job
              </SectionAboutItem>
              <SectionAboutItem padr="xl:pr-16">
                Up to date material and created by expert creators
              </SectionAboutItem>
              <SectionAboutItem padr="xl:pr-14">
                Complete classes and projects and get a certificate from us
              </SectionAboutItem>
            </div>
          </div>
        </div>
      </Container>
      <div className="min-w-screen bg-[#F8F8FF] px-[30px] xl:py-20 py-10 xl:mt-[130px] mt-[65px]">
        <div className="mb-10 text-center xl:mb-20">
          <h2 className="xl:text-[44px] text-[22px] font-extrabold text-primary">
            Companies That Recruit Our Graduates
          </h2>
          <h4 className="xl:text-[26px] text-[13px] font-medium text-primary mt-5">
            Our graduates have worked in more than 400 companies around the
            World
          </h4>
        </div>
        <Companies />
      </div>
    </section>
  );
}
