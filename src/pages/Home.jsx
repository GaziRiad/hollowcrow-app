import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroMain from "../components/HeroMain";
import HowItWorks from "../components/HowItWorks";
import PlatformOverview from "../components/PlatformOverview";
import SlidersSection from "../components/SlidersSection";
import Statics from "../components/Statics";
import Testimonials from "../components/Testimonials";

import footerHomeIcon from "../assets/homeimgs/footerHomeIcon.png";
import useContent from "../hooks/useContent";

import PageTransition from "../components/PageTransition";
import Loader from "../ui/Loader";
import MainFooter from "../components/MainFooter";

function Landing() {
  const { content } = useContent();

  if (!content) return <Loader />;

  return (
    <PageTransition>
      <HeroMain />
      <Features content={content} />
      <Statics content={content} />
      <HowItWorks content={content} />
      <SlidersSection content={content} />
      <PlatformOverview content={content} />
      <Testimonials content={content} />

      <MainFooter />
    </PageTransition>
  );
}

export default Landing;
