function Heading({ type = "h1", color = "primary", children }) {
  if (type === "h1")
    return (
      <h1
        className={`text-5xl text-center font-bold ${
          color ? "text-primary" : ""
        } mb-14 md:text-6xl md:mb-24`}
      >
        {children}
      </h1>
    );

  if (type === "tag")
    return (
      <h1
        className={`text-3xl text-center font-bold text-primary/25 mb-20 sm:text-6xl`}
      >
        {children}
      </h1>
    );
}

export default Heading;
