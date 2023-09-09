import LandingPage from "./pages/LandingPage";
import transition from "./utils/transition";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <main>
      <AnimatePresence mode="wait">
        <LandingPage />
      </AnimatePresence>
    </main>
  );
}

export default transition(App);
