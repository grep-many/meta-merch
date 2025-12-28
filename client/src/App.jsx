import Home from "@/pages/Home.page";
import Customizer from "./pages/Customizer.page";
import Canvas3D from "./canvas";

const App = () => (
  <main className="min-h-screen overflow-hidden">
    <Home />
    <Canvas3D />
    <Customizer />
  </main>
);

export default App;
