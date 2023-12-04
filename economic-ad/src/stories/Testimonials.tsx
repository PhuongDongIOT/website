interface TestimonialsProps {
  onClick?: () => void;
}
const Testimonials = ({ }: TestimonialsProps) => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

interface TestimonialsOverProps {
  onClick?: () => void;
}
const TestimonialsOver = ({ }: TestimonialsOverProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
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

    </section>
  )
}

export {
  Testimonials,
  TestimonialsOver
}

export default Testimonials;