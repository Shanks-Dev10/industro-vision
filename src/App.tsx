import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import Product from "./pages/Product";
import About from "./pages/About";
import Projects from "./pages/ourProjects";
import Contact from "./pages/Contact";
import AsymmetricLoadMeasuringSystem from "./pages/service/AsymmetricLoadMeasuringSystem";
import OverloadControlSystem from "./pages/service/OverloadControlSystem";
import AsymmetricLoadMeasuringSystem1 from "./pages/products/AdvancedLoadMonitoringSystem";
import OverloadControlSystemProduct from "./pages/products/OverloadControlSystemProduct";
import TruckOnboardScaleSystem from "./pages/products/TruckOnboardScaleSystem";
import K2TruckOnboardScaleSystem from "./pages/service/K2TruckOnboardScaleSystem";
import Clients from "./pages/Clients";
import PortableWeighingSystem from "./pages/products/PortableWeighingSystem";
import PortableWeighingSustemService from "./pages/service/PortableWeighingSystem";
import ScrollToTop from "./components/ScrollToTop";
import CornerForceMeasurementSystem from "./pages/products/CornerForceMeasurementSystem";
import Auxilium from "./pages/products/Auxilium";
import CornerForceMeasurementSystemService from "./pages/service/CornerForceMeasurementSystem";
import AuxiliumService from "./pages/service/Auxilium";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/service/asymmetric-load-measuring-system"
              element={<AsymmetricLoadMeasuringSystem />}
            />
            <Route
              path="/service/over-load-control-system"
              element={<OverloadControlSystem />}
            />
            <Route
              path="/service/k2-truck-onboard-scale-system"
              element={<K2TruckOnboardScaleSystem />}
            />
            <Route
              path="/service/portable-weighing-system-service"
              element={<PortableWeighingSustemService />}
            />
            <Route
              path="/product/overload-Control-System-product"
              element={<OverloadControlSystemProduct />}
            />

             <Route
              path="/service/corner-force-measurement-system"
              element={<CornerForceMeasurementSystemService />}
            />
            <Route
              path="/service/auxilium"
              element={<AuxiliumService />}
            />
            <Route
              path="/product/asymmetric-load-measuring-system"
              element={<AsymmetricLoadMeasuringSystem1/>}
            />
            <Route
              path="/product/truck-onboard-scale-system"
              element={<TruckOnboardScaleSystem />}
            />
            <Route
              path="/product/portable-weighing-system"
              element={<PortableWeighingSystem />}
            />
            <Route
              path="/product/corner-force-measurement-system"
              element={<CornerForceMeasurementSystem />}
            />
            <Route
              path="/product/auxilium"
              element={<Auxilium />}
            />
            <Route
              path="/clients"
              element={<Clients />}
            />
            <Route
              path="/our-project"
              element={<Projects />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
