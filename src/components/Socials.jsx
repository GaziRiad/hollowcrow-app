import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Socials() {
  return (
    <div className="text-white gap-8 flex items-center relative font-secondary font-semibold sm:gap-24">
      <p className="after:h-0.5 after:w-6  after:bg-white after:absolute after:top-3 after:left-36 sm:after:w-12">
        Follow Holocrow
      </p>
      <ul className="flex gap-4 items-center">
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
