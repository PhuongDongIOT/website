import Image from "next/image";

import Share from "./assets/share.png";
import FigmaPlugin from "./assets/figma-plugin.png";
import Testing from "./assets/testing.png";
import Accessibility from "./assets/accessibility.png";
import Theming from "./assets/theming.png";
import AddonLibrary from "./assets/addon-library.png";

interface ListTransparentProps {
    onClick?: () => void;
}

const ListTransparent = ({ ...props }: ListTransparentProps) => {
    return (
        <div className="w-full flex justify-center">
            <ul>
                <li className="relative px-2 py-8 sm:px-10">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-500">Marketing</h3>
                        <a
                            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                            href="https://tailwindui.com/checkout/1ab56599-ff3e-4666-9686-edda6c81c82a"
                        >
                            <span>
                                Get package<span className="sr-only">, Marketing</span>
                            </span>
                        </a>
                    </div>
                    <p className="flex items-center">
                        <span className="text-2xl text-slate-900">
                            $<span className="font-bold">149</span>
                        </span>
                        <span className="ml-2 text-sm text-slate-500">plus local taxes</span>
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        Heroes, feature sections, newsletter sign up forms — all of the components
                        you need to build beautiful marketing websites.
                    </p>
                </li>
                <li className="relative px-2 py-8 sm:px-10">
                    <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-500">Application UI</h3>
                        <a
                            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                            href="https://tailwindui.com/checkout/0ed326ca-c1fc-440b-b1ba-bdfb01c43185"
                        >
                            <span>
                                Get package<span className="sr-only">, Application UI</span>
                            </span>
                        </a>
                    </div>
                    <p className="flex items-center">
                        <span className="text-2xl text-slate-900">
                            $<span className="font-bold">149</span>
                        </span>
                        <span className="ml-2 text-sm text-slate-500">plus local taxes</span>
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        Form layouts, tables, modal dialogs — all of the components you need to
                        build beautiful responsive web applications.
                    </p>
                </li>
                <li className="relative px-2 py-8 sm:px-10">
                    <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-slate-500">Ecommerce</h3>
                        <a
                            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                            href="https://tailwindui.com/checkout/7b7130a6-68aa-49cb-9f13-818720c60fe8"
                        >
                            <span>
                                Get package<span className="sr-only">, Ecommerce</span>
                            </span>
                        </a>
                    </div>
                    <p className="flex items-center">
                        <span className="text-2xl text-slate-900">
                            $<span className="font-bold">149</span>
                        </span>
                        <span className="ml-2 text-sm text-slate-500">plus local taxes</span>
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        Checkout forms, shopping carts, product views — all of the components you
                        need to build your next ecommerce front-end.
                    </p>
                </li>
            </ul>
        </div>
    );
}

interface ListAccessProps {
    onClick?: () => void;
}

