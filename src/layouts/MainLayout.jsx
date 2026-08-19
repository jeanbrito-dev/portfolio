import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { DeveloperBadge } from "../components/DeveloperBadge";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    return (
        <div
            id="top"
            className="relative min-h-screen overflow-hidden selection:bg-emerald-400/20 selection:text-emerald-200"
        >
            <div
                className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/img_01.jpg')",
                }}
            />

            <div className="fixed inset-0 -z-10 bg-black/60" />

            <Header />

            <div className="relative z-10 min-h-screen w-full">
                <Outlet />
                <Footer />
            </div>

            <DeveloperBadge />
        </div>
    );
}