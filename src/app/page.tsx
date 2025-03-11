import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import TechStack from "../components/techStack";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-12">
        <Hero />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
