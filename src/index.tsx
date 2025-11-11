import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeV } from "./screens/HomeV";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeV />
  </StrictMode>,
);
