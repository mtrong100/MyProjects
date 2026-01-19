import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";
import "./i18n";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
