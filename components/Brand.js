import Link from "next/link";

export default function Brand({ children, pbot, href }) {
  return (
    <div
      className={`hover:opacity-60 px-2 ${
        pbot ? "xl:mb-[65px] mb-[30px]" : ""
      } `}
    >
      <Link href={href} target="_blank">
        {children}
      </Link>
    </div>
  );
}
