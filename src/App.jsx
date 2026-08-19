import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Stacks from "./pages/Stacks";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/stacks" element={<Stacks />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}