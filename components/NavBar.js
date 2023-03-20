import { useState } from "react";
import Container from "./Container";
import NavItem from "./NavItem";
import NavLogin from "./NavLogin";
import NavLogo from "./NavLogo";

export default function () {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <Container>
        <div className="items-center hidden mt-20 xl:flex ">
          <div className="w-2/12">
            <NavLogo />
          </div>
          <div className="w-6/12">
            <NavItem />
          </div>
          <div className="w-4/12">
            <NavLogin />
          </div>
        </div>

        <div className="flex items-center mt-[30px] xl:hidden justify-between">
          <NavLogo />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
            onClick={() => setOffcanvas(true)}
          >
            <path
              fill="#8C82FC"
              fillRule="evenodd"
              d="M35 26.714c0-.34-.132-.668-.366-.909a1.233 1.233 0 00-.884-.376h-7.5c-.331 0-.65.135-.884.376a1.305 1.305 0 00-.366.91c0 .34.132.667.366.908.235.241.553.377.884.377h7.5c.331 0 .65-.136.884-.377.234-.24.366-.568.366-.909zM35 19c0-.341-.132-.668-.366-.91a1.232 1.232 0 00-.884-.376h-17.5c-.332 0-.65.136-.884.377A1.305 1.305 0 0015 19c0 .341.132.668.366.91.235.24.553.376.884.376h17.5c.331 0 .65-.136.884-.377.234-.241.366-.568.366-.909zm0-7.714c0-.341-.132-.668-.366-.91A1.233 1.233 0 0033.75 10H6.25c-.332 0-.65.136-.884.377a1.304 1.304 0 00-.366.909c0 .34.132.668.366.909.235.241.552.376.884.376h27.5c.331 0 .65-.135.884-.376.234-.241.366-.568.366-.91z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </Container>
      <div
        className={`xl:hidden fixed top-0 z-50 transition-all  w-full min-h-screen bg-purple ${
          offcanvas ? "right-0" : "-right-full"
        }`}
      >
        <NavItem />
        <div className="absolute top-9 right-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-x"
            viewBox="0 0 24 24"
            onClick={() => setOffcanvas(false)}
          >
            <path d="M18 6L6 18"></path>
            <path d="M6 6L18 18"></path>
          </svg>
        </div>
      </div>
    </>
  );
}
