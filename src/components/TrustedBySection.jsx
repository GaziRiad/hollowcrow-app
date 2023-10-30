import useContentHowItWorks from "../hooks/useContentHowItWorks";
import Heading from "./Heading";

function TrustedBySection() {
  const content = useContentHowItWorks();

  return (
    <section className="container mx-auto mb-44 px-4 pt-14 md:px-0">
      <Heading>{content.trustedBySection.heading}</Heading>
      <div className="flex flex-wrap justify-center items-center gap-16">
        {content.trustedBySection.companies.map((company) => (
          <img
            key={company}
            src={company}
            className=" w-20 h-20 lg:w-40 lg:h-40"
          />
        ))}
      </div>
    </section>
  );
}

export default TrustedBySection;
