import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { DotGroup } from "./modules/DotGroup";
import { Landing } from "./pages/Landing";
import { Navbar } from "./modules/Navbar";
import MySkills from "./pages/MySkills";
import { Projects } from "./pages/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  console.log(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {
          isAboveMediaScreens && (
            <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          )
        }
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Projects />
      </div>
    </div>
  );
}

export default App;
