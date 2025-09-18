import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutRules from "./pages/AboutRules";
import Amenities from "./pages/Services";
import Accommodations from "./pages/Accommodations";
import Events from "./pages/Events";
import ResortMap from "./pages/ResortMap";
import Special from "./pages/Special";
import Gallery from "./pages/Gallery";
import GallerySites from "./pages/GallerySites";
import GalleryActivities from "./pages/GalleryActivities";
import GalleryAmenities from "./pages/GalleryAmenities";
import Reservations from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Rates from "./pages/Rates";
import CancellationPolicy from "./pages/CancellationPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="rates" element={<Rates />} />
            <Route path="cancellation" element={<CancellationPolicy />} />
            <Route path="rules" element={<AboutRules />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="accommodations" element={<Accommodations />} />
            <Route path="events" element={<Events />} />
            <Route path="resort-map" element={<ResortMap />} />
            <Route path="special" element={<Special />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="gallery/sites" element={<GallerySites />} />
            <Route path="gallery/activities" element={<GalleryActivities />} />
            <Route path="gallery/amenities" element={<GalleryAmenities />} />
            <Route path="reservations" element={<Reservations />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
