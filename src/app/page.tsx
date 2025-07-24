
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import TechStack from "../components/techStack";
import Projects from "../components/projects";
import Quotes from "../components/quotes";
// import Menu from "../components/ui/cardMenu"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-12" >
        <Hero />
        {/* <Menu/> */}
        <TechStack />
        <Projects />
        <Quotes/>
        <Footer />
      </div>
    </div>
  );
}
