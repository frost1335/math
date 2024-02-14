import HomeNavbar from "@/components/HomeNavbar";
import { Suspense } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <HomeNavbar />
            {children}
        </Suspense>
    )
};
