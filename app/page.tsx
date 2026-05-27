import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Maps from "./components/Maps";
import Assets from "./components/Assets";
import Portfolio from "./components/Portfolio";
import Custom from "./components/Custom";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Maps />
        <Assets />
        <Portfolio />
        <Custom />
      </main>
      <Footer />
    </>
  );
}
