import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import UserBar from "./components/UserBar.tsx";
import Router from "./Router.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToHash from "./components/ScrollOnRouteState.tsx";
import AccentLine from "./components/AccentLine.tsx";

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <>
      <header>
        <ScrollToHash />
        <UserBar authenticated={authenticated} />
        <NavBar />
      </header>
      {/* linha de destaque superior */}
      <AccentLine />
      <main id="site-main" className="min-h-screen bg-gray-900 text-white">
          <Router
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />

      </main>
      {/* linha de destaque inferior */}
      <AccentLine />
      <footer id="site-footer">
        <Footer />
      </footer>
    </>
  );
}
