import HeroSection from "./sections/01_heroSection";
import FeatureSection from "./sections/02_featureSection";
import AboutCompany from "./sections/03_sectionThree";
import Samples from "./sections/04_samples";
import HowNexaWorks from "./sections/05_howWorks";
import Services from "./sections/06_services";
import Testimonials from "./sections/07_testimonials";
import Processes from "./sections/08_processSection";
import Principles from "./sections/09_principlesSection";
import Portfolios from "./sections/10_portfolios";
import Partners from "./sections/11_partners";
import CallToAction from "./sections/12_callToAction";
import Footer from "./sections/13_footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <AboutCompany />
      <Samples />
      <HowNexaWorks />
      <Services />
      <Testimonials/>
      <Processes />
      <Principles />
      <Portfolios/>
      <Partners/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}
