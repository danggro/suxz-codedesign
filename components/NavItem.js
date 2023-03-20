import Link from "next/link";

export default function NavItem() {
  return (
    <ul className="flex xl:space-x-[40px] xl:flex-row flex-col xl:space-y-0 space-y-3 xl:p-0 p-10">
      <li>
        <a
          href="#"
          className="text-lg font-semibold text-white xl:text-xl xl:text-primary/80 xl:hover:text-primary hover:underline "
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#learnings"
          className="text-lg font-semibold text-white xl:text-xl xl:text-primary/80 xl:hover:text-primary hover:underline "
        >
          Learnings
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-lg font-semibold text-white xl:text-xl xl:text-primary/80 xl:hover:text-primary hover:underline "
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#testimonial"
          className="text-lg font-semibold text-white xl:text-xl xl:text-primary/80 xl:hover:text-primary hover:underline "
        >
          Testimonial
        </a>
      </li>
    </ul>
  );
}
