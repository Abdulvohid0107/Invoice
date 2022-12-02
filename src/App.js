import { createContext } from "react";
import { Routes } from "./routes";

export const AuthContext = createContext();

function App() {
  return <Routes />;
}

export default App;
