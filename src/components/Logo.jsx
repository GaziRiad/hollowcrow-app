function Logo({ src = "/images/holocrow-logo.png", styling = "" }) {
  return <img src={src} className={`w-36 lg:w-48 ${styling}`} />;
}

export default Logo;
