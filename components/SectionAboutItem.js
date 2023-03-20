export default function SectionAboutItem({ children, padr }) {
  const addPadr = padr ? `${padr}` : "";
  return (
    <div className="flex xl:space-x-6 items-center xl:mb-[30px] mb-[15px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 50 50"
        className="flex-shrink-0 hidden xl:block"
      >
        <circle cx="25" cy="25" r="25" fill="#DDFFF9"></circle>
        <path
          fill="#00ADB5"
          fillRule="evenodd"
          d="M33.399 16.602c.394-.384.927-.6 1.482-.602a2.132 2.132 0 011.485.594c.397.382.624.903.634 1.448.01.546-.2 1.074-.583 1.47L25.169 33.335a2.114 2.114 0 01-1.51.664 2.145 2.145 0 01-1.534-.609l-7.452-7.33a2.048 2.048 0 01-.054-2.99 2.146 2.146 0 013.04.053l5.9 5.798 9.787-12.259a.648.648 0 01.056-.06h-.003z"
          clipRule="evenodd"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
        viewBox="0 0 50 50"
        className="flex-shrink-0 xl:hidden"
      >
        <circle cx="25" cy="25" r="25" fill="#DDFFF9"></circle>
        <path
          fill="#00ADB5"
          fillRule="evenodd"
          d="M33.399 16.602c.394-.384.927-.6 1.482-.602a2.132 2.132 0 011.485.594c.397.382.624.903.634 1.448.01.546-.2 1.074-.583 1.47L25.169 33.335a2.114 2.114 0 01-1.51.664 2.145 2.145 0 01-1.534-.609l-7.452-7.33a2.048 2.048 0 01-.054-2.99 2.146 2.146 0 013.04.053l5.9 5.798 9.787-12.259a.648.648 0 01.056-.06h-.003z"
          clipRule="evenodd"
        ></path>
      </svg>

      <h3
        className={`xl:text-xl ml-3 xl:m-0 text-[10px] font-semibold text-primary ${addPadr}`}
      >
        {children}
      </h3>
    </div>
  );
}
