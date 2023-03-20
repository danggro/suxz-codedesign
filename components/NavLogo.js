import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/">
      <div className="flex space-x-3 scale-[60%] xl:scale-100 origin-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="50"
          fill="none"
          viewBox="0 0 41 50"
        >
          <path fill="#E1DFFC" d="M35 25L17.5 50 0 25 17.5 0"></path>
          <path fill="#8C82FC" d="M41 25L23.5 50 6 25 23.5 0"></path>
        </svg>
        <h3 className="font-bold text-[34px]">Suxz</h3>
      </div>
    </Link>
  );
}
