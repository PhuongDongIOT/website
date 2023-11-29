import React, { memo } from 'react';

interface ListPeopleProps {
    toggleItemActive: (index: number) => void;
}

export const ListPeople = ({ toggleItemActive }: ListPeopleProps) => {

    return (
        <div className="w-full flex justify-center">
            <div className="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <div className="flex items-center p-4">
                    <img
                        src="https://tailwindui.com/img/avatar-1.jpg"
                        alt=""
                        className="h-10 w-10 flex-none rounded-full"
                    />
                    <div className="ml-4 flex-auto">
                        <div className="font-medium">Leonard Krasner</div>
                        <div className="mt-1 text-slate-700">@leonardkrasner</div>
                    </div>
                    <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                        View
                    </div>
                </div>
                <div className="flex items-center p-4">
                    <img
                        src="https://tailwindui.com/img/avatar-2.jpg"
                        alt=""
                        className="h-10 w-10 flex-none rounded-full"
                    />
                    <div className="ml-4 flex-auto">
                        <div className="font-medium">Floyd Miles</div>
                        <div className="mt-1 text-slate-700">@floydmiles</div>
                    </div>
                    <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                        View
                    </div>
                </div>
                <div className="flex items-center p-4">
                    <img
                        src="https://tailwindui.com/img/avatar-3.jpg"
                        alt=""
                        className="h-10 w-10 flex-none rounded-full"
                    />
                    <div className="ml-4 flex-auto">
                        <div className="font-medium">Emily Selman</div>
                        <div className="mt-1 text-slate-700">@emilyselman</div>
                    </div>
                    <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                        View
                    </div>
                </div>
                <div className="p-4">
                    <div className="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                        View all
                    </div>
                </div>
            </div>
        </div>
    );
}
