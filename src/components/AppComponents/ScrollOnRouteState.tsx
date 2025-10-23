// ScrollOnRouteState.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollOnRouteState() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = (location.state as any)?.scrollToId as string | undefined;
    if (!id) return;

    let tries = 0;
    const maxTries = 12;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // limpa o state para não repetir no próximo render
        navigate(location.pathname + location.search, { replace: true });
      } else if (tries++ < maxTries) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }, [location, navigate]);

  return null;
}
