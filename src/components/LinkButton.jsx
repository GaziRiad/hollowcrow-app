import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function LinkButton({ children, color = "black", to }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-center gap-1 uppercase font-bold tracking-[0.4rem] text-sm text-black-700 hover:underline hover:underline-offset-4 transition-all md:text-xl"
    >
      <span>{children}</span>
      <span>
        <FaChevronRight color={color} />
      </span>
    </Link>
  );
}

export default LinkButton;
