import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { GeoProvider } from "@/contexts/GeoContext";
import { ThemeProvider } from "next-themes";
import CountryRoute from "@/components/CountryRoute";
import SeoHead from "@/components/SeoHead";
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

const pageRoutes = [
  { path: "", element: <Index /> },
  { path: "download", element: <Download /> },
  { path: "features", element: <Features /> },
  { path: "sports-betting", element: <SportsBetting /> },
  { path: "casino", element: <Casino /> },
  { path: "live-casino", element: <LiveCasino /> },
  { path: "slots-games", element: <SlotsGames /> },
  { path: "payments", element: <Payments /> },
  { path: "login-guide", element: <LoginGuide /> },
  { path: "faq", element: <FAQ /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
  { path: "privacy", element: <Privacy /> },
  { path: "terms", element: <Terms /> },
  { path: "disclaimer", element: <Disclaimer /> },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <GeoProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                {/* Base routes (IP-detected) */}
                {pageRoutes.map((r) => (
                  <Route
                    key={r.path || "/"}
                    path={r.path === "" ? "/" : `/${r.path}`}
                    element={<><SeoHead />{r.element}</>}
                  />
                ))}

                {/* Country-prefixed routes */}
                {pageRoutes.map((r) => (
                  <Route
                    key={`country-${r.path || "index"}`}
                    path={`/:countryCode${r.path ? `/${r.path}` : ""}`}
                    element={<CountryRoute>{r.element}</CountryRoute>}
                  />
                ))}

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </GeoProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
