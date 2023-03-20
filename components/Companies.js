import Link from "next/link";
import Brand from "./Brand";
import Amazon from "./brand/Amazon";
import Github2 from "./brand/Github-2";
import Linkedin from "./brand/Linkedin";
import Medium from "./brand/Medium";
import Microsoft from "./brand/Microsoft";
import Paypal from "./brand/Paypal";
import Redis from "./brand/Redis";
import Redit from "./brand/Redit";
export default function Companies() {
  return (
    <>
      <div className="xl:flex flex-wrap w-[905px] hidden mx-auto items-center justify-between">
        <Brand href="https://github.com/" pbot>
          <Github2 />
        </Brand>
        <Brand href="https://www.microsoft.com/" pbot>
          <Microsoft />
        </Brand>
        <Brand href="https://redis.com/" pbot>
          <Redis />
        </Brand>
        <Brand href="https://amazon.com/" pbot>
          <Amazon />
        </Brand>
        <Brand href="https://paypal.com/">
          <Paypal />
        </Brand>
        <Brand href="https://linekdin.com/">
          <Linkedin />
        </Brand>
        <Brand href="https://reddit.com/">
          <Redit />
        </Brand>
        <Brand href="https://medium.com/">
          <Medium />
        </Brand>
      </div>
      <div className="flex xl:hidden flex-wrap w-[315px] mx-auto items-center justify-between">
        <Brand href="https://github.com/" pbot>
          <Github2 mobile />
        </Brand>
        <Brand href="https://www.microsoft.com/" pbot>
          <Microsoft mobile />
        </Brand>
        <Brand href="https://redis.com/" pbot>
          <Redis mobile />
        </Brand>
        <Brand href="https://amazon.com/" pbot>
          <Amazon mobile />
        </Brand>
        <Brand href="https://paypal.com/" pbot>
          <Paypal mobile />
        </Brand>
        <Brand href="https://linekdin.com/" pbot>
          <Linkedin mobile />
        </Brand>
        <Brand href="https://reddit.com/" pbot>
          <Redit mobile />
        </Brand>
        <Brand href="https://medium.com/" pbot>
          <Medium mobile />
        </Brand>
      </div>
    </>
  );
}
