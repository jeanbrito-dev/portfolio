import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-background">
            <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 md:py-32">
                <div className="grid gap-16 md:grid-cols-[1.3fr_0.7fr] md:items-end">
                    <div>
                        <span className="font-content text-xs uppercase tracking-[0.3em] text-muted-teal">
                            Let's build something
                        </span>

                        <h2 className="mt-6 max-w-3xl font-title text-4xl leading-tight text-ash-grey sm:text-5xl md:text-6xl">
                            Turning ideas into meaningful digital experiences.
                        </h2>
                    </div>

                    <div className="flex flex-col gap-8 md:items-end">
                        <div className="flex gap-2">
                            <a
                                href="https://github.com/jeanbrito-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ash-grey/10 text-ash-grey/50 transition-all duration-300 hover:border-muted-teal/40 hover:bg-muted-teal/10 hover:text-muted-teal"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-[18px] w-[18px] fill-current"
                                    aria-hidden="true"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jean-brito-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ash-grey/10 text-ash-grey/50 transition-all duration-300 hover:border-muted-teal/40 hover:bg-muted-teal/10 hover:text-muted-teal"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-[18px] w-[18px] fill-current"
                                    aria-hidden="true"
                                >
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                                </svg>
                            </a>

                            <a
                                href="mailto:jean.gustavo078@gmail.com"
                                aria-label="Email"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ash-grey/10 text-ash-grey/50 transition-all duration-300 hover:border-muted-teal/40 hover:bg-muted-teal/10 hover:text-muted-teal"
                            >
                                <Mail size={18} strokeWidth={1.5} />
                            </a>
                        </div>

                        <div className="font-content text-xs text-ash-grey/40 md:text-right">
                            <p>© {new Date().getFullYear()} Jean Brito</p>
                            <p className="mt-1">
                                Web Fullstack Developer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col gap-2 border-t border-ash-grey/10 pt-5 font-content text-[10px] uppercase tracking-[0.2em] text-ash-grey/30 sm:flex-row sm:items-center sm:justify-between">
                    <span>Designed & developed by Jean Brito</span>
                    <span>Built with curiosity</span>
                </div>
            </div>
        </footer>
    );
}