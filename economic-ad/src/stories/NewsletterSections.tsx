import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

interface NewsletterSectionsProps {
  onClick?: () => void;
}

const NewsletterSections = ({ }: NewsletterSectionsProps) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

interface NewsletterSectionsSampleProps {
  onClick?: () => void;
}

const NewsletterSectionsSample = ({ }: NewsletterSectionsProps) => {
  return (
    <section
      aria-label="Free preview"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32">
          <svg
            aria-hidden="true"
            width={432}
            height={184}
            className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto"
          >
            <defs>
              <symbol id=":S5:-0" width={40} height={40}>
                <rect className="fill-blue-500" width={40} height={40} />
                <circle className="fill-blue-600" cx={20} cy={20} r={13} />
              </symbol>
              <symbol id=":S5:-1" width={40} height={40}>
                <circle className="fill-blue-300" cx={20} cy={20} r={20} />
                <rect
                  className="fill-blue-600"
                  width={20}
                  height={20}
                  x={10}
                  y={10}
                />
              </symbol>
            </defs>
            <use href="#:S5:-0" x={0} y={0} />
            <use href="#:S5:-1" x={56} y={0} />
            <use href="#:S5:-0" x={112} y={0} />
            <use href="#:S5:-1" x={168} y={0} />
            <use href="#:S5:-1" x={224} y={0} />
            <use href="#:S5:-0" x={280} y={0} />
            <use href="#:S5:-1" x={336} y={0} />
            <use href="#:S5:-0" x={392} y={0} />
            <use href="#:S5:-1" x={0} y={48} />
            <use href="#:S5:-0" x={56} y={48} />
            <use href="#:S5:-1" x={112} y={48} />
            <use href="#:S5:-1" x={168} y={48} />
            <use href="#:S5:-0" x={224} y={48} />
            <use href="#:S5:-0" x={280} y={48} />
            <use href="#:S5:-0" x={336} y={48} />
            <use href="#:S5:-1" x={392} y={48} />
            <use href="#:S5:-0" x={0} y={96} />
            <use href="#:S5:-1" x={56} y={96} />
            <use href="#:S5:-0" x={112} y={96} />
            <use href="#:S5:-1" x={168} y={96} />
            <use href="#:S5:-1" x={224} y={96} />
            <use href="#:S5:-0" x={280} y={96} />
            <use href="#:S5:-1" x={336} y={96} />
            <use href="#:S5:-0" x={392} y={96} />
            <use href="#:S5:-1" x={0} y={144} />
            <use href="#:S5:-0" x={56} y={144} />
            <use href="#:S5:-1" x={112} y={144} />
            <use href="#:S5:-1" x={168} y={144} />
            <use href="#:S5:-0" x={224} y={144} />
            <use href="#:S5:-0" x={280} y={144} />
            <use href="#:S5:-0" x={336} y={144} />
            <use href="#:S5:-1" x={392} y={144} />
          </svg>
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get the free sample chapters
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              Enter your email address and I’ll send you a sample from the book
              containing two of my favorite chapters.
            </p>
          </div>
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Get two free chapters straight to your inbox{/* */}{" "}
              <span aria-hidden="true">→</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  // required=""
                  aria-label="Email address"
                  placeholder="Email address"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
              <button
                className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
                type="submit"
              >
                Get free chapters
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export type {
  NewsletterSectionsProps,
  NewsletterSectionsSampleProps
}

export {
  NewsletterSections,
  NewsletterSectionsSample
}