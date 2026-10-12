import { createRoot } from "react-dom/client";
// Self-hosted variable fonts (no Google Fonts request): display serif, sans, mono.
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource-variable/jost";
import "@fontsource-variable/jetbrains-mono";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
