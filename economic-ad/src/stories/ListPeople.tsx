import React from 'react';

interface ListPeopleProps {
    toggleItemActive: (index: number) => void;
}

const ListPeople = ({ toggleItemActive }: ListPeopleProps) => {

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
                        Heroes, feature sections, newsletter sign up forms — all of the
                        components you need to build beautiful marketing websites.
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
                        Checkout forms, shopping carts, product views — all of the components
                        you need to build your next ecommerce front-end.
                    </p>
                </li>
            </ul>

        </div>
    );
}

export type {
    ListPeopleProps
}

export {
    ListPeople
}