import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedSeries from "@/components/FeaturedSeries";
import YouTube from "@/components/YouTube";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Replace with your Formspree form ID once you have it
const FORMSPREE_ID = "xwvwwzpg";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FeaturedSeries />
        <YouTube />
        <Articles />
        <Newsletter />
        <Contact formId={FORMSPREE_ID} />
      </main>
      <Footer />
    </>
  );
}
