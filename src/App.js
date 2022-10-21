import { MantineProvider, createEmotionCache } from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={rtlCache}
      theme={{
        dir: "rtl",
        colors: {
          brand: [
            "#4caf50",
            "#4caf50",
            "#4caf50",
            "#4caf50",
            "#4caf50",
            "#4caf50",
            "#4caf50",
            "#4caf50",
            "#4caf50",
            "#4caf50",
          ],
        },
        primaryColor: "brand",
      }}
    >
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
