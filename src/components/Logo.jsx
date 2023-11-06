import { Link } from "react-router-dom";

function Logo({ src = "/images/holocrow-logo.png", styling = "" }) {
  return (
    <Link to="/home">
      <img src={src} className={`w-36 xl:w-48 ${styling}`} />
    </Link>
  );
}

export default Logo;
