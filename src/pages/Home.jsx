import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    Code2,
    Database,
    Lightbulb,
    Terminal,
} from "lucide-react";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scale = 1 + Math.min(scrollY * 0.00035, 0.2);

    return (
        <main className="text-ash-grey">
            <section className="relative flex min-h-screen w-full items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                        style={{
                            backgroundImage: "url('/img_02.jpg')",
                            transform: `scale(${scale})`,
                        }}
                    />
                </div>

                <div className="absolute inset-0 bg-black/65" />

                <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-6">
                    <div className="text-center">
                        <h1 className="font-title text-5xl font-bold sm:text-8xl md:text-9xl">
                            Jean Brito
                        </h1>

                        <p className="mx-auto mt-3 max-w-xs font-content text-sm text-ash-grey/80 sm:max-w-none sm:text-xl">
                            Web Developer focused on modern full stack
                            solutions
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-content text-[10px] uppercase tracking-[0.25em] text-ash-grey/50 sm:text-xs sm:tracking-[0.3em]">
                    Scroll to explore
                </div>
            </section>

            <section className="px-5 py-20 sm:px-6 sm:py-32">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-ash-grey/10 bg-ash-grey/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-10 md:p-20">
                            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-deep-teal/20 blur-3xl" />

                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <span className="font-content text-xs uppercase tracking-[0.2em] text-muted-teal sm:text-sm sm:tracking-[0.3em]">
                                        01 / About
                                    </span>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-muted-teal sm:h-[22px] sm:w-[22px]"
                                    />
                                </div>

                                <h2 className="mt-10 max-w-3xl font-title text-3xl leading-tight font-bold sm:mt-16 sm:text-4xl md:text-6xl">
                                    I turn ideas into well-structured digital
                                    solutions.
                                </h2>

                                <p className="mt-6 max-w-2xl font-content text-base leading-relaxed text-ash-grey/70 sm:mt-8 sm:text-lg">
                                    I'm Jean Brito, a Web Developer focused on
                                    full stack development. I enjoy transforming
                                    ideas and requirements into functional,
                                    maintainable applications while paying
                                    attention to the systems, architecture and
                                    experience behind them.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between rounded-[1.5rem] border border-deep-teal/40 bg-background/80 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
                            <div>
                                <Terminal
                                    size={30}
                                    strokeWidth={1.5}
                                    className="text-muted-teal"
                                />

                                <span className="mt-6 block font-content text-xs uppercase tracking-[0.2em] text-muted-teal sm:mt-8 sm:text-sm sm:tracking-[0.25em]">
                                    Professional mindset
                                </span>

                                <p className="mt-4 font-title text-xl leading-relaxed sm:text-2xl">
                                    Understand the problem. Design the solution.
                                    Build it well.
                                </p>
                            </div>

                            <div className="mt-10 flex items-center gap-3 font-content text-xs text-ash-grey/50 sm:mt-12 sm:text-sm">
                                <span className="font-mono">01</span>
                                <span className="h-px flex-1 bg-deep-teal/50" />
                                <span>BUILD</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-5 md:mt-6 md:grid-cols-3 md:gap-6">
                        <div className="group rounded-[1.5rem] border border-ash-grey/10 bg-ash-grey/[0.30] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-ash-grey/[0.35] sm:rounded-[2rem] sm:p-8">
                            <Code2
                                size={28}
                                strokeWidth={1.5}
                                className="text-muted-teal"
                            />

                            <span className="mt-8 block font-content text-xs uppercase tracking-[0.15em] text-ash-grey/50 sm:mt-10 sm:text-sm sm:tracking-[0.2em]">
                                Development
                            </span>

                            <h3 className="mt-3 font-title text-xl font-bold sm:text-2xl">
                                Full Stack
                            </h3>

                            <p className="mt-4 font-content text-sm leading-relaxed text-ash-grey/60 sm:text-base">
                                Developing complete web applications with
                                attention to both the interface and the systems
                                that support it.
                            </p>
                        </div>

                        <div className="group rounded-[1.5rem] bg-deep-teal/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-deep-teal/40 sm:rounded-[2rem] sm:p-8">
                            <Database
                                size={28}
                                strokeWidth={1.5}
                                className="text-ash-grey"
                            />

                            <span className="mt-8 block font-content text-xs uppercase tracking-[0.15em] text-ash-grey/60 sm:mt-10 sm:text-sm sm:tracking-[0.2em]">
                                Architecture
                            </span>

                            <h3 className="mt-3 font-title text-xl font-bold sm:text-2xl">
                                Backend & APIs
                            </h3>

                            <p className="mt-4 font-content text-sm leading-relaxed text-ash-grey/70 sm:text-base">
                                Designing APIs, business logic and data
                                structures with reliability, organization and
                                scalability in mind.
                            </p>
                        </div>

                        <div className="group rounded-[1.5rem] border border-ash-grey/10 bg-dark-slate-grey p-6 transition-all duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-8">
                            <Lightbulb
                                size={28}
                                strokeWidth={1.5}
                                className="text-muted-teal"
                            />

                            <span className="mt-8 block font-content text-xs uppercase tracking-[0.15em] text-ash-grey/50 sm:mt-10 sm:text-sm sm:tracking-[0.2em]">
                                Mindset
                            </span>

                            <h3 className="mt-3 font-title text-xl font-bold sm:text-2xl">
                                Problem Solving
                            </h3>

                            <p className="mt-4 font-content text-sm leading-relaxed text-ash-grey/60 sm:text-base">
                                Analyzing requirements, understanding
                                constraints and turning complex problems into
                                clear technical solutions.
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-20 overflow-hidden rounded-[1.5rem] border border-ash-grey/10 bg-ash-grey/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:mt-32 sm:rounded-[2rem] sm:p-10 md:p-20">
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-deep-teal/30 blur-3xl" />

                        <div className="relative z-10 max-w-4xl">
                            <span className="font-content text-xs uppercase tracking-[0.2em] text-muted-teal sm:text-sm sm:tracking-[0.3em]">
                                Philosophy
                            </span>

                            <p className="mt-6 font-title text-2xl leading-tight text-ash-grey sm:mt-8 sm:text-3xl md:text-5xl">
                                “The best way to predict the future is to
                                invent it.”
                            </p>

                            <div className="mt-6 flex items-center gap-4 sm:mt-8">
                                <span className="h-px w-8 bg-muted-teal sm:w-10" />

                                <span className="font-content text-xs uppercase tracking-[0.15em] text-muted-teal sm:text-sm sm:tracking-[0.2em]">
                                    Alan Kay
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}