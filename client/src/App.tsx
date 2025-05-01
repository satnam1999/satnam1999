import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import useCustomCursor from "@/hooks/useCustomCursor";
import { ThemeProvider } from "@/hooks/useThemeSwitch";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function CursorProvider({ children }: { children: React.ReactNode }) {
  // Initialize custom cursor
  useCustomCursor();
  
  return <>{children}</>;
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CursorProvider>
            <Toaster />
            <Router />
          </CursorProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
