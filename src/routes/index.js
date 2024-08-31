import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokeStart } from "../components/pokeStart";
import { Poke } from "../components/poke";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokeStart />}></Route>
        <Route exact path="/poke/:name" element={<Poke />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
