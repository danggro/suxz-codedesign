export default function SectionHeader({ section, main, subMain, sizeh3 }) {
  const addSizeh3 = sizeh3 ? `${sizeh3}` : "";

  return (
    <>
      <h4 className="xl:text-xl text-[10px] font-bold uppercase text-purple">
        {section}
      </h4>
      <h2 className="font-extrabold xl:text-[44px] text-[22px] text-primary mt-1">
        {main}
      </h2>
      <h3
        className={`font-medium xl:text-[22px] text-[11px] text-primary xl:mt-4 mt-2 ${addSizeh3}`}
      >
        {subMain}
      </h3>
    </>
  );
}
