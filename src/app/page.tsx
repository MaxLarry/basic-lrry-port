import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import TechStack from "../components/techStack";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <TechStack />
        <Footer/>
      </div>
    </div>
  );
}
