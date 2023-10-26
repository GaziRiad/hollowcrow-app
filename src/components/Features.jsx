import Feature from "./Feature";
import Heading from "./Heading";

function Features() {
  return (
    <section className="container mx-auto mb-28">
      <Heading type="h1" color="primary">
        Get better
      </Heading>
      <div className="flex items-center justify-center gap-12 flex-wrap mb-10 xl:gap-32 ">
        <Feature name="security" src="/images/security.png" />
        <Feature name="safety" src="/images/safety.png" />
        <Feature name="quality control" src="/images/quality-control.png" />
        <Feature name="marketing" src="/images/marketing.png" />
      </div>

      <p className="text-black-800 text-center text-lg font-normal">
        by seamlessly integrating with existing cameras in facilities
      </p>
    </section>
  );
}

export default Features;
