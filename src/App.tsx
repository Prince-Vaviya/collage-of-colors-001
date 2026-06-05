import { useEffect, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { getPageFromHash, navItems, type PageSlug } from "./data/navigation";
import { ComingSoonPage } from "./pages/ComingSoonPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";

function App() {
  const [currentPage, setCurrentPage] = useState<PageSlug>(getPageFromHash);

  useEffect(() => {
    const syncPage = () => setCurrentPage(getPageFromHash());

    window.addEventListener("hashchange", syncPage);
    syncPage();

    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  const activeItem = navItems.find((item) => item.slug === currentPage) ?? navItems[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f8f4] text-studio-ink">
      <Navbar currentPage={currentPage} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage !== "home" && currentPage !== "services" && (
        <ComingSoonPage title={activeItem.label} />
      )}
    </main>
  );
}

export default App;
