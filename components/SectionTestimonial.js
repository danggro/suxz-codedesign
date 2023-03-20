import CardTestimonial from "./CardTestimonial";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

export default function SectionTestimonials() {
  return (
    <section className="py-10 xl:py-20 " id="testimonial">
      <Container>
        <div className="text-center">
          <SectionHeader
            section="testimonial"
            main="Our Alumni Say"
            subMain="These are the words of people who have taken our class"
          />
        </div>
        <div className="flex xl:flex-nowrap flex-wrap items-start xl:space-x-[84px] xl:mt-[100px] mt-[50px] xl:-mx-0 -mx-2">
          <div className="w-6/12 px-2 xl:px-0 xl:w-3/12">
            <CardTestimonial
              image="/test-1.png"
              name="Jason Todd"
              job="Entrepreneur"
              say="“The mentor is cool, how to convey each material is also detailed and easy to understand..”"
            />
          </div>
          <div className="w-6/12 px-2 xl:px-0 xl:w-3/12">
            <CardTestimonial
              image="/test-2.png"
              name="Cassandra K"
              job="Web Developer"
              say="“The mentor is cool, how to convey each material is also detailed and easy to understand..”"
            />
          </div>
          <div className="w-6/12 px-2 xl:px-0 xl:w-3/12">
            <CardTestimonial
              image="/test-3.png"
              name="Peter Parker"
              job="EntrepreneuPHP Enthusiast"
              say="“The mentor is cool, how to convey each material is also detailed and easy to understand..”"
            />
          </div>
          <div className="w-6/12 px-2 xl:px-0 xl:w-3/12">
            <CardTestimonial
              image="/test-4.png"
              name="Jean Gray"
              job="Designer"
              say="“The mentor is cool, how to convey each material is also detailed and easy to understand..”"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
