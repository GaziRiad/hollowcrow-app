import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Socials() {
  return (
    <div className="text-white flex items-center gap-20 relative">
      <p className="after:h-0.5 after:w-12  after:bg-white after:absolute after:top-2.5 after:left-36">
        Follow Holocrow
      </p>
      <ul className="flex gap-6 items-center">
        <li>{<FaFacebookF />}</li>
        <li>{<FaLinkedinIn />}</li>
        <li>{<FaXTwitter />}</li>
        <li>{<FaYoutube />}</li>
        <li>{<FaInstagram />}</li>
      </ul>
    </div>
  );
}

export default Socials;
