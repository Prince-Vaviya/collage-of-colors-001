import { useEffect, useState } from "react";
import { FloatingConnect } from "./components/layout/FloatingConnect";
import { Navbar } from "./components/layout/Navbar";
import { getPageFromHash, navItems, type PageSlug } from "./data/navigation";
import { services } from "./data/services";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { ContactPage } from "./pages/ContactPage";
import { GraphicDesigningPage } from "./pages/GraphicDesigningPage";
import { HomePage } from "./pages/HomePage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkGalleryPage } from "./pages/WorkGalleryPage";

function App() {
  const [currentPage, setCurrentPage] = useState<PageSlug>(getPageFromHash);
  const [routeHash, setRouteHash] = useState(window.location.hash);

  useEffect(() => {
    const syncPage = () => {
      setCurrentPage(getPageFromHash());
      setRouteHash(window.location.hash);
    };

    window.addEventListener("hashchange", syncPage);
    syncPage();

    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      const [, query = ""] = routeHash.split("?");
      const section = new URLSearchParams(query).get("section");
      const target = section ? document.getElementById(section) : null;

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      window.scrollTo(0, 0);
    });
  }, [currentPage, routeHash]);

  const activeItem = navItems.find((item) => item.slug === currentPage) ?? navItems[0];
  const activeService = services.find((service) => service.slug === currentPage);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f8f4] text-studio-ink">
      <Navbar currentPage={currentPage} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "industries" && <IndustriesPage />}
      {currentPage === "work-gallery" && <WorkGalleryPage />}
      {currentPage === "about-us" && <AboutPage />}
      {currentPage === "careers" && <CareersPage />}
      {currentPage === "contact-us" && <ContactPage />}
      {currentPage === "services/graphic-designing" && <GraphicDesigningPage />}
      {currentPage.startsWith("services/") &&
        currentPage !== "services/graphic-designing" &&
        activeService && <ServiceDetailPage service={activeService} />}
      {currentPage !== "home" &&
        currentPage !== "services" &&
        currentPage !== "industries" &&
        currentPage !== "work-gallery" &&
        currentPage !== "about-us" &&
        currentPage !== "careers" &&
        currentPage !== "contact-us" &&
        !currentPage.startsWith("services/") && (
        <ComingSoonPage title={activeItem.label} />
      )}
      <FloatingConnect />
    </main>
  );
}

export default App;
