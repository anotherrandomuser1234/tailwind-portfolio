import Header from "../components/Header";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import "../styles/globals.css";

// application main entry point
function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Header />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
