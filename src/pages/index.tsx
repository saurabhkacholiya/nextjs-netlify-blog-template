import Footer from "../components/Footer/index";
import HeroHeader from "../components/HomePageHeader/index";
import CultureAndVision from "../components/CultureAndVision/CultureAndVision";
import Jobs from "../components/Jobs/Jobs";
import OpenSourceSection from "../components/OpenSourceSection/OpenSourceSection";
import BlogCard from "../components/BlogCard/index";

export default function Index() {
  return (
    <div>
      <HeroHeader />
      <CultureAndVision />
      <OpenSourceSection />
      <BlogCard />
      <Jobs />
      <Footer />
    </div>
  );
}
