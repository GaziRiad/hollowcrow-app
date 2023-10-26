function Feature({ src, name }) {
  return (
    <div className="w-44 flex flex-col items-center justify-center gap-2">
      <img src={src} />
      <p className=" text-black-800 uppercase text-2xl font-semibold text-center">
        {name}
      </p>
    </div>
  );
}

export default Feature;
