import { Database, Globe, Server, Cloud, Braces } from "lucide-react";

const stackGroups = [
    {
        number: "01",
        title: "Frontend",
        description:
            "Building responsive and structured interfaces with a focus on usability, component organization and visual consistency.",
        icon: Globe,
        technologies: [
            {
                name: "React",
                description:
                    "Component-based interfaces, state management, routing and reusable UI structures.",
            },
            {
                name: "JavaScript",
                description:
                    "Application logic, DOM manipulation, asynchronous operations and API integration.",
            },
            {
                name: "Tailwind CSS",
                description:
                    "Responsive interfaces, design systems and utility-based styling.",
            },
            {
                name: "Vite",
                description:
                    "Fast development environments and optimized frontend builds.",
            },
        ],
    },
    {
        number: "02",
        title: "Backend",
        description:
            "Developing APIs and application logic with an emphasis on organization, maintainability and clear architecture.",
        icon: Server,
        technologies: [
            {
                name: "Node.js",
                description:
                    "My main backend environment for building web services and application logic.",
            },
            {
                name: "Express",
                description:
                    "REST APIs, middleware, routing, validation and server-side architecture.",
            },
            {
                name: "Prisma",
                description:
                    "Database access, schema modeling, migrations and type-safe data operations.",
            },
        ],
    },
    {
        number: "03",
        title: "Databases",
        description:
            "Working with relational databases and the structures behind full stack applications.",
        icon: Database,
        technologies: [
            {
                name: "MySQL",
                description:
                    "Relational database design, queries, relationships and application persistence.",
            },
            {
                name: "PostgreSQL",
                description:
                    "Relational data modeling and backend applications using PostgreSQL.",
            },
            {
                name: "Supabase",
                description:
                    "Database infrastructure and backend services for modern web applications.",
            },
        ],
    },
    {
        number: "04",
        title: "Tools & Infrastructure",
        description:
            "Tools I use to develop, version, deploy and maintain web applications.",
        icon: Cloud,
        technologies: [
            {
                name: "Git",
                description:
                    "Version control, branching and maintaining a structured development history.",
            },
            {
                name: "GitHub",
                description:
                    "Repository management, collaboration and project versioning.",
            },
            {
                name: "Vercel",
                description:
                    "Deployment and hosting for frontend and full stack web applications.",
            },
            {
                name: "Figma",
                description:
                    "Interface design, visual prototyping and planning digital experiences before development.",
            },
        ],
    },
];

const allTechnologies = stackGroups.flatMap((group) =>
    group.technologies.map((technology) => technology.name),
);

const marqueeTechnologies = [...allTechnologies, ...allTechnologies];

