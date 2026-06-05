import { useEffect, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { getPageFromHash, navItems, type PageSlug } from "./data/navigation";
import { services } from "./data/services";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { GraphicDesigningPage } from "./pages/GraphicDesigningPage";
import { HomePage } from "./pages/HomePage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ServicesPage } from "./pages/ServicesPage";

function App() {
  const [currentPage, setCurrentPage] = useState<PageSlug>(getPageFromHash);

  useEffect(() => {
    const syncPage = () => setCurrentPage(getPageFromHash());

    window.addEventListener("hashchange", syncPage);
    syncPage();

    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, [currentPage]);

  const activeItem = navItems.find((item) => item.slug === currentPage) ?? navItems[0];
  const activeService = services.find((service) => service.slug === currentPage);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f8f4] text-studio-ink">
      <Navbar currentPage={currentPage} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "services/graphic-designing" && <GraphicDesigningPage />}
      {currentPage.startsWith("services/") &&
        currentPage !== "services/graphic-designing" &&
        activeService && <ServiceDetailPage service={activeService} />}
      {currentPage !== "home" && currentPage !== "services" && !currentPage.startsWith("services/") && (
        <ComingSoonPage title={activeItem.label} />
      )}
    </main>
  );
}

export default App;
