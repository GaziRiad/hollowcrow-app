function Feature({ src, name }) {
  return (
    <div className="w-44 flex flex-col items-center justify-center gap-2 md:w-56">
      <img src={src} />
      <p className=" text-black-800 uppercase text-lg font-semibold text-center md:text-xl">
        {name}
      </p>
    </div>
  );
}

export default Feature;
