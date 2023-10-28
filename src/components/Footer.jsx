import Button from "./Button";

function Footer({ children, icon, btn = "get started", btnPath }) {
  return (
    <section className="bg-primary px-6 py-20">
      <footer className="flex flex-col items-center justify-center relative ">
        {children}
        <div className="relative mb-4 lg:mb-10 z-20">
          {/* <img src={icon} className=" scale-75 lg:scale-95 " /> */}
          <p className="absolute top-[40%] left-1/2 translate-x-[-50%] z-10 lg:text-2xl font-bold">
            #BeyondWatching
          </p>
        </div>
        <p className="text-white font-bold text-5xl tracking-wider absolute top-[64%] lg:top-[60%] xl:tracking-[1.25rem] lg:text-8xl  ">
          Let’s Get Started
        </p>
        <Button>{btn}</Button>
      </footer>
    </section>
  );
}

export default Footer;
