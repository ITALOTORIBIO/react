import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogLayout, HomeLayout, PokemonDetailLayout, PokemonLayout } from "../layouts";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />} />
                <Route path="/pokemon" element={<PokemonLayout />} />
                <Route path="/pokemon/:id" element={<PokemonDetailLayout />} />
                <Route path="/blog" element={<BlogLayout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter