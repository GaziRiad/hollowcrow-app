function Button({ children, bgcolor = "white" }) {
  return (
    <button
      className={`rounded-full shadow-sm uppercase tracking-wider bg-${bgcolor} text-primary text-sm text-center font-secondary font-bold px-6 py-3.5 hover:translate-y-1.5 hover:shadow-lg transition-all duration-300 md:text-lg`}
    >
      {children}
    </button>
  );
}

export default Button;
