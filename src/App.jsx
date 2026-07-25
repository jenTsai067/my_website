import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      {/* Banner */}
      <section className="w-full">
        <picture>
          <source media="(min-width: 768px)" srcSet="./images/Banner-lg.png" />
          <img src="./images/Banner-sm.png" alt="Banner background image" />
        </picture>
      </section>
    </div>
  );
}

export default App;
