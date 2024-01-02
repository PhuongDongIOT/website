import Image from "next/image";
import Author from "./assets/author.webp";

interface CardBlogProps {
  width: string;
  image: string;
  date: string;
  cardTitle: string;
  cardDescription: string;
  onClick?: () => void;
}

const CardBlog = ({ width = "md:w-1/2", image, date, cardTitle, cardDescription }: CardBlogProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-full px-4 ${width}`}>
        <div className="mb-10 w-full">
          <div className="mb-6 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-1 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {cardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {cardDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardBlogHorizontalProps {
  onClick?: () => void;
}

const CardBlogHorizontal = ({ ...props }: CardBlogHorizontalProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
        <div className="flex flex-col items-start">
          <h2 id="episode-2-title" className="mt-2 text-lg font-bold text-slate-900">
            <a href="/2">2: Hank Scorpio</a>
          </h2>
          <time
            dateTime="2022-02-03T00:00:00.000Z"
            className="order-first font-mono text-sm leading-7 text-slate-500"
          >
            February 3, 2022
          </time>
          <p className="mt-1 text-base leading-7 text-slate-700">
            What looks to outsiders like a malicious plan to conquer the east coast,
            was actually a story of liberation and freedom if you get it straight from
            the source.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              aria-label="Play episode 2: Hank Scorpio"
              className="flex items-center gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                className="h-2.5 w-2.5 fill-current"
              >
                <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
              </svg>
              <span aria-hidden="true">Listen</span>
            </button>
            <span aria-hidden="true" className="text-sm font-bold text-slate-400">
              /
            </span>
            <a
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-label="Show notes for episode 2: Hank Scorpio"
              href="/2"
            >
              Show notes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProfileProps {
  onClick?: () => void;
}

const CardProfile = ({ ...props }: CardProfileProps) => {
  return (
    <div className="relative mx-auto pt-16 sm:px-6">
      <div className="bg-slate-50 pt-px sm:rounded-6xl">
        <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
          <Image
            alt=""
            loading="lazy"
            width={576}
            height={576}
            decoding="async"
            data-nimg={1}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ color: "transparent" }}
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            // srcSet={Author}
            src={Author}
          />
        </div>
        <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
          <h2
            className="inline-flex items-center rounded-full px-4 py-1 text-blue-600 ring-1 ring-inset ring-blue-600"
            id="author-title"
          >
            <span className="font-mono text-sm" aria-hidden="true">
              05
            </span>
            <span className="ml-3 h-3.5 w-px bg-blue-600/20" />
            <span className="ml-3 text-base font-medium tracking-tight">
              Author
            </span>
          </h2>
          <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            <span className="block text-blue-600">Mira Lindehoff –</span> Hey there,
            I’m the author behind ‘Everything Starts as a Square’.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            I’ve been designing icons professionally for over a decade and have
            worked with dozens of the biggest brands to create custom sets for their
            products. I’m an accomplished conference speaker, and have been teaching
            icon design workshops every month for the last three years. I’ve worked
            with designers of all skill levels and honed my way of teaching to
            really click for anyone who has the itch to start designing their own
            icons.
          </p>
          <p className="mt-8">
            <a
              className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
              href="#"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 40 40"
                className="h-10 w-10 fill-current"
              >
                <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
              </svg>
              <span className="ml-4">Follow on Twitter</span>
            </a>
          </p>
        </div>
      </div>
    </div>

  );
};

export type {
  CardBlogProps,
  CardBlogHorizontalProps,
  CardProfileProps
}

export {
  CardBlog,
  CardBlogHorizontal,
  CardProfile
}
