import React from "react";


export default function Tab({ children }: { children: React.ReactNode }, key: number) {
    return (
        <div data-tabs={key}>
            {children}
        </div>
    )
}