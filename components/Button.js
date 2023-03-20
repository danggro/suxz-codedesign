export default function ({ variant, children }) {
  const variants = {
    primary:
      "text-white bg-purple border border-purple hover:bg-white hover:text-purple ",
    secondary:
      "text-secondary bg-secondary/10 border border-transparent hover:border-secondary",
  };

  const addVariant = variants[variant];
  return (
    <button
      className={`xl:w-[240px] w-[120px] xl:h-[70px] h-[35px] xl:rounded-[10px] rounded-[5px] xl:text-[23px] text-[12px] font-bold ${addVariant}`}
    >
      {children}
    </button>
  );
}
