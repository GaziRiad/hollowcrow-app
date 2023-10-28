import Heading from "./Heading";
import Static from "./Static";

function Statics() {
  return (
    <section className="container mx-auto mb-44 px-4 md:px-0">
      <Heading type="tag">#EmpoweredbyAI</Heading>
      <div className="flex flex-col items-center justify-center gap-28 lg:flex-row lg:flex-wrap lg:gap-40">
        <Static number="1K+" name="active users" />
        <Static number="10" name="years of experience" />
        <Static number={`2B Per min`} name="images generated" />
      </div>
    </section>
  );
}

export default Statics;
