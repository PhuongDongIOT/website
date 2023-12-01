import React from 'react';
import Image from "next/image";
import Poster from "./assets/poster.webp";

interface CardsProps {
}

const Cards = ({
  ...props
}: CardsProps) => {
  return (
    <div className="w-full md:w-1/3 mx-auto">
      <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
        <blockquote>
          <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
            I run an ecommerce store selling rare vintage gummy bears and could never
            find a good gummy bear icon. Now I can design my own in minutes.
          </p>
        </blockquote>
        <figcaption className="mt-6 flex items-center">
          <div className="overflow-hidden rounded-full bg-slate-50">
            <Image
              alt=""
              loading="lazy"
              width={48}
              height={48}
              decoding="async"
              data-nimg={1}
              className="h-12 w-12 object-cover"
              style={{ color: "transparent" }}
              // srcSet={Poster}
              src={Poster}
            />
          </div>
          <div className="ml-4">
            <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
              Cameron Considine
            </div>
            <div className="mt-1 text-sm text-slate-600">Entrepreneur</div>
          </div>
        </figcaption>
      </figure>

    </div>
  );
};

interface CardsAspectsProps {
}

const CardsAspects = ({
  ...props
}: CardsAspectsProps) => {
  return (
    <div className="w-full lg:w-1/4 md:w-1/3">
      <div className="flex">
        <div className="p-0.5">
          <svg
            className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
            viewBox="0 0 40 40"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
              className="fill-indigo-50 stroke-indigo-500"
            />
            <path
              d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
              className="stroke-indigo-500/50"
            />
            <path
              d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
              className="stroke-indigo-500"
            />
          </svg>
        </div>
        <div className="ml-6">
          <h2 className="text-sm font-semibold leading-6 text-slate-900">
            500+ Components
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Beautifully designed, expertly crafted components that follow all
            accessibility best practices and are easy to customize.
          </p>
        </div>
      </div>
    </div>
  );
};

interface CardsOptionsProps {
  onClick?: () => void;
}

const CardsOptions = ({
  ...props
}: CardsOptionsProps) => {
  return (
    <div className="w-full lg:w-1/4 md:w-1/3">
      <div className="flex">
        <div className="p-0.5">
          <svg
            className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
            viewBox="0 0 40 40"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
              className="fill-indigo-50 stroke-indigo-500"
            />
            <path
              d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
              className="stroke-indigo-500/50"
            />
            <path
              d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
              className="stroke-indigo-500"
            />
          </svg>
        </div>
        <div className="ml-6">
          <h2 className="text-sm font-semibold leading-6 text-slate-900">
            500+ Components
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Beautifully designed, expertly crafted components that follow all
            accessibility best practices and are easy to customize.
          </p>
        </div>
      </div>
    </div>
  );
};

interface CardsHorizontalProps {
  onClick?: () => void;
}

