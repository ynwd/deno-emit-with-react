import React, { createElement as h } from "https://esm.sh/react@18.1.0";
import { createRoot } from "https://esm.sh/react-dom@18.1.0/client";
import App from "./App.tsx";
//@ts-ignore:
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
