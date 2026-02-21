"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // We use CSS scroll-behavior: smooth and native behavior
        // Lenis can be added here for more complex scroll if needed
    }, []);

    return <>{children}</>;
}
