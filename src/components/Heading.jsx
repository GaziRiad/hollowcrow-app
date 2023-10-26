function Heading({ type = "h1", color = "primary", children }) {
  if (type === "h1")
    return (
      <h1
        className={`text-6xl text-center font-bold ${
          color ? "text-primary" : ""
        } mb-24`}
      >
        {children}
      </h1>
    );

  if (type === "tag")
    return (
      <h1 className={`text-6xl text-center font-bold text-primary/25 mb-16`}>
        {children}
      </h1>
    );
}

export default Heading;