const ListAccess = ({ ...props }: ListAccessProps) => {
    return (
        <div className="w-full flex justify-center">
            <div className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-sky-500">
                        Get with all-access
                    </h3>
                    <a
                        className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-900 text-white hover:bg-slate-700"
                        href="/all-access"
                    >
                        <span>
                            Get all-access <span aria-hidden="true">→</span>
                        </span>
                    </a>
                </div>
                <div className="mt-3 flex items-center">
                    <p className="text-[2.5rem] leading-none text-slate-900">
                        $<span className="font-bold">299</span>
                    </p>
                    <p className="ml-3 text-sm">
                        <span className="font-semibold text-slate-900">one-time payment</span>
                        <br />
                        <span className="text-slate-500">plus local taxes</span>
                    </p>
                </div>
                <p className="mt-6 text-sm leading-6 text-slate-600">
                    Get lifetime access to all of the application UI, marketing, and ecommerce
                    components, as well as all of our site templates for a single one-time
                    purchase.
                </p>
                <h4 className="sr-only">All-access features</h4>
                <ul className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700">
                    <li className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 32 32"
                            className="h-8 w-8 flex-none"
                        >
                            <path fill="#fff" d="M0 0h32v32H0z" />
                            <path
                                fill="#E0F2FE"
                                d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"
                            />
                            <path
                                fill="#0EA5E9"
                                d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"
                            />
                        </svg>
                        <p className="ml-5">
                            <strong className="font-semibold text-slate-900">
                                Over 500+ components
                            </strong>{" "}
                            — everything you need to build beautiful application UIs, marketing
                            sites, ecommerce stores, and more.
                        </p>
                    </li>
                    <li className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 32 32"
                            className="h-8 w-8 flex-none"
                        >
                            <path fill="#fff" d="M0 0h32v32H0z" />
                            <rect
                                width={23}
                                height={22}
                                x={3}
                                y={5}
                                stroke="#0EA5E9"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                rx={2}
                            />
                            <rect
                                width={10}
                                height={18}
                                x={19}
                                y={9}
                                fill="#E0F2FE"
                                stroke="#0EA5E9"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                rx={2}
                            />
                            <circle cx={6} cy={8} r={1} fill="#0EA5E9" />
                            <circle cx={9} cy={8} r={1} fill="#0EA5E9" />
                            <path stroke="#0EA5E9" strokeWidth="1.5" d="M3 11h16" />
                        </svg>
                        <p className="ml-5">
                            <strong className="font-semibold text-slate-900">
                                Every site template
                            </strong>{" "}
                            — beautifully designed, expertly crafted website templates built with
                            modern technologies like React and Next.js.
                        </p>
                    </li>
                    <li className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 32 32"
                            className="h-8 w-8 flex-none"
                        >
                            <path fill="#fff" d="M0 0h32v32H0z" />
                            <path
                                fill="#E0F2FE"
                                d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
                            />
                            <path
                                stroke="#0EA5E9"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
                            />
                            <circle cx={16} cy={16} r={14} stroke="#0EA5E9" strokeWidth="1.5" />
                        </svg>
                        <p className="ml-5">
                            <strong className="font-semibold text-slate-900">
                                Lifetime access
                            </strong>{" "}
                            — get instant access to everything we have today, plus any new
                            components and templates we add in the future.
                        </p>
                    </li>
                </ul>
                <div className="relative mt-10 flex rounded-xl border border-slate-600/10 bg-slate-50 p-6">
                    <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 flex-none"
                        stroke="#94A3B8"
                        strokeWidth="1.5"
                    >
                        <circle cx={11} cy={16} r="3.25" fill="#94A3B8" fillOpacity=".2" />
                        <circle cx={21} cy={13} r="3.25" fill="#94A3B8" fillOpacity=".2" />
                        <path
                            d="M28.909 19c.223-.964.341-1.968.341-3 0-7.318-5.932-13.25-13.25-13.25S2.75 8.682 2.75 16c0 1.032.118 2.036.341 3"
                            strokeLinecap="round"
                        />
                        <path
                            d="m18.031 29.016-2.187.109s-1.475-.118-1.827-.29c-1.049-.51-.579-2.915 0-3.95 1.157-2.064 3.752-5.135 7.125-5.135h.024c2.5 0 4.404 1.687 5.692 3.401-1.963 2.975-5.161 5.276-8.827 5.865Z"
                            fill="#94A3B8"
                            fillOpacity=".2"
                            strokeLinejoin="round"
                        />
                        <path
                            d="m14.001 24.913.016-.027c.26-.465.593-.98.991-1.5-1.042-.918-2.374-1.636-3.988-1.636H11c-2.094 0-3.847 1.208-5.055 2.492a12.987 12.987 0 0 0 7.987 4.595l.057-.016c-1.004-.534-.555-2.868.012-3.908Z"
                            fill="#94A3B8"
                            fillOpacity=".2"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="ml-5 text-sm leading-6 text-slate-700">
                        <strong className="font-semibold text-slate-900">
                            Available for teams
                        </strong>{" "}
                        — get access to all of our components and templates plus any future
                        updates for your entire team.
                    </p>
                </div>
            </div>
        </div>
    );
}

interface ListConferenceProps {
    onClick?: () => void;
}

const ListConference = ({ ...props }: ListConferenceProps) => {
    return (
        <div className="w-full flex justify-center">
            <ol
                role="list"
                className="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
            >
                <li aria-label="Steven McHail talking about Not so one-time payments at 9:00AM - 10:00AM PST">
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                        Steven McHail
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">
                        Not so one-time payments
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                        <time dateTime="2022-04-04T9:00AM-08:00">9:00AM</time> {/* */}-{/* */}{" "}
                        <time dateTime="2022-04-04T10:00AM-08:00">10:00AM</time> {/* */}PST
                    </p>
                </li>
                <li aria-label="Jaquelin Isch talking about The finer print at 10:00AM - 11:00AM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                        Jaquelin Isch
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">The finer print</p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                        <time dateTime="2022-04-04T10:00AM-08:00">10:00AM</time> {/* */}-{/* */}{" "}
                        <time dateTime="2022-04-04T11:00AM-08:00">11:00AM</time> {/* */}PST
                    </p>
                </li>
                <li aria-label="Dianne Guilianelli talking about Post-purchase blackmail at 11:00AM - 12:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                        Dianne Guilianelli
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">Post-purchase blackmail</p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                        <time dateTime="2022-04-04T11:00AM-08:00">11:00AM</time> {/* */}-{/* */}{" "}
                        <time dateTime="2022-04-04T12:00PM-08:00">12:00PM</time> {/* */}PST
                    </p>
                </li>
                <li aria-label="Lunch talking about null at 12:00PM - 1:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                        Lunch
                    </h4>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                        <time dateTime="2022-04-04T12:00PM-08:00">12:00PM</time> {/* */}-{/* */}{" "}
                        <time dateTime="2022-04-04T1:00PM-08:00">1:00PM</time> {/* */}PST
                    </p>
                </li>
                <li aria-label="Ronni Cantadore talking about Buy or die at 1:00PM - 2:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                        Ronni Cantadore
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">Buy or die</p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                        <time dateTime="2022-04-04T1:00PM-08:00">1:00PM</time> {/* */}-{/* */}{" "}
                        <time dateTime="2022-04-04T2:00PM-08:00">2:00PM</time> {/* */}PST
                    </p>
                </li>
                <li aria-label="Erhart Cockrin talking about In-person cancellation at 2:00PM - 3:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                        Erhart Cockrin
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">In-person cancellation</p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                        <time dateTime="2022-04-04T2:00PM-08:00">2:00PM</time> {/* */}-{/* */}{" "}
                        <time dateTime="2022-04-04T3:00PM-08:00">3:00PM</time> {/* */}PST
                    </p>
                </li>
                <li aria-label="Parker Johnson talking about The pay/cancel switcheroo at 3:00PM - 4:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                        Parker Johnson
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">
                        The pay/cancel switcheroo
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                        <time dateTime="2022-04-04T3:00PM-08:00">3:00PM</time> {/* */}-{/* */}{" "}
                        <time dateTime="2022-04-04T4:00PM-08:00">4:00PM</time> {/* */}PST
                    </p>
                </li>
            </ol>
        </div>
    );
}

