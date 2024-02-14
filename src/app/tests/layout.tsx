import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <Navbar />
            {children}
        </Suspense>
    )
};
