import { SectionCardCollection } from "../components/CardCollection/SectionCardCollection";
import { SectionCardJewell } from "../components/CardJewell/SectionCardJewell";
import { DivCarousel } from "../components/Carousel/DivCarousel";
import { Footer } from "../components/Footer/Footer";
import { JoinUs } from "../components/JoinUs/JoinUs";
import { Main } from "../components/Main/Main";
import { NavBar } from "../components/NavBar/NavBar";
import { OurBlogs } from "../components/OurBlogs/OurBlogs";
import { Partners } from "../components/Partners/Partners";

export const Home = () => {
  return (
    <>
      <div className="px-5 py-3">
        <NavBar />
        <Main />
        <SectionCardJewell />
        <SectionCardCollection />
        <Partners />
        <DivCarousel />
        <JoinUs />
        <OurBlogs />
      </div>
      <Footer />
    </>
  );
};
