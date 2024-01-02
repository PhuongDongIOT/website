import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

interface PricingSectionsProps {
  onClick?: () => void;
}

const PricingSections = ({ ...props }: PricingSectionsProps) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PricingSectionSamplesProps {
  onClick?: () => void;
}

const PricingSectionSamples = ({ ...props }: PricingSectionSamplesProps) => {
  return (
    <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl">
      <div className="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12">
        <div className="relative flex flex-col">
          <h3 className="mt-7 text-lg font-semibold tracking-tight text-slate-900">
            Essential
          </h3>
          <p className="mt-2 text-lg tracking-tight text-slate-600">
            The perfect starting point if you’re on a budget.
          </p>
          <p className="order-first flex font-display font-bold">
            <span className="text-[1.75rem] leading-tight text-slate-500">$</span>
            <span className="ml-1 mt-1 text-7xl tracking-tight text-slate-900">
              15
            </span>
          </p>
          <div className="order-last mt-8">
            <ul
              role="list"
              className="-my-2 divide-y text-base tracking-tight divide-slate-200 text-slate-900"
            >
              <li className="flex py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 flex-none fill-slate-600"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">The 240-page ebook</span>
              </li>
              <li className="flex py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 flex-none fill-slate-600"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">Figma icon templates</span>
              </li>
              <li className="flex py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 flex-none fill-slate-600"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">Community access</span>
              </li>
            </ul>
          </div>
          <a
            className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900 mt-8"
            aria-label="Get started with the Essential plan for $15"
            href="#"
          >
            Get started
          </a>
        </div>
      </div>
      <div className="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12 bg-blue-600 sm:shadow-lg">
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
            <defs>
              <pattern
                id=":S6:"
                width={128}
                height={128}
                patternUnits="userSpaceOnUse"
                x="50%"
                y="50%"
              >
                <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:S6:)" />
          </svg>
        </div>
        <div className="relative flex flex-col">
          <h3 className="mt-7 text-lg font-semibold tracking-tight text-white">
            Complete
          </h3>
          <p className="mt-2 text-lg tracking-tight text-white">
            Everything icon resource you could ever ask for.
          </p>
          <p className="order-first flex font-display font-bold">
            <span className="text-[1.75rem] leading-tight text-blue-200">$</span>
            <span className="ml-1 mt-1 text-7xl tracking-tight text-white">
              229
            </span>
          </p>
          <div className="order-last mt-8">
            <ul
              role="list"
              className="-my-2 divide-y text-base tracking-tight divide-white/10 text-white"
            >
              <li className="flex py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 flex-none fill-white"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">The 240-page ebook</span>
              </li>
              <li className="flex py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 flex-none fill-white"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">Figma icon templates</span>
              </li>
              <li className="flex py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 flex-none fill-white"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">Over an hour of screencasts</span>
              </li>
              <li className="flex py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 flex-none fill-white"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">Weekly icon teardowns</span>
              </li>
              <li className="flex py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-8 w-8 flex-none fill-white"
                >
                  <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                </svg>
                <span className="ml-4">Community access</span>
              </li>
            </ul>
          </div>
          <a
            className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-8"
            aria-label="Get started with the Complete plan for $229"
            href="#"
          >
            Get started
          </a>
        </div>
      </div>
    </div>

  )
}

export type {
  PricingSectionsProps,
  PricingSectionSamplesProps
}

export {
  PricingSections,
  PricingSectionSamples
}