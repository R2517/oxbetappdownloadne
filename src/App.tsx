import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Download = lazy(() => import("./pages/Download"));
const Features = lazy(() => import("./pages/Features"));
const LoginGuide = lazy(() => import("./pages/LoginGuide"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Casino = lazy(() => import("./pages/Casino"));
const LiveCasino = lazy(() => import("./pages/LiveCasino"));
const SlotsGames = lazy(() => import("./pages/SlotsGames"));
const SportsBetting = lazy(() => import("./pages/SportsBetting"));
const Payments = lazy(() => import("./pages/Payments"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/download" element={<Download />} />
            <Route path="/features" element={<Features />} />
            <Route path="/sports-betting" element={<SportsBetting />} />
            <Route path="/casino" element={<Casino />} />
            <Route path="/live-casino" element={<LiveCasino />} />
            <Route path="/slots-games" element={<SlotsGames />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/login-guide" element={<LoginGuide />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
