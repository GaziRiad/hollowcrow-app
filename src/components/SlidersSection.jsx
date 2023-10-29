import Heading from "./Heading";
import HeadingDescription from "./HeadingDescription";
import Slider from "./Slider";
import Link from "./Link";

import useContent from "../hooks/useContent";

function SlidersSection() {
  const content = useContent();

  return (
    <section className="mb-32 px-4 md:px-0">
      <Heading>Empower Your CCTV:</Heading>
      <HeadingDescription>
        No Installation - Just Click and Use
      </HeadingDescription>

      {content.sliders.map((slider) => (
        <Slider slider={slider} key={slider.heading} />
      ))}

      <Link>SOLUTIONS BY INDUSTRIES</Link>
    </section>
  );
}

export default SlidersSection;
