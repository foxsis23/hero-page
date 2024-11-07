import {Navigation} from "./components/Navigation";
import {HeroSection} from "./components/HeroSection";
import {ExpertiseSection} from "./components/ExpertiseSection";
import {DetailsSection} from "./components/DetailsSection";
import {Footer} from "./components/Footer";
import {MobileNavigation} from "./components/MobileNavigation";


function App() {
  return (
      <>
          <MobileNavigation />
          <Navigation />
          <main>
            <HeroSection />
            <ExpertiseSection />
            <DetailsSection/>
          </main>
          <Footer />
      </>

  );
}

export default App;
