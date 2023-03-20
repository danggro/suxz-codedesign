import Link from "next/link";
import Container from "./Container";
import NavLogo from "./NavLogo";

export default function Footer() {
  return (
    <section className="py-20">
      <Container>
        <div className="xl:flex">
          <div className="mb-5 xl:w-5/12 xl:mb-0">
            <NavLogo />
            <p className="xl:mt-10 mt-5 text-primary xl:text-[22px] text-[12px] font-medium xl:pr-10 pr-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="xl:flex xl:w-7/12 justify-end xl:space-x-[76px]">
            <div className="mb-5 xl:mb-0">
              <h4 className="xl:mb-6 mb-3 font-bold text-primary xl:text-[28px] text-[14px]">
                Company
              </h4>
              <ul>
                <li className="mb-1 xl:mb-5">
                  <Link
                    href="/"
                    className="hover:underline xl:text-[22px] text-[12px] font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-1 xl:mb-5">
                  <Link
                    href="#"
                    className="hover:underline xl:text-[22px] text-[12px] font-medium"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="mb-1 xl:mb-5">
                  <Link
                    href="#"
                    className="hover:underline xl:text-[22px] text-[12px] font-medium"
                  >
                    Careers
                  </Link>
                </li>
                <li className="mb-1 xl:mb-5">
                  <Link
                    href="#"
                    className="hover:underline xl:text-[22px] text-[12px] font-medium"
                  >
                    Portofolios
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5 xl:mb-0">
              <h4 className="xl:mb-6 mb-3 font-bold text-primary text-[14px] xl:text-[28px]">
                Links
              </h4>
              <ul>
                <li className="mb-1 xl:mb-5">
                  <Link
                    href="#hero"
                    className="hover:underline xl:text-[22px] text-[12px] font-medium"
                  >
                    Privacy & Policy
                  </Link>
                </li>
                <li className="mb-1 xl:mb-5">
                  <Link
                    href="#"
                    className="hover:underline xl:text-[22px] text-[12px] font-medium"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-1 xl:mb-5">
                  <Link
                    href="#"
                    className="hover:underline xl:text-[22px] text-[12px] font-medium"
                  >
                    Supports
                  </Link>
                </li>
                <li className="mb-1 xl:mb-5">
                  <Link
                    href="#"
                    className="hover:underline xl:text-[22px] text-[12px] font-medium"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="xl:mb-6 mb-3 font-bold text-primary xl:text-[28px] text-[14px] ">
                Contact
              </h4>
              <div className="flex items-center mb-3 xl:mb-5 xl:space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 30 30"
                  className="origin-left scale-75 xl:scale-100"
                >
                  <g clipPath="url(#clip0_109_695)">
                    <path
                      fill="#8C82FC"
                      fillRule="evenodd"
                      d="M4.25 1.838a3.068 3.068 0 014.59.285l3.152 4.053a3.06 3.06 0 01.555 2.625l-.961 3.85a1.191 1.191 0 00.313 1.132l4.32 4.318a1.193 1.193 0 001.132.313l3.848-.962a3.067 3.067 0 012.627.555l4.053 3.152a3.067 3.067 0 01.287 4.59l-1.819 1.82c-1.299 1.299-3.243 1.87-5.056 1.233a32.756 32.756 0 01-12.321-7.77 32.756 32.756 0 01-7.772-12.32c-.637-1.814-.065-3.758 1.234-5.06L4.25 1.837v.002z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_109_695">
                      <path fill="#fff" d="M0 0H30V30H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:text-[22px] text-[12px] font-medium text-purple">
                  (021) 31048184
                </p>
              </div>
              <div className="flex items-center mb-3 xl:mb-5 xl:space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 30 30"
                  className="origin-left scale-75 xl:scale-100"
                >
                  <path
                    fill="#8C82FC"
                    fillRule="evenodd"
                    d="M.094 6.666A3.75 3.75 0 013.75 3.75h22.5a3.75 3.75 0 013.656 2.916L15 15.776.094 6.666zM0 8.806v13.32l10.88-6.67L0 8.806zm12.677 7.75L.358 24.106A3.75 3.75 0 003.75 26.25h22.5a3.75 3.75 0 003.39-2.145l-12.319-7.55L15 17.973l-2.323-1.42v.002zm6.442-1.099L30 22.127V8.807l-10.88 6.649v.002z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="xl:text-[22px] text-[12px] font-medium text-purple">
                  irham@suxz.com
                </p>
              </div>
              <p className="xl:text-[22px] text-[12px] font-medium text-primary xl:w-[210px] w-[180px]">
                Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan.
                12240.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
