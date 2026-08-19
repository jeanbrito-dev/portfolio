import { Code2 } from "lucide-react";

export function DeveloperBadge() {
    return (
        <div className="fixed bottom-4 left-4 z-50 h-20 w-20 sm:bottom-6 sm:left-6 sm:h-28 sm:w-28">
            <div className="absolute inset-0 animate-[spin_14s_linear_infinite]">
                <svg viewBox="0 0 120 120" className="h-full w-full">
                    <defs>
                        <path
                            id="badge-circle"
                            d="M 60,60 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                        />
                    </defs>

                    <text className="fill-ash-grey font-content text-[9px] uppercase tracking-[1px] sm:text-[9px]">
                        <textPath href="#badge-circle">
                            Jean Brito · Web Fullstack Developer ·
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-teal backdrop-blur-xl sm:h-12 sm:w-12">
                <Code2
                    size={17}
                    strokeWidth={1.5}
                    className="sm:h-[21px] sm:w-[21px]"
                />
            </div>
        </div>
    );
}