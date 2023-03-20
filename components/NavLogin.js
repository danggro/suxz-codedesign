import Link from "next/link";

export default function NavLogin() {
  return (
    <div className="flex items-center justify-end space-x-5">
      <button className="px-8 h-[52px] border border-transparent hover:border-purple rounded-[10px]">
        <Link
          href=""
          className="text-xl font-semibold text-purple  leading-[27px]"
        >
          Log in
        </Link>
      </button>
      <button className="w-[140px] h-[52px] border hover:bg-white  border-purple bg-purple rounded-[10px] text-xl font-semibold text-white hover:text-purple ">
        <Link href="">Sign Up</Link>
      </button>
    </div>
  );
}
