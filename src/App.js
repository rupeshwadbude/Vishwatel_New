import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./route";

function RouteLayout({ path }) {
  const element = useRoutes(path);
  return element;
}

function App() {
  return (
    <>
      <HelmetProvider>
        <Suspense
          fallback={
            <div className="loaderBox">
              <div className="loader">
                <span />
              </div>
            </div>
          }
        >
          <RouteLayout path={routes()} />
        </Suspense>
      </HelmetProvider>
    </>
  );
}

export default App;