const CardsHorizontal = ({
  ...props
}: CardsOptionsProps) => {
  return (
    <div className="w-full lg:w-1/4 md:w-1/3">
      <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
        <a
          className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
          aria-label="Homepage"
          href="/"
        >
          <Image
            alt=""
            // fetchpriority="high"
            width={960}
            height={960}
            decoding="async"
            data-nimg={1}
            className="w-full"
            style={{ color: "transparent" }}
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
            // srcSet={Poster}
            src={Poster}
          />
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
        </a>
        <div className="mt-10 text-center lg:mt-12 lg:text-left">
          <p className="text-xl font-bold text-slate-900">
            <a href="/">Their Side</a>
          </p>
          <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
            Conversations with the most tragically misunderstood people of our time.
          </p>
        </div>
        <section className="mt-12 hidden lg:block">
          <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
              <path
                d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                className="fill-violet-300"
              />
              <path
                d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                className="fill-pink-300"
              />
            </svg>
            <span className="ml-2.5">About</span>
          </h2>
          <p className="mt-2 text-base leading-7 text-slate-700 lg:line-clamp-4">
            In this show, Eric and Wes dig deep to get to the facts with guests who
            have been labeled villains by a society quick to judge, without actually
            getting the full story. Tune in every Thursday to get to the truth with
            another misunderstood outcast as they share the missing context in their
            tragic tale.
          </p>
          <button
            type="button"
            className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          >
            Show more
          </button>
        </section>
        <section className="mt-10 lg:mt-12">
          <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
            <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
              <path
                d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                className="fill-indigo-300"
              />
              <path
                d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                className="fill-blue-300"
              />
            </svg>
            <span className="ml-2.5">Listen</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
          <ul
            role="list"
            className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
          >
            <li className="flex">
              <a className="group flex items-center" aria-label="Spotify" href="/">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                >
                  <path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06" />
                </svg>
                <span className="hidden sm:ml-3 sm:block">Spotify</span>
              </a>
            </li>
            <li className="flex">
              <a
                className="group flex items-center"
                aria-label="Apple Podcast"
                href="/"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z"
                  />
                </svg>
                <span className="hidden sm:ml-3 sm:block">Apple Podcast</span>
              </a>
            </li>
            <li className="flex">
              <a className="group flex items-center" aria-label="Overcast" href="/">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                >
                  <path d="M16 28.8A12.77 12.77 0 0 1 3.2 16 12.77 12.77 0 0 1 16 3.2 12.77 12.77 0 0 1 28.8 16 12.77 12.77 0 0 1 16 28.8Zm0-5.067.96-.96-.96-3.68-.96 3.68.96.96Zm-1.226-.054-.48 1.814 1.12-1.12-.64-.694Zm2.453 0-.64.64 1.12 1.12-.48-1.76Zm.907 3.307L16 24.853l-2.133 2.133c.693.107 1.387.213 2.133.213.747 0 1.44-.053 2.134-.213ZM16 4.799C9.814 4.8 4.8 9.813 4.8 16c0 4.907 3.147 9.067 7.52 10.56l2.4-8.906c-.533-.374-.853-1.014-.853-1.707A2.14 2.14 0 0 1 16 13.813a2.14 2.14 0 0 1 2.134 2.133c0 .693-.32 1.28-.854 1.707l2.4 8.906A11.145 11.145 0 0 0 27.2 16c0-6.186-5.013-11.2-11.2-11.2Zm7.307 16.747c-.267.32-.747.427-1.12.16-.373-.267-.427-.747-.16-1.067 0 0 1.44-1.92 1.44-4.64 0-2.72-1.44-4.64-1.44-4.64-.267-.32-.213-.8.16-1.066.373-.267.853-.16 1.12.16.107.106 1.76 2.293 1.76 5.546 0 3.254-1.653 5.44-1.76 5.547Zm-3.893-2.08c-.32-.32-.267-.907.053-1.227 0 0 .8-.853.8-2.24 0-1.386-.8-2.186-.8-2.24-.32-.32-.32-.853-.053-1.226.32-.374.8-.374 1.12-.054.053.054 1.333 1.387 1.333 3.52 0 2.134-1.28 3.467-1.333 3.52-.32.32-.8.267-1.12-.053Zm-6.827 0c-.32.32-.8.373-1.12.053-.053-.106-1.333-1.386-1.333-3.52 0-2.133 1.28-3.413 1.333-3.52.32-.32.853-.32 1.12.054.32.32.267.906-.053 1.226 0 .054-.8.854-.8 2.24 0 1.387.8 2.24.8 2.24.32.32.373.854.053 1.227Zm-2.773 2.24c-.374.267-.854.16-1.12-.16-.107-.107-1.76-2.293-1.76-5.547 0-3.253 1.653-5.44 1.76-5.546.266-.32.746-.427 1.12-.16.373.266.426.746.16 1.066 0 0-1.44 1.92-1.44 4.64 0 2.72 1.44 4.64 1.44 4.64.266.32.16.8-.16 1.067Z" />
                </svg>
                <span className="hidden sm:ml-3 sm:block">Overcast</span>
              </a>
            </li>
            <li className="flex">
              <a className="group flex items-center" aria-label="RSS Feed" href="/">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z"
                  />
                </svg>
                <span className="hidden sm:ml-3 sm:block">RSS Feed</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

interface CardsImageBackgroundProps {
  onClick?: () => void;
}

const CardsImageBackground = ({
  ...props
}: CardsImageBackgroundProps) => {
  return (
    <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
      <img
        className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
      />
      <div className="min-w-0 py-5 pl-28 pr-5">
        <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
          Andrew Alfred
        </div>
        <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
          Assistant to the Traveling Secretary
        </div>
      </div>
    </div>
  );
};

interface CardsImageRoundProps {
  onClick?: () => void;
}

const CardsImageRound = ({
  ...props
}: CardsImageRoundProps) => {
  return (
    <div className="py-6">
      <div className="overflow-visible relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
        <img
          className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
        />
        <div className="flex flex-col py-5 pl-24">
          <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
            Andrew Alfred
          </strong>
          <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
            Technical advisor
          </span>
        </div>
      </div>
    </div>
  );
};

interface CardsWritingProps {
  onClick?: () => void;
}

const CardsWriting = ({
  ...props
}: CardsWritingProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="p-8 pt-7">
        <p className="mb-2 text-sm font-medium text-slate-500">Light mode</p>
        <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
          </div>
          <h3 className="mt-5 text-base font-medium text-slate-900 tracking-tight">
            Writes Upside-Down
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            The Zero Gravity Pen can be used to write in any orientation, including
            upside-down. It even works in outer space.
          </p>
        </div>
      </div>
      <div className="bg-slate-900 p-8 pt-7">
        <p className="mb-2 text-sm font-medium text-slate-400">Dark mode</p>
        <div className="bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
          </div>
          <h3 className="mt-5 text-base font-medium text-white tracking-tight">
            Writes Upside-Down
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            The Zero Gravity Pen can be used to write in any orientation, including
            upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </div>
  );
};

export type {
  CardsProps,
  CardsAspectsProps,
  CardsOptionsProps,
  CardsHorizontalProps,
  CardsImageRoundProps,
  CardsImageBackgroundProps,
  CardsWritingProps
}

export {
  Cards,
  CardsAspects,
  CardsOptions,
  CardsHorizontal,
  CardsImageRound,
  CardsImageBackground,
  CardsWriting
}