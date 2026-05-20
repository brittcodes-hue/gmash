import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ROUTE_PATHS } from "@/lib/index";
import Home from "@/pages/Home";
import RenovationServices from "@/pages/RenovationServices";
import ForeclosureHelp from "@/pages/ForeclosureHelp";
import Reviews from "@/pages/Reviews";
import Blog from "@/pages/Blog";
import RealEstate from "@/pages/RealEstate";
import BlogDetail from "@/pages/BlogDetail";
import { ScrollToTop } from "@/components/ScrollToTop";
import AboutUs from "@/pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              <Route
                path={ROUTE_PATHS.RENOVATION_SERVICES}
                element={<RenovationServices />}
              />
              <Route
                path={ROUTE_PATHS.FORECLOSURE_HELP}
                element={<ForeclosureHelp />}
              />
              <Route path={ROUTE_PATHS.REVIEWS} element={<Reviews />} />
              <Route path={ROUTE_PATHS.BLOG} element={<Blog />} />
              <Route path={ROUTE_PATHS.BLOG_DETAIL} element={<BlogDetail />} />
              <Route path={ROUTE_PATHS.REAL_ESTATE} element={<RealEstate />} />
              <Route path={ROUTE_PATHS.ABOUT_US} element={<AboutUs />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;