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
import Contact from "./pages/Contact";
import AsymmetricLoadMeasuringSystem from "./pages/service/AsymmetricLoadMeasuringSystem";
import OverloadControlSystem from "./pages/service/OverloadControlSystem";
import AdvancedLoadMonitoringSystem from "./pages/products/AdvancedLoadMonitoringSystem";
import OverloadControlSystemProduct from "./pages/products/OverloadControlSystemProduct";
import TruckOnboardScaleSystem from "./pages/products/TruckOnboardScaleSystem";
import K2TruckOnboardScaleSystem from "./pages/service/K2TruckOnboardScaleSystem";

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
              path="/product/overload-Control-System-product"
              element={<OverloadControlSystemProduct />}
            />
            <Route
              path="/product/advanced-load-monitoring-system"
              element={<AdvancedLoadMonitoringSystem />}
            />
            <Route
              path="/product/truck-onboard-scale-system"
              element={<TruckOnboardScaleSystem />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
