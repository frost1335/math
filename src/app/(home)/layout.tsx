import HomeNavbar from "@/components/HomeNavbar";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HomeNavbar />
            {children}
        </>
    )
};
