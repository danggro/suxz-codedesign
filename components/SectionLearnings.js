import CardLearnings from "./CardLearnings";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

export default function SectionLearnings() {
  return (
    <section
      id="learnings"
      className="xl:pt-20 py-10 m-w-screen bg-[#F8F8FF] xl:mt-0 mt-10"
    >
      <Container>
        <div className="xl:w-6/12">
          <SectionHeader
            section="learnings"
            main="Online Learning Platform International Curriculum"
            subMain="Study and understand the material class is more relaxed without time limit."
            sizeh3="w-[64%]"
          />
        </div>
        <div className="xl:mt-[60px] mt-[30px]">
          <div className="xl:flex xl:space-x-[72px] xl:space-y-0 space-y-8">
            <CardLearnings
              desc="Free class access for that start learning code and design"
              title="Starter"
              image="/avatar-learning-1.png"
            />
            <CardLearnings
              desc="Advanced material from the Starter & learn to build projects"
              title="Premium"
              image="/avatar-learning-2.png"
            />
            <CardLearnings
              desc="Materials for experts who have completed the premium package"
              title="Superstar"
              image="/avatar-learning-3.png"
              purple
            />
            <CardLearnings
              desc="Informatics science training program with the latest material"
              title="Bootcamp"
              image="/avatar-learning-4.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
