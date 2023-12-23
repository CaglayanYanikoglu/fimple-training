
import AppContainer from "./components/AppContainer";
import { ThemeProvider } from "./context/ThemeContext";
import './App.css'


export default function App() {
  return (
    <ThemeProvider>
      <AppContainer name="Patika" />
    </ThemeProvider>
  );
}
