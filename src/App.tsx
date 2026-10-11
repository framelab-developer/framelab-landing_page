import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Products } from "./components/sections/Products";
import { Services } from "./components/sections/Services";
import { FrameLabAI } from "./components/sections/FrameLabAI";
import { Contact } from "./components/sections/Contact";
export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Products />
        <Services />
        <FrameLabAI />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
