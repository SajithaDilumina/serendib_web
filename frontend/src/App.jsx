import { useEffect, useState } from "react";
import Home from "./pages/Home";
import OperationsFeatures from "./pages/OperationsFeatures";
import PayrollFeatures from "./pages/PayrollFeatures";
import PeopleFeatures from "./pages/PeopleFeatures";

function getCurrentRoute() {
  const hashRoute = window.location.hash.startsWith("#/")
    ? window.location.hash.slice(1)
    : "";
  if (hashRoute) return hashRoute;

  const basePath = import.meta.env.BASE_URL || "/";
  let pathname = window.location.pathname;

  if (basePath !== "/" && pathname.startsWith(basePath)) {
    pathname = `/${pathname.slice(basePath.length)}`;
  }

  return pathname;
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const syncRoute = () => setRoute(getCurrentRoute());
    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("popstate", syncRoute);
    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("popstate", syncRoute);
    };
  }, []);

  const page =
    route === "/features/people" ? (
      <PeopleFeatures />
    ) : route === "/features/operations" ? (
      <OperationsFeatures />
    ) : route === "/features/payroll" ? (
      <PayrollFeatures />
    ) : (
      <Home />
    );

  return (
    <div className="min-w-0 max-w-full overflow-x-hidden">{page}</div>
  );
}
