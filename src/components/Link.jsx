import { FaChevronRight } from "react-icons/fa6";

function Link({ children, color = "black" }) {
  return (
    <a
      href=""
      className="flex items-center justify-center gap-1 uppercase font-bold tracking-[0.4rem] text-sm hover:underline hover:underline-offset-4 transition-all md:text-xl"
    >
      <span>{children}</span>
      <span>
        <FaChevronRight color={color} />
      </span>
    </a>
  );
}

export default Link;
