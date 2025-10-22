import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import UserBar from "./components/UserBar.tsx";
import Router from "./Router.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <>
      <header>
        <UserBar authenticated={authenticated} />
        <NavBar />
      </header>

      <main className="min-h-screen bg-gray-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Router authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </div>
      </main>

      <footer id="site-footer">
          <Footer />
      </footer>
    </>
  );
}
