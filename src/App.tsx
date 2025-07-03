
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import NotFound from "./pages/NotFound";
import PropertyDetail from "./pages/PropertyDetail";
import MortgageCalculator from "./pages/MortgageCalculator";
import Favorites from "./pages/Favorites";
import BookingVisit from "./pages/BookingVisit";
import SignIn from "./pages/SignIn";
import ListProperty from "./pages/ListProperty";
import Enquiry from "./pages/Enquiry";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Awards from "./pages/Awards";
import Press from "./pages/Press";
import Testimonials from "./pages/Testimonials";
import PropertyValuation from "./pages/PropertyValuation";
import MarketReports from "./pages/MarketReports";
import InvestmentAnalysis from "./pages/InvestmentAnalysis";
import PropertyManagement from "./pages/PropertyManagement";
import BuyersGuide from "./pages/BuyersGuide";
import SellersGuide from "./pages/SellersGuide";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/booking" element={<BookingVisit />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/press" element={<Press />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/valuation" element={<PropertyValuation />} />
          <Route path="/market-reports" element={<MarketReports />} />
          <Route path="/investment" element={<InvestmentAnalysis />} />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/buyers-guide" element={<BuyersGuide />} />
          <Route path="/sellers-guide" element={<SellersGuide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
