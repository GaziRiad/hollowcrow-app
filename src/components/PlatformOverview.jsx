import { platformDetails } from "../constants";
import Heading from "./Heading";

import useContent from "../hooks/useContent";

function PlatformOverview() {
  const content = useContent();

  return (
    <section className="container mx-auto mb-44 px-8 lg:px-0">
      <Heading type="h2" style="lg:!text-left">
        New user-friendly platform
      </Heading>

      <div className="flex flex-col items-center justify-center gap-14 xl:flex-row xl:gap-24">
        <div>
          {content.platformDetails.textContent.map((content) => (
            <div key={content.title} className="text-center mb-8 lg:text-left">
              <Heading type="h4" style="!text-primary">
                {content.title}
              </Heading>
              <p>{content.text}</p>
            </div>
          ))}
        </div>
        <img
          src={platformDetails?.sectionImg}
          className=" rounded-3xl shadow-lg lg:aspect-auto lg:h-1/2 lg:w-1/2"
        />
      </div>
    </section>
  );
}

export default PlatformOverview;
