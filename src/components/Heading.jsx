function Heading({ type = "h1", color = "primary", children }) {
  if (type === "h1")
    return (
      <h1
        className={`text-4xl text-center font-bold ${
          color ? `text-${color}` : "text-primary"
        } mb-14 md:text-6xl md:mb-20`}
      >
        {children}
      </h1>
    );

  if (type === "h2")
    return (
      <h1
        className={`text-3xl text-center font-bold ${
          color ? `text-${color}` : "text-primary"
        } mb-10 md:text-5xl md:mb-16 lg:mb-20 xl:mb-24`}
      >
        {children}
      </h1>
    );

  if (type === "h4")
    return (
      <h3 className="text-xl mb-4 text-center lg:text-left lg:text-2xl text-white font-semibold">
        {children}
      </h3>
    );

  if (type === "h3")
    return (
      <h3 className="text-3xl mb-6 text-center text-primary font-semibold mb-12">
        {children}
      </h3>
    );

  if (type === "tag")
    return (
      <h1
        className={`text-3xl text-center font-bold text-primary/25 mb-32 sm:text-6xl`}
      >
        {children}
      </h1>
    );
}

export default Heading;
