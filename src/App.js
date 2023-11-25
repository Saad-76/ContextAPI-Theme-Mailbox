import Home from "./Home";
import ThemeProvider from "./Context/themeContext";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
