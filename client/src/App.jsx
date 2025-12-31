import React from "react";

const Home = React.lazy(() => import("@/pages/Home.page"));
const Customizer = React.lazy(() => import("@/pages/Customizer.page"));
const Canvas3D = React.lazy(()=>import("@/canvas"))

const App = () => (
  <main className="min-h-screen overflow-hidden">
    <Home />
    <Canvas3D />
    <Customizer />
  </main>
);

export default App;