interface ListHorizontalProps {
    onClick?: () => void;
}

const ListHorizontal = ({ ...props }: ListHorizontalProps) => {
    return (
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
            <span className="font-mono text-slate-500">Hosted by</span>
            <span className="mt-6 flex gap-6 font-bold text-slate-900">
                Eric Gordon
                <span aria-hidden="true" className="text-slate-400">
                    /
                </span>
                Wes Mantooth
            </span>
        </div>
    );
}

interface ListSmoothProps {
    onClick?: () => void;
}

const ListSmooth = ({ ...props }: ListSmoothProps) => {
    return (
        <div className="max-w-md">
            <div className="rounded-2xl border border-zinc-100 p-2 dark:border-zinc-700/40">
                <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none"
                    >
                        <path
                            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                        />
                        <path
                            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                            className="stroke-zinc-400 dark:stroke-zinc-500"
                        />
                    </svg>
                    <span className="ml-3">Work</span>
                </h2>
                <ol className="mt-6 space-y-4">
                    <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                alt=""
                                loading="lazy"
                                width={32}
                                height={32}
                                decoding="async"
                                data-nimg={1}
                                className="h-7 w-7"
                                style={{ color: "transparent" }}
                                src={Share}
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Planetaria
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">CEO</dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label="2019 until Present"
                            >
                                {/* <time dateTime={2019}>2019</time> <span aria-hidden="true">—</span>{" "}
                                <time dateTime={2023}>Present</time> */}
                            </dd>
                        </dl>
                    </li>
                    <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                alt=""
                                loading="lazy"
                                width={28}
                                height={28}
                                decoding="async"
                                data-nimg={1}
                                className="h-7 w-7"
                                style={{ color: "transparent" }}
                                src={FigmaPlugin}
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Airbnb
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                Product Designer
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label="2014 until 2019"
                            >
                                {/* <time dateTime={2014}>2014</time> <span aria-hidden="true">—</span>{" "}
                                <time dateTime={2019}>2019</time> */}
                            </dd>
                        </dl>
                    </li>
                    <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                alt=""
                                loading="lazy"
                                width={28}
                                height={28}
                                decoding="async"
                                data-nimg={1}
                                className="h-7 w-7"
                                style={{ color: "transparent" }}
                                src={Testing}
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Facebook
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                iOS Software Engineer
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label="2011 until 2014"
                            >
                                {/* <time dateTime={2011}>2011</time> <span aria-hidden="true">—</span>{" "}
                                <time dateTime={2014}>2014</time> */}
                            </dd>
                        </dl>
                    </li>
                    <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                alt=""
                                loading="lazy"
                                width={28}
                                height={28}
                                decoding="async"
                                data-nimg={1}
                                className="h-7 w-7"
                                style={{ color: "transparent" }}
                                src={Accessibility}
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Starbucks
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                Shift Supervisor
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label="2008 until 2011"
                            >
                                {/* <time dateTime={2008}>2008</time> <span aria-hidden="true">—</span>{" "}
                                <time dateTime={2011}>2011</time> */}
                            </dd>
                        </dl>
                    </li>
                </ol>
                <a
                    className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                    href="#"
                >
                    Download CV
                    <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                    >
                        <path
                            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>

    );
}


export type {
    ListTransparentProps,
    ListConferenceProps,
    ListAccessProps,
    ListHorizontalProps,
    ListSmoothProps
}

export {
    ListTransparent,
    ListConference,
    ListAccess,
    ListHorizontal,
    ListSmooth
}