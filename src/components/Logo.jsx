function Logo({ src = "/images/holocrow-logo.png", styling = "" }) {
  return <img src={src} className={`w-36 xl:w-48 ${styling}`} />;
}

export default Logo;