export default function Stacks() {
    return (
        <main className="min-h-screen text-ash-grey">
            <section className="px-6 pb-20 pt-40 sm:pt-44">
                <div className="mx-auto max-w-5xl">
                    <div className="max-w-4xl">
                        <span className="font-content text-xs uppercase tracking-[0.3em] text-muted-teal sm:text-sm">
                            Technical stack
                        </span>

                        <h1 className="mt-5 font-title text-5xl font-bold leading-[1.05] sm:text-6xl md:text-8xl">
                            Tools I use to build
                            <span className="text-muted-teal">
                                {" "}
                                digital products.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl font-content text-lg leading-relaxed text-ash-grey/65 sm:text-xl">
                            My main focus is full stack web development,
                            combining modern frontend technologies with
                            structured backend systems, APIs and relational
                            databases.
                        </p>
                    </div>

                    <div className="mt-20 flex items-center gap-4">
                        <div className="h-px flex-1 bg-deep-teal/40" />
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden px-6 pb-24">
                <div className="mx-auto max-w-5xl">
                    <div className="relative overflow-hidden border-y border-white/10 py-5">
                        <div className="flex w-max animate-[scroll_35s_linear_infinite] items-center gap-3">
                            {marqueeTechnologies.map((technology, index) => (
                                <span
                                    key={`${technology}-${index}`}
                                    className="whitespace-nowrap px-4 font-content text-sm text-ash-grey/45 transition-colors duration-300 hover:text-muted-teal"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 pb-32">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <span className="font-content text-xs uppercase tracking-[0.3em] text-muted-teal">
                                Technologies
                            </span>

                            <h2 className="mt-4 font-title text-3xl font-bold sm:text-4xl">
                                My everyday toolkit.
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:items-start">
                        {stackGroups.map((group, groupIndex) => {
                            const colors = {
                                Frontend: {
                                    border: "border-muted-teal/60",
                                    background: "bg-muted-teal/15",
                                    hover: "hover:bg-muted-teal/25",
                                    accent: "bg-muted-teal",
                                    text: "text-muted-teal",
                                    glow: "bg-muted-teal/20",
                                },
                                Backend: {
                                    border: "border-deep-teal/80",
                                    background: "bg-deep-teal/30",
                                    hover: "hover:bg-deep-teal/45",
                                    accent: "bg-deep-teal",
                                    text: "text-muted-teal",
                                    glow: "bg-deep-teal/30",
                                },
                                Databases: {
                                    border: "border-dark-slate-grey",
                                    background: "bg-dark-slate-grey/80",
                                    hover: "hover:bg-dark-slate-grey",
                                    accent: "bg-dark-slate-grey",
                                    text: "text-ash-grey",
                                    glow: "bg-dark-slate-grey",
                                },
                                "Tools & Infrastructure": {
                                    border: "border-ash-grey/30",
                                    background: "bg-ash-grey/10",
                                    hover: "hover:bg-ash-grey/20",
                                    accent: "bg-ash-grey",
                                    text: "text-ash-grey",
                                    glow: "bg-ash-grey/15",
                                },
                            };

                            const color = colors[group.title];

                            return (
                                <div
                                    key={group.title}
                                    className={`flex flex-col gap-2 sm:gap-3 ${
                                        groupIndex % 2 === 1
                                            ? "mt-8 sm:mt-16 lg:mt-16"
                                            : "mt-0"
                                    }`}
                                >
                                    <div
                                        className={`flex items-center gap-2 border-b ${color.border} pb-3 sm:gap-3 sm:pb-4`}
                                    >
                                        <span
                                            className={`font-content text-[9px] uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.2em] ${color.text}`}
                                        >
                                            {group.title}
                                        </span>
                                    </div>

                                    {group.technologies.map(
                                        ({ name, description }) => (
                                            <article
                                                key={name}
                                                className={`group relative aspect-square overflow-hidden rounded-none border ${color.border} ${color.background} p-4 backdrop-blur-xl transition-all duration-300 sm:p-6 ${color.hover}`}
                                            >
                                                <div
                                                    className={`absolute -right-8 -top-8 h-20 w-20 rounded-full ${color.glow} blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-100 sm:-right-12 sm:-top-12 sm:h-32 sm:w-32 sm:blur-3xl`}
                                                />

                                                <div className="relative flex h-full flex-col justify-between">
                                                    <span
                                                        className={`font-mono text-[8px] ${color.text} opacity-70 sm:text-[10px]`}
                                                    >
                                                        {group.number}
                                                    </span>

                                                    <div>
                                                        <h3 className="font-title text-base font-bold sm:text-2xl">
                                                            {name}
                                                        </h3>

                                                        <p className="mt-2 font-content text-[10px] leading-relaxed text-ash-grey/55 sm:mt-3 sm:text-sm sm:text-ash-grey/60">
                                                            {description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        ),
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 pb-32">
                <div className="mx-auto max-w-5xl">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ash-grey/[0.05] p-8 shadow-2xl backdrop-blur-xl sm:p-12 md:p-16">
                        <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-deep-teal/25 blur-3xl" />

                        <div className="relative max-w-3xl">
                            <div className="flex items-center gap-3 text-muted-teal">
                                <Braces size={20} strokeWidth={1.5} />

                                <span className="font-content text-xs uppercase tracking-[0.3em]">
                                    How I work
                                </span>
                            </div>

                            <h2 className="mt-8 font-title text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                                Technology is a tool.
                                <br />
                                Understanding is the advantage.
                            </h2>

                            <p className="mt-6 font-content text-lg leading-relaxed text-ash-grey/60">
                                I prefer understanding the role of each
                                technology instead of simply collecting
                                frameworks. My goal is to choose the right tools
                                for the problem and build solutions that remain
                                understandable as they grow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
