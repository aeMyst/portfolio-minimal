import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from "./App";
import "./styles/Globals.css";

gsap.registerPlugin(ScrollTrigger);

// StrictMode is intentionally omitted — it double-invokes effects in dev
// which causes GSAP ScrollTrigger to register, revert, then re-register
// with a broken DOM state, making all scroll animations fail silently.
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
