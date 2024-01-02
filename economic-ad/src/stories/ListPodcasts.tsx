interface ListPodcastsProps {
    onClick?: () => void;
}

const ListPodcasts = ({ ...props }: ListPodcastsProps) => {

    return (
        <div
            aria-labelledby=":S1:"
            className="py-2 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
        >
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                <h2
                    id=":S1:"
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                >
                    Conferences
                </h2>
                <div className="md:col-span-3">
                    <div className="space-y-16">
                        <article className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                                <a href="#">
                                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                    <span className="relative z-10">
                                        In space, no one can watch you stream — until now
                                    </span>
                                </a>
                            </h3>
                            <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                <span
                                    className="absolute inset-y-0 left-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                                </span>
                                SysConf 2021
                            </p>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                A technical deep-dive into HelioStream, the real-time streaming
                                library I wrote for transmitting live video back to Earth.
                            </p>
                            <div
                                aria-hidden="true"
                                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                            >
                                Watch video
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                    className="ml-1 h-4 w-4 stroke-current"
                                >
                                    <path
                                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </article>
                        <article className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                                <a href="#">
                                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                    <span className="relative z-10">
                                        Lessons learned from our first product recall
                                    </span>
                                </a>
                            </h3>
                            <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                <span
                                    className="absolute inset-y-0 left-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                                </span>
                                Business of Startups 2020
                            </p>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                They say that if you’re not embarassed by your first version, you’re
                                doing it wrong. Well when you’re selling DIY space shuttle kits it
                                turns out it’s a bit more complicated.
                            </p>
                            <div
                                aria-hidden="true"
                                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                            >
                                Watch video
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                    className="ml-1 h-4 w-4 stroke-current"
                                >
                                    <path
                                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export type {
    ListPodcastsProps
}

export {
    ListPodcasts
}