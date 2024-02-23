"use client"
import { useRef, useState } from "react";
import AccountForm from "./form";

export default function Tabs(props: any) {

    const [tabs, setTabs] = useState(props.tabs);
    const [isActive, setIsActive] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);
    const ref = useRef(null);

    return (
        <div className="md:flex gap-3 py-5">
            <aside className="w-1/5">
                <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                    {tabs.map((tab: any, index: number) => (
                        <a key={index} className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-slate-200 justify-start">
                            {tab.icon}
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </aside>
            <div className="flex-1 lg:max-w-2xl ms-5">
                <div className="space-y-6">
                    <div data-tab={0} ref={ref}>
                        <h1 className="text-lg font-bold text-gray-900 mb-2">Account information</h1>
                        <AccountForm userProp={props.user} />
                    </div>
                </div>
            </div>
        </div>
    )
}