import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const links = [
        {
            label: "Stacks",
            href: "/stacks",
        },
        {
            label: "Education",
            href: "/education",
        },
    ];

    const handleHome = (event) => {
        if (pathname === "/") {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        setIsOpen(false);
    };

    const handleNavigation = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed left-1/2 top-0 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
            <nav className="relative overflow-hidden rounded-b-[1.75rem] border-x border-b border-white/10 bg-background/75 shadow-2xl shadow-black/20 backdrop-blur-2xl">
                <div className="pointer-events-none absolute -left-6 -top-6 h-12 w-12 rounded-full border-r border-b border-white/10 bg-transparent" />

                <div className="pointer-events-none absolute -right-6 -top-6 h-12 w-12 rounded-full border-l border-b border-white/10 bg-transparent" />

                <div className="relative flex h-16 items-center justify-between px-5 sm:px-7">
                    <Link
                        to="/"
                        onClick={handleHome}
                        className="flex items-center gap-3 text-ash-grey transition-colors duration-300 hover:text-muted-teal"
                    >
                        <span className="font-title text-sm sm:text-base">
                            Jean Brito
                        </span>

                        <span className="hidden h-3 w-px bg-ash-grey/20 sm:block" />

                        <span className="hidden font-content text-xs uppercase tracking-[0.18em] text-ash-grey/40 sm:block">
                            Web Developer
                        </span>
                    </Link>

                    <div className="hidden items-center gap-2 md:flex">
                        {links.map(({ label, href }) => (
                            <Link
                                key={label}
                                to={href}
                                onClick={handleNavigation}
                                className="rounded-lg px-4 py-2 font-content text-sm text-ash-grey/55 transition-all duration-300 hover:bg-white/[0.04] hover:text-ash-grey"
                            >
                                {label}
                            </Link>
                        ))}

                        <Link
                            to="/contact"
                            onClick={handleNavigation}
                            className="group ml-2 flex items-center gap-2 rounded-lg border border-muted-teal/30 bg-muted-teal/10 px-4 py-2 font-content text-sm text-muted-teal transition-all duration-300 hover:border-muted-teal/50 hover:bg-muted-teal/15"
                        >
                            Contact

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>

                    <button
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((value) => !value)}
                        className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-muted-teal/30 hover:bg-muted-teal/10 md:hidden"
                    >
                        <span className="relative block h-4 w-5">
                            <span
                                className={`absolute left-0 top-0 h-px w-5 bg-ash-grey transition-all duration-300 ${
                                    isOpen
                                        ? "translate-y-[7px] rotate-45"
                                        : ""
                                }`}
                            />

                            <span
                                className={`absolute left-0 top-[7px] h-px bg-muted-teal transition-all duration-300 ${
                                    isOpen
                                        ? "w-0 opacity-0"
                                        : "w-3"
                                }`}
                            />

                            <span
                                className={`absolute left-0 top-[14px] h-px w-5 bg-ash-grey transition-all duration-300 ${
                                    isOpen
                                        ? "-translate-y-[7px] -rotate-45"
                                        : ""
                                }`}
                            />
                        </span>
                    </button>
                </div>

                <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 md:hidden ${
                        isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="border-t border-white/[0.06] px-5 pb-5 pt-2">
                            {links.map(({ label, href }, index) => (
                                <Link
                                    key={label}
                                    to={href}
                                    onClick={handleNavigation}
                                    className="flex items-center justify-between border-b border-white/[0.06] py-4 font-content text-sm text-ash-grey/65 transition-colors hover:text-ash-grey"
                                >
                                    <span>{label}</span>

                                    <span className="font-mono text-[10px] tracking-wider text-ash-grey/25">
                                        0{index + 1}
                                    </span>
                                </Link>
                            ))}

                            <Link
                                to="/contact"
                                onClick={handleNavigation}
                                className="group mt-4 flex items-center justify-between rounded-xl border border-muted-teal/30 bg-muted-teal/10 px-4 py-3 font-content text-sm text-muted-teal transition-colors hover:bg-muted-teal/15"
                            >
                                <span>Contact</span>

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}