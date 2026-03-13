import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FloatingDownloadButton } from "./components/FloatingDownloadButton";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import SkillDetailPage from "./pages/SkillDetailPage";
import AllSkillsPage from "./pages/AllSkillsPage";
import AboutPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import QuickDownloadPage from "./pages/QuickDownloadPage";

function AppRouter() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/category/:id"} component={CategoryPage} />
      <Route path={"/skill/:id"} component={SkillDetailPage} />
      <Route path={"/skills"} component={AllSkillsPage} />
      <Route path={"/resources"} component={ResourcesPage} />
      <Route path={"/download"} component={QuickDownloadPage} />
      <Route path={"/about"} component={AboutPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  // GitHub Pages 子目录路径
  const basePath = import.meta.env.MODE === 'production' 
    ? '/awesome-openclaw-skills' 
    : '';
  
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Router base={basePath}>
            <Toaster />
            <AppRouter />
            <FloatingDownloadButton />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
